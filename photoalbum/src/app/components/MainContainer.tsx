import { Container } from "@mui/material";
import { PropsWithChildren } from "react";

interface Props {
  topMargin?: number;
}

export const MainContainer: React.FC<PropsWithChildren<Props>> = ({
  children,
  topMargin = 3,
}) => {
  return (
    <Container
      maxWidth="md"
      sx={{
        pt: topMargin,
        minHeight: "100vh",
      }}
    >
      {children}
    </Container>
  );
};
