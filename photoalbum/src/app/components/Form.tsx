"use client";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { addComment } from "../actions";

export default function Form() {
  const [comment, setComment] = useState("");

  return (
    <form
      action={addComment}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <TextField /* This could be a client component while all the other server components */
        value={comment}
        onChange={(event) => setComment(event.target.value)}
        name="comment"
        id="outlined-multiline-flexible"
        label="Lägg till en kommentar"
        multiline
        maxRows={4}
      />
      <Button type="submit" variant="contained" size="small">
        {" "}
        {/* Det är någonting med disabled när actionen kör... */}
        Skicka
      </Button>
    </form>
  );
}
