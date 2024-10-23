import { ImagesContainer } from "./components/Images";
import { MainContainer } from "./components/MainContainer";
import { Typography } from "@mui/material";
import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/");
  }
  return (
    <MainContainer>
      <Typography color="black" variant="h1" textAlign="center">
        Jorids Fotoalbum
      </Typography>
      <ImagesContainer />
    </MainContainer>
  );
}
