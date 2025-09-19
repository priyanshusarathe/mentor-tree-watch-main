import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
<<<<<<< HEAD
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
=======
>>>>>>> origin/ai

interface RegisterFormProps {
  onSwitchToLogin: () => void;
  onRegisterSuccess: () => void;
}

export function RegisterForm({ onSwitchToLogin, onRegisterSuccess }: RegisterFormProps) {
<<<<<<< HEAD
  const navigate = useNavigate();
=======
>>>>>>> origin/ai
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        title: "Password mismatch",
        description: "Passwords do not match. Please try again.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate registration (replace with actual authentication once Supabase is connected)
    setTimeout(() => {
      if (name && email && password) {
        toast({
          title: "Registration successful",
          description: "Welcome to the mentor dashboard!",
        });
        onRegisterSuccess();
      } else {
        toast({
          title: "Registration failed",
          description: "Please fill in all fields and try again.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
<<<<<<< HEAD
      <Card className="w-full max-w-md mx-auto shadow-medium bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20">
        <CardHeader className="text-center">
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/")}
              className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex-1" />
          </div>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Mentor Registration
          </CardTitle>
          <CardDescription className="text-slate-300">
=======
      <Card className="w-full max-w-md mx-auto shadow-medium">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Mentor Registration
          </CardTitle>
          <CardDescription>
>>>>>>> origin/ai
            Create your account to start monitoring student risk levels
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="mentor@school.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="space-y-4">
              <Button 
                type="submit" 
                className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "Register"}
              </Button>
              <div className="text-center">
                <button
                  type="button"
                  onClick={onSwitchToLogin}
                  className="text-primary hover:underline text-sm"
                >
                  Already have an account? Login here
                </button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}