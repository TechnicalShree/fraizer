import { Box, Typography } from "@mui/material";
import React from "react";

type SideMenuItemProps = {
  text: string;
  onClick: () => void;
};

export default function SideMenuItem({ text, onClick }: SideMenuItemProps) {
  return (
    <Box
      sx={{ cursor: "pointer", px: 6, backgroundColor: "#575757", flexGrow: 1 }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      onClick={onClick}
    >
      <Typography
        sx={{
          fontSize: 20,
          fontWeight: 700,
          color: "#fff",
          textAlign: "center",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}
