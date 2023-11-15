import { CommonAside, Date, MainContentContainer, MDXContent, mdxComponents } from '@/components';
import { allPosts } from 'contentlayer/generated';

const Posts = ({ params }: { params: { slug: string[] } }) => {
  const slug = decodeURI(params.slug.join('/'));
  const post = allPosts.find((v) => v.slug === slug);
  const { title, date = '', lastModify = '', summary, tags, cover, body } = post || {};

  return (
    <>
      <MainContentContainer>
        <h1 className="text-3xl font-medium mb-4">{title}</h1>
        <div className="flex flex-wrap mb-3">
          <Date label="发表时间：" date={date} className="mr-4" noIcon />
          <Date label="最近更新：" date={lastModify} noIcon />
        </div>
        <MDXContent code={body?.code || ''} components={mdxComponents} />
        {/* <MDXContent code={body?.code || ''} components={components} toc={post.toc} /> */}
      </MainContentContainer>
      <CommonAside />
    </>
  );
};

export default Posts;
