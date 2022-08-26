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
import axiosUtil from "../utils/axiosUtil";

export default function CreateBook() {
  const toast = useToast();
  const [bookImage, setBookImage] = useState(null);
  const [bookImageURL, setBookImageURL] = useState("");

  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [description, setDescription] = useState("");
  const [no, setNo] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const handleFileChange = (event) => {
    setBookImage(event.target.files[0]);
    const url = URL.createObjectURL(event.target.files[0]);
    setBookImageURL(url);
  };

  const handleSubmit = (event) => {
    setIsLoading(true);

    const fd = new FormData();
    const reqBody = {
      bookName: bookName,
      authorName: authorName,
      description: description,
    };

    fd.append("image", bookImage, bookImage.name);
    fd.append("bookData", JSON.stringify(reqBody));

    axiosUtil.post("/api/book/create", fd).then((body) => {
      console.log(body);
      toast({
        title: "Başarılı",
        description: `Kitap Eklendi! Kitap id : ${body.data.result._id}`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setIsLoading(false);
    });
  };
  return (
    <Container p="5" minW="container.lg" display="flex">
      <Box className="clearBox" shadow="md" borderWidth="1px" p="6">
        <Heading>Kitap Ekle</Heading>
        <FormControl isRequired>
          <Input
            value={bookName}
            onChange={(e) => {
              setBookName(e.target.value);
            }}
            placeholder="Kitap ismi"
          />
        </FormControl>
        <FormControl isRequired>
          <Input
            value={authorName}
            onChange={(e) => {
              setAuthorName(e.target.value);
            }}
            placeholder="Yazar ismi"
          />
        </FormControl>

        <FormControl isRequired display="flex">
          <Input
            value={no}
            onChange={(e) => {
              setNo(e.target.value);
            }}
            type="number"
            placeholder="Sıra Numarası"
          />
        </FormControl>
        <FormControl>
          <Textarea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
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
          <Input accept="image/*" onChange={handleFileChange} type="file" />
        </InputGroup>
        <Divider />
        <Box size="sm" p={3} mt="2"></Box>

        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="green"
          variant="solid"
          py="6"
          onClick={handleSubmit}
          isLoading={isLoading}
          loadingText="Ekleniyor..."
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
          justifyItems="center"
        >
          <Heading size="lg">Resim Önizlemesi</Heading>
          <Box
            bgGradient={"radial(orange.600 1px, transparent 1px)"}
            backgroundSize="20px 20px"
            p="6"
          >
            <Image
              border="0px"
              rounded="md"
              boxSize="100%"
              maxH="400"
              maxW="400"
              objectFit="cover"
              src={bookImageURL}
            ></Image>
          </Box>
        </Box>
      ) : null}
    </Container>
  );
}
