import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";

type NavItem = { id: string; label: string };
type Theme = "light" | "dark";

export default function Navbar() {
  const navItems: NavItem[] = useMemo(
    () => [
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "ux", label: "UI/UX" },
      { id: "contact", label: "Contact" },
      { id: "motion", label: "Motion" },
    ],
    []
  );

  const resumeUrl = "/resume.pdf";

  const [activeId, setActiveId] = useState<string>("about");
  const [open, setOpen] = useState(false);

  // ✅ Theme state
  const [theme, setTheme] = useState<Theme>("light");

  // ✅ Initialize theme once (safe)
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") {
      setTheme(saved);
      return;
    }

    const prefersDark =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

    setTheme(prefersDark ? "dark" : "light");
  }, []);

  // ✅ Apply theme to <html>
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);

    // helpful debug: check your DevTools Elements tab <html class="dark">
    // console.log("theme:", theme, "html classes:", root.className);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  useEffect(() => {
    const ids = navItems.map((n) => n.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      {
        root: null,
        rootMargin: "-25% 0px -65% 0px",
        threshold: [0.05, 0.1, 0.2, 0.35, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [navItems]);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-5">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between rounded-2xl border border-black/10 bg-white/75 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.08)] px-4 py-3 dark:bg-black/40 dark:border-white/10">
          {/* Brand */}
          <button
            type="button"
            onClick={() => scrollToId("about")}
            className="flex items-center gap-3 text-sm font-semibold text-black/85 hover:text-black transition dark:text-white/85 dark:hover:text-white"
            aria-label="Go to top"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.18)] dark:bg-white dark:text-black"
            >
              <span className="text-[12px] font-extrabold tracking-wide">BS</span>
            </motion.div>
            <span className="leading-none">Bhavyasri</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = item.id === activeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToId(item.id)}
                  className={[
                    "relative px-4 py-2 rounded-xl text-sm font-semibold transition",
                    isActive
                      ? "text-black dark:text-white"
                      : "text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white",
                  ].join(" ")}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="navActivePill"
                      className="absolute inset-0 rounded-xl bg-black/5 border border-black/10 dark:bg-white/10 dark:border-white/10"
                      transition={{ type: "spring", stiffness: 420, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}

            {/* Theme toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="ml-1 inline-flex items-center justify-center w-11 h-11 rounded-xl border border-black/10 bg-white hover:bg-black/5 transition dark:bg-black/30 dark:border-white/10 dark:hover:bg-white/10"
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              {theme === "dark" ? (
                <FiSun className="text-xl text-white/85" />
              ) : (
                <FiMoon className="text-xl text-black/80" />
              )}
            </button>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="ml-2 inline-flex items-center gap-2 rounded-xl bg-black text-white px-4 py-2 text-sm font-semibold hover:opacity-90 transition dark:bg-white dark:text-black"
            >
              <HiOutlineDocumentText className="text-lg" />
              Resume
            </a>
          </div>

          {/* Mobile menu */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-black/10 bg-white hover:bg-black/5 transition dark:bg-black/30 dark:border-white/10 dark:hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? (
              <FiX className="text-xl dark:text-white/85" />
            ) : (
              <FiMenu className="text-xl dark:text-white/85" />
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="md:hidden mt-3 rounded-2xl border border-black/10 bg-white/90 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.10)] overflow-hidden dark:bg-black/50 dark:border-white/10"
            >
              <div className="p-2">
                {navItems.map((item) => {
                  const isActive = item.id === activeId;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => scrollToId(item.id)}
                      className={[
                        "w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition",
                        isActive
                          ? "bg-black/5 border border-black/10 text-black dark:bg-white/10 dark:border-white/10 dark:text-white"
                          : "text-black/75 hover:bg-black/5 dark:text-white/75 dark:hover:bg-white/10",
                      ].join(" ")}
                    >
                      {item.label}
                    </button>
                  );
                })}

                <div className="mt-2 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={toggleTheme}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-black/80 hover:bg-black/5 transition dark:bg-black/30 dark:border-white/10 dark:text-white/85 dark:hover:bg-white/10"
                    aria-label="Toggle theme"
                  >
                    {theme === "dark" ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
                    {theme === "dark" ? "Light" : "Dark"}
                  </button>

                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-black text-white px-4 py-3 text-sm font-semibold hover:opacity-90 transition dark:bg-white dark:text-black"
                  >
                    <HiOutlineDocumentText className="text-lg" />
                    Resume
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
