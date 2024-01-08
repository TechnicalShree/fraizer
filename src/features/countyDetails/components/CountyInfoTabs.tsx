import { Button, ButtonGroup, Stack } from "@mui/material";
import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import DetailStory from "./DetailStory";
import VideoStory from "./VideoStory";
import CountySong from "./CountySong";

export default function CountyInfoTabs() {
  const [selectedTab, setSelectedTab] = useState(1);
  const params = useParams();
  const countyName = params.name || "";
  const storyTitle = "Danny Little Bear";

  const buttons = useMemo(() => {
    const btnArr = [
      {
        id: "story",
        label: storyTitle,
      },
      {
        id: "video",
        label: "Video Story",
      },
      {
        id: "song",
        label: countyName + " County's Song",
      },
    ];
    return btnArr.map(({ id, label }, idx) => (
      <Button
        key={id}
        variant={selectedTab - 1 === idx ? "contained" : "outlined"}
        sx={{
          fontSize: 16,
          padding: "10px 20px",
          borderRadius:
            idx === 0
              ? "50px 0 0 50px"
              : idx === btnArr.length - 1
              ? "0 50px 50px 0"
              : "0",
        }}
        onClick={() => setSelectedTab(idx + 1)}
      >
        {label}
      </Button>
    ));
  }, [countyName, selectedTab]);

  return (
    <Stack flex={1}>
      <Stack flex={1}>
        {selectedTab === 1 && <DetailStory />}
        {selectedTab === 2 && <VideoStory />}
        {selectedTab === 3 && <CountySong />}
      </Stack>
      <ButtonGroup
        variant="outlined"
        sx={{
          borderRadius: 6,
        }}
      >
        {buttons}
      </ButtonGroup>
    </Stack>
  );
}
