import { Typography } from "@mui/material";
import { getComments } from "../../../sanity/lib/queries";
import { unstable_cache } from "next/cache";

export default async function Comments(props: { id: string }) {
  const getCommentsThroughCache = unstable_cache(
    async (): Promise<Comments> => {
      const comments = await getComments(props.id);
      return comments;
    },
    [props.id],
    { tags: [props.id] }
  );

  const comments = await getCommentsThroughCache();

  type Comment = {
    name: string;
    text: string;
  };
  type Comments = {
    relatedComments: Comment[];
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        paddingBottom: "30px",
      }}
    >
      {comments.relatedComments.map((comment: Comment) => {
        if (comment.name && comment.text) {
          return (
            <div
              style={{
                border: `1px solid #d5d7c0`,
                borderRadius: "5px",
                padding: "5px",
              }}
            >
              <Typography
                fontWeight="bold"
                fontSize="14px"
                variant="body2"
                sx={{ margin: "0" }}
              >
                {comment.name}
              </Typography>
              <Typography variant="body1" sx={{ margin: "0" }}>
                {comment.text}
              </Typography>
            </div>
          );
        }
      })}
    </div>
  );
}
