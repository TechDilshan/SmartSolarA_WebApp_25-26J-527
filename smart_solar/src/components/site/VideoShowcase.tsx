import { useEffect, useRef } from "react";
import { Radio, MapPin } from "lucide-react";

// Placeholder vertical demo videos — replace src URLs with real rooftop IoT footage.
const videos = [
  {
    src: "https://cdn.coverr.co/videos/coverr-solar-panels-on-the-roof-3287/1080p.mp4",
    label: "Rooftop Sensor Array",
    location: "Site A · North Facing",
  },
  {
    src: "https://cdn.coverr.co/videos/coverr-a-solar-power-plant-3289/1080p.mp4",
    label: "Live Data Capture",
    location: "ESP32 + DHT22",
  },
  {
    src: "https://cdn.coverr.co/videos/coverr-solar-panels-in-the-sun-3288/1080p.mp4",
    label: "Real Environment Setup",
    location: "Site B · Open Sky",
  },
  {
    src: "https://cdn.coverr.co/videos/coverr-clouds-passing-over-solar-panels-3290/1080p.mp4",
    label: "Irradiance Monitoring",
    location: "Pyranometer Mount",
  },
];

export const VideoShowcase = () => {
  const refs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const v = e.target as HTMLVideoElement;
          if (e.isIntersecting) v.play().catch(() => {});
          else v.pause();
        });
      },
      { threshold: 0.25 }
    );
    refs.current.forEach((v) => v && io.observe(v));
    return () => io.disconnect();
  }, []);

  return (
    <section id="deployment" className="py-28 relative overflow-hidden">
      <div className="absolute inset-x-0 top-1/3 h-96 bg-neon/5 blur-3xl pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mb-14 reveal">
          <div className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-neon mb-3">
            <Radio className="w-4 h-4 animate-pulse" /> 02 · Field Deployment
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Live IoT Device <span className="text-gradient-mixed">Deployment</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real footage of our rooftop sensor nodes capturing irradiance, temperature & humidity in the wild.
          </p>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex lg:grid lg:grid-cols-4 gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scroll-pl-4 -mx-4 px-4 lg:mx-0 lg:px-0 lg:overflow-visible">
          {videos.map((v, i) => (
            <div
              key={i}
              className="reveal group relative shrink-0 snap-start w-[72%] sm:w-[45%] md:w-[32%] lg:w-auto"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative aspect-[9/16] rounded-3xl overflow-hidden glass-card p-0 shadow-elevated">
                <video
                  ref={(el) => (refs.current[i] = el)}
                  src={v.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[6000ms] ease-out group-hover:scale-110"
                />

                {/* dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background/80 pointer-events-none" />

                {/* glow ring on hover */}
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/5 group-hover:ring-neon/60 transition-all duration-500 pointer-events-none" />

                {/* live badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/60 backdrop-blur-md border border-neon/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-foreground">Live</span>
                </div>

                {/* caption */}
                <div className="absolute bottom-0 inset-x-0 p-4">
                  <div className="text-sm font-bold text-foreground mb-0.5">{v.label}</div>
                  <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                    <MapPin className="w-3 h-3 text-solar" /> {v.location}
                  </div>
                </div>
              </div>

              {/* base glow */}
              <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-mixed opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
