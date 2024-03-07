"use server";

import { revalidateTag } from "next/cache";

export interface StatusMessage {
  severity: Severity;
  message: string;
}

export type Severity = "error" | "warning" | "info" | "success";

export async function addComment(
  previousState: StatusMessage | null | undefined,
  formData: FormData | undefined | null
): Promise<StatusMessage> {
  if (!formData) {
    return { severity: "error", message: "Ingen formdata!" };
  }

  let comment = formData.get("comment");
  let id = formData.get("id");
  let name = formData.get("name");
  let email = formData.get("email");

  try {
    await fetch("https://k5kvfr8o.api.sanity.io/v1/data/mutate/production", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_API_WRITE_TOKEN}`,
      },
      body: JSON.stringify({
        mutations: [
          {
            create: {
              _type: "comment",
              name: name,
              email: email,
              text: comment,
              ref: {
                _type: "reference",
                _ref: id,
              },
            },
          },
        ],
      }),
    });

    revalidateTag(id as string);
    return { severity: "success", message: "Kommentar tillagd!" };
  } catch (error) {
    console.error("error", error);
    return { severity: "error", message: "Något gick fel!" };
  }
}

export async function addLike(
  postId: string
  /*   likes: number */
): Promise<StatusMessage> {
  console.log("in addLike", postId);
  try {
    await fetch("https://k5kvfr8o.api.sanity.io/v1/data/mutate/production", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_API_WRITE_TOKEN}`,
      },
      body: JSON.stringify({
        mutations: [
          {
            patch: {
              id: postId,
              inc: {
                likes: 1,
              },
            },
          },
        ],
      }),
    });

    revalidateTag(postId);
    console.log("like added");
    return { severity: "success", message: "Like tillagd!" };
  } catch (error) {
    console.error("error", error);
    return { severity: "error", message: "Något gick fel!" };
  }
}
