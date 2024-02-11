import Link from "next/link";
import { getPosts } from "../../../sanity/lib/queries";

export async function ImagesContainer() {
  const posts = await getPosts();

  type Post = {
    title: string;
    content: string;
    image: string;
    alt: string;
    slug: string;
    _id: string;
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "3px",
        overflow: "hidden",
      }}
    >
      {posts.map((post: Post) => (
        <>
          <Link href={`/${post._id}`}>
            <img
              alt={post.alt}
              src={post.image}
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                aspectRatio: "1/1",
                borderRadius: "5px",
              }}
            />
          </Link>
        </>
      ))}
    </div>
  );
}
