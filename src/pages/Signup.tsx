import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SignupForm from "@/components/SignupForm";

const Signup = () => (
  <div className="min-h-screen bg-background flex">
    {/* Left panel — branding */}
    <div className="hidden lg:flex lg:w-1/2 bg-navy-deep/60 flex-col justify-between p-12 border-r border-border/30">
      <Link to="/" className="text-xl font-bold tracking-tight">
        Vitto<span className="text-primary">.</span>
      </Link>

      <div className="max-w-md">
        <h2 className="text-3xl font-bold mb-4 leading-tight">
          Built for institutions that take credit seriously.
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Vitto replaces fragmented loan origination workflows with a unified, 
          AI-native decisioning platform. No vendor lock-in. No black boxes.
        </p>
      </div>

      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Vitto Technologies
      </p>
    </div>

    {/* Right panel — form */}
    <div className="flex-1 flex flex-col justify-center p-6 md:p-12">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
      >
        <ArrowLeft size={14} /> Back to home
      </Link>

      <SignupForm />
    </div>
  </div>
);

export default Signup;
