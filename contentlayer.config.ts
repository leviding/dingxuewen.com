import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';
// import { extractTocHeadings } from '@/utils/mdx-plugin';

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
    // images: { type: 'list', of: { type: 'string' } },
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
      resolve: (doc) => `post/${doc._raw.flattenedPath.replace(/^.+?(\/)/, '')}`,
    },
    filePath: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFilePath,
    },
    // toc: { type: 'string', resolve: (doc) => extractTocHeadings(doc.body.raw) },
  },
}));

export default makeSource({ contentDirPath: 'data', documentTypes: [Post] });
