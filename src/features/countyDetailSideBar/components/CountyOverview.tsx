import { Stack, Typography } from "@mui/material";
import React from "react";

type CountyOverviewProps = {
  founded: number;
  namedFor: string;
  largestCity: string;
};

export default function CountyOverview({
  founded,
  namedFor,
  largestCity,
}: CountyOverviewProps) {
  return (
    <Stack>
      <Typography variant="h4" color="primary" sx={{ fontSize: 18 }}>
        Founded: {founded}
      </Typography>
      <Typography variant="h4" color="primary" sx={{ fontSize: 18 }}>
        Named for: {namedFor}
      </Typography>
      <Typography variant="h4" color="primary" sx={{ fontSize: 18 }}>
        Largest city: {largestCity}
      </Typography>
    </Stack>
  );
}
