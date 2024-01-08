import { Stack, Typography } from "@mui/material";
import React from "react";

export default function SpotifyListQRCode() {
  return (
    <Stack direction="row" alignItems="center" gap={2}>
      <img
        src="/images/spotify_qr_code.png"
        alt="Spotify QR Code"
        style={{
          width: 100,
        }}
      />
      <Typography sx={{ maxWidth: 180 }}>
        Scan this QR code to open our list on Spotify!
      </Typography>
    </Stack>
  );
}
