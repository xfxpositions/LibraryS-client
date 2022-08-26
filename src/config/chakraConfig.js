import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  initialColorMode: "dark",
  colors: {},
  styles: {
    global: {
      body: {},
    },
  },
});

export default theme;
