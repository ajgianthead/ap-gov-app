import "./App.css";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";

function App() {
  return (
    <ChakraProvider className="App">
      <Home />
    </ChakraProvider>
  );
}

export default App;
