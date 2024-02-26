"use client";
import { Button, TextField } from "@mui/material";
import { FormEvent, useEffect, useRef } from "react";
import { addComment } from "../../../sanity/lib/mutations";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useFormState } from "react-dom";

export default function Form(props: { id: string }) {
  const [statusMesage, formAction] = useFormState(onSubmit, null);
  const user = useUser();
  const formElement = useRef<HTMLFormElement>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    addComment(formData);
  }

  useEffect(() => {
    if (statusMesage?.severity !== "error" && formElement.current) {
      console.log("statusMesage", statusMesage);
      formElement.current.reset();
    }
  }, [statusMesage]);

  return (
    <form
      onSubmit={onSubmit}
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
      <Button type="submit" variant="contained" size="small" disabled={!user}>
        Skicka
      </Button>
    </form>
  );
}
