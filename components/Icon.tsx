import Image, { ImageProps } from 'next/image';

type Props = Omit<ImageProps, 'src' | 'alt'> & {
  icon: string;
  iconDark: string;
  size?: number;
};

const Icon = ({ icon, iconDark, size = 14, ...rest }: Props) => {
  return (
    <>
      <Image
        {...rest}
        className="mr-1 block dark:hidden"
        src={`/icons/${icon}.svg`}
        alt="icon"
        width={size}
        height={size}
      />
      <Image
        {...rest}
        className="mr-1 hidden dark:block"
        src={`/icons/${iconDark}.svg`}
        alt="icon"
        width={size}
        height={size}
      />
    </>
  );
};

export default Icon;
