import "./App.css";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Banner />
    </ChakraProvider>
  );
}

export default App;
