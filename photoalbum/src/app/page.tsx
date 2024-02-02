import { ImagesContainer } from "./components/Images";
import { MainContainer } from "./components/MainContainer";
import { Typography } from "@mui/material";
import { SanityDocument, createClient, groq } from "next-sanity";
export default async function Home() {
  return (
    <MainContainer>
      <Typography
        color="black"
        variant="h1"
        /* fontSize="4.5rem" */
        textAlign="center"
      >
        Jorids Photo album
      </Typography>
      <ImagesContainer />
    </MainContainer>
  );
}
