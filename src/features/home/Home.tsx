import { Box, Stack } from "@mui/material";
import InteractiveMap from "../map/InteractiveMap";
import SideMenu from "../SideMenu/SideMenu";
import CountyDetailSideBar from "../countyDetailSideBar/CountyDetailSideBar";
import ChipFilter from "../chipFilter/ChipFilter";
import Intro from "./Intro";

export default function Home() {
  return (
    <Stack direction="row" position="relative" sx={{ width: 1, height: 1 }}>
      <Box
        position="relative"
        sx={{
          flex: 1,
          height: 1,
        }}
      >
        <Intro />
        <InteractiveMap />
        <ChipFilter />
      </Box>
      <SideMenu />
      <CountyDetailSideBar />
    </Stack>
  );
}
