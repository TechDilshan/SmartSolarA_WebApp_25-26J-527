import { ArrowRight, Sparkles, Cpu, BarChart3 } from "lucide-react";
import heroImg from "@/assets/hero-solar.jpg";
import sunOrb from "@/assets/sun-orb.png";
import solarPanel from "@/assets/solar-panel.png";
import iotDevice from "@/assets/iot-device.png";
import appPoster from "@/assets/app-poster.png";

export const Hero = () => {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-neon/20 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-solar/20 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-solar" />
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Final Year Research Project · 2025
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6 animate-fade-in">
              Smart <span className="text-gradient-neon glow-text-neon">Solar</span>
              <br />
              <span className="text-gradient-mixed">Advisor</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed animate-fade-in">
              An <span className="text-neon font-semibold">IoT-powered</span> system that collects environmental
              data and forecasts <span className="text-solar font-semibold">daily &amp; monthly solar energy</span>{" "}
              generation — before a single panel is installed.
            </p>

            <div className="flex flex-wrap gap-4 mb-12 animate-fade-in">
              <button
                onClick={() => go("research")}
                className="btn-glow group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-mixed text-background font-semibold shadow-glow-neon hover:shadow-glow-solar transition-all"
              >
                Explore Research
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => go("documents")}
                className="btn-glow inline-flex items-center gap-2 px-7 py-3.5 rounded-xl glass border border-neon/30 hover:border-neon font-semibold transition-all"
              >
                View System
                <Cpu className="w-4 h-4" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 max-w-lg">
              {[
                { v: "92%", l: "Forecast Accuracy", c: "text-neon", i: BarChart3 },
                { v: "24/7", l: "Sensor Data", c: "text-solar", i: Cpu },
                { v: "30d", l: "Monthly Outlook", c: "text-gradient-mixed", i: Sparkles },
              ].map((s, i) => (
                <div key={i} className="glass-card p-4 reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                  <s.i className="w-4 h-4 mb-2 text-muted-foreground" />
                  <div className={`text-2xl font-bold ${s.c}`}>{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="relative h-[500px] lg:h-[620px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden glass border border-neon/20">
              <img
                src={heroImg}
                alt="IoT solar forecasting visualization"
                width={1536}
                height={1024}
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            {/* App Poster / Mobile Mockup */}
            <div className="absolute -right-4 lg:-right-12 top-8 bottom-8 w-[240px] lg:w-[280px] rounded-[2rem] overflow-hidden glass border-4 border-background shadow-2xl animate-float z-20 drop-shadow-[0_0_30px_hsl(var(--neon)/0.3)] hidden sm:block">
              <img
                src={appPoster}
                alt="Smart Solar Advisor App"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating elements */}
            <img
              src={sunOrb}
              alt=""
              aria-hidden
              className="absolute -top-8 -right-6 w-32 h-32 animate-float drop-shadow-[0_0_40px_hsl(var(--solar)/0.6)]"
            />
            <img
              src={solarPanel}
              alt=""
              aria-hidden
              className="absolute bottom-8 -left-8 w-44 animate-float-slow drop-shadow-[0_0_40px_hsl(var(--neon)/0.5)]"
            />
            <div className="absolute top-1/2 -right-4 glass-card p-4 animate-float-slow w-48">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-neon animate-pulse-glow" />
                <span className="text-xs font-mono text-muted-foreground">LIVE · ESP32</span>
              </div>
              <div className="text-xs text-muted-foreground">Irradiance</div>
              <div className="text-2xl font-bold text-neon">847 W/m²</div>
            </div>
            <img
              src={iotDevice}
              alt=""
              aria-hidden
              className="absolute -bottom-4 right-4 w-28 animate-float opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
