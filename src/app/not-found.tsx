"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="mx-auto flex flex-col gap-y-4 px-12 pt-24">
      <h2>404</h2>
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link className="mt-3" onClick={() => router.back()} href={""}>
        Back to Homepage
      </Link>
    </div>
  );
}
