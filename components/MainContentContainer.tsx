import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  noPadding?: boolean;
}

const MainContentContainer = ({ children, noPadding }: Props) => {
  return (
    <main
      className={`${
        noPadding ? '' : 'p-5'
      } bg-white dark:bg-neutral-900 rounded lg:max-w-[820px] flex-auto h-fit mb-3 sm:mb-5`}
    >
      {children}
    </main>
  );
};

export default MainContentContainer;
