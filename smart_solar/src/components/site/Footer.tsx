import { Zap, Github, Linkedin, Mail } from "lucide-react";
import Logo from "../../assets/Logo.png"

export const Footer = () => (
  <footer className="border-t border-border/40 py-10 mt-16">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-mixed flex items-center justify-center shadow-glow-neon">
          <img
            src={Logo}
            alt="Smart Solar Advisor"
            className="w-10 h-10 rounded-xl object-contain"
          />
        </div>
        <span className="font-bold">Smart<span className="text-gradient-neon">Solar</span> Advisor</span>
      </div>
      <p className="text-xs text-muted-foreground font-mono">
        © 2026 · Final Year Research Project · All rights reserved.
      </p>
      <div className="flex items-center gap-2">
        {[Github, Linkedin, Mail].map((Icon, i) => (
          <a key={i} href="#" className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:text-neon transition-colors">
            <Icon className="w-4 h-4" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);
