"use server"

 import { revalidateTag } from "next/cache";


  export const addComment = async (formData: FormData) => {

    let comment = formData.get("comment");
    let id = formData.get("id");
    let name = formData.get("name");
    let email = formData.get("email");
  
    try {
      await fetch(
        "https://k5kvfr8o.api.sanity.io/v1/data/mutate/production",
        {
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
          },)
        }
      );

      revalidateTag(id as string);
      return { severity: "success", message: "Kommentar tillagd!" };
    } catch (error) {
      console.error("error", error);
    }
    
  };