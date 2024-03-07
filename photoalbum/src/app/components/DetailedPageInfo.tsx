import { Typography } from "@mui/material";
import { BackArrow } from "./BackArrow";
import { LikedButton } from "./LikedButton";
import { getLikes } from "../../../sanity/lib/queries";

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
  const likes = await getLikes(props.postId);
  console.log("likes in detailed page", likes);
  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 4fr 1fr" }}>
        {" "}
        <BackArrow />
        <Typography color="black" variant="h1" textAlign="center">
          {props.post.title}
        </Typography>
      </div>
      <img
        alt={props.post.alt}
        src={props.post.image}
        style={{
          width: "100%",
          maxWidth: "600px",
          placeSelf: "center",
          objectFit: "cover",
          aspectRatio: "1/1",
          borderRadius: "5px",
        }}
      />
      <LikedButton likes={likes[0].likes} postId={props.postId} />
      <Typography
        color="black"
        variant="body1"
        textAlign="center"
        sx={{ maxWidth: "500px", placeSelf: "center" }}
      >
        {props.post.content}
      </Typography>
      <Typography
        color="black"
        variant="body1"
        textAlign="center"
        sx={{ maxWidth: "500px", placeSelf: "center" }}
      ></Typography>
    </>
  );
}
