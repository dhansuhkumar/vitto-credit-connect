import { Brain, ShieldCheck, TrendingUp, DollarSign, HeadphonesIcon, FileText, Bot, Cpu } from "lucide-react";
import { useState } from "react";

const modules = [
  {
    icon: FileText,
    title: "Origination",
    desc: "Multi-channel application intake with intelligent document parsing, pre-fill, and real-time eligibility checks before a single bureau call is made.",
  },
  {
    icon: Brain,
    title: "Underwriting",
    desc: "Policy-as-code underwriting with configurable scorecards, SLM-powered document analysis, and explainable decision outputs for audit compliance.",
  },
  {
    icon: ShieldCheck,
    title: "Fraud Detection",
    desc: "Behavioural biometrics, device fingerprinting, and cross-application velocity checks — layered with network graph analysis for syndicate detection.",
  },
  {
    icon: DollarSign,
    title: "Pricing Engine",
    desc: "Risk-adjusted pricing with real-time margin simulation. Supports tiered, hybrid, and dynamic pricing models across product lines.",
  },
  {
    icon: TrendingUp,
    title: "Collections",
    desc: "Predictive delinquency modelling with automated intervention workflows. Optimises contact strategy by propensity-to-pay scoring.",
  },
  {
    icon: HeadphonesIcon,
    title: "Servicing",
    desc: "Lifecycle management from disbursement to closure. Handles restructuring, top-ups, foreclosures, and NOC generation with full audit trails.",
  },
];

const PlatformSection = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="platform" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            The Platform
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Six modules. One decisioning layer.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Each module operates independently but shares a unified data and policy layer — 
            so a fraud signal in origination automatically adjusts underwriting thresholds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mb-20">
          {modules.map((m, i) => (
            <div
              key={i}
              className={`glass-card p-6 cursor-pointer transition-all duration-300 hover:border-primary/40 ${
                active === i ? "border-primary/50 glow-red" : ""
              }`}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <m.icon size={20} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{m.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        {/* Agentic AI Sub-section */}
        <div className="max-w-5xl mx-auto glass-card p-8 md:p-12">
          <div className="flex items-start gap-5 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Bot size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Agentic AI — not ChatGPT with a skin</h3>
              <p className="text-muted-foreground leading-relaxed">
                Vitto deploys purpose-trained Small Language Models (SLMs) fine-tuned on Indian credit 
                data — bank statements, bureau reports, GST filings, and ITR documents. These are not 
                general-purpose LLMs prompted to "act like a credit analyst."
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="flex items-start gap-3">
              <Cpu size={18} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-sm mb-1">Domain-Specific SLMs</p>
                <p className="text-sm text-muted-foreground">
                  Trained on millions of Indian credit files. Understands CA-certified P&L statements, 
                  CIBIL narratives, and RBI circular references natively.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck size={18} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-sm mb-1">Explainable & Auditable</p>
                <p className="text-sm text-muted-foreground">
                  Every model output includes a decision rationale chain. No black-box predictions — 
                  regulators and credit committees can trace every variable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
