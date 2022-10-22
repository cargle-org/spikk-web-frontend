import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import IndexRouter from './routers/index.router';
import { theme } from './utils/theme';

function App() {
  return (
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
  );
}

export default App;
