import { Container, Box, Heading } from "@chakra-ui/react";
import { SupabaseAuthUI } from "../integrations/supabase/auth.jsx";

const Login = () => {
  return (
    <Container centerContent maxW="container.sm" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box width="100%" p={4} borderWidth={1} borderRadius="lg" boxShadow="lg">
        <Heading as="h2" size="xl" mb={6} textAlign="center">
          Login
        </Heading>
        <SupabaseAuthUI />
      </Box>
    </Container>
  );
};

export default Login;