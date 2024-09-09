import { Suspense } from "react";

import Link from "next/link";
import Script from "next/script";

import { GoogleAnalytics } from "@next/third-parties/google";

import Card from "@/components/Card";
import { fetchAllData } from "@/data/post";
import { PostDataProp } from "@/types/Post";

export default async function Home() {
  const { data }: PostDataProp = await fetchAllData();

  const updatedItemListElement =
    data &&
    Array.isArray(data) &&
    data.map((post) => ({
      "@type": "BlogPosting",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${process.env.NEXT_PUBLIC_URL}/${post.slug}`,
      },
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date_created,
      author: {
        "@type": "Person",
        name: "Vernon Wee Hong KOH",
      },
    }));

  return (
    <>
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto h-full max-w-3xl">
          <div className="flex min-h-full flex-col gap-y-4">
            <h1>
              <Link target="_blank" href="https://vernonweehong.com" passHref>
                Vernon Wee Hong KOH
              </Link>
              &apos;s Code Chronicles
            </h1>
            {data && Array.isArray(data) && data.length < 1 && (
              <div className="flex flex-col gap-y-4 rounded-md border border-dashed border-gray-500 px-2 py-14">
                <h2 className="text-center">Stay tuned.</h2>
                <p className="text-center">
                  Vernon is currently documenting his journey of learning and
                  exploration in software development.
                </p>
              </div>
            )}
            {data &&
              Array.isArray(data) &&
              data
                .sort(
                  (a, b) =>
                    Number(new Date(b.date_created)) -
                    Number(new Date(a.date_created)),
                )
                .map((post) => (
                  <Card
                    key={post.slug}
                    date_created={post.date_created}
                    title={post.title}
                    excerpt={post.excerpt}
                    categories={post.categories}
                    slug={post.slug}
                  />
                ))}
          </div>
        </div>
      </main>
      <Script
        id="blog-posts-jsonld"
        key="blog-posts-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: updatedItemListElement,
          }),
        }}
      />
      <Suspense fallback={null}>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS!} />
      </Suspense>
    </>
  );
}
