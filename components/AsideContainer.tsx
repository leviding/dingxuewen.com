import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const AsideContainer = ({ children }: Props) => {
  return (
    <aside className="w-[260px] bg-white dark:bg-gray-800 hidden lg:block ml-5 p-5 rounded">
      {children}
    </aside>
  );
};

export default AsideContainer;
