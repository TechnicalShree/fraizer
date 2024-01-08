import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import SpotifyListQRCode from "../../spotifyListQRCode/SpotifyListQRCode";

export default function CountySong() {
  const params = useParams();
  const countyName = params.name || "";
  return (
    <Stack gap={8}>
      <Typography
        sx={{
          fontSize: 24,
          fontWeight: 600,
        }}
      >
        {countyName} County's Song
      </Typography>
      <Box></Box>
      <SpotifyListQRCode />
    </Stack>
  );
}
