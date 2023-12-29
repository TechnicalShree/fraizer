import { Stack, Typography } from "@mui/material";

export default function GlimpseOfCounty() {
  return (
    <Stack>
      <Typography
        variant="h4"
        color="primary"
        mb={1}
        sx={{ fontSize: 24, fontWeight: 600 }}
      >
        Danny Little Bear
      </Typography>
      <Typography
        sx={{
          display: "-webkit-box",
          WebkitLineClamp: 6, // Set the number of lines to display
          overflow: "hidden",
          textOverflow: "ellipsis",
          WebkitBoxOrient: "vertical",
        }}
        color="primary"
      >
        Danny Little Bear was an American professional wrestler who competed in
        North American regional promotions including the National Wrestling
        Alliance, particularly the Central States and Gulf Coast territories,
        where he remained one of the region's most popular stars during the
        1960s and 70s.
      </Typography>
      <Typography mt={2} color="primary" sx={{ fontSize: 14, fontWeight: 500 }}>
        Click below to read more
      </Typography>
    </Stack>
  );
}
