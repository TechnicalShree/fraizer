import { Box, Stack, SwipeableDrawer } from "@mui/material";
import React from "react";
import ModalHeader from "../../modal/ModalHeader";
import SpotifyListQRCode from "../../spotifyListQRCode/SpotifyListQRCode";
import SongsList from "./SongsList";

type MusicalKentuckyProps = {
  open: boolean;
  onClose: () => void;
};

export default function MusicalKentucky({
  open,
  onClose,
}: MusicalKentuckyProps) {
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
          width: "400px",
          height: 1,
        }}
      >
        <Stack
          sx={{
            py: 2,
            height: "calc(100% - 140px)",
            background: "#ededed",
          }}
        >
          <ModalHeader
            title="Musical Kentucky: A Song from each County"
            helperText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis atque officiis eligendi possimus cumque aperiam consequatur adipisci odio unde deleniti."
            onClose={closeHandler}
          />
          <Stack
            flex={1}
            mt={1}
            px={3}
            sx={{
              height: 1,
              overflowY: "auto",
            }}
            className="custom_scroll_bar"
          >
            <SongsList />
          </Stack>
        </Stack>
        <Box
          px={3}
          sx={{
            background: "#d1d1d1",
            display: "flex",
            alignItems: "center",
            minHeight: "140px",
          }}
        >
          <SpotifyListQRCode />
        </Box>
      </Stack>
    </SwipeableDrawer>
  );
}
