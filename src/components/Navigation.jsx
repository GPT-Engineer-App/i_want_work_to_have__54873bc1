import { Box, Flex, Spacer, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Box bg="gray.100" py={4}>
      <Flex maxW="container.lg" mx="auto" align="center">
        <Link as={RouterLink} to="/" fontWeight="bold">
          My Website
        </Link>
        <Spacer />
        <Link as={RouterLink} to="/work" ml={4}>
          Work
        </Link>
      </Flex>
    </Box>
  );
};

export default Navigation;