import Texts from "../Texts/Texts";
import Card from "../Capabilities/Card";
import {
  Box,
  VStack,
  Stack,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Wrap,
} from "@chakra-ui/react";

export default function DesignMain() {
  const texts = Texts();
  return (
    <VStack overflow="hidden">
      <Box
        w={["90%", "90%", "80%", "80%", "80%", "70%"]}
        h={["70rem", "70rem", "65rem", "65rem", "45rem"]}
        align="center"
        py="7rem"
      >
        <Stack
          justify="center"
          spacing="5%"
          align="center"
          direction={{ base: "column", xl: "row" }}
        >
          <Image
            src="/images/design/d1.jpg"
            maxW="40rem"
            maxH="25rem"
            boxShadow="0 0 5px 1px "
          />
          <Box>
            <Heading pb="1rem">{texts.design.t1.heading}</Heading>
            <Text fontSize="lg" align="justify">
              {texts.design.t1.text}
            </Text>
          </Box>
        </Stack>
      </Box>
    </VStack>
  );
}
