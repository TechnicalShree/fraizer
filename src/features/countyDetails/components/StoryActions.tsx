import { Button, Stack } from "@mui/material";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

export default function StoryActions() {
  return (
    <Stack direction="row" gap={2}>
      <Button
        variant="contained"
        endIcon={<VolumeUpRoundedIcon />}
        sx={{
          borderRadius: 10,
          p: "10px 22px",
          fontSize: 16,
        }}
      >
        Listen to this story
      </Button>
      <Button
        variant="contained"
        endIcon={<EmailRoundedIcon />}
        sx={{ borderRadius: 10, p: "10px 22px", fontSize: 16 }}
      >
        Email me this story
      </Button>
    </Stack>
  );
}
