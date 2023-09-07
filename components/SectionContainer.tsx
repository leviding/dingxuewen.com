import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const SectionContainer = ({ children }: Props) => {
  return (
    <section className="mx-auto max-w-3xl px-4 lg:px-0 lg:max-w-4xl xl:max-w-6xl">
      {children}
    </section>
  );
};

export default SectionContainer;
