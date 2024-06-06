import { Container, Box, Heading } from "@chakra-ui/react";
import { SupabaseAuthUI, useSupabaseAuth } from "../integrations/supabase/auth.jsx";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { session } = useSupabaseAuth();

  if (session) {
    return <Navigate to="/" />;
  }

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