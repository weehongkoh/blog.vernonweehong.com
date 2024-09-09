import type { MetadataRoute } from "next";

import { fetchAllData } from "@/data/post";
import { PostProp } from "@/types/Post";

export default async function sitemap(): Promise<
  Readonly<MetadataRoute.Sitemap>
> {
  const blog = await fetchAllData();

  const domain = process.env.NEXT_PUBLIC_URL;

  const blogUrl = blog.data.map((post: Readonly<PostProp>) => ({
    url: domain + `/post/${post.slug}`,
    lastModified: new Date().toISOString(),
    priority: 0.8,
  }));

  const routes = [""].map((route) => ({
    url: domain + route,
    lastModified: new Date().toISOString(),
    priority: 1,
  }));

  return [...routes, ...blogUrl];
}
