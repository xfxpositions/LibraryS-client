import {
  Button,
  Box,
  Heading,
  Text,
  Container,
  Image,
  Divider,
  Stack,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { nanoid } from "nanoid";
export default function BookList({ bookList }) {
  return (
    <div>
      {bookList.map((elem) => {
        return (
          <Box key={nanoid()} shadow="md" borderWidth="1px" p="8" my="5">
            <Flex direction="row">
              <Heading size="md" mb="1">
                {elem.authorName}
              </Heading>
              <Spacer />
              <Heading size="xs">
                {new Date(elem.createdAt).toLocaleDateString()}'de eklendi
              </Heading>
            </Flex>

            <Box
              size="sm"
              bgGradient={"radial(green.600 1px, transparent 1px)"}
              backgroundSize="20px 20px"
              p={3}
              mt="2"
              display="flex"
              justifyContent="center"
            >
              <Image
                rounded="md"
                boxSize="50%"
                maxH="50%"
                objectFit="cover"
                src={elem.img}
              ></Image>
              <Box
                bgGradient={"radial(orange.600 1px, transparent 1px)"}
                backgroundSize="20px 20px"
                opacity="0.4"
                height="100%"
              />
            </Box>
            <Heading>{elem.bookName}</Heading>
            <Text>{elem.description}</Text>
            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme="green"
              variant="solid"
              py="6"
              mt="2"
            >
              Daha Fazlası
            </Button>
          </Box>
        );
      })}
    </div>
  );
}
