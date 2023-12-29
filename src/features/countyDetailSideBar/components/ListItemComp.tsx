import { ListItem, Typography } from "@mui/material";
import SvgFilledCircleIcon from "../../../assets/Icons/SvgFilledCircleIcon";

type ListItemCompProps = {
  text: string;
};

export default function ListItemComp({ text }: ListItemCompProps) {
  return (
    <ListItem disablePadding>
      <Typography
        color="primary"
        mb={0.5}
        sx={{
          fontSize: 16,
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <SvgFilledCircleIcon fill="#838383" />
        {text}
      </Typography>
    </ListItem>
  );
}
