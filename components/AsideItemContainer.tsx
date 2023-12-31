import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const AsideItemContainer = ({ children }: Props) => {
  return <div className="bg-white dark:bg-neutral-900 p-5 mb-5 rounded">{children}</div>;
};

export default AsideItemContainer;
