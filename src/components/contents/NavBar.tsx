import useScroll from '../../hooks/useScroll';
import useWindowSize from '../../hooks/useWindowSize';
import { ReactNode, useState } from 'react';
import Wrapper from '../../layouts/Wrapper';
import { cn } from '../../utils/cn';
import MobileNavigation from './MobileNav';
import ButtonLink from '../ui/ButtonLink';

export const menuItems = [
	{
		title: 'About',
		path: 'about',
	},
	{
		title: 'Projects',
		path: 'projects',
	},
	{
		title: 'Contact',
		path: 'contact',
	},
];


interface NavBarProps {
  isInitialBackgroundTransparent?: boolean | undefined;
}

function NavBar({ isInitialBackgroundTransparent = false }: NavBarProps) {
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
      className="fixed top-0 left-0 w-full z-40"
    >
      <div
        className={cn('border-b-[0.5px] py-2 transition-colors duration-500',
          isBackgroundShown
          ? 'border-neutral-600 bg-neutral-900/90 backdrop-blur-md supports-[backdrop-filter]:bg-neutral-900/50'
          : 'border-transparent bg-transparent')}
      >
        <Wrapper className="flex flex-col items-center justify-between lg:flex-row">
          <div className="w-full grid grid-cols-3">
            <div className="flex items-center">
            <ButtonLink
              href="#contact"
              size="small"
              isGhost
              onClick={(event) => {
                event.preventDefault()
                const target = document.getElementById('contact');
                target && target.scrollIntoView({ behavior: 'smooth' });
              }}
            >DownLoad CV
            </ButtonLink>
            </div>
            <div className="flex items-center justify-center">
              <a
                href="/"
                title="Navigate home"
                className='items-center justify-center'
              >
                Qianhui
              </a>
            </div>
            <div className="flex items-center md:hidden justify-end">
              <MobileNavigation.Toggle
                isOpen={isMobileMenuOpen}
                onIsOpenChange={setIsMobileMenuOpen}
              />
            </div>
            <ul
              aria-label="Primary"
              className="hidden items-center gap-x-6 md:flex justify-end"
            >
              {menuItems.map((item, index) => (
                <li className="items-center justify-center" key={index}>
                  <a
                    href={'#' + item.path}
                    className="relative py-1 text-sm uppercase text-neutral-50 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:scale-x-0 after:bg-gradient-to-r after:from-transparent after:via-neutral-200 after:to-transparent after:transition-transform hover:after:-scale-x-125 focus-visible:after:-scale-x-125"
                    onClick={(event) => {
                      event.preventDefault()
                      const target = document.getElementById(item.path);
                      target && target.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
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

export default NavBar;