import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexRouter from "./routers/index.router";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./utils/theme";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
          <ChakraProvider theme={theme}>
            <Helmet>
              <title>Spikk</title>
            </Helmet>
            <BrowserRouter>
              <Routes>
                <Route path="*" element={<IndexRouter />} />
              </Routes>
            </BrowserRouter>
          </ChakraProvider>
    </>
  );
}

export default App;
