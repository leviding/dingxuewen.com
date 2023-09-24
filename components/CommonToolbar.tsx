'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/globals.module.scss';

const ToolbarItem = ({ alt = '', iconPath = '' }) => {
  const [src, setSrc] = useState(iconPath);

  return (
    src && (
      <div
        onMouseEnter={() => setSrc(iconPath + '-active')}
        onMouseLeave={() => setSrc(iconPath)}
        className={`${styles.toolbarItem} w-9 h-9 bg-white rounded-full flex justify-center items-center mb-4 cursor-pointer hover:text-[#515767]`}
      >
        <Image
          className={styles.toolbarItemImage}
          alt={alt}
          src={src + '.svg'}
          width={20}
          height={20}
        />
      </div>
    )
  );
};

const CommonToolbar = () => {
  return (
    <div className="w-9 mr-11 hidden xl:flex flex-col pt-16">
      <ToolbarItem alt="评论" iconPath="/icons/comment" />
      <ToolbarItem alt="微信" iconPath="/icons/wechat" />
      <ToolbarItem alt="微博" iconPath="/icons/weibo" />
      <ToolbarItem alt="沉浸阅读" iconPath="/icons/read" />
    </div>
  );
};

export default CommonToolbar;
