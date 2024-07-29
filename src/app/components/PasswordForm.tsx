"use client";
import { Button, TextField } from "@mui/material";
import { useRef } from "react";
import { useFormState } from "react-dom";
import { passwordCheck } from "../actions";

export function PasswordForm(props: { logedIn: boolean }) {
  const [statusMessage, formAction] = useFormState(passwordCheck, null);
  const formElement = useRef<HTMLFormElement>(null);
  return (
    <form
      action={formAction}
      ref={formElement}
      id={"password"}
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <TextField
        type="password"
        name="password"
        placeholder="Password"
        required
      />
      <p>{statusMessage?.message}</p>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{
          backgroundColor: "#cdd661",
          padding: "5px",
          borderRadius: "5px",
          border: "none",
        }}
      >
        Log in
      </Button>
    </form>
  );
}
