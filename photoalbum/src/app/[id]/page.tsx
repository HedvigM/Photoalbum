/* "use client"; */
import Link from "next/link";
import { getPost } from "../../../sanity/lib/queries";
import { MainContainer } from "../components/MainContainer";
import { Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useParams } from "next/navigation";

export default async function DetailerView() {
  /* const params = useParams<{ id: string }>();
  console.log({ params }); */

  const ZZZ = "a9548d03-5a8b-4955-938b-eed20ebff1bf";
  const post = await getPost(ZZZ);
  return (
    <MainContainer>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "auto auto auto",
          gap: "10px",
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 4fr 1fr" }}>
          <Link href={"/"}>
            <ArrowBackIosIcon />
          </Link>
          <Typography color="black" variant="h1" textAlign="center">
            {post.title}
          </Typography>
        </div>
        <img
          alt={post.alt}
          src={post.image}
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
          {post.content}Det här är en sportig bild med två personer som springer
          en liten runda tillsammans.
        </Typography>
      </div>
    </MainContainer>
  );
}
