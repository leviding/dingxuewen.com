import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const MainContentContainer = ({ children }: Props) => {
  return (
    <main className="flex-auto bg-white dark:bg-gray-800 p-5 rounded">
      {children}
    </main>
  );
};

export default MainContentContainer;
