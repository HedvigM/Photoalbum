import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { CssBaseline, ThemeProvider, Typography } from "@mui/material";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { theme } from "./styles/theme";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import LogoutIcon from "@mui/icons-material/Logout";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jorids Photo album",
  description: "A photo album of Jorids life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        {
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        }
      </head>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <UserProvider>
              <div
                style={{
                  display: "grid",
                  justifyContent: "end",
                  padding: "10px",
                }}
              >
                <Typography
                  color="black"
                  variant="h4"
                  sx={{
                    backgroundColor: "#cdd661",
                    padding: "5px",
                    borderRadius: "5px",
                    width: "fit-content",
                    margin: "auto",
                    ":hover": {
                      cursor: "pointer",
                      backgroundColor: "#eef4b4",
                    },
                  }}
                >
                  <a
                    href="/api/auth/logout"
                    style={{
                      color: "black",
                      textDecoration: "none",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <LogoutIcon />
                  </a>
                </Typography>
              </div>
              {children}
            </UserProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
