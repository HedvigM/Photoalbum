import { Button } from "@mui/material";
import { useFormStatus } from "react-dom";

export const Submit: React.FC<{ children: string; disabled: boolean }> = ({
  children,
  disabled,
}) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      variant="contained"
      size="small"
      disabled={disabled || pending}
    >
      {children}
    </Button>
  );
};
