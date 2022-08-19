import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { shadows } from "@mui/system";
import axios from "axios";
import { Typography, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { Card, CardActions, CardContent, CardMedia } from "@mui/material/";
import { useNavigate } from "react-router-dom";

const Book = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    async function fetch() {
      const json = await axios.get("http://localhost:8080/api/book/list");
      console.log(json.data.result);
      setTodos(json.data.result);
    }
    fetch();
  }, []);
  let navigate = useNavigate();

  return (
    <div>
      <Container
        sx={{
          background: "clay",
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          py: 2,
        }}
        fixed
      >
        {todos.map((book, index) => (
          <Card sx={{ maxWidth: 700, minWidth: 500, px: 2, py: 3 }} key={index}>
            <CardMedia component="img" height="140" image={book.image} />
            <Typography>{book.image ? "" : "Resim bulunamadı..."}</Typography>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {book.bookName}
              </Typography>
              <Typography gutterBottom component="div">
                {book.authorName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {book.description
                  ? book.description
                  : "Açıklama bulunamadı... "}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => {
                  navigate(`/books/${book._id}`);
                }}
              >
                Daha fazlası
              </Button>
            </CardActions>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default Book;
