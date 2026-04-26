import { FileText, FileSpreadsheet, BookMarked, ExternalLink, Presentation, FileBadge, Files, Download } from "lucide-react";

const proposals = [
  { name: "Member One", reg: "IT/2021/001", url: "https://drive.google.com/" },
  { name: "Member Two", reg: "IT/2021/002", url: "https://drive.google.com/" },
  { name: "Member Three", reg: "IT/2021/003", url: "https://drive.google.com/" },
  { name: "Member Four", reg: "IT/2021/004", url: "https://drive.google.com/" },
];

const finalReports = [
  { name: "Member One", reg: "IT/2021/001", url: "https://drive.google.com/" },
  { name: "Member Two", reg: "IT/2021/002", url: "https://drive.google.com/" },
  { name: "Member Three", reg: "IT/2021/003", url: "https://drive.google.com/" },
  { name: "Member Four", reg: "IT/2021/004", url: "https://drive.google.com/" },
];

const docs = [
  { title: "Project Charter", desc: "Initial scope, team roles, timeline & deliverables.", url: "https://drive.google.com/", icon: FileText, color: "neon" },
  { title: "Group Proposal", desc: "Full research proposal with literature review & methodology.", url: "https://drive.google.com/", icon: FileText, color: "solar" },
  { title: "Group Final Report", desc: "Complete dissertation including results & conclusions.", url: "https://drive.google.com/", icon: BookMarked, color: "neon" },
  { title: "Logbooks", desc: "Weekly progress logs and supervisor meeting notes.", url: "https://drive.google.com/", icon: FileSpreadsheet, color: "solar" },
];

const slides = [
  { title: "Proposal Presentation", desc: "Pitch deck explaining the problem, idea & expected impact.", url: "https://drive.google.com/" },
  { title: "Progress Presentation 1", desc: "Hardware prototype and sensor calibration findings.", url: "https://drive.google.com/" },
  { title: "Progress Presentation 2", desc: "Cloud pipeline + ML model + dashboard demo.", url: "https://drive.google.com/" },
  { title: "Final Presentation", desc: "End-to-end system showcase with validation results.", url: "https://drive.google.com/" },
];

type MemberDoc = { name: string; reg: string; url: string };

const PremiumDocCard = ({
  title,
  subtitle,
  items,
  accent,
  Icon,
  index,
}: {
  title: string;
  subtitle: string;
  items: MemberDoc[];
  accent: "neon" | "solar";
  Icon: typeof FileText;
  index: number;
}) => {
  const accentText = accent === "neon" ? "text-neon" : "text-solar";
  const accentBorder = accent === "neon" ? "border-neon/30" : "border-solar/30";
  const accentBg = accent === "neon" ? "bg-neon/10" : "bg-solar/10";

  return (
    <div
      className="glass-card p-7 md:p-9 reveal group relative overflow-hidden"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* decorative glow */}
      <div
        className={`absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-40 ${
          accent === "neon" ? "bg-neon/30" : "bg-solar/30"
        }`}
      />

      <div className="relative">
        <div className="flex items-start gap-4 mb-7">
          <div
            className={`w-14 h-14 shrink-0 rounded-2xl ${accentBg} border ${accentBorder} flex items-center justify-center`}
          >
            <Icon className={`w-6 h-6 ${accentText}`} />
          </div>
          <div className="flex-1">
            <div className={`text-xs font-mono uppercase tracking-widest ${accentText} mb-1`}>
              {subtitle}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold leading-tight">{title}</h3>
          </div>
        </div>

        <ul className="space-y-3">
          {items.map((m, i) => (
            <li key={i}>
              <a
                href={m.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl glass border border-white/5 hover:border-current hover:scale-[1.02] hover:shadow-glow-neon transition-all duration-300 group/item"
              >
                <div
                  className={`w-11 h-11 shrink-0 rounded-lg ${accentBg} border ${accentBorder} flex items-center justify-center group-hover/item:rotate-6 transition-transform`}
                >
                  <FileText className={`w-5 h-5 ${accentText}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm md:text-base truncate">{m.name}</div>
                  <div className="text-xs font-mono text-muted-foreground">{m.reg}</div>
                </div>
                <div
                  className={`hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg ${accentBg} border ${accentBorder} ${accentText} group-hover/item:gap-2.5 transition-all`}
                >
                  <Download className="w-3.5 h-3.5" /> View / Download
                </div>
                <ExternalLink className={`sm:hidden w-4 h-4 ${accentText}`} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const Documents = () => (
  <>
    <section id="documents" className="py-28 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-14 reveal">
          <div className="text-sm font-mono uppercase tracking-widest text-neon mb-3">04 · Documents</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Project <span className="text-gradient-mixed">deliverables</span>
          </h2>
          <p className="text-muted-foreground text-lg">All formal documentation hosted on Google Drive.</p>
        </div>

        {/* Premium highlighted cards */}
        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          <PremiumDocCard
            title="Individual Project Proposals"
            subtitle="Per-member submissions"
            items={proposals}
            accent="neon"
            Icon={FileBadge}
            index={0}
          />
          <PremiumDocCard
            title="Final Reports"
            subtitle="Per-member dissertations"
            items={finalReports}
            accent="solar"
            Icon={Files}
            index={1}
          />
        </div>

        {/* Group-level documents */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {docs.map((d, i) => (
            <a
              key={i}
              href={d.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card tilt-card p-6 reveal group flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                d.color === "neon" ? "bg-neon/10 border border-neon/30" : "bg-solar/10 border border-solar/30"
              }`}>
                <d.icon className={`w-5 h-5 ${d.color === "neon" ? "text-neon" : "text-solar"}`} />
              </div>
              <h3 className="font-bold text-lg mb-2">{d.title}</h3>
              <p className="text-sm text-muted-foreground mb-5 flex-1">{d.desc}</p>
              <div className={`inline-flex items-center gap-2 text-sm font-semibold ${
                d.color === "neon" ? "text-neon" : "text-solar"
              } group-hover:gap-3 transition-all`}>
                View / Download <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>

    <section id="presentations" className="py-28 relative">
      <div className="absolute inset-x-0 top-1/2 h-96 bg-solar/5 blur-3xl pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mb-14 reveal">
          <div className="text-sm font-mono uppercase tracking-widest text-solar mb-3">05 · Presentations</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Slide <span className="text-gradient-mixed">decks</span>
          </h2>
          <p className="text-muted-foreground text-lg">Every presentation milestone, in one place.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {slides.map((s, i) => (
            <a
              key={i}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card tilt-card p-7 reveal group flex items-start gap-5"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-14 h-14 shrink-0 rounded-xl bg-gradient-mixed flex items-center justify-center shadow-glow-solar group-hover:scale-110 transition-transform">
                <Presentation className="w-6 h-6 text-background" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-xl mb-2 group-hover:text-solar transition-colors">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-solar group-hover:gap-3 transition-all">
                  View Slides <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  </>
);
