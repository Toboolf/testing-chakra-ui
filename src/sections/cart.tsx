import {
  AspectRatio,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

const Cart = () => {
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={6}
      alignItems="flex-start"
      bg="gray.50"
    >
      <VStack alignItems="flex-start" spacing={3}>
        <Heading size="2xl">Your cart</Heading>
        <Text>
          If the price is too hard on your eyes,{" "}
          <Button variant="link" colorScheme="black">
            try changing the theme.
          </Button>
        </Text>
      </VStack>
      <HStack spacing={6} alignItems="center" w="full">
        <AspectRatio ratio={1} w={24}>
          <Image
            src="https://m.media-amazon.com/images/I/81-erM+IbyL._AC_SL1500_.jpg"
            alt="Penny Board"
          />
          <Stack
            spacing={0}
            w="full"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <VStack w="full" spacing={0} alignItems="center">
              <Heading size="md">Penny board</Heading>
              <Text color="gray.600">PNYCOMP27541</Text>
            </VStack>
          </Stack>
        </AspectRatio>
      </HStack>
    </VStack>
  );
};

export default Cart;
