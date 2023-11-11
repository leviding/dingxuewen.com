import Link from '@/components/Link';
import Tag from '@/components/Tag';
// import siteMetadata from '@/data/siteMetadata';
import { sortPosts, allCoreContent } from '@/utils/contentlayer';
import { allPosts } from 'contentlayer/generated';
import CommonAside from '@/components/CommonAside';
import MainContentContainer from '@/components/MainContentContainer';

const MAX_DISPLAY = 5;

const Home = () => {
  const sortedPosts = sortPosts(allPosts);
  const posts = allCoreContent(sortedPosts);

  return (
    <>
      <MainContentContainer background={false}>
        {!posts.length && 'No posts found.'}
        {posts.slice(0, MAX_DISPLAY).map((post) => {
          const { title, date, summary, tags, slug } = post;
          return (
            <>
              <div className="px-5 py-4 hover:bg-gray-50" key={slug}>
                <h2 className="text-xl font-bold">
                  <Link
                    href={`/post/${slug}`}
                    className="text-gray-900 dark:text-gray-100 hover:underline decoration-1"
                  >
                    {title}
                  </Link>
                </h2>
                <div className="flex flex-wrap">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
                <div className=" text-gray-500 dark:text-gray-400">{summary}</div>
              </div>
              <hr className="divide-y border-gray-100 mx-5 dark:border-gray-800" />
            </>
          );
        })}
      </MainContentContainer>
      <CommonAside />
    </>
  );
};

export default Home;
