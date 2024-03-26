import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

export const themeClaro = createTheme({
  palette: {
    primary: {
      main: "#aa6558",
      aternativo: green[500],
    },
    secondary: {
      main: purple[500],
    },
  },
  components: {},
});
