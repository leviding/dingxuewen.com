import React from 'react';
import * as _jsx_runtime from 'react/jsx-runtime';
import { useMDXComponent } from 'next-contentlayer/hooks'
import type { MDXComponents } from 'mdx/types';

export interface MDXContentProps {
  code: string;
  components?: MDXComponents;
  [key: string]: unknown;
}

const MDXContent = ({ code, components, ...rest }: MDXContentProps) => {
  const Mdx = useMDXComponent(code);

  return <Mdx components={components} {...rest} />;
};

export default MDXContent;
