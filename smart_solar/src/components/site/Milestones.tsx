import { CheckCircle2, Circle, Calendar } from "lucide-react";

const items = [
  { title: "Project Proposal", date: "Oct 2025", marks: "10/10", desc: "Initial idea pitched, scope defined, supervisors approved.", done: true },
  { title: "Progress Presentation 1", date: "Jan 2026", marks: "18/20", desc: "Hardware prototype + sensor calibration completed.", done: true },
  { title: "Progress Presentation 2", date: "March 2026", marks: "22/25", desc: "Cloud pipeline, dashboard MVP and initial ML model demo.", done: true },
  { title: "Final Assessment", date: "Apr 2026", marks: "—", desc: "Full system integration, validation against reference site.", done: false },
  { title: "Final Viva", date: "May 2026", marks: "—", desc: "Final defence and project handover to faculty.", done: false },
];

export const Milestones = () => (
  <section id="milestones" className="py-28 relative">
    <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
    <div className="container mx-auto px-4 relative">
      <div className="max-w-3xl mb-16 reveal">
        <div className="text-sm font-mono uppercase tracking-widest text-solar mb-3">03 · Milestones</div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          The road to <span className="text-gradient-mixed">graduation</span>
        </h2>
        <p className="text-muted-foreground text-lg">Tracked checkpoints from proposal to viva.</p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon via-solar to-transparent md:-translate-x-px" />
        {items.map((it, i) => (
          <div
            key={i}
            className={`relative reveal flex items-start gap-6 mb-10 md:mb-14 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {/* Node */}
            <div className="relative z-10 shrink-0 ml-1 md:ml-0 md:absolute md:left-1/2 md:-translate-x-1/2">
              <div className={`w-11 h-11 rounded-full flex items-center justify-center border-2 ${it.done ? "bg-gradient-mixed border-neon shadow-glow-neon" : "glass border-neon/40"
                }`}>
                {it.done ? <CheckCircle2 className="w-5 h-5 text-background" /> : <Circle className="w-5 h-5 text-neon" />}
              </div>
            </div>

            {/* Card */}
            <div className={`flex-1 md:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
              <div className="glass-card p-6 group">
                <div className="flex items-center gap-2 mb-2 text-xs font-mono">
                  <Calendar className="w-3.5 h-3.5 text-solar" />
                  <span className="text-solar">{it.date}</span>
                  {it.marks !== "—" && (
                    <span className="ml-auto px-2 py-0.5 rounded-full bg-neon/10 text-neon border border-neon/30">
                      {it.marks}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-neon transition-colors">{it.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
