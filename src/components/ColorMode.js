import { Button, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
export default function ColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode} mt="4" py="6">
      Tema &nbsp;{" "}
      {colorMode === "light" ? (
        <SunIcon w={6} h={6}></SunIcon>
      ) : (
        <MoonIcon w={6} h={6}></MoonIcon>
      )}
    </Button>
  );
}
