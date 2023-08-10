import useScroll from '../hooks/useScroll';
import useWindowSize from '../hooks/useWindowSize';
import { useState } from 'react';

const links = [
  {
    label: 'About',
    href: '/#about',
  },
  {
    label: 'Work',
    href: '/#work',
  },
];

interface HeaderProps {
  isInitialBackgroundTransparent?: boolean | undefined;
}

function Header({ isInitialBackgroundTransparent = false }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const windowSize = useWindowSize();
  const { scrollY } = useScroll();
  console.log(scrollY, windowSize.height)

  const hasScrolledPastHeroSection = scrollY > windowSize.height - 1;
  const isBackgroundShown =
    // !isInitialBackgroundTransparent ||
    hasScrolledPastHeroSection ||
    isMobileMenuOpen;
  console.log(isInitialBackgroundTransparent, hasScrolledPastHeroSection, isMobileMenuOpen)

  return (
    <header
      aria-label="Primary"
      className="fixed top-0 z-40 w-full"
    >
      <div
        className={`border-b-0.5 py-2 transition-colors duration-500 ${isBackgroundShown
            ? 'border-neutral-600 bg-neutral-900/90 backdrop-blur-md supports-[backdrop-filter]:bg-neutral-900/50'
            : 'border-transparent bg-transparent'}`}
      >
        123
      </div>
    </header>
  );
}

export default Header;