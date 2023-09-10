import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const MainContentContainer = ({ children }: Props) => {
  return <main className="w-full lg:w-[720px] bg-white dark:bg-gray-800 p-5 rounded">{children}</main>;
};

export default MainContentContainer;
