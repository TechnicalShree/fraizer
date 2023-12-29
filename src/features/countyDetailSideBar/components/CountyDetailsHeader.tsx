import { IconButton, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import SvgCloseIcon from "../../../assets/Icons/SvgCloseIcon";
import { useAppContext } from "../../../contexts/AppContext";

type CountyDetailsHeaderProps = {
  onClose: () => void;
};

export default function CountyDetailsHeader({
  onClose,
}: CountyDetailsHeaderProps) {
  const { state } = useAppContext();
  const theme = useTheme();
  return (
    <Stack direction="row" justifyContent="space-between">
      <Typography
        variant="h2"
        fontWeight="bold"
        color="primary"
        sx={{ fontSize: 36, fontWeight: 600 }}
      >
        {state.county.name} County
      </Typography>
      <IconButton onClick={onClose}>
        <SvgCloseIcon
          width={30}
          height={30}
          fill={theme.palette.primary.main}
        />
      </IconButton>
    </Stack>
  );
}
