// ./sanity/lib/queries.ts
import { createClient, groq } from "next-sanity";

const clientConfig = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    useCdn: process.env.NODE_ENV === 'production',
  };

export function getPosts() {
    return createClient(clientConfig).fetch(groq`
    *[_type == "post"]{
      title,
      content,
      "image": image.asset->url,
      "slug": slug.current,
      _id,
      date
    }
    `,  {cache: "no-store"} )
  }


export function getPost(id: string) {
  return createClient(clientConfig).fetch(groq`
    *[_type == "post" && _id == $id][0]{
      title,
      content,
      "image": image.asset->url,
      "slug": slug.current,
      _id,
      date
    }
    `, {id});
}
