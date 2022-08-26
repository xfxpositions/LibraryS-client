import { Container, Heading } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import axiosUtil from "../utils/axiosUtil";
import BookList from "../components/BookList";
export default function Books() {
  const [bookImage, setBookImage] = useState(null);
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    axiosUtil.get("/api/book/list/").then((result) => {
      console.log(result.data.result);
      setBookList(result.data.result);
    });
  }, []);

  return (
    <Container p="5" minW="container.sm">
      <Heading size="md">Kitaplar</Heading>
      <BookList bookList={bookList}></BookList>
    </Container>
  );
}
