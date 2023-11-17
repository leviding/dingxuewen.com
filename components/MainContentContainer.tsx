import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  noPadding?: boolean;
  disableProse?: boolean;
}

const MainContentContainer = ({ children, noPadding, disableProse }: Props) => {
  return (
    <main
      className={`${noPadding ? '' : 'p-5'} ${
        disableProse ? '' : 'prose'
      } w-full bg-white dark:bg-neutral-900 rounded flex-auto h-fit mb-3 sm:mb-5 lg:max-w-main`}
    >
      {children}
    </main>
  );
};

export default MainContentContainer;
