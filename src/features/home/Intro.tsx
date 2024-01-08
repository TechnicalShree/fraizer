import { Box, Chip, Stack, SwipeableDrawer, Typography } from "@mui/material";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import CountySearchList from "../countySearchList/CountySearchList";
import { useState } from "react";
export default function Intro() {
  const [isListOpen, setIsListOpen] = useState(false);

  const handleListClick = () => {
    setIsListOpen(true);
  };

  const handleListClose = () => {
    setIsListOpen(false);
  };

  return (
    <>
      <Stack position="absolute" p={6} zIndex={10}>
        <img src="/images/frazier_logo.png" alt="Frazier Logo" width={160} />
        <Typography
          variant="h3"
          color="primary"
          mt={4}
          sx={{
            fontSize: 22,
            fontWeight: 600,
          }}
        >
          Hello and welcome to Frazier Museum!
        </Typography>
        <Typography
          color="primary"
          sx={{
            fontSize: 16,
            fontWeight: 500,
            maxWidth: 450,
            lineHeight: 1.2,
          }}
        >
          <strong>Click on any county</strong> to learn more about it or click
          on below tag to show you the counties that has stories about them
        </Typography>
        <Box>
          <Chip
            icon={<FormatListBulletedRoundedIcon fontSize="small" />}
            label="List of Counties"
            variant="outlined"
            color="primary"
            sx={{
              height: "max-content",
              padding: "0.75rem 1rem",
              borderRadius: 6,
              fontSize: 16,
              mt: 2,
            }}
            onClick={handleListClick}
          />
        </Box>
        <Box
          sx={{
            maxWidth: 220,
            p: 4,
          }}
        >
          <img src="/images/pointing_arrow.png" alt="arrow" width={40} />
          <Typography
            sx={{
              fontSize: 11,
              fontWeight: 500,
              lineHeight: 1.2,
              my: 1.5,
            }}
          >
            Select the county from the map or open the list
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src="/images/pointing_arrow.png"
              alt="arrow"
              width={40}
              style={{
                transform: "scaleX(-1) rotate(200deg)",
              }}
            />
          </Box>
        </Box>
      </Stack>
      <SwipeableDrawer
        anchor="right"
        open={isListOpen}
        onClose={handleListClose}
        onOpen={handleListClick}
        PaperProps={{
          sx: {
            boxShadow: "none",
          },
        }}
      >
        <CountySearchList key={`${isListOpen}`} onClose={handleListClose} />
      </SwipeableDrawer>
    </>
  );
}
