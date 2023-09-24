// import Link from '@/components/Link';
// import Tag from '@/components/Tag';
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
      <MainContentContainer>
        {!posts.length && 'No posts found.'}
        {posts.slice(0, MAX_DISPLAY).map((post) => {
          const { title, date, summary, tags, slug } = post;
          return <div key={slug}>{title}</div>;
        })}
      </MainContentContainer>
      <CommonAside />
    </>
  );
};

export default Home;
