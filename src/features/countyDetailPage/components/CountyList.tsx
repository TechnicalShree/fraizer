import { Stack, Typography } from "@mui/material";
import { kentuckyGeoJson } from "../../../assets/geoJsons/kentuckyGeoJson";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function CountyList() {
  const navigate = useNavigate();
  const params = useParams();
  const countyName = params.name || "";
  const selectedCountyRef = useRef<HTMLSpanElement | null>(null);
  const isInitialRender = useRef(true); // Added useRef for initial render tracking

  useEffect(() => {
    // Scroll the selected option into view when the component mounts or countyName changes
    if (selectedCountyRef.current) {
      if (isInitialRender.current) {
        // Scroll to the last option on initial render
        selectedCountyRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end", // Scroll to the end (bottom)
        });
        isInitialRender.current = false; // Update the initial render status
      } else {
        // Scroll to the selected option on subsequent renders
        selectedCountyRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  }, [countyName]);

  const handleClick = (countyName: string) => {
    navigate("/county/" + countyName);
  };

  return (
    <Stack
      flex={1}
      py={2}
      px={4}
      sx={{
        height: 1,
        maxWidth: "200px",
        overflowY: "auto",
        background: "#dddddd",
      }}
      className="custom_scroll_bar"
    >
      {
        kentuckyGeoJson.features
          .map((county, idx) => {
            const isSelected = county.properties.name === countyName;
            return (
              <Typography
                key={idx}
                ref={isSelected ? selectedCountyRef : null}
                sx={{
                  fontSize: 22,
                  lineHeight: 1.5,
                  fontWeight: isSelected ? 700 : 500,
                  cursor: "pointer",
                  color: isSelected ? "#404040" : "#6a6a6a",
                }}
                onClick={() =>
                  !isSelected && handleClick(county.properties.name)
                }
              >
                {county.properties.name}
              </Typography>
            );
          })
          .reverse() // We use reverse() to correct the order of data as it is in the wrong sequence.
      }
    </Stack>
  );
}
