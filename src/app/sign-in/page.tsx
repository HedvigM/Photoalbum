import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import {
  Box,
  Button,
  Container,
  Paper,
  styled,
  Typography,
} from "@mui/material";

export default async function SignIn() {
  const session = await getServerSession(authOptions);
  const cookieStore = cookies();

  if (session) {
    redirect("/");
  }

  const csrfTokenCookie = `${
    process.env.NODE_ENV == "production" ? "__Host-" : ""
  }next-auth.csrf-token`;
  const csrfToken = cookieStore.get(csrfTokenCookie)?.value.split("|")[0];

  return (
    <Container
      maxWidth="sm"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper elevation={3} square={false} sx={{ p: 3 }}>
        <form
          method="post"
          action="/api/auth/callback/credentials"
          style={{
            height: "100%",
            display: "grid",
            gridTemplateRows: "1fr 1fr",
            gap: "3rem",
          }}
        >
          <Box sx={{ placeSelf: "center" }}>
            <Typography
              variant="h1"
              align="center"
              style={{
                margin: 0,
                paddingBottom: "5px",
              }}
            >
              Jorids Photo album
            </Typography>
            <Typography variant="body1" align="center">
              Sign in with your provided password to see the images.
            </Typography>
          </Box>
          <Box
            sx={{
              placeSelf: "start",
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: "10px",
            }}
          >
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <label
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              Password:
              <input
                name="password"
                type="password"
                style={{ width: "100%" }}
              />
            </label>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{
                backgroundColor: "#cdd661",
                padding: "5px",
                borderRadius: "5px",
                border: "none",
                /* width: "100%", */
              }}
            >
              Log in
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}
