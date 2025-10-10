import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import DisclaimerModal from "./components/DisclaimerModal";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Store from "./pages/Store";
import Downloads from "./pages/Downloads";
import DownloadCenter from "./pages/DownloadCenter";
import Guides from "./pages/Guides";
import Disclaimer from "./pages/Disclaimer";
import Terms from "./pages/Terms";
import RefundPolicy from "./pages/RefundPolicy";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import { useAuth } from "./contexts/AuthContext";

const queryClient = new QueryClient();

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { currentUser, loading } = useAuth();
  
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }
  
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  
  return <>{children}</>;
};

// Auth routes wrapper
const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/store" element={<Store />} />
      <Route path="/download-center" element={<DownloadCenter />} />
      <Route path="/guides" element={<Guides />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
      <Route path="/downloads" element={
        <ProtectedRoute>
          <Downloads />
        </ProtectedRoute>
      } />
      <Route path="/settings" element={
        <ProtectedRoute>
          <Settings />
        </ProtectedRoute>
      } />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <DisclaimerModal />
          <AuthRoutes />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
