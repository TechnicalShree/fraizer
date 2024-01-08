import { kentuckyGeoJson } from "../../../assets/geoJsons/kentuckyGeoJson";
import { Typography, useTheme } from "@mui/material";

export default function SongsList() {
  const theme = useTheme();
  return (
    <>
      {
        kentuckyGeoJson.features
          .map((county, idx) => (
            <Typography
              key={idx}
              sx={{
                fontSize: 20,
                cursor: "pointer",
                color: "#3c3c3c",
              }}
            >
              {/* TODO need to replace it with the actual song list */}
              Song {idx}&nbsp;
              <span
                style={{
                  fontSize: 14,
                  color: theme.palette.primary.main,
                }}
              >
                {county.properties.name}
              </span>
            </Typography>
          ))
          .reverse() // We use reverse() to correct the order of data as it is in the wrong sequence.
      }
    </>
  );
}
