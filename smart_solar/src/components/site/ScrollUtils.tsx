import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export const ScrollUtils = () => {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const p = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(p);
      setShow(h.scrollTop > 500);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-1 z-[60] pointer-events-none">
        <div
          className="h-full bg-gradient-mixed transition-[width] duration-150 shadow-glow-neon"
          style={{ width: `${progress}%` }}
        />
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-2xl bg-gradient-mixed text-background shadow-glow-neon flex items-center justify-center transition-all duration-500 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
};
