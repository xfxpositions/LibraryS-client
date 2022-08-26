import { Container, Box, Button, Input, Text, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosUtil from "../../utils/axiosUtil";
import Tablist from "../../components/Tablist";
import { motion } from "framer-motion";
import AnimatedPage from "../../components/AnimatedPage";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
export default function Book() {
  const { id } = useParams();
  const [err, setErr] = useState(false);
  useEffect(() => {
    axiosUtil
      .get(`/api/book/findbyid/${id}`)
      .then((body) => {
        console.log(body);
      })
      .catch((err) => {
        setErr(true);
        console.log(err.message);
      });
  }, []);
  return (
    <Container maxW="1000">
      <AnimatedPage>
        {" "}
        {err ? (
          <Heading size="lg">Aradığınız Kitap Bulunamadı</Heading>
        ) : (
          <Box p="4">
            {id} <Heading>Book info</Heading>
          </Box>
        )}
      </AnimatedPage>
    </Container>
  );
}
