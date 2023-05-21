import { CONTENT_API_URL } from "@/config";

export const revalidate = 420; // ISR revalidation period in seconds

interface Post {
  title: string;
  content: string;
  slug: string;
}

interface Props {
  params: {
    slug: string;
  };
}

// Dynamic data that doesn't change often (e.g. blog posts)
export async function generateStaticParams() {
  const posts: Post[] = await fetch(`${CONTENT_API_URL}/api/content`).then(
    (res) => res.json()
  );

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const posts: Post[] = await fetch(`${CONTENT_API_URL}/api/content`).then(
    (res) => res.json()
  );
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    return (
      <div>
        <h1>Post not found</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
