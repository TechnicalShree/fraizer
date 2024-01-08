// eslint-disable-next-line
import * as createPalette from "@mui/material/styles";
import {
  PaletteOptions,
  SimplePaletteColorOptions,
} from "@mui/material/styles/createPalette";
import { Palette } from "@mui/material";

interface PaletteCommon {
  ctaPrimary: SimplePaletteColorOptions;
}
declare module "@mui/material/styles/createPalette" {
  interface Palette extends PaletteCommon {}

  interface PaletteOptions extends PaletteCommon {}
}
export default function createPalette(palette: PaletteOptions): Palette;
