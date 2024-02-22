"use client";
import { Link, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

type DetailedPageProps = {
  post: {
    title: string;
    image: string;
    content: string;
    alt: string;
  };
};

export default function DetailedPageInfo(props: DetailedPageProps) {
  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 4fr 1fr" }}>
        <Link href={"/"}>
          {" "}
          {/* Den här pilen borde inte vara i den här komponenten. */}
          <ArrowBackIosIcon />
        </Link>
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
      <Typography
        color="black"
        variant="body1"
        textAlign="center"
        sx={{ maxWidth: "500px", placeSelf: "center" }}
      >
        {props.post.content}
      </Typography>
    </>
  );
}