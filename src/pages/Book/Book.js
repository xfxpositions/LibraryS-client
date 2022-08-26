import { Container, Heading } from "@chakra-ui/react";
import Tablist from "../../components/Tablist";
import { Outlet } from "react-router-dom";
import AnimatedPage from "../../components/AnimatedPage";
import { motion } from "framer-motion";
export default function Book() {
  return (
    <Container shadow="sm">
      <Heading>Kitap</Heading>
      <Tablist />
      <Outlet />
    </Container>
  );
}
