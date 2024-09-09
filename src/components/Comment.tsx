"use client";

import Giscus from "@giscus/react";

export default function Comment({ title }: Readonly<{ title: string }>) {
  return (
    <>
      <div className="mb-8 mt-16 border border-gray-500"></div>
      <Giscus
        id="comments"
        repo="weehongkoh/blog.vernonweehong.com"
        repoId="R_kgDOMkQwuA"
        category="General"
        categoryId="DIC_kwDOMkQwuM4CiBzB"
        mapping="specific"
        term={title}
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="dark"
        lang="en"
        loading="lazy"
      />
    </>
  );
}
