'use client';

import { useTheme } from 'next-themes';
import { ThemeEnum } from '@/constants/common';
import Image, { ImageProps } from 'next/image';
import { useEffect, useState } from 'react';

type Props = Omit<ImageProps, 'src' | 'alt'> & {
  icon: string;
  iconDark: string;
  size?: number;
};

const Icon = ({ icon, iconDark, size = 14, ...rest }: Props) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const isDarkTheme = theme === ThemeEnum.DARK;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <Image
        {...rest}
        className="mr-1"
        src={`/icons/${isDarkTheme ? iconDark : icon}.svg`}
        alt="icon"
        width={size}
        height={size}
      />
    )
  );
};

export default Icon;
