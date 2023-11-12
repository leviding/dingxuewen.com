import Link from 'next/link';
import { slug } from 'github-slugger';
interface Props {
  text: string;
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      onClick={(e) => e.stopPropagation()}
      href={`/tags/${slug(text)}`}
      className="px-[6px] mt-[6px] mr-2 rounded text-sm bg-gray-100 dark:bg-neutral-700 text-gray-500 dark:text-gray-300  hover:text-brand-hover dark:hover:text-gray-400"
    >
      {text.split(' ').join('-')}
    </Link>
  );
};

export default Tag;
