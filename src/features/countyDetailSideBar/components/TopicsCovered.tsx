import { Box, List, Typography } from "@mui/material";
import ListItemComp from "./ListItemComp";

const coveredTopicList = ["Danny Little Bear", "Song", "Video Story"];

export default function TopicsCovered() {
  return (
    <Box>
      <Typography
        variant="h4"
        color="primary"
        mb={1}
        sx={{ fontSize: 24, fontWeight: 600 }}
      >
        Topics covered:
      </Typography>
      <List sx={{ width: "100%" }} component="nav">
        {coveredTopicList.map((topic, idx) => (
          <ListItemComp key={idx} text={topic} />
        ))}
      </List>
    </Box>
  );
}
