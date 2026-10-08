// Single motion language for the whole site: same distance, duration and ease everywhere.
export const easeOut = [0.22, 1, 0.36, 1] as const;
export const DURATION = 0.6;
export const DISTANCE = 16;

export const fadeUp = {
  hidden: { opacity: 0, y: DISTANCE },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION, ease: easeOut } },
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

// Scroll reveal: spread onto a motion element.
export const reveal = {
  variants: fadeUp,
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, margin: "-80px" },
} as const;

// Mount reveal (hero, detail pages): spread onto a motion element, optional delay.
export const enter = (delay = 0) => ({
  initial: { opacity: 0, y: DISTANCE },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: DURATION, ease: easeOut },
});
