import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import path from 'path';
import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkFootnotes from 'remark-footnotes';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeKatex from 'rehype-katex';
import rehypeCitation from 'rehype-citation';
import rehypePrismPlus from 'rehype-prism-plus';
import rehypePresetMinify from 'rehype-preset-minify';
import rehypeCodeTitles from 'rehype-code-titles';
// import { extractTocHeadings } from '@/utils/mdx-plugin';

const root = process.cwd();

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    categories: { type: 'list', of: { type: 'string' }, default: [] },
    tags: { type: 'list', of: { type: 'string' }, default: [] },
    lastModify: { type: 'date' },
    draft: { type: 'boolean' },
    summary: { type: 'string' },
    cover: { type: 'string', required: true },
    // authors: { type: 'list', of: { type: 'string' } },
    // layout: { type: 'string' },
    // bibliography: { type: 'string' },
  },
  computedFields: {
    readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, ''),
    },
    path: {
      type: 'string',
      resolve: (doc) => `posts/${doc._raw.flattenedPath.replace(/^.+?(\/)/, '')}`,
    },
    filePath: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFilePath,
    },
    // toc: { type: 'string', resolve: (doc) => extractTocHeadings(doc.body.raw) },
  },
}));

export default makeSource({
  contentDirPath: 'data/posts',
  documentTypes: [Post],
  mdx: {
    cwd: process.cwd(),
    remarkPlugins: [remarkGfm, [remarkFootnotes, { inlineNotes: true }], remarkMath],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      // @ts-ignore
      [rehypePrismPlus, { defaultLanguage: 'js', ignoreMissing: true, showLineNumbers: true }],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
      // @ts-ignore
      rehypeKatex,
      [rehypeCitation, { path: path.join(root, 'data'), linkCitations: true }],
      // @ts-ignore
      rehypePresetMinify,
    ],
  },
});
