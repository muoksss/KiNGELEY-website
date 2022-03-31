import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from '../src/theme/index';

function Layout({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

export default Layout;
