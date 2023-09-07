'use client';

import { ThemeProvider } from 'next-themes';
import siteMetadata from '@/data/siteMetadata';

const ThemeProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme} enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviders;
