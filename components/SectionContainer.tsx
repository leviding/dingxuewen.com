import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const SectionContainer = ({ children }: Props) => {
  return (
    <section className="flex justify-center mt-3 mx-auto px-4 lg:px-0 lg:max-w-5xl xl:max-w-6xl">
      {children}
    </section>
  );
};

export default SectionContainer;
