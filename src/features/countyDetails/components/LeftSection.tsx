import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CountyOverview } from "../../countyDetailSideBar/components";
import PreviewMap from "../../map/PreviewMap";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

export default function LeftSection() {
  const navigate = useNavigate();
  const params = useParams();
  const countyName = params.name || "";

  return (
    <Stack pr={2} gap={3} height={1}>
      <Typography
        variant="h2"
        sx={{
          fontSize: 36,
          fontWeight: 600,
        }}
      >
        {countyName} County
      </Typography>

      {/* County Overview */}
      <CountyOverview
        founded={1843}
        namedFor="John LaRue"
        largestCity="Hodgenville"
      />

      {/* Small Preview of county on Map */}
      <PreviewMap selectedCounty={countyName} />

      <Box mt="auto">
        <Button
          variant="contained"
          startIcon={
            <ArrowBackIosNewRoundedIcon
              sx={{
                width: "25px",
                height: "25px",
              }}
            />
          }
          sx={{
            borderRadius: 10,
            p: "10px 22px",
            fontSize: 16,
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          Back to Map
        </Button>
      </Box>
    </Stack>
  );
}
