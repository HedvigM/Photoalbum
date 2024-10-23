import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { CssBaseline, ThemeProvider, Typography } from "@mui/material";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { theme } from "./styles/theme";
import "./globals.css";
import "dotenv/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jorids Fotoalbum",
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
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
