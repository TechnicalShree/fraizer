import { Box, Stack, SwipeableDrawer, Typography } from "@mui/material";
import ModalHeader from "../../modal/ModalHeader";

import SubjectRoundedIcon from "@mui/icons-material/SubjectRounded";
import SvgMusicNoteIcon from "../../../assets/Icons/SvgMusicNoteIcon";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";

type StaffPickedStoriesModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function StaffPickedStoriesModal({
  open,
  onClose,
}: StaffPickedStoriesModalProps) {
  const closeHandler = () => {
    onClose();
  };

  return (
    <SwipeableDrawer
      anchor="right"
      hideBackdrop
      open={open}
      onClose={closeHandler}
      onOpen={() => {}}
      PaperProps={{
        sx: {
          boxShadow: "none",
        },
      }}
    >
      <Stack
        sx={{
          py: 2,
          width: "400px",
          height: "100%",
          background: "#ededed",
        }}
      >
        <ModalHeader title="Staff Picked Stories" onClose={closeHandler} />
        <Stack p={2} mt={2} gap={2}>
          <Stack direction="row" gap={2}>
            <SubjectRoundedIcon fontSize="large" />
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Stack>
          <Stack direction="row" gap={2}>
            <VideocamRoundedIcon fontSize="large" />
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Stack>
          <Stack direction="row" gap={2}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minWidth: "35px",
                height: "35px",
              }}
            >
              <SvgMusicNoteIcon
                style={{
                  width: 25,
                  height: 25,
                }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Stack>
          <Stack direction="row" gap={2}>
            <SubjectRoundedIcon fontSize="large" />
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Stack>
          <Stack direction="row" gap={2}>
            <VideocamRoundedIcon fontSize="large" />
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Stack>
          <Stack direction="row" gap={2}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minWidth: "35px",
                height: "35px",
              }}
            >
              <SvgMusicNoteIcon
                style={{
                  width: 25,
                  height: 25,
                }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </SwipeableDrawer>
  );
}
