import { Container } from "@mui/material";
import { PropsWithChildren } from "react";
import Footer from "./Footer";

interface Props {
  topMargin?: number;
}

export const MainContainer: React.FC<PropsWithChildren<Props>> = ({
  children,
  topMargin = 3,
}) => {
  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          pt: topMargin,
          minHeight: `calc(100vh - 60px)`,
        }}
      >
        {children}
      </Container>
      <Footer />
    </>
  );
};
