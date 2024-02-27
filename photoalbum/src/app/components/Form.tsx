"use client";
import { Button, TextField } from "@mui/material";
import { useEffect, useRef } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useFormState } from "react-dom";
import { addComment } from "../actions";

export default function Form(props: { id: string }) {
  const user = useUser();

  const [statusMessage, formAction] = useFormState(addComment, null);
  const formElement = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (statusMessage?.severity !== "error" && formElement.current) {
      console.log("statusMesage", statusMessage);
      formElement.current.reset();
    }
  }, [statusMessage]);

  return (
    <form
      action={formAction}
      ref={formElement}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <input type="hidden" name="id" value={props.id} />
      <input type="hidden" name="name" value={user?.user?.name || ""} />
      <input type="hidden" name="email" value={user?.user?.email || ""} />
      <TextField
        name="comment"
        id="outlined-multiline-flexible"
        label="Lägg till en kommentar"
        multiline
        maxRows={4}
      />
      <Button
        type="submit"
        variant="contained"
        size="small"
        disabled={!user}
        /* aria-disabled={pending} */
      >
        Skicka
      </Button>
    </form>
  );
}
