import { Box, Chip } from "@mui/material";
import React from "react";

const filterOptions = [
  "Sports",
  "Natural",
  "Traditions",
  "Entertaining",
  "Firsts",
  "Divers Stories",
  "Notable Figures",
  "Tourism",
  "Legend and Folklore",
  "Production & Agriculture",
];

export default function ChipFilter() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        p: 1,
      }}
    >
      {filterOptions.map((filter) => (
        <Chip key={filter} label={filter} />
      ))}
    </Box>
  );
}
