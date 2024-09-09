import Link from "next/link";

import dayjs from "dayjs";

import { PostProp } from "@/types/Post";

import Badge from "./Badge";

export default function Card({
  title,
  date_created,
  excerpt,
  categories,
  slug,
}: Readonly<
  Pick<PostProp, "title" | "date_created" | "excerpt" | "categories" | "slug">
>) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-600 shadow">
      <div className="px-4 pb-2 pt-5 sm:px-6">
        <time dateTime={date_created} className="mb-1 text-xs">
          {dayjs(date_created).format("MMMM D, YYYY")}
        </time>
        <div className="my-2 flex flex-wrap gap-2">
          {categories &&
            categories.length > 0 &&
            categories
              .sort()
              .slice(0, 3)
              .map((category) => <Badge key={category} category={category} />)}
        </div>
        <h2 className="line-clamp-2 text-xl font-medium">{title}</h2>
      </div>
      <div className="px-4 pb-6 sm:px-6">
        <p className="line-clamp-3">{excerpt}</p>
        <Link href={`post/${slug}`} className="mt-2 inline-block text-sm">
          Read More &rarr;
        </Link>
      </div>
    </div>
  );
}
