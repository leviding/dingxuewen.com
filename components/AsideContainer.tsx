import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const AsideContainer = ({ children }: Props) => {
  return (
    <aside className="w-[260px] h-fit hidden lg:block ml-5 flex-none">
      {children}
    </aside>
  );
};

export default AsideContainer;
