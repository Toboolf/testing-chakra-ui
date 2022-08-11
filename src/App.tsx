import * as React from "react";
import { ChakraProvider, Container, Flex } from "@chakra-ui/react";
import Details from "./sections/details";
import Cart from "./sections/cart";
import theme from "./theme";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Container maxW="container.xl" p={0}>
      <Flex
        h={{ base: "auto", md: "100vh" }}
        py={[0, 10, 20]}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Details />
        <Cart />
      </Flex>
    </Container>
  </ChakraProvider>
);
