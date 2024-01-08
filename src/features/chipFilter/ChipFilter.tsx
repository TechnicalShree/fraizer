import { Box, Chip } from "@mui/material";
import { useAppContext } from "../../contexts/AppContext";
import { resetTagFilters, setTagFilters } from "../../contexts/actions/actions";
// Mock data for temparary mapping
import sampleFilterOptions from "../../assets/mockData/sampleFilterOptions.json";

const styles = {
  chipContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: 1000,
    gap: 1.5,
    ml: 2,
    py: 4,
    px: 5,
  },
  chip: {
    padding: "0.75rem 1.25rem",
    height: "fit-content",
    borderRadius: 6,
    fontSize: 16,
  },
};

export default function ChipFilter() {
  const { state, dispatch } = useAppContext();

  const clickHandler = (option: string, counties: string[]) => {
    if (state.tagFilter.appliedOption === option) {
      dispatch(resetTagFilters());
      return;
    }
    dispatch(setTagFilters(option, counties));
  };

  return (
    <Box sx={styles.chipContainer}>
      {sampleFilterOptions.map((item, idx) => (
        <Chip
          key={idx}
          color={
            state.tagFilter.isApplied &&
            state.tagFilter.appliedOption === item.value
              ? "primary"
              : "secondary"
          }
          label={item.label}
          sx={styles.chip}
          onClick={() => clickHandler(item.value, item.counties)}
        />
      ))}
    </Box>
  );
}
