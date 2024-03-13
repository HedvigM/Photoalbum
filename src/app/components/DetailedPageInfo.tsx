import { Typography } from "@mui/material";
import { BackArrow } from "./BackArrow";
import { LikedButton } from "./LikedButton";
import { getLikes } from "../../../sanity/lib/queries";
import { unstable_cache } from "next/cache";

type DetailedPageProps = {
  postId: string;
  post: {
    title: string;
    image: string;
    content: string;
    alt: string;
    _id: string;
  };
};

export default async function DetailedPageInfo(props: DetailedPageProps) {
  const getLikesThroughCache = unstable_cache(
    async () => {
      const likes = await getLikes(props.postId);
      return likes;
    },
    [props.postId],
    { tags: [props.postId] }
  );

  const likes = await getLikesThroughCache();
  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 4fr 1fr" }}>
        {" "}
        <BackArrow />
        <Typography
          color="black"
          variant="h1"
          textAlign="center"
          sx={{ margin: "0px" }}
        >
          {props.post.title}
        </Typography>
      </div>
      <img
        alt={props.post.alt}
        src={props.post.image}
        style={{
          width: "100%",
          maxWidth: "500px",
          placeSelf: "center",
          objectFit: "cover",
          aspectRatio: "1/1",
          borderRadius: "5px",
        }}
      />
      <div
        style={{
          maxWidth: "500px",
          placeSelf: "center",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <LikedButton likes={likes[0].likes} postId={props.postId} />
        <Typography color="black" variant="body1" textAlign="left">
          {props.post.content}
        </Typography>
      </div>
    </>
  );
}
