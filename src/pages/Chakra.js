import { Button, Box, Heading, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
export default function Chakra() {
  return (
    <Box shadow="md" borderWidth="1px" p="6" maxW="600" minW="300">
      <Heading>Kitap ismi</Heading>
      <Text>Açıklama</Text>
      <Button
        rightIcon={<ArrowForwardIcon />}
        colorScheme="teal"
        variant="solid"
        py="6"
      >
        Daha Fazlası
      </Button>
    </Box>
  );
}
