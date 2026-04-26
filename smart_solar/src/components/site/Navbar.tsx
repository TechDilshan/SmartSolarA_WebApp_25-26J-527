import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X, Zap } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";
import Logo from "@/assets/Logo.png"

const links = [
  { id: "home", label: "Home" },
  { id: "deployment", label: "Deployment" },
  { id: "research", label: "Research" },
  { id: "milestones", label: "Milestones" },
  { id: "documents", label: "Documents" },
  { id: "presentations", label: "Presentations" },
  { id: "about", label: "About Us" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = links.map((l) => document.getElementById(l.id));
      const y = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s && s.offsetTop <= y) { setActive(links[i].id); break; }
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      scrolled ? "py-3" : "py-5"
    )}>
      <div className={cn(
        "container mx-auto px-4 flex items-center justify-between rounded-2xl transition-all duration-500",
        scrolled && "glass shadow-elevated"
      )}>
        <button onClick={() => go("home")} className="flex items-center gap-2 group py-2">
          <div className="relative">
            <img
              src={Logo}
              alt="Smart Solar Advisor"
              className="w-10 h-10 rounded-xl object-contain"
            />
          </div>
          <span className="font-bold text-lg tracking-tight hidden sm:block">
            <span className="text-gradient-neon">Smart</span>SolarAdvisor
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-lg transition-all relative",
                active === l.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {l.label}
              {active === l.id && (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-gradient-mixed rounded-full" />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:shadow-glow-neon transition-all"
          >
            {theme === "dark" ? <Sun className="w-4 h-4 text-solar" /> : <Moon className="w-4 h-4 text-neon" />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 rounded-xl glass flex items-center justify-center"
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden container mx-auto px-4 mt-2">
          <div className="glass rounded-2xl p-3 flex flex-col gap-1 animate-fade-in">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={cn(
                  "px-4 py-3 text-left rounded-lg transition-all",
                  active === l.id ? "bg-neon/10 text-neon" : "hover:bg-muted"
                )}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
