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
  /* const [optimisticLikes, addOptimisticLikes] = useOptimistic(); */
  const [likes, setLikes] = useState(props.likes);

  console.log("likes", likes);
  const onAddLike = (id: string) => {
    addLike("b0b0cee5-0f25-4a3f-8f08-b9d8a500731e");
    setLikes(likes + 1);
  };

  return (
    <div>
      {props.likes}
      <Button onClick={() => addLike(props.postId)}>
        <FavoriteIcon aria-hidden={true} />
      </Button>
    </div>
  );
};
