import { Divider, Stack } from "@mui/material";
import React from "react";
import { LeftSection, RightSection } from "./components";

export default function CountyDetails() {
  return (
    <Stack
      direction="row"
      px={6}
      py={8}
      sx={{
        flex: 1,
        background: "#ededed",
      }}
    >
      <LeftSection />
      <Divider color="#000" orientation="vertical" />
      <RightSection />
    </Stack>
  );
}
