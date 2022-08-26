import {
  Box,
  Container,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "./AnimatedPage";

export default function Tablist({ children }) {
  const navigate = useNavigate();
  return (
    <div>
      <Tabs colorScheme="green" isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab
            onClick={() => {
              navigate("info");
            }}
          >
            Bilgi
          </Tab>
          <Tab
            onClick={() => {
              navigate("actions");
            }}
          >
            İşlemler
          </Tab>
          <Tab
            onClick={() => {
              navigate("history");
            }}
          >
            Geçmiş
          </Tab>
        </TabList>
      </Tabs>
    </div>
  );
}
