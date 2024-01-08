import { Stack } from "@mui/material";
import CloseIconBtn from "./CloseIconBtn";
import StoryActions from "./StoryActions";
import CountyInfoTabs from "./CountyInfoTabs";

export default function RightSection() {
  return (
    <Stack position="relative" pt={2} px={4} flex={1} gap={4}>
      {/* Close Icon Btn */}
      <CloseIconBtn />

      {/* County Info Tabs */}
      <CountyInfoTabs />

      {/* Story Actions */}
      <StoryActions />
    </Stack>
  );
}
