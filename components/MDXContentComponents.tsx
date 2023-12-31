// import TOCInline from 'pliny/ui/TOCInline'
import { Pre } from '@/components';
// import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types';
// import Image from './Image'
import CustomLink from './Link';
// import Bleed from 'pliny/ui/Bleed'

const MDXContentComponents: MDXComponents = {
  // Image,
  // TOCInline,
  // @ts-ignore
  a: CustomLink,
  pre: Pre,
  // Bleed,
  // BlogNewsletterForm,
};

export default MDXContentComponents;
