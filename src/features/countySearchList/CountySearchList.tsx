import { Box, Stack, TextField, Typography } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useMemo, useState } from "react";
import { kentuckyGeoJson } from "../../assets/geoJsons/kentuckyGeoJson";
import ModalHeader from "../modal/ModalHeader";

type CountySearchListProps = {
  onClose: () => void;
};

export default function CountySearchList({ onClose }: CountySearchListProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleChange = (event: any) => {
    const { value } = event.target;
    setSearchTerm(value || "");
  };

  const searchList = useMemo(() => {
    return kentuckyGeoJson.features
      .filter((county) =>
        county.properties.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .map((county, idx) => (
        <Typography
          key={idx}
          sx={{
            fontSize: 20,
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          {county.properties.name}
        </Typography>
      ))
      .reverse(); // We use reverse() to correct the order of data as it is in the wrong sequence.
  }, [searchTerm]);

  return (
    <Stack
      sx={{
        background: "#ededed",
        height: 1,
      }}
    >
      <Stack
        pl={4}
        pr={1}
        pt={5}
        sx={{
          height: "calc(100% - 120px)",
        }}
      >
        <Stack>
          <ModalHeader padding={0} title="List of Counties" onClose={onClose} />
          <Typography
            sx={{
              fontSize: 14,
            }}
          >
            Click on a county to discover
          </Typography>
        </Stack>
        <Stack
          flex={1}
          mt={1}
          sx={{
            height: 1,
            overflowY: "auto",
          }}
          className="custom_scroll_bar"
        >
          {searchList.length ? (
            searchList
          ) : (
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 500,
                textAlign: "center",
                margin: "auto",
              }}
            >
              No county found
            </Typography>
          )}
        </Stack>
      </Stack>
      <Box
        px={5}
        sx={{
          background: "#d1d1d1",
          display: "flex",
          alignItems: "center",
          minHeight: "120px",
        }}
      >
        <TextField
          focused
          value={searchTerm}
          onChange={handleChange}
          InputProps={{
            sx: {
              border: "1px solid #ebebeb",
              borderRadius: "200px",
              background: "#fff",
              pl: 1.5,
            },
            placeholder: "Filter County List",
            startAdornment: <SearchRoundedIcon color="primary" />,
          }}
          inputProps={{
            style: {
              padding: "0.75rem",
            },
          }}
        />
      </Box>
    </Stack>
  );
}
