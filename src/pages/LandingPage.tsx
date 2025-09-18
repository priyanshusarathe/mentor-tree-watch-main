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
          >
            Mentor Login
          </Button>
          <Button
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
              </p>
            </div>
          </div>
        </div>
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
    </div>
  );
};

export default LandingPage;
