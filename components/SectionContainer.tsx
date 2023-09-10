import { ReactNode } from 'react';
import styles from '@/styles/globals.module.scss';

interface Props {
  children: ReactNode;
}

const SectionContainer = ({ children }: Props) => {
  return (
    <section className={`${styles.sectionContainer} flex justify-center mx-auto px-5 lg:px-0 lg:max-w-5xl xl:max-w-6xl`}>
      {children}
    </section>
  );
};

export default SectionContainer;
