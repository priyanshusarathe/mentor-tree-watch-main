<<<<<<< HEAD
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BarChart3, Target, UserCheck, Beaker } from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: BarChart3,
      title: "Risk Analytics",
      description:
        "Advanced ML algorithms to predict student dropout risk with high accuracy",
    },
    {
      icon: Target,
      title: "Early Intervention",
      description:
        "Identify at-risk students before it's too late with proactive monitoring",
    },
    {
      icon: UserCheck,
      title: "Mentor Support",
      description:
        "Connect students with dedicated mentors for personalized guidance and support",
    },
  ];

  const [showLearnMore, setShowLearnMore] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-foreground overflow-hidden dark">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent animate-pulse"></div>

        {/* Moving gradient waves */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, cyan 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, blue 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, purple 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, cyan 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* Enhanced floating particles */}
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400/20"
            style={{
              width: Math.random() * 4 + 1 + "px",
              height: Math.random() * 4 + 1 + "px",
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0.1, 0.8, 0.1],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Glowing lines */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
            style={{
              width: Math.random() * 400 + 200 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              rotate: [0, 360],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
        {/* Floating particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6">
        <motion.div
          className="flex items-center space-x-3"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src="/raah-logo.jpg"
              alt="RAAH logo"
              className="w-10 h-10 object-contain rounded"
            />
          </motion.div>
          <span className="text-2xl font-bold text-primary">RAAH</span>
        </motion.div>

        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Button
            variant="ghost"
            className="text-foreground/80 hover:text-foreground transition-colors"
            onClick={() => navigate("/about")}
          >
            About Us & Guidelines
          </Button>
          <Button
            variant="outline"
            className="bg-background/20 border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300"
            onClick={() => navigate("/auth?mode=login")}
=======
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ParticleBackground from "@/components/landing/ParticleBackground";
import TypingAnimation from "@/components/landing/TypingAnimation";
// import raahLogo from "@/assets/raah-logo.png";

const LandingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-hero-gradient overflow-hidden">
      <ParticleBackground />
      <nav className="relative z-10 flex justify-between items-center p-6 md:p-8">
        <div className="flex items-center space-x-3 group">
          <div className="relative">
            {/* <img
              src={raahLogo}
              alt="RAAH Logo"
              className="w-12 h-12 md:w-16 md:h-16 animate-glow-pulse float"
            /> */}
            <div className="absolute inset-0 bg-neon-blue/20 rounded-full blur-xl animate-pulse" />
          </div>
          <span className="text-xl md:text-2xl font-bold text-gradient">
            RAAH
          </span>
        </div>
        <div className="flex space-x-4">
          <Button
            className="btn-neon"
            onClick={() => (window.location.href = "/auth")}
>>>>>>> origin/ai
          >
            Mentor Login
          </Button>
          <Button
<<<<<<< HEAD
            className="bg-primary hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
            onClick={() => navigate("/auth?mode=register")}
          >
            Mentor Registration
          </Button>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 relative"
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            delay: 0.5,
            type: "spring",
            stiffness: 100,
          }}
        >
          <motion.span
            animate={{
              textShadow: [
                "0 0 20px #00bcd4",
                "0 0 40px #00bcd4, 0 0 60px #0091ea",
                "0 0 20px #00bcd4",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            RAAH
          </motion.span>
        </motion.h1>

        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-4 text-foreground"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Rise Above Academic Hurdles
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          Monitor and Access Student Dropout Risk
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 shadow-[0_0_30px_rgba(0,188,212,0.3)] hover:shadow-[0_0_50px_rgba(0,188,212,0.5)]"
              onClick={() => navigate("/auth?mode=login")}
            >
              Get Started
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,188,212,0.3)]"
              onClick={() => setShowLearnMore(true)}
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Learn More Modal */}
      {showLearnMore && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="max-w-3xl w-full bg-card rounded-lg p-6 text-foreground shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">Problems We Solve</h3>
              <button
                onClick={() => setShowLearnMore(false)}
                className="text-muted-foreground"
              >
                Close
              </button>
            </div>
            <div className="space-y-4 text-muted-foreground max-h-[60vh] overflow-auto">
              <p className="font-semibold">
                Delayed Identification of Struggling Students
              </p>
              <p>Currently, failures are noticed only after term-end exams.</p>
              <p>
                Students who could have been helped earlier disengage and lose
                interest.
              </p>

              <p className="font-semibold">Lack of Real-Time Risk Monitoring</p>
              <p>
                Attendance, test scores, and attempts are tracked separately.
              </p>
              <p>
                No unified system highlights patterns like falling attendance or
                repeated failures.
              </p>

              <p className="font-semibold">Overburdened Mentors/Counsellors</p>
              <p>Mentors manually check multiple spreadsheets and reports.</p>
              <p>
                This wastes time and reduces their ability to focus on guidance.
              </p>

              <p className="font-semibold">No Early Intervention Mechanism</p>
              <p>High-risk students aren’t flagged early.</p>
              <p>
                Opportunities for timely mentoring, counseling, or remedial
                classes are missed.
              </p>

              <p className="font-semibold">
                Poor Communication Between Students & Mentors
              </p>
              <p>Students often don’t know when they’re at risk.</p>
              <p>Mentors lack structured guidelines on how to intervene.</p>

              <p className="font-semibold">
                Lack of Visual Insights for Decision-Making
              </p>
              <p>
                Data is presented in raw numbers instead of clear visual
                dashboards.
              </p>
              <p>
                Mentors can’t easily track trends like “attendance drop over
                weeks.”
              </p>

              <p className="font-semibold">Scattered & Unintegrated Data</p>
              <p>
                Attendance, test scores, and subject attempts exist in silos.
              </p>
              <p>Integration is missing, making risk analysis difficult.</p>

              <p className="font-semibold">
                No Customizable Guidelines for Mentors
              </p>
              <p>
                There’s no structured playbook (e.g., what to do if a student’s
                attendance &lt; 60%).
              </p>
              <p>
                Each mentor handles issues differently, leading to
                inconsistency.
=======
            className="btn-neon"
            onClick={() => (window.location.href = "/auth")}
          >
            Mentor Registration
          </Button>
        </div>
      </nav>
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <div
            className={`transition-all duration-1000 ${
              isLoaded ? "animate-hero-title" : "opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-gradient glow-text">RAAH</span>
              <br />
              <span className="text-foreground">
                Rise Above Academic Hurdles
              </span>
            </h1>
          </div>
          <div className="animate-hero-subtitle">
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium">
              Monitor and Access Student Dropout Risk
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button
              size="lg"
              className="btn-neon text-lg px-12 py-4 animate-fade-in-up"
              style={{ animationDelay: "1.2s", animationFillMode: "both" }}
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="btn-neon text-lg px-12 py-4 animate-fade-in-up"
              style={{ animationDelay: "1.4s", animationFillMode: "both" }}
            >
              Learn More
            </Button>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 animate-fade-in-up"
            style={{ animationDelay: "1.6s", animationFillMode: "both" }}
          >
            <div className="bg-card/10 backdrop-blur-sm rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 float">
              <div className="text-neon-cyan text-3xl mb-4">📊</div>
              <h3 className="text-lg font-semibold mb-2">Risk Analytics</h3>
              <p className="text-muted-foreground">
                Advanced ML algorithms to predict student dropout risk
              </p>
            </div>
            <div className="bg-card/10 backdrop-blur-sm rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 float">
              <div className="text-neon-purple text-3xl mb-4">🏫</div>
              <h3 className="text-lg font-semibold mb-2">Early Intervention</h3>
              <p className="text-muted-foreground">
                Identify at-risk students before it's too late
              </p>
            </div>
            <div className="bg-card/10 backdrop-blur-sm rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 float">
              <div className="text-neon-pink text-3xl mb-4">🤝</div>
              <h3 className="text-lg font-semibold mb-2">Mentor Support</h3>
              <p className="text-muted-foreground">
                Connect students with dedicated mentors
>>>>>>> origin/ai
              </p>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      )}

      {/* Features Section */}
      <div className="relative z-10 container mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.7 + index * 0.2 }}
              >
                <Card className="bg-slate-800/30 backdrop-blur-sm border border-cyan-400/20 hover:bg-slate-800/50 hover:border-cyan-400/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,188,212,0.2)]">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-6 relative"
                      whileHover={{
                        scale: 1.2,
                        rotate: 360,
                        boxShadow: "0 0 30px rgba(0,188,212,0.6)",
                      }}
                      animate={{
                        boxShadow: [
                          "0 0 10px rgba(0,188,212,0.3)",
                          "0 0 20px rgba(0,188,212,0.5)",
                          "0 0 10px rgba(0,188,212,0.3)",
                        ],
                      }}
                      transition={{
                        scale: { type: "spring", stiffness: 300 },
                        rotate: { duration: 0.8 },
                        boxShadow: { duration: 2, repeat: Infinity },
                      }}
                    >
                      <Icon className="w-8 h-8 text-cyan-400" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        className="relative z-10 text-center pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <motion.p
          className="text-lg font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          💡 Developed by Lakecity Coders 💡
        </motion.p>
      </motion.footer>
=======
      </main>
      <footer className="relative z-10 text-center py-8">
        <div className="text-lg font-medium">
          <TypingAnimation
            text="💡 Developed by Lakecity Coders 💡"
            delay={3000}
            className="text-gradient glow-text"
          />
        </div>
      </footer>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-blue/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-3/4 left-1/2 w-48 h-48 bg-neon-cyan/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>
>>>>>>> origin/ai
    </div>
  );
};

export default LandingPage;
