import { Stack, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import SpotifyListQRCode from "../../spotifyListQRCode/SpotifyListQRCode";
import SpotifyPlayer from "./SpotifyPlayer";

export default function CountySong() {
  const params = useParams();
  const countyName = params.name || "";
  return (
    <Stack gap={6}>
      <Typography
        sx={{
          fontSize: 24,
          fontWeight: 600,
        }}
      >
        {countyName} County's Song
      </Typography>
      <SpotifyPlayer />
      <SpotifyListQRCode />
    </Stack>
  );
}
