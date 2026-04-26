import { useState } from "react";
import { Mail, Phone, Send, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast({ title: "Message sent!", description: "Thanks — we'll get back to you shortly." });
      setForm({ name: "", email: "", message: "" });
      setSending(false);
    }, 800);
  };

  const Field = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input
      {...props}
      className="w-full px-4 py-3.5 rounded-xl bg-input/50 border border-border focus:border-neon focus:shadow-glow-neon focus:outline-none transition-all placeholder:text-muted-foreground/60"
    />
  );

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mb-14 reveal">
          <div className="text-sm font-mono uppercase tracking-widest text-solar mb-3">07 · Get in Touch</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient-mixed">connect</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Questions, collaboration, or curious about the system? Drop us a message.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-6">
          {/* Info */}
          <div className="space-y-4 reveal">
            {[
              { icon: Mail, label: "Email", value: "smartsolar@uni.lk", href: "mailto:info@solaradvisor.site", c: "neon" },
              { icon: Phone, label: "Phone", value: "+94 77 123 4567", href: "tel:+94703966227", c: "solar" },
              { icon: MapPin, label: "Location", value: "Faculty of Computing, Sri Lanka", href: "#", c: "neon" },
            ].map((it, i) => (
              <a key={i} href={it.href} className="glass-card p-5 flex items-center gap-4 group">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${it.c === "neon" ? "bg-neon/10 border border-neon/30 text-neon" : "bg-solar/10 border border-solar/30 text-solar"
                  }`}>
                  <it.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{it.label}</div>
                  <div className="font-semibold truncate group-hover:text-foreground">{it.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={submit} className="glass-card p-7 md:p-9 space-y-4 reveal">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2 block">Name</label>
                <Field type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
              </div>
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2 block">Email</label>
                <Field type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" />
              </div>
            </div>
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2 block">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your interest..."
                className="w-full px-4 py-3.5 rounded-xl bg-input/50 border border-border focus:border-neon focus:shadow-glow-neon focus:outline-none transition-all placeholder:text-muted-foreground/60 resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="btn-glow w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-mixed text-background font-semibold shadow-glow-neon hover:shadow-glow-solar transition-all disabled:opacity-60"
            >
              {sending ? "Sending..." : <>Send Message <Send className="w-4 h-4" /></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
