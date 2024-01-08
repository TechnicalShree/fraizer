import { Button, ButtonGroup, Stack } from "@mui/material";
import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import DetailStory from "./DetailStory";
import VideoStory from "./VideoStory";
import CountySong from "./CountySong";

type CountyInfoTabsProps = {
  selectedTab: number;
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
};

export default function CountyInfoTabs({
  selectedTab,
  setSelectedTab,
}: CountyInfoTabsProps) {
  const params = useParams();
  const countyName = params.name || "";

  const sampleData = {
    storyTitle: "Danny Little Bear",
    description: "",
    imageDetails: {
      imgUrl: "",
      desc: "",
    },
  };

  const buttons = useMemo(() => {
    const btnArr = [
      {
        id: "story",
        label: sampleData.storyTitle,
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
  }, [countyName, sampleData.storyTitle, selectedTab, setSelectedTab]);

  return (
    <Stack flex={1}>
      <Stack flex={1}>
        {selectedTab === 1 && (
          <DetailStory
            storyTitle={sampleData.storyTitle}
            description={sampleData.description}
            imageDetails={sampleData.imageDetails}
          />
        )}
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
