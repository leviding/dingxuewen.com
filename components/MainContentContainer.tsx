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
      } w-full bg-white dark:bg-neutral-900 rounded flex-auto h-fit mb-3 sm:mb-5 lg:max-w-main`}
    >
      {children}
    </main>
  );
};

export default MainContentContainer;
