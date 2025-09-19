import { useState } from "react";
import AuthPage from "./AuthPage";
import DashboardPage from "./DashboardPage";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <AuthPage onAuthSuccess={handleAuthSuccess} />;
  }

  return <DashboardPage onLogout={handleLogout} />;
};

export default Index;
