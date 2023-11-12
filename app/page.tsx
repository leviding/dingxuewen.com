import Image from 'next/image';
import { CommonAside, Icon, Link, MainContentContainer, Tag } from '@/components';
// import siteMetadata from '@/data/siteMetadata';
import { sortPosts, allCoreContent } from '@/utils/contentlayer';
import { allPosts } from 'contentlayer/generated';

const MAX_DISPLAY = 5;

const Home = () => {
  const sortedPosts = sortPosts(allPosts);
  const posts = allCoreContent(sortedPosts);

  return (
    <>
      <MainContentContainer noPadding>
        {!posts.length && 'No posts found.'}
        {posts.slice(0, MAX_DISPLAY).map((post) => {
          const { title, date, lastModify, summary, tags, slug, image } = post;
          return (
            <div key={slug}>
              <div className="flex justify-between px-5 py-4 hover:bg-gray-50 dark:hover:bg-neutral-800 cursor-pointer">
                <div>
                  <Link href={`/post/${slug}`}>
                    <h2 className="text-lg font-bold line-clamp-1 break-all text-gray-900 dark:text-gray-100 mb-1">
                      {title}
                    </h2>
                  </Link>
                  <div className="flex items-center whitespace-nowrap text-sm mb-1 text-gray-600 dark:text-gray-300">
                    <Icon icon="calendar" iconDark="calendar-lighter" />
                    {date.slice(0, date.indexOf('T'))}
                  </div>
                  {/* {lastModify && (
                      <div className="whitespace-nowrap">
                        {lastModify.slice(0, lastModify.indexOf('T'))}
                      </div>
                    )} */}
                  <div className="text-gray-500 dark:text-gray-300 line-clamp-2 break-all">
                    {summary}
                  </div>
                  <div className="flex flex-wrap">
                    {tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                </div>
                <Image
                  className="rounded ml-3 object-cover max-h-[130px]"
                  src={image}
                  alt="封面图"
                  width={180}
                  height={74}
                />
              </div>
              <hr className="divide-y border-gray-100 mx-5 dark:border-gray-800" />
            </div>
          );
        })}
      </MainContentContainer>
      <CommonAside />
    </>
  );
};

export default Home;
