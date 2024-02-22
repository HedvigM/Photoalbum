import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Footer() {
  return (
    <div
      style={{
        display: "grid",
        justifyContent: "end",
        padding: "10px 20px 10px 10px",
        backgroundColor: "#f0f0f0",
        height: "60px",
      }}
    >
      <Button
        size="small"
        variant="contained"
        endIcon={<LogoutIcon />}
        href="/api/auth/logout"
        sx={{ ":hover": { backgroundColor: "#eef4b4", color: "black" } }}
      >
        Logga ut
      </Button>
    </div>
  );
}
