import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Navbar from "./components/Navbar.jsx";

import Login from "./pages/Login.jsx";
import { useSupabaseAuth, SupabaseAuthProvider } from "./integrations/supabase/auth.jsx";

function App() {
  const { session } = useSupabaseAuth();
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/login" element={session ? <Navigate to="/" /> : <SupabaseAuthProvider><Login /></SupabaseAuthProvider>} />
      </Routes>
    </Router>
  );
}

export default App;