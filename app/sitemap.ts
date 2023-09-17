import { MetadataRoute } from 'next';
import { allPosts } from 'contentlayer/generated';
import siteMetadata from '@/data/siteMetadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl;
  const blogRoutes = allPosts.map((post) => ({
    url: `${siteUrl}/${post.path}`,
    lastModified: post.lastModify || post.date,
  }));

  const routes = ['', 'about', 'archives', 'categories', 'projects', 'tags'].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogRoutes];
}
