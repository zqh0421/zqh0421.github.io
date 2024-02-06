import { useState } from 'react';
import siteConfig from '../utils/site';
import Wrapper from '../layouts/Wrapper';

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
  const [currentMonth] = useState(() => new Date().getUTCMonth());
  const [currentDay] = useState(() => new Date().getUTCDate());
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  return (
    <footer
      aria-label="Primary"
      className="relative z-10 w-full bg-neutral-900 py-10"
    >
      <Wrapper>
        <hr className="h-px border-0 bg-gradient-to-r from-transparent via-neutral-600 to-transparent" />
        <ul
          aria-label="social-media"
          className="flex flex-col items-center md:flex-row md:justify-center gap-x-6 py-12"
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
              { label!=="EMAIL" ? <span className='block text-center md:inline-block md:pl-6'>·</span> : null}
            </li>
          ))}
        </ul>
        <hr className="h-px border-0 bg-gradient-to-r from-transparent via-neutral-600 to-transparent" />
        <div className="flex flex-col items-center justify-center py-12">
          <small className="text-xs/5 text-neutral-300">
            Made with Astro & React by QIANHUI ZHAO
          </small>
          <small className="text-xs/5 text-neutral-300">
            {/* Last Updated: {months[currentMonth]} {currentDay}, {currentYear} */}
            Last Updated: Feb 6, 2024
          </small>
        </div>
      </Wrapper>
    </footer>
  );
}

export default Footer;