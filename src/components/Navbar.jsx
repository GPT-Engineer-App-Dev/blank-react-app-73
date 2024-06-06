import { Box, Flex, Link, Spacer, Text, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const Navbar = () => {
  const { session, logout } = useSupabaseAuth();

  return (
    <Box bg="brand.800" px={4} py={2}>
      <Flex align="center">
        <Text fontSize="xl" color="white" fontWeight="bold">
          MyWebsite
        </Text>
        <Spacer />
        <Link as={RouterLink} to="/" color="white" mx={2}>
          Home
        </Link>
        <Link as={RouterLink} to="/about" color="white" mx={2}>
          About
        </Link>
        <Link as={RouterLink} to="/contact" color="white" mx={2}>
          Contact
        </Link>
      {session ? (
          <Button onClick={logout} colorScheme="red" mx={2}>
            Logout
          </Button>
        ) : (
          <Link as={RouterLink} to="/login" color="white" mx={2}>
            Login
          </Link>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;