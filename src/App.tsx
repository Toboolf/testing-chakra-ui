import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Container,
  Flex,
} from "@chakra-ui/react"
import Details from "./sections/details"
import Cart from "./sections/cart"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh" py={20}>
        <Details />
        <Cart />
      </Flex>
    </Container>
  </ChakraProvider>
)
