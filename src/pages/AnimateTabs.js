import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";
export default function AnimateTabs() {
  return (
    <Box>
      <motion.div
        animate={{
          opacity: 1,
          x: 0,
          y: 20,
        }}
        exit={{
          opacity: 0,
          x: 0,
          y: 0,
        }}
        initial={{
          opacity: 0,
          x: 0,
          y: 20,
        }}
      ></motion.div>
    </Box>
  );
}
