import { ImagesContainer } from "./components/Images";
import { MainContainer } from "./components/MainContainer";
import { Typography } from "@mui/material";
import { getSession } from "@auth0/nextjs-auth0";
import { PasswordForm } from "./components/PasswordForm";

export default async function Home() {
  const logedIn = () => {};

  return (
    <MainContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          height: "100vh",
        }}
      >
        <div
          style={{
            border: "1px solid black",
            borderRadius: "5px",
            padding: "10px",
            width: "400px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          <Typography
            color="black"
            variant="h1"
            textAlign="center"
            sx={{ m: 0 }}
          >
            Jorids Fotoalbum
          </Typography>
          <Typography color="black" variant="body1" textAlign="center">
            This is a private photo album, please login to view the images.
          </Typography>
          <PasswordForm logedIn={false} />
        </div>
      </div>
    </MainContainer>
  );
}
