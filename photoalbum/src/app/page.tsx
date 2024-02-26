import { ImagesContainer } from "./components/Images";
import { MainContainer } from "./components/MainContainer";
import { Typography } from "@mui/material";
import { getSession } from "@auth0/nextjs-auth0";

export default async function Home() {
  const session = await getSession();
  const user = session?.user ?? null;

  if (!user) {
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
              height: "200px",
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
            <Typography
              color="black"
              variant="h4"
              textAlign="center"
              sx={{
                backgroundColor: "#cdd661",
                padding: "5px",
                borderRadius: "5px",
                display: "block",
                width: "100px",
                margin: "auto",
                ":hover": {
                  cursor: "pointer",
                  backgroundColor: "#eef4b4",
                },
              }}
            >
              <a
                href="/api/auth/login"
                style={{ color: "black", textDecoration: "none" }}
              >
                Login
              </a>
            </Typography>
          </div>
        </div>
      </MainContainer>
    );
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
