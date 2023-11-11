import Image from 'next/image';

interface Props {
  icon: string;
  size: number;
}

const Icon = ({ icon, size = 16 }: Props) => {
  return <Image src={`/icons/${icon}.svg`} alt="icon" width={size} height={size} />;
};

export default Icon;
