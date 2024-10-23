"use client";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useOptimistic } from "react";
import { addLike } from "../actions";
import { Button, Typography } from "@mui/material";

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
    <>
      <form action={optimisticLikeUpdate}>
        <Button
          type="submit"
          size="small"
          name="likeButton"
          variant="text"
          sx={{ padding: "0px", width: "15px" }}
        >
          {optimisticLikes >= 1 ? (
            <>
              <Typography color="black" variant="body1" aria-hidden={true}>
                {optimisticLikes}
              </Typography>
              <FavoriteIcon aria-hidden={true} />
            </>
          ) : (
            <FavoriteBorderIcon aria-hidden={true} />
          )}
        </Button>
      </form>
    </>
  );
};
