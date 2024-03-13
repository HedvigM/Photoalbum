"use client";
import Link from "next/link";
import { theme } from "../styles/theme";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export const BackArrow = () => {
  return (
    <Link href={"/"} style={{ color: theme.palette.primary.main }}>
      <ArrowBackIosIcon />
    </Link>
  );
};
