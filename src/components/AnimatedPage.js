import { motion, AnimatePresence } from "framer-motion";

export default function AnimatedPage(props) {
  return (
    <motion.div
      key="modal"
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
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
      transition={{ duration: 0.3 }}
    >
      <>{props.children}</>
    </motion.div>
  );
}
