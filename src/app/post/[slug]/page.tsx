import "@/styles/content.scss";

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import remarkCodeTitle from "remark-code-title";
import remarkGfm from "remark-gfm";

import Code from "@/components/Code";
import Comment from "@/components/Comment";
import { fetchData } from "@/data/post";
import { generateJsonLd, generatePostMetadata } from "@/helpers/metadata";
import { PostDataProp, PostProp } from "@/types/Post";
import Table from "@/components/Table";

export async function generateMetadata({
  params,
}: Readonly<{ params: { slug: string } }>): Promise<Metadata | undefined> {
  const { data } = await fetchData(params.slug);
  const post =
    Array.isArray(data) &&
    data.find((post: PostProp) => post.slug === params.slug);

  return await generatePostMetadata(post);
}

export default async function Blog({
  params,
}: Readonly<{ params: { slug: string } }>) {
  const { data }: PostDataProp = await fetchData(params.slug);
  const post =
    Array.isArray(data) &&
    data.find((post: PostProp) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const jsonLd = generateJsonLd(post);

  const components = {
    code: Code,
    table: Table,
    Image,
  };

  return (
    <>
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Link href="/">&larr; Back</Link>
          <article className="prose">
            <ReactMarkdown
              components={components}
              remarkPlugins={[remarkGfm, remarkCodeTitle]}
              rehypePlugins={[rehypeRaw, rehypeSlug]}
            >
              {post.content}
            </ReactMarkdown>
          </article>
          <Comment title={post.title} />
        </div>
      </main>
      <Script
        id="posts-jsonld"
        key="posts-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
