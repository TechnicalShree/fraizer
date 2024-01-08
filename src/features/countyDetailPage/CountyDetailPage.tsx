import { Stack } from "@mui/material";
import React from "react";
import { CountyList } from "./components";
import CountyDetails from "../countyDetails/CountyDetails";
export default function CountyDetailPage() {
  return (
    <Stack direction="row" height={1}>
      <CountyList />
      <CountyDetails />
    </Stack>
  );
}
