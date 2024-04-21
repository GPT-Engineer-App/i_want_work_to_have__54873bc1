import { Box, Heading, SimpleGrid } from "@chakra-ui/react";

const Work = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" textAlign="center" mb={6}>
        Our Work
      </Heading>
      <SimpleGrid columns={[1, null, 2]} spacing={4}>
        {/* Add video components here */}
        <Box>Video 1</Box>
        <Box>Video 2</Box>
        <Box>Video 3</Box>
      </SimpleGrid>
    </Box>
  );
};

export default Work;