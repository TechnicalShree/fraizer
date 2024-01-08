import { Button, Stack } from "@mui/material";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

type StoryActionsProps = {
  tabIndex: number;
};

export default function StoryActions({ tabIndex }: StoryActionsProps) {
  return (
    <Stack direction="row" gap={2} height={48}>
      {tabIndex !== 3 && (
        <>
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
        </>
      )}
    </Stack>
  );
}
