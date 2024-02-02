import { SanityDocument } from "next-sanity";
import Link from "next/link";
import Image from "next/image";

export default function Posts({ posts }: { posts: SanityDocument[] }) {
  console.log({ posts });
  return (
    <main className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
      {posts?.length > 0 ? (
        posts.map((post) => (
          <div key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <Link href={`/post/${post.slug.current}`}>Read more</Link>
            <Image src={post.image} alt="Jorid" width={200} height={200} />
          </div>
        ))
      ) : (
        <div>No posts found</div>
      )}
    </main>
  );
}
