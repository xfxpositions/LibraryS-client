import { HStack, VStack, Stack, Spacer } from "@chakra-ui/react";
import ColorMode from "./ColorMode";
export default function Navbar() {
  return (
    <HStack px="10" py="1">
      <Spacer></Spacer>
      <ColorMode></ColorMode>
    </HStack>
  );
}
