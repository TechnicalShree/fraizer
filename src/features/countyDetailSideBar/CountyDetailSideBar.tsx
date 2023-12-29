import { Container, Stack, SwipeableDrawer } from "@mui/material";
import { useAppContext } from "../../contexts/AppContext";
import {
  closeCountyDetailModal,
  resetCounty,
} from "../../contexts/actions/actions";
import {
  CountyDetailsHeader,
  GlimpseOfCounty,
  CountyOverview,
  TopicsCovered,
  LearnMoreCta,
} from "./components";

export default function CountyDetailSideBar() {
  const { state, dispatch } = useAppContext();

  const closeHandler = () => {
    dispatch(resetCounty());
    dispatch(closeCountyDetailModal());
  };

  const openHandler = () => {};

  return (
    <SwipeableDrawer
      anchor="right"
      hideBackdrop
      open={state.countyDetailsModal.isOpen}
      onClose={closeHandler}
      onOpen={openHandler}
      PaperProps={{
        sx: {
          boxShadow: "none",
        },
      }}
    >
      <Container
        sx={{
          py: 8,
          width: "400px",
          height: "100%",
          background: "#ededed",
        }}
      >
        <Stack gap={4}>
          {/* Header */}
          <CountyDetailsHeader onClose={closeHandler} />

          {/* County Overview */}
          <CountyOverview
            founded={1843}
            namedFor="John LaRue"
            largestCity="Hodgenville"
          />

          {/* Topics Covered */}
          <TopicsCovered />

          {/* Glimpse of County e.g. short description or video preview */}
          <GlimpseOfCounty />

          {/* learn more CTA */}
          <LearnMoreCta />
        </Stack>
      </Container>
    </SwipeableDrawer>
  );
}
