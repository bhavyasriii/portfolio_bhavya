export type MotionStudy = {
  id: string;
  title: string;
  tag: string;
  summary: string;
  videoSrc: string; // /public path like "/motion/airpods-motion.mp4"
  bullets: string[];
  moreUrl?: string;
};

export const motionStudies: MotionStudy[] = [
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

  // ✅ Add more designs like this (point to other mp4 files in /public/motion/)
     {
  id: "outfit-carousel",
  title: "AI Outfit Recommendation Carousel",
  tag: "UI Interaction • Motion-driven browsing",
  summary:
    "A motion-driven carousel experience designed to guide users through outfit recommendations using peek interaction, auto-swiping, and depth-based focus.",

  videoSrc: "/motion/outfit-carousel.mp4",

  bullets: [
    "Peek interaction reveals adjacent options for better discoverability",
    "Auto-swiping creates a guided, effortless browsing flow",
    "Center card remains in focus while side cards are scaled and blurred",
    "Dynamic background tones enhance visual storytelling",
    "Designed to reduce decision fatigue and improve exploration"
  ],
},
];