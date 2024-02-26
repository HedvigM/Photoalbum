"use client";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

export const LikedButton = () => {
  const [liked, setLiked] = useState(false);
  return <>{liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}</>;
};
