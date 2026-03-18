import { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import profile from "../assets/profile.png";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import type { Variants } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiCopy, FiCheck, FiExternalLink } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import FigmaEmbed from "../components/FigmaEmbed";

type Skill = { title: string; desc: string };

type UXCaseStudy = {
  id: string;
  title: string;
  tag: string;
  summary: string;
  image: string;
  bullets: string[];
};

type DevProject = {
  id: string;
  title: string;
  tag: string;
  summary: string;
  tech: string[];
  liveUrl: string;
  githubUrl?: string;
};

type MotionStudy = {
  id: string;
  title: string;
  tag: string;
  summary: string;
  videoSrc: string;
  bullets: string[];
  moreUrl?: string;
};

const skills: Skill[] = [
  { title: "Component Architecture", desc: "Reusable components • Scalable structure • Clean patterns" },
  { title: "React + TypeScript", desc: "Hooks • Functional components • Strong typing • Maintainable code" },
  { title: "State & Data Management", desc: "Context API • Server state patterns • REST integration • Caching" },
  { title: "Performance Optimization", desc: "Code splitting • Memoization • Efficient rendering" },

  { title: "Responsive Layout Systems", desc: "Mobile-first • Grid/Flexbox • Breakpoint strategy" },
  { title: "Design Systems Thinking", desc: "Consistent spacing • Typography scale • Reusable UI patterns • Figma" },
  { title: "Motion & Micro-interactions", desc: "Framer Motion • Hover states • Scroll animations" },
  { title: "Accessibility-first Development", desc: "Semantic HTML • Keyboard navigation • ARIA awareness" },

  { title: "UX Case Study Development", desc: "Problem → Research → Solution → Outcome" },
  { title: "User Flow & Interaction Design", desc: "Information hierarchy • Reduced friction • Clear pathways" },
];

const revealUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const staggerWrap: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.03,
    },
  },
};

const itemUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const jiggleHover = {
  rotate: [0, -1.2, 1.2, -0.8, 0.8, 0],
  transition: { duration: 0.35 },
};

function publicUrl(pathFromPublic: string) {
  const clean = pathFromPublic.startsWith("/") ? pathFromPublic.slice(1) : pathFromPublic;
  return `${import.meta.env.BASE_URL}${clean}`;
}

export default function Home() {
  const navigate = useNavigate();

  const [activeUX, setActiveUX] = useState<UXCaseStudy | null>(null);
  const [copied, setCopied] = useState(false);

  const { scrollYProgress } = useScroll();
  const progressX = useSpring(scrollYProgress, { stiffness: 140, damping: 22, mass: 0.35 });

  const cardRef = useRef<HTMLDivElement | null>(null);
  const [glow, setGlow] = useState({ x: 0, y: 0, on: false });

  const onCardMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setGlow({ x: e.clientX - r.left, y: e.clientY - r.top, on: true });
  };

  const onCardLeave = () => setGlow((g) => ({ ...g, on: false }));

  useEffect(() => {
    const anyModalOpen = !!activeUX;
    if (!anyModalOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") setActiveUX(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeUX]);

  const uxCases: UXCaseStudy[] = useMemo(
    () => [
      {
        id: "coffeehouse",
        title: "CoffeeHouse Group Ordering",
        tag: "Mobile UX • Ordering flow",
        summary: "Designed a faster group ordering experience to reduce wait time and improve pickup.",
        image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1200&q=80&auto=format&fit=crop",
        bullets: ["Problem → ordering takes too long", "Solution → group order & pickup flow", "Outcome → faster, collaborative ordering"],
      },
      {
        id: "grocery",
        title: "Local Grocery Store Web App",
        tag: "Web UX • Local-first",
        summary: "Helped a local grocery compete with third-party apps by building trust + visibility of availability.",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80&auto=format&fit=crop",
        bullets: ["Availability before visiting", "Simple checkout flow", "Trust-driven UI patterns"],
      },
      {
        id: "careerwise",
        title: "CareerWise AI Assistant",
        tag: "Product UX • AI",
        summary: "Clean experience for resume feedback + JD match with calm, clear next actions.",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80&auto=format&fit=crop",
        bullets: ["Upload → analyze → improve", "Match score + insights", "Reduced cognitive load"],
      },
      {
        id: "appointment",
        title: "Patient Appointment Booking",
        tag: "Service UX • Healthcare",
        summary: "Streamlined the booking journey with clearer steps, reduced friction, and accessible forms.",
        image: "/images/cover-healthcare.png",
        bullets: ["Guided booking flow", "Symptom-based triage", "Accessible healthcare UX"],
      },
    ],
    []
  );

  const devProjects: DevProject[] = useMemo(
    () => [
      {
        id: "jobhouse",
        title: "JobHouse Tracker",
        tag: "Dev Project • Job Application Tracker",
        summary: "Track job applications with clean status updates, quick edits, and a simple workflow designed for clarity and consistency.",
        tech: ["React", "TypeScript", "Vite", "Tailwind"],
        liveUrl: "https://jobhouse-app.vercel.app/",
      },
    ],
    []
  );

  const motionStudies: MotionStudy[] = useMemo(
    () => [
      {
        id: "airpods-hero",
        title: "Product Hero Transition Study",
        tag: "Motion Design • Click-triggered storytelling",
        summary:
          "A click-triggered hero transition designed to guide attention from abstraction to clarity, gradually revealing product depth with soft easing for a premium feel.",
        videoSrc: "/motion/airpods-motion.mp4",
        bullets: [
          "Goal: premium product storytelling",
          "Easing: soft ease-out for weight-aware feel",
          "Order: headline → product → detail reveal",
          "A11y: keep motion subtle; add reduced-motion fallback later",
        ],
      },
    ],
    []
  );

  const email = "bhavyasrireddy267@gmail.com";
  const githubUrl = "https://github.com/bhavyasriii";
  const linkedinUrl = "https://www.linkedin.com/in/bhavyasri-m-593aa6214/";
  const resumeUrl = "/resume.pdf";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  const handleUXCardClick = (cs: UXCaseStudy) => {
    setActiveUX(cs);
  };

  const openFullCaseStudy = () => {
    setActiveUX(null);
    navigate("/case-study/healthcare");
  };

  return (
    <div className="min-h-screen bg-[#f4f5f6] py-10 px-5 dark:bg-[#0b1220]">
      <motion.div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-black/10 dark:bg-white/10">
        <motion.div className="h-full bg-black origin-left dark:bg-white" style={{ scaleX: progressX }} />
      </motion.div>

      <Navbar />

      <div className="pt-20">
        <div
          ref={cardRef}
          onMouseMove={onCardMove}
          onMouseLeave={onCardLeave}
          className="relative mx-auto max-w-6xl rounded-[28px] bg-gradient-to-br from-white via-sky-50 to-indigo-50 shadow-[0_25px_80px_rgba(0,0,0,0.08)] border border-black/5 p-8 md:p-12 mt-6 overflow-hidden
                     dark:from-[#0f172a] dark:via-[#0b1b33] dark:to-[#111827] dark:border-white/10 dark:shadow-[0_25px_80px_rgba(0,0,0,0.55)]"
        >
          <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 blur-3xl transition-opacity duration-200"
              style={{
                left: glow.x,
                top: glow.y,
                width: 520,
                height: 520,
                opacity: glow.on ? 1 : 0,
                background: "radial-gradient(circle, rgba(56,189,248,0.22) 0%, rgba(99,102,241,0.10) 35%, transparent 70%)",
              }}
            />
          </div>

          <div className="relative flex flex-col lg:flex-row lg:items-start gap-12">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold text-black/70 backdrop-blur
                           dark:bg-white/5 dark:border-white/10 dark:text-white/75"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-30 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                Open to job opportunities
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
                className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight text-black/90 dark:text-white/90"
              >
                Frontend Engineer building <br className="hidden md:block" />
                scalable, accessible web interfaces
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: 0.08 }}
                className="mt-5 text-sm md:text-base text-black/60 dark:text-white/60"
              >
                React • TypeScript • Modern JavaScript • UI/UX-driven development
              </motion.p>

              <motion.section
                id="about"
                variants={revealUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.35 }}
                transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
                className="mt-12 max-w-4xl scroll-mt-32"
              >
                <h2 className="text-xl font-semibold text-black/90 dark:text-white/85">About</h2>

                <p className="mt-6 text-sm md:text-base text-black/65 leading-relaxed dark:text-white/65">
                  I’m Bhavyasri a frontend engineer with a UI/UX mindset. I enjoy building products where design and engineering work
                  together: experiences that look polished, feel intuitive, and stay reliable in real-world use.
                </p>

                <p className="mt-4 text-sm md:text-base text-black/65 leading-relaxed dark:text-white/65">
                  My strength is translating thoughtful UX into clean, scalable React code. I care about component structure, predictable
                  state, accessibility, and performance, the “behind-the-scenes” details that make interfaces feel effortless for users and
                  maintainable for teams.
                </p>

                <p className="mt-4 text-sm md:text-base text-black/65 leading-relaxed dark:text-white/65">
                  Outside of just shipping screens, I’m intentional about how a product communicates: micro-interactions, spacing,
                  typography, and clarity. My goal is to build interfaces that feel professional and human-centered, accessible, and designed
                  with purpose.
                </p>

                <p className="mt-5 text-sm md:text-base text-black/65 leading-relaxed dark:text-white/65">
                  Currently, I’m focused on roles where I can contribute as a strong frontend developer while bringing a design-aware approach
                  to building user-centered products.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {["Frontend + UI/UX", "React + TypeScript", "Accessibility-first", "Clean component architecture"].map((t) => (
                    <span
                      key={t}
                      className="px-4 py-2 rounded-full bg-black/5 text-xs font-medium text-black/70 border border-black/10
                                 dark:bg-white/5 dark:text-white/70 dark:border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.14 }}
                  className="mt-8 flex flex-wrap items-center gap-3"
                >
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl text-sm font-semibold hover:opacity-90 transition
                               dark:bg-white dark:text-black"
                  >
                    <HiOutlineDocumentText className="text-lg" />
                    View Resume
                  </a>

                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center gap-2 border border-black/15 bg-white px-6 py-3 rounded-xl text-sm font-semibold text-black/80 hover:bg-black/5 transition
                               dark:bg-white/5 dark:text-white/80 dark:border-white/10 dark:hover:bg-white/10"
                  >
                    <FiMail className="text-lg" />
                    Email
                  </a>

                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    title="GitHub"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-black/15 bg-white text-black/80 hover:bg-black/5 transition
                               dark:bg-white/5 dark:text-white/80 dark:border-white/10 dark:hover:bg-white/10"
                  >
                    <FaGithub className="text-xl" />
                  </a>

                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-black/15 bg-white text-black/80 hover:bg-black/5 transition
                               dark:bg-white/5 dark:text-white/80 dark:border-white/10 dark:hover:bg-white/10"
                  >
                    <FaLinkedinIn className="text-xl" />
                  </a>
                </motion.div>
              </motion.section>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
              className="w-full max-w-[320px] mx-auto lg:mx-0"
            >
              <div className="bg-white border border-black/10 rounded-3xl shadow-[0_18px_55px_rgba(0,0,0,0.12)] p-2 dark:bg-white/5 dark:border-white/10">
                <img src={profile} alt="Profile" className="rounded-2xl w-full h-[320px] object-cover" decoding="async" />
              </div>
            </motion.div>
          </div>

          <div className="mt-14 border-t border-black/10 dark:border-white/10" />

          <motion.section
            id="skills"
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-12 scroll-mt-32"
          >
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-black/80 dark:text-white/80">Skills</h2>
                <div className="mt-1 text-xs text-black/45 dark:text-white/45">Scroll horizontally →</div>
              </div>
              <div className="hidden md:block text-xs text-black/45 dark:text-white/45">Tip: trackpad / shift + mouse wheel</div>
            </div>

            <div className="relative mt-6">
              <motion.div
                variants={staggerWrap}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="no-scrollbar flex gap-5 overflow-x-auto py-2"
              >
                {skills.map((s) => (
                  <motion.div
                    key={s.title}
                    variants={itemUp}
                    whileHover={{ y: -2, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 420, damping: 28 }}
                    className="min-w-[240px] bg-white border border-black/10 rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.06)] p-5 hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)] transition
                               dark:bg-white/5 dark:border-white/10 dark:shadow-none"
                  >
                    <h3 className="text-sm font-semibold text-black/85 dark:text-white/85">{s.title}</h3>
                    <p className="text-xs text-black/60 mt-3 leading-relaxed dark:text-white/60">{s.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            id="projects"
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-16 scroll-mt-32"
          >
            <div>
              <h2 className="text-lg font-semibold text-black/80 dark:text-white/80">Projects</h2>
              <div className="mt-1 text-xs text-black/45 dark:text-white/45">Deployed work you can try →</div>
            </div>

            <motion.div
              variants={staggerWrap}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {devProjects.map((p) => (
                <motion.div
                  key={p.id}
                  variants={itemUp}
                  whileHover={{ y: -2, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 420, damping: 28 }}
                  className="rounded-2xl border border-black/10 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)] transition p-5
                             dark:bg-white/5 dark:border-white/10 dark:shadow-none"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-xs text-black/45 dark:text-white/45">{p.tag}</div>
                      <div className="mt-1 text-sm font-semibold text-black/85 dark:text-white/85">{p.title}</div>
                    </div>

                    <span className="px-3 py-1 rounded-full bg-black/5 text-[11px] font-semibold text-black/70 border border-black/10
                                     dark:bg-white/10 dark:text-white/70 dark:border-white/10">
                      Live
                    </span>
                  </div>

                  <p className="mt-3 text-xs text-black/60 leading-relaxed dark:text-white/60">{p.summary}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full bg-black/5 text-[11px] font-medium text-black/70 border border-black/10
                                   dark:bg-white/10 dark:text-white/70 dark:border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-black text-white px-4 py-2 text-sm font-semibold hover:opacity-90 transition
                                 dark:bg-white dark:text-black"
                    >
                      <FiExternalLink className="text-base" />
                      Live Demo
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <motion.section
            id="ux"
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-16 scroll-mt-32"
          >
            <div>
              <h2 className="text-lg font-semibold text-black/80 dark:text-white/80">UI/UX Case Studies</h2>
              <div className="mt-1 text-xs text-black/45 dark:text-white/45">Click a card to read →</div>
            </div>

            <motion.div
              variants={staggerWrap}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {uxCases.map((cs) => (
                <motion.button
                  key={cs.id}
                  type="button"
                  onClick={() => handleUXCardClick(cs)}
                  variants={itemUp}
                  whileHover={{ scale: 1.01, y: -2, ...jiggleHover }}
                  transition={{ type: "spring", stiffness: 420, damping: 28 }}
                  className="group text-left rounded-2xl border border-black/10 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)] transition overflow-hidden
                             dark:bg-white/5 dark:border-white/10 dark:shadow-none"
                >
                  <div className="h-36 w-full overflow-hidden bg-black/5 dark:bg-white/5">
                    <img
                      src={cs.image}
                      alt={cs.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="p-4">
                    <div className="text-xs text-black/45 dark:text-white/45">{cs.tag}</div>
                    <div className="mt-1 text-sm font-semibold text-black/85 dark:text-white/85">{cs.title}</div>
                    <div className="mt-2 text-xs text-black/60 leading-relaxed line-clamp-2 dark:text-white/60">{cs.summary}</div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </motion.section>

          <motion.section
            id="motion"
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-16 scroll-mt-32"
          >
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-black/80 dark:text-white/80">Motion Experiments</h2>
                <div className="mt-1 text-xs text-black/45 dark:text-white/45">Click a card to view the full gallery →</div>
              </div>

              <button
                type="button"
                onClick={() => navigate("/motion")}
                className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90
                           dark:bg-white dark:text-black"
              >
                View All
                <FiExternalLink />
              </button>
            </div>

            <motion.div
              variants={staggerWrap}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {motionStudies.map((m) => {
                const src = publicUrl(m.videoSrc);

                return (
                  <motion.button
                    key={m.id}
                    type="button"
                    onClick={() => navigate("/motion")}
                    variants={itemUp}
                    whileHover={{ y: -2, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 420, damping: 28 }}
                    className="text-left rounded-2xl border border-black/10 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)] transition overflow-hidden
                             dark:bg-white/5 dark:border-white/10 dark:shadow-none"
                  >
                    <div className="h-44 w-full bg-black/5 dark:bg-white/5 relative">
                      <video
                        key={src}
                        className="h-full w-full object-cover"
                        muted
                        loop
                        playsInline
                        controls
                        preload="auto"
                        onLoadedData={(e) => {
                          const v = e.currentTarget;
                          v.play().catch(() => {});
                        }}
                      >
                        <source src={src} type="video/mp4" />
                      </video>

                      <div className="pointer-events-none absolute bottom-3 left-3">
                        <span className="text-[11px] font-semibold text-black/40 dark:text-white/35 bg-white/70 dark:bg-black/40 px-3 py-1 rounded-full border border-black/10 dark:border-white/10">
                          Click to open gallery
                        </span>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="text-xs text-black/45 dark:text-white/45">{m.tag}</div>
                      <div className="mt-1 text-sm font-semibold text-black/85 dark:text-white/85">{m.title}</div>
                      <div className="mt-2 text-xs text-black/60 leading-relaxed line-clamp-2 dark:text-white/60">{m.summary}</div>
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>

            <button
              type="button"
              onClick={() => navigate("/motion")}
              className="mt-5 sm:hidden inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90
                         dark:bg-white dark:text-black"
            >
              View All Motion Experiments
              <FiExternalLink />
            </button>
          </motion.section>

          <FigmaEmbed />

          <motion.section
            id="contact"
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-16 border-t border-black/10 pt-12 scroll-mt-32 dark:border-white/10"
          >
            <h2 className="text-lg font-semibold text-black/80 dark:text-white/80">Contact</h2>
            <p className="mt-3 text-sm text-black/60 dark:text-white/60">
              Want to collaborate or interview me? Reach out - I’ll get back to you.
            </p>

            <motion.div
              variants={staggerWrap}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              <motion.div
                variants={itemUp}
                whileHover={{ y: -2, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 420, damping: 28 }}
                className="rounded-2xl border border-black/10 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.06)] p-5 dark:bg-white/5 dark:border-white/10 dark:shadow-none"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs text-black/45 dark:text-white/45">Email</div>
                    <div className="mt-1 text-sm font-semibold text-black/85 break-all dark:text-white/85">{email}</div>
                  </div>
                  <div className="w-10 h-10 rounded-xl border border-black/10 flex items-center justify-center text-black/70 dark:text-white/70 dark:border-white/10">
                    <FiMail className="text-lg" />
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <a
                    href={`mailto:${email}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-black text-white px-4 py-2 text-sm font-semibold hover:opacity-90 transition dark:bg-white dark:text-black"
                  >
                    <FiMail className="text-base" />
                    Email
                  </a>

                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-black/80 hover:bg-black/5 transition
                               dark:bg-white/5 dark:text-white/80 dark:border-white/10 dark:hover:bg-white/10"
                    aria-label="Copy email"
                    title="Copy email"
                  >
                    {copied ? <FiCheck className="text-base" /> : <FiCopy className="text-base" />}
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
              </motion.div>

              <motion.a
                variants={itemUp}
                whileHover={{ y: -2, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 420, damping: 28 }}
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-black/10 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.06)] p-5 hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)] transition
                           dark:bg-white/5 dark:border-white/10 dark:shadow-none"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs text-black/45 dark:text-white/45">GitHub</div>
                    <div className="mt-1 text-sm font-semibold text-black/85 dark:text-white/85">View my work</div>
                    <div className="mt-2 text-xs text-black/60 dark:text-white/60">Projects, components, and experiments</div>
                  </div>
                  <div className="w-10 h-10 rounded-xl border border-black/10 flex items-center justify-center text-black/70 dark:text-white/70 dark:border-white/10">
                    <FaGithub className="text-lg" />
                  </div>
                </div>
              </motion.a>

              <motion.a
                variants={itemUp}
                whileHover={{ y: -2, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 420, damping: 28 }}
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-black/10 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.06)] p-5 hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)] transition
                           dark:bg-white/5 dark:border-white/10 dark:shadow-none"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs text-black/45 dark:text-white/45">LinkedIn</div>
                    <div className="mt-1 text-sm font-semibold text-black/85 dark:text-white/85">Let’s connect</div>
                    <div className="mt-2 text-xs text-black/60 dark:text-white/60">Message me for roles & collaborations</div>
                  </div>
                  <div className="w-10 h-10 rounded-xl border border-black/10 flex items-center justify-center text-black/70 dark:text-white/70 dark:border-white/10">
                    <FaLinkedinIn className="text-lg" />
                  </div>
                </div>
              </motion.a>
            </motion.div>
          </motion.section>

          <div className="mt-12 border-t border-black/10 pt-6 dark:border-white/10">
            <p className="text-xs text-black/45 dark:text-white/45">© 2026 Bhavyasri • Built with React + Tailwind</p>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activeUX && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveUX(null)}
          >
            <motion.div
              className="w-full max-w-xl rounded-3xl bg-white border border-black/10 shadow-[0_30px_90px_rgba(0,0,0,0.25)] overflow-hidden dark:bg-[#0f172a] dark:border-white/10"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={`${activeUX.title} case study`}
            >
              <div className="h-44 w-full overflow-hidden bg-black/5 dark:bg-white/5">
                <img
                  src={activeUX.image}
                  alt={activeUX.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="p-6">
                <div className="text-xs text-black/45 dark:text-white/45">{activeUX.tag}</div>
                <div className="mt-1 text-xl font-bold text-black/90 dark:text-white/90">{activeUX.title}</div>
                <p className="mt-3 text-sm text-black/65 leading-relaxed dark:text-white/65">{activeUX.summary}</p>

                <div className="mt-5">
                  <div className="text-sm font-semibold text-black/80 dark:text-white/80">Highlights</div>
                  <ul className="mt-2 space-y-2 text-sm text-black/60 dark:text-white/60">
                    {activeUX.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-black/40 dark:bg-white/40" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex justify-between items-center">
                  {activeUX.id === "appointment" ? (
                    <button
                      className="px-4 py-2 rounded-xl border border-black/15 bg-white text-black text-sm font-semibold hover:bg-black/5 transition
                                 dark:bg-white dark:text-black dark:border-white/10"
                      onClick={openFullCaseStudy}
                    >
                      View Full Case Study
                    </button>
                  ) : (
                    <div />
                  )}

                  <button
                    className="px-4 py-2 rounded-xl bg-black text-white text-sm font-semibold hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-black/30
                               dark:bg-white dark:text-black dark:focus:ring-white/30"
                    onClick={() => setActiveUX(null)}
                  >
                    Close
                  </button>
                </div>

                <div className="mt-3 text-[11px] text-black/45 dark:text-white/45">
                  Tip: Press <span className="font-semibold text-black/60 dark:text-white/70">Esc</span> to close
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Analytics />
    </div>
  );
}