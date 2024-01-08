import { IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

export default function CloseIconBtn() {
  const navigate = useNavigate();
  return (
    <IconButton
      sx={{
        py: 0,
        position: "absolute",
        top: 0,
        right: 0,
      }}
      onClick={() => {
        navigate("/");
      }}
    >
      <CloseIcon
        color="primary"
        sx={{
          width: "40px",
          fontSize: "40px",
        }}
      />
    </IconButton>
  );
}
