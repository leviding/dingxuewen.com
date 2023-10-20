import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const MainContentContainer = ({ children }: Props) => {
  return (
    <main className="flex-auto bg-white dark:bg-neutral-900 rounded lg:max-w-[820px]">
      {children}
    </main>
  );
};

export default MainContentContainer;
