import { Mail, GraduationCap, User } from "lucide-react";

const supervisors = [
  { name: "Dr. A. Perera", role: "Supervisor", email: "supervisor@uni.lk", initials: "AP" },
  { name: "Mr. S. Fernando", role: "Co-Supervisor", email: "cosupervisor@uni.lk", initials: "SF" },
];

const team = [
  { name: "Kavindu Jayawardena", reg: "IT21XXXXX", role: "IoT Developer", email: "kavindu@uni.lk", initials: "KJ" },
  { name: "Nimali Silva", reg: "IT21XXXXX", role: "ML Engineer", email: "nimali@uni.lk", initials: "NS" },
  { name: "Ravindu Perera", reg: "IT21XXXXX", role: "Cloud Engineer", email: "ravindu@uni.lk", initials: "RP" },
  { name: "Tharushi Bandara", reg: "IT21XXXXX", role: "Frontend Developer", email: "tharushi@uni.lk", initials: "TB" },
];

const Avatar = ({ initials, accent }: { initials: string; accent: "neon" | "solar" }) => (
  <div className={`relative w-24 h-24 rounded-2xl flex items-center justify-center text-2xl font-bold ${
    accent === "neon" ? "bg-gradient-neon shadow-glow-neon" : "bg-gradient-solar shadow-glow-solar"
  } text-background`}>
    {initials}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent" />
  </div>
);

export const About = () => (
  <section id="about" className="py-28 relative">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mb-14 reveal text-center mx-auto">
        <div className="text-sm font-mono uppercase tracking-widest text-neon mb-3">06 · About Us</div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Meet the <span className="text-gradient-mixed">team</span>
        </h2>
        <p className="text-muted-foreground text-lg">Supervisors and student researchers behind Smart Solar Advisor.</p>
      </div>

      {/* Supervisors */}
      <div className="mb-14">
        <div className="flex items-center gap-3 justify-center mb-8 reveal">
          <GraduationCap className="w-5 h-5 text-solar" />
          <span className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Supervisors</span>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {supervisors.map((s, i) => (
            <div key={i} className="glass-card tilt-card p-7 reveal flex flex-col items-center text-center" style={{ transitionDelay: `${i * 100}ms` }}>
              <Avatar initials={s.initials} accent="solar" />
              <h3 className="font-bold text-xl mt-5">{s.name}</h3>
              <div className="text-sm text-solar font-mono uppercase tracking-wider mt-1">{s.role}</div>
              <a href={`mailto:${s.email}`} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-neon mt-3 transition-colors">
                <Mail className="w-3.5 h-3.5" /> {s.email}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div>
        <div className="flex items-center gap-3 justify-center mb-8 reveal">
          <User className="w-5 h-5 text-neon" />
          <span className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Team Members</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((m, i) => (
            <div key={i} className="glass-card tilt-card p-6 reveal flex flex-col items-center text-center" style={{ transitionDelay: `${i * 80}ms` }}>
              <Avatar initials={m.initials} accent="neon" />
              <h3 className="font-bold text-lg mt-5">{m.name}</h3>
              <div className="text-xs font-mono text-muted-foreground mt-1">{m.reg}</div>
              <div className="text-sm text-neon font-medium mt-2">{m.role}</div>
              <a href={`mailto:${m.email}`} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-neon mt-3 transition-colors break-all">
                <Mail className="w-3 h-3 shrink-0" /> {m.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
