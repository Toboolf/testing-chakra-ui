import { Heading, Text, VStack } from "@chakra-ui/react"

const Details = () => {
  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start" bg="gray.50">
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your details</Heading>
        <Text>If you already have an account, click here to login</Text>
      </VStack>
    </VStack>
  )
}

export default Details