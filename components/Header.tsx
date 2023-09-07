import siteMetadata from '@/data/siteMetadata';
import headerNavLinks from '@/data/headerNavLinks';
import Link from './Link';
// import MobileNav from './MobileNav';
import ThemeSwitch from './ThemeSwitch';
import Image from 'next/image';
// import SearchButton from './SearchButton';

const Header = () => {
  return (
    <header className="sticky flex items-center h-14 bg-white dark:bg-gray-900">
      <div className="w-screen mx-auto px-4 lg:px-6 2xl:max-w-[1400px] flex items-center justify-between">
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <Image className="mr-3" alt="logo" src="/images/logo.png" width={28} height={28} />
            <div className="hidden h-8 text-2xl font-semibold sm:block">
              {siteMetadata.headerTitle}
            </div>
          </div>
        </Link>
        <div className="flex items-center leading-5 space-x-4 sm:space-x-6">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hidden sm:block font-medium text-gray-900 dark:text-gray-100"
              >
                {link.title}
              </Link>
            ))}
          {/* <SearchButton /> */}
          <ThemeSwitch />
          {/* <MobileNav /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
