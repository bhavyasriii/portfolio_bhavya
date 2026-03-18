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
  // {
  //   id: "nike-hover",
  //   title: "Nike Card Hover Study",
  //   tag: "Micro-interaction • Hover",
  //   summary: "A subtle hover lift + glow + image parallax study for product cards.",
  //   videoSrc: "/motion/nike-hover.mp4",
  //   bullets: ["Hover → lift", "Glow → focus", "Image parallax → depth"],
  // },
];