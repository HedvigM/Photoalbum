// ./sanity/lib/queries.ts
import { createClient, groq } from "next-sanity";

const clientConfig = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    useCdn: process.env.NODE_ENV === 'production',
  };

export const POSTS_QUERY = groq`*[_type == "post"]{
    title,
    "slug": slug.current,
    "image": image.asset->url,
    "alt": image.alt,
    content,
}`;

export function getPosts() {
    return createClient(clientConfig).fetch(groq`
      *[_type == "post"]{
        title,
        content,
        "image": image.asset->url,
        "slug": slug.current
      }
      `);
  }

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;