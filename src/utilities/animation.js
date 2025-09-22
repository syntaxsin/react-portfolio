export const SlideRight = (delay = 0) => ({
  hidden: {
    opacity: 0,
    x: -100,
    transition: { duration: 0.4, delay },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay },
  },
});

export const SlideLeft = (delay = 0) => ({
  hidden: {
    opacity: 0,
    x: 100,
    transition: { duration: 0.4, delay },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay },
  },
});

export const SlideUp = (delay = 0) => ({
  hidden: {
    opacity: 0,
    y: -100,
    transition: { duration: 0.4, delay },
  },
  visible: {
    opacity: 1,
    y: -100,
    transition: { duration: 0.6, delay },
  },
});