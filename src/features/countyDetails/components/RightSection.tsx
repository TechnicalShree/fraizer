import { Stack } from "@mui/material";
import CloseIconBtn from "./CloseIconBtn";
import StoryActions from "./StoryActions";
import CountyInfoTabs from "./CountyInfoTabs";
import { useState } from "react";

export default function RightSection() {
  const [selectedTab, setSelectedTab] = useState(1);
  return (
    <Stack position="relative" pt={2} px={4} flex={1} gap={4}>
      {/* Close Icon Btn */}
      <CloseIconBtn />

      {/* County Info Tabs */}
      <CountyInfoTabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />

      {/* Story Actions */}
      <StoryActions tabIndex={selectedTab} />
    </Stack>
  );
}
