import { getPosts } from "../../../sanity/lib/queries";

export async function ImagesContainer() {
  const posts = await getPosts();

  type Post = {
    title: string;
    content: string;
    image: string;
    alt: string;
    slug: string;
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "5px",
        overflow: "hidden",
      }}
    >
      {posts.map((post: Post) => (
        <img
          alt={post.alt}
          src={post.image}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            border: "1px solid black",
            aspectRatio: "1/1",
          }}
        />
      ))}
    </div>
  );
}
