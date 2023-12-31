import { ArrowForwardIosRounded } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React from "react";
import { useAppContext } from "../../../contexts/AppContext";
import { useNavigate } from "react-router-dom";

export default function LearnMoreCta() {
  const { state } = useAppContext();
  const navigate = useNavigate();

  const learnMoreCtaHandler = () => {
    navigate(`/county/${state.county.name}`);
  };

  return (
    <Box>
      <Button
        variant="contained"
        onClick={learnMoreCtaHandler}
        sx={{
          borderRadius: 10,
          padding: "0.5rem 0 0.5rem 1rem",
        }}
      >
        Learn More About {state.county.name} County
        <ArrowForwardIosRounded
          sx={{
            width: 40,
            height: 25,
            fontSize: 25,
          }}
        />
      </Button>
    </Box>
  );
}
