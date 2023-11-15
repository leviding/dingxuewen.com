'use client';

import Image from 'next/image';
import { CommonAside, Date, Link, MainContentContainer, Tag } from '@/components';
// import siteMetadata from '@/data/siteMetadata';
import { sortPosts, allCoreContent } from '@/utils/contentlayer';
import { allPosts } from 'contentlayer/generated';
import { useRouter } from 'next/navigation';

const MAX_DISPLAY = 10;

const Home = () => {
  const router = useRouter();
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
              <div
                onClick={() => router.push(`/post/${slug}`)}
                className="flex justify-between p-3 pt-2 sm:px-5 sm:py-4 hover:bg-gray-50 dark:hover:bg-neutral-800 cursor-pointer"
              >
                <div>
                  <Link href={`/post/${slug}`}>
                    <h2 className="text-xl font-bold line-clamp-1 break-all text-gray-900 dark:text-gray-200 mb-1">
                      {title}
                    </h2>
                  </Link>
                  <Date date={date} />
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
                  className="hidden sm:block rounded ml-3 object-cover max-h-[130px]"
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
