import { useState } from "react";
import { BookOpen, Target, AlertCircle, Compass, Workflow, Cpu, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  {
    id: "literature",
    icon: BookOpen,
    label: "Literature Survey",
    body: (
      <>
        Existing solar forecasting tools rely heavily on historical satellite data and broad regional models.
        Studies (PVWatts, NREL SAM) provide annual estimates but lack site-specific micro-climate awareness.
        Recent ML-driven approaches (LSTM, XGBoost) improve short-term horizons but rarely fuse on-site IoT
        telemetry with cloud analytics for pre-installation advice.
      </>
    ),
  },
  {
    id: "gap",
    icon: AlertCircle,
    label: "Research Gap",
    body: (
      <>
        Homeowners face a critical blind spot: <span className="text-solar">no affordable system measures
        the actual solar potential of a specific rooftop before buying panels</span>. Generic calculators ignore
        shading, tilt, dust, and local weather variability — leading to over- or under-sizing.
      </>
    ),
  },
  {
    id: "problem",
    icon: Target,
    label: "Research Problem",
    body: (
      <>
        How can a low-cost IoT device, combined with cloud machine learning, accurately forecast monthly
        solar energy yield for a specific location <span className="text-neon">before installation</span>,
        with confidence comparable to post-install monitoring systems?
      </>
    ),
  },
  {
    id: "objectives",
    icon: Compass,
    label: "Research Objectives",
    body: (
      <ul className="space-y-2">
        {[
          "Design a portable IoT sensor unit (irradiance, temp, humidity, UV).",
          "Build a cloud pipeline for continuous data ingestion & storage.",
          "Train ML model for daily + 30-day energy forecasts.",
          "Deliver an interactive advisor dashboard for end users.",
          "Validate accuracy against installed reference systems.",
        ].map((o, i) => (
          <li key={i} className="flex gap-2"><ChevronRight className="w-4 h-4 text-neon mt-1 shrink-0" />{o}</li>
        ))}
      </ul>
    ),
  },
  {
    id: "method",
    icon: Workflow,
    label: "Methodology",
    body: (
      <ol className="space-y-3 list-none">
        {[
          ["Data Acquisition", "Deploy sensor unit at candidate site for 2–4 weeks; sample every 60s."],
          ["Cloud Storage", "Stream telemetry via MQTT → Firebase / Supabase time-series tables."],
          ["Feature Engineering", "Aggregate hourly features; merge with weather API forecasts."],
          ["Model Training", "Train LSTM + XGBoost ensemble on historical irradiance datasets."],
          ["Deployment", "Serve predictions via REST endpoint to React dashboard."],
        ].map(([t, d], i) => (
          <li key={i} className="flex gap-3">
            <span className="w-7 h-7 rounded-lg bg-gradient-mixed text-background font-bold text-sm flex items-center justify-center shrink-0">{i+1}</span>
            <div><div className="font-semibold text-foreground">{t}</div><div className="text-sm">{d}</div></div>
          </li>
        ))}
      </ol>
    ),
  },
  {
    id: "tech",
    icon: Cpu,
    label: "Technologies",
    body: (
      <div className="flex flex-wrap gap-2">
        {["ESP32","BH1750 Sensor","DHT22","MQTT","Firebase","Python","TensorFlow","XGBoost","React","Tailwind","Node.js","REST API"].map((t) => (
          <span key={t} className="px-3 py-1.5 rounded-lg glass border border-neon/20 text-sm font-mono text-foreground hover:border-neon hover:text-neon transition-colors">
            {t}
          </span>
        ))}
      </div>
    ),
  },
];

export const Research = () => {
  const [active, setActive] = useState("literature");
  const current = tabs.find((t) => t.id === active)!;

  return (
    <section id="research" className="py-28 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-14 reveal">
          <div className="text-sm font-mono uppercase tracking-widest text-neon mb-3">02 · Research Domain</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The science behind <span className="text-gradient-mixed">smarter solar</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From literature gaps to deployable methodology — explore the academic backbone of the project.
          </p>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-6 reveal">
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {tabs.map((t) => {
              const Icon = t.icon;
              const isActive = active === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  className={cn(
                    "shrink-0 flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 group",
                    isActive
                      ? "bg-gradient-mixed text-background shadow-glow-neon"
                      : "glass hover:border-neon/40"
                  )}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="font-medium text-sm whitespace-nowrap">{t.label}</span>
                </button>
              );
            })}
          </div>

          <div className="glass-card p-8 md:p-10 min-h-[400px]">
            <div key={active} className="animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-neon/10 border border-neon/30 flex items-center justify-center">
                  <current.icon className="w-5 h-5 text-neon" />
                </div>
                <h3 className="text-2xl font-bold">{current.label}</h3>
              </div>
              <div className="text-muted-foreground leading-relaxed text-base md:text-lg">
                {current.body}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
