"use client";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useOptimistic, useState } from "react";
import { addLike } from "../actions";
import { Button } from "@mui/material";

type LikeButtonProps = {
  likes: number;
  postId: string;
};

export const LikedButton = (props: LikeButtonProps) => {
  const [optimisticLikes, setOptimisticLikes] = useOptimistic(props.likes);

  const optimisticLikeUpdate = () => {
    addLike(props.postId);
    setOptimisticLikes(optimisticLikes + 1);
  };

  return (
    <div>
      {optimisticLikes}
      <form action={optimisticLikeUpdate}>
        <Button type="submit" name="likeButton">
          {optimisticLikes >= 1 ? (
            <FavoriteIcon aria-hidden={true} />
          ) : (
            <FavoriteBorderIcon aria-hidden={true} />
          )}
        </Button>
      </form>
    </div>
  );
};
