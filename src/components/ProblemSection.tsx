import { AlertTriangle, Clock, Database, Lock } from "lucide-react";

const problems = [
  {
    icon: Database,
    title: "Record-Keeping, Not Decision-Making",
    desc: "Legacy LOS platforms were designed to capture and store loan applications — not to evaluate them. Credit decisions still depend on manual judgement calls bolted onto rigid rule engines.",
  },
  {
    icon: Clock,
    title: "60-Day Implementation Cycles",
    desc: "Any meaningful change — a new product, a policy update, a scoring model tweak — takes weeks of vendor coordination, UAT, and deployment. Markets don't wait.",
  },
  {
    icon: Lock,
    title: "Vendor Lock-In & Black-Box Logic",
    desc: "Credit teams have no visibility into how decisions are being made, no ability to override models in real-time, and no path to customisation without expensive professional services.",
  },
  {
    icon: AlertTriangle,
    title: "Fragmented Data Pipelines",
    desc: "Bureau pulls, bank statement analysis, GST verification, and alternate data sit in separate silos. The LOS stitches them together with brittle integrations that break under scale.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="section-padding bg-navy-deep/40">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            The Problem
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Your LOS was built for a different era
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Most lending platforms are glorified CRUD applications with a workflow engine. They track loan states — they don't make credit decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((p, i) => (
            <div
              key={i}
              className="glass-card p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <p.icon size={20} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
