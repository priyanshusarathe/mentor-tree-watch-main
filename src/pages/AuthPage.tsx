<<<<<<< HEAD
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
=======
import { useState } from "react";
import { useNavigate } from "react-router-dom";
>>>>>>> origin/ai
import { LoginForm } from "@/components/auth/LoginForm";
import { RegisterForm } from "@/components/auth/RegisterForm";

interface AuthPageProps {
  onAuthSuccess: () => void;
}

export default function AuthPage({ onAuthSuccess }: AuthPageProps) {
<<<<<<< HEAD
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const mode = searchParams.get('mode');
    if (mode === 'register') {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [searchParams]);

  const handleAuthSuccess = () => {
    navigate('/dashboard');
    onAuthSuccess();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4 dark">
=======
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    onAuthSuccess();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-light/30 to-background flex items-center justify-center p-4">
>>>>>>> origin/ai
      <div className="w-full max-w-md">
        {isLogin ? (
          <LoginForm
            onSwitchToRegister={() => setIsLogin(false)}
<<<<<<< HEAD
            onLoginSuccess={handleAuthSuccess}
=======
            onLoginSuccess={handleLoginSuccess}
>>>>>>> origin/ai
          />
        ) : (
          <RegisterForm
            onSwitchToLogin={() => setIsLogin(true)}
<<<<<<< HEAD
            onRegisterSuccess={handleAuthSuccess}
=======
            onRegisterSuccess={onAuthSuccess}
>>>>>>> origin/ai
          />
        )}
      </div>
    </div>
  );
}