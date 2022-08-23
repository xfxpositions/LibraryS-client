import {
  Button,
  Box,
  Heading,
  Text,
  Container,
  Input,
  InputGroup,
  InputLeftAddon,
  Image,
  Divider,
  Textarea,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useState } from "react";
import "../css/clearBox.css";
export default function CreateBook() {
  const toast = useToast();
  const [bookImage, setBookImage] = useState(null);

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setBookImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  <style></style>;
  return (
    <Container p="5" minW="container.lg" display="flex">
      <Box className="clearBox" shadow="md" borderWidth="1px" p="6">
        <Heading>Kitap Ekle</Heading>
        <FormControl isRequired>
          <Input placeholder="Kitap ismi" />
        </FormControl>
        <FormControl isRequired>
          <Input placeholder="Yazar ismi" />
        </FormControl>
        <FormControl>
          <Textarea
            placeholder="Açıklama"
            size="md"
            maxW="75%"
            minH="100"
            maxH="200"
            variant="filled"
          ></Textarea>
        </FormControl>

        <InputGroup>
          <InputLeftAddon children="Kitap Resmi" />
          <Input
            onChange={handleFileChange}
            type="file"
            placeholder="phone number"
          />
        </InputGroup>
        <Divider />
        <Box size="sm" p={3} mt="2"></Box>

        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="green"
          variant="solid"
          py="6"
          onClick={(event) => {
            toast({
              title: "Kitap Eklendi",
              description: "Kitap id: 1023090",
              status: "success",
              duration: 4000,
              isClosable: true,
            });
            console.log(event.target.style.backgroundColor == "blue");
          }}
        >
          Ekle
        </Button>
      </Box>
      {bookImage ? (
        <Box
          maxW="50%"
          shadow="md"
          borderWidth="1px"
          p="4"
          display="flex"
          flexDirection="column"
          justifyItem="center"
          justifyItems="center"
        >
          <Heading size="lg">Resim Önizlemesi</Heading>
          <Image
            border="0px"
            rounded="md"
            boxSize="100%"
            maxH="400"
            maxW="400"
            objectFit="cover"
            src={bookImage}
          ></Image>
        </Box>
      ) : null}
    </Container>
  );
}
