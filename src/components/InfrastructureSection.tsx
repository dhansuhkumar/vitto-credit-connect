import { Globe, AppWindow, Landmark, BookOpen, Users } from "lucide-react";

const layers = [
  {
    label: "A",
    title: "Channels",
    icon: Globe,
    desc: "Web, mobile, agent-assisted, API, and partner origination endpoints. Unified intake regardless of source.",
    items: ["Web SDK", "Mobile SDK", "WhatsApp", "Partner APIs", "Agent Portal"],
  },
  {
    label: "B",
    title: "Application & Decisioning",
    icon: AppWindow,
    desc: "End-to-end application processing with embedded credit decisioning at every stage.",
    items: ["KYC/KYB", "Bureau Integration", "Document AI", "Policy Engine", "Scorecards"],
  },
  {
    label: "C",
    title: "Banking & Payments",
    icon: Landmark,
    desc: "Direct integrations with payment networks, e-sign providers, e-stamp, and NACH mandates.",
    items: ["e-Sign", "e-Stamp", "NACH/e-NACH", "Payment Gateway", "Escrow"],
  },
  {
    label: "D",
    title: "Loan Management (LMS)",
    icon: BookOpen,
    desc: "Post-disbursement lifecycle — EMI schedules, repayment tracking, restructuring, and closure.",
    items: ["Repayment Engine", "Interest Calc", "Restructuring", "Foreclosure", "NOC"],
  },
  {
    label: "E",
    title: "CRM & Collections",
    icon: Users,
    desc: "Borrower relationship management with integrated collection workflows and recovery tracking.",
    items: ["Borrower 360°", "Collection Queues", "Field Agent App", "Legal Tracking", "SARFAESI"],
  },
];

const InfrastructureSection = () => {
  return (
    <section id="infrastructure" className="section-padding bg-navy-deep/40">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            Full-Stack Automation
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Five layers. Zero manual handoffs.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From the first customer touchpoint to final closure, every operational layer 
            is orchestrated through a single platform.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {layers.map((layer, i) => (
            <div
              key={i}
              className="glass-card p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center font-bold text-primary text-sm">
                  {layer.label}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <layer.icon size={18} className="text-primary" />
                    <h3 className="text-lg font-semibold">{layer.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{layer.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {layer.items.map((item, j) => (
                      <span
                        key={j}
                        className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border/50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
