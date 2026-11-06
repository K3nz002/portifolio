gsap.registerEffect({
  name: "reveal",
  defaults: { duration: 0.8, y: 30, opacity: 0 },
  effect: (targets, config) =>
    gsap.from(targets, {
      duration: config.duration,
      y: config.y,
      opacity: config.opacity,
      ease: "power3.out",
      stagger: 0.12
    })
});

gsap.utils.toArray("section h2, .projeto, .skills-grid > div").forEach(el => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%"
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  });
});