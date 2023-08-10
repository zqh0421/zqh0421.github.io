import useScroll from '../hooks/useScroll';
import useWindowSize from '../hooks/useWindowSize';
import { ReactNode, useState } from 'react';
import Wrapper from '../ui/Wrapper';
import { cn } from '../utils/cn';
import MobileNavigation from './MobileNav';

export const menuItems = [
	{
		title: 'About',
		path: '#about',
	},
	{
		title: 'Projects',
		path: '#projects',
	},
	{
		title: 'Contact',
		path: '#contact',
	},
];


interface NavBarProps {
  isInitialBackgroundTransparent?: boolean | undefined;
}

function NavBarReact({ isInitialBackgroundTransparent = false }: NavBarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const windowSize = useWindowSize();
  const { scrollY } = useScroll();

  const hasScrolledPastHeroSection = scrollY > windowSize.height - 1;

  const isBackgroundShown =
    !isInitialBackgroundTransparent ||
    hasScrolledPastHeroSection ||
    isMobileMenuOpen
  
  return (
    <nav
      aria-label="Primary"
      className="fixed top-0 w-full z-40"
    >
      <div
        className={cn('border-b-[0.5px] py-2 transition-colors duration-500',
            isBackgroundShown
            ? 'border-neutral-600 bg-neutral-900/90 backdrop-blur-md supports-[backdrop-filter]:bg-neutral-900/50'
            : 'border-transparent bg-transparent')}
      >
        <Wrapper className="flex flex-col items-center justify-between lg:flex-row">
        <div className="grid grid-cols-3">
          <div className="flex items-center md:hidden">
            <MobileNavigation.Toggle
              isOpen={isMobileMenuOpen}
              onIsOpenChange={setIsMobileMenuOpen}
            />
          </div>
          <nav
            aria-label="Primary"
            className="hidden items-center gap-x-6 md:flex"
          >
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  className="relative py-1 text-sm uppercase text-neutrals-50 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:scale-x-0 after:bg-gradient-to-r after:from-transparent after:via-neutrals-200 after:to-transparent after:transition-transform hover:after:-scale-x-125 focus-visible:after:-scale-x-125"
                >
                  {item.title}
                </a>
              ))}
            </nav>
            <div className="flex items-center justify-center">
              <a
                href="/"
                title="Navigate home"
              >
                <div className="h-3 md:h-4">Logo</div>
              </a>
            </div>
            <div className="flex items-center justify-end">
              Right
            </div>
          </div>
        </Wrapper>
      </div>
      <MobileNavigation
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          items={menuItems}
        />
        <MobileNavigation.Overlay
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
    </nav>
  );
}

export default NavBarReact;