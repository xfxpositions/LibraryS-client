import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import { nanoid } from "nanoid";
import { AnimatePresence } from "framer-motion";
import { extendTheme } from "@chakra-ui/react";
//pages
import Home from "./pages/Home";
import Books from "./pages/Books";
import CreateBook from "./pages/CreateBook";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import BookInfo from "./pages/Book/BookInfo";
import AnimateTabs from "./pages/AnimateTabs";
import BookHistory from "./pages/Book/BookHistory";
import Book from "./pages/Book/Book";
import BookActions from "./pages/Book/BookActions";
import Navbar from "./components/Navbar";
import theme from "./config/chakraConfig";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <Navbar />
      <BrowserRouter>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Routes key={nanoid()}>
            <Route path="/" index element={<Home />}></Route>
            <Route path="/books" element={<Books />}></Route>
            <Route path="book/:id/" element={<Book />}>
              <Route path="info" index element={<BookInfo />}></Route>
              <Route path="actions" element={<BookActions />}></Route>
              <Route path="history" element={<BookHistory />}></Route>
            </Route>
            <Route path="/books/create" element={<CreateBook />}></Route>
            <Route path="*" element={<NotFound />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/animate" element={<AnimateTabs />}></Route>
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </ChakraProvider>
    <ColorModeScript initialColorMode={"dark"} />
  </Provider>
);
