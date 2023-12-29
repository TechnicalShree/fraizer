import { Box, Stack } from "@mui/material";
import InteractiveMap from "./InteractiveMap";
import SideMenu from "../SideMenu/SideMenu";
import CountyDetailSideBar from "../countyDetailSideBar/CountyDetailSideBar";
import { useAppContext } from "../../contexts/AppContext";
import { useEffect, useState } from "react";
// import ChipFilter from "../chipFilter/ChipFilter";

export default function Home() {
  const [resetMap, setResetMap] = useState(false);
  const { state } = useAppContext();

  useEffect(() => {
    if (state.countyDetailsModal.isOpen) return;
    setResetMap((prev) => !prev);
  }, [state.countyDetailsModal.isOpen]);

  return (
    <Stack direction="row" sx={{ width: 1, height: 1 }}>
      <Box
        sx={{
          width: 4 / 5,
          height: 4 / 5,
        }}
      >
        <InteractiveMap key={`${resetMap}`} />
        {/* <ChipFilter /> */}
      </Box>
      <SideMenu />
      <CountyDetailSideBar />
    </Stack>
  );
}
