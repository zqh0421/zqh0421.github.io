import Icons from './ui/Icons';
import Image from './ui/Image';
import { useState } from 'react';
import siteConfig from '../utils/site';
import Wrapper from '../layouts/Wrapper';
const links = [
  {
    label: 'About',
    href: '/#about',
  },
  {
    label: 'Projects',
    href: '/#projects',
  },
  {
    label: 'Contact',
    href: '/#contact',
  },
];

const socialMedia = [
  {
    label: 'GITHUB',
    href: siteConfig.links.github,
  },
  {
    label: 'INSTAGRAM',
    href: siteConfig.links.instagram,
  },
  {
    label: 'LINKEDIN',
    href: siteConfig.links.linkedin,
  },
  {
    label: 'RED',
    href: siteConfig.links.red,
    icon: "Red"
  },
  {
    label: 'EMAIL',
    href: siteConfig.email,
    icon: "EMail"
  }
];

function Footer() {
  const [currentYear] = useState(() => new Date().getFullYear());

  return (
    <footer
      aria-label="Primary"
      className="relative z-10 w-full bg-slate-900 py-10"
    >
      <Wrapper>
        <hr className="h-px border-0 bg-gradient-to-r from-transparent via-neutral-600 to-transparent" />
        <ul
          aria-label="social-media"
          className="flex justify-center gap-x-6 py-12"
        >
          {socialMedia.map(({ label, href }, index) => (
            <li key={index}>
              <a
                href={label==="EMAIL" ? `mailto:${href}`: href}
                title={label}
                rel="noreferrer"
                target="_blank"
                className="text-neutral-300 transition-colors hover:text-neutral-50 focus-visible:text-neutral-50"
              >
                {label}
              </a>
              { label!=="EMAIL" ? <span className='pl-6'>·</span> : null}
            </li>
          ))}
        </ul>
        <hr className="h-px border-0 bg-gradient-to-r from-transparent via-neutral-600 to-transparent" />
        <div className="grid grid-cols-1 items-center justify-center gap-6 py-12 lg:grid-cols-3">
          <div className="hidden lg:block lg: order-first"></div>
          
          <div className="flex justify-center lg:order-2 lg:justify-center">
            <small className="text-xs text-neutral-300">
              QIANHUI ZHAO {currentYear}
            </small>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}

export default Footer;