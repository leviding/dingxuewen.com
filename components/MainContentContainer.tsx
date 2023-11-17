'use client';

import { useEffect, useState, ReactNode } from 'react';
import { useTheme } from 'next-themes';
import { ThemeEnum } from '@/constants/common';

interface Props {
  children: ReactNode;
  noPadding?: boolean;
  disableProse?: boolean;
}

const MainContentContainer = ({ children, noPadding, disableProse }: Props) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const isDarkTheme = theme === ThemeEnum.DARK;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <main
        className={`${noPadding ? '' : 'p-5'} ${isDarkTheme && !disableProse ? 'prose-dark' : ''} ${
          disableProse ? '' : 'prose'
        } w-full bg-white dark:bg-neutral-900 rounded flex-auto h-fit mb-3 sm:mb-5 lg:max-w-main`}
      >
        {children}
      </main>
    )
  );
};

export default MainContentContainer;
