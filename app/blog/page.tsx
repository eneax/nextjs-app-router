import Link from "next/link";

import { CONTENT_API_URL } from "@/config";

export default async function Blog() {
  const posts = await fetch(`${CONTENT_API_URL}/api/content`).then((res) =>
    res.json()
  );

  return (
    <div>
      <h1 className="mb-8">Welcome to our Blog</h1>

      <ul>
        {posts.map((post: any) => (
          <li key={post.slug} className="my-2">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
