import { ReactNode } from 'react';
import styles from '@/styles/globals.module.scss';

interface Props {
  children: ReactNode;
}

const SectionContainer = ({ children }: Props) => {
  return (
    <section
      className={`${styles.sectionContainer} flex justify-center mx-auto px-3 sm:px-5 xl:max-w-7xl`}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
