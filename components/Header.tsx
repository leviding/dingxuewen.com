'use client';

import { usePathname } from 'next/navigation';
import siteMetadata from '@/data/siteMetadata';
import headerNavLinks from '@/data/headerNavLinks';
import Link from './Link';
// import MobileNav from './MobileNav';
import ThemeSwitch from './ThemeSwitch';
import Image from 'next/image';
// import SearchButton from './SearchButton';
import styles from '@/styles/globals.module.scss';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={`${styles.header} sticky flex items-center bg-white dark:bg-gray-800`}>
      <div className="w-screen h-full mx-auto px-5 2xl:px-0 2xl:max-w-[1448px] flex items-center justify-between">
        <div className="h-full flex">
          <Link
            className="h-full flex items-center justify-between"
            href="/"
            aria-label={siteMetadata.headerTitle}
          >
            <Image
              className="mr-2 h-auto"
              alt="logo"
              src="/images/logo.png"
              width={28}
              height={28}
            />
            <span className="hidden text-xl font-medium md:flex md:items-center">
              {siteMetadata.headerTitle}
            </span>
          </Link>
          {headerNavLinks.map((link) => {
            return pathname.startsWith(link.href) ? (
              <div
                className={`${styles.navItem} hidden md:flex items-center h-full ml-6 font-medium text-brand-normal hover:text-gray-900 dark:hover:text-white cursor-pointer`}
                key={link.title}
              >
                {link.title}
              </div>
            ) : (
              <Link
                key={link.title}
                href={link.href}
                className={`${styles.navItem} nav-item hidden md:flex items-center ml-6 font-primary hover:font-medium text-gray-900 dark:text-gray-100`}
              >
                {link.title}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center leading-5 space-x-4 sm:space-x-6">
          {/* <SearchButton /> */}
          <ThemeSwitch />
          {/* <MobileNav /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
