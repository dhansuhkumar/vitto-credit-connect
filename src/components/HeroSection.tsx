import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center section-padding pt-32">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-navy-deep/30 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-6 animate-fade-in">
            AI-Native Credit Infrastructure
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-8 animate-fade-in-up">
            <span className="text-muted-foreground">[Traditional&nbsp;LOS]</span> is a
            transaction system.{" "}
            <span className="text-gradient">Vitto</span> is a
            decisioning system.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Purpose-built for banks and NBFCs that need intelligent credit
            decisioning — not another workflow wrapper on legacy rails.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Link to="/signup">
              <Button variant="hero" size="lg" className="gap-2">
                Request Access <ArrowRight size={16} />
              </Button>
            </Link>
            <a href="#platform">
              <Button variant="hero-outline" size="lg">
                Explore Platform
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
