const t1 = gsap.timeline();

t1.from(".crescent", {
  opacity: 0,
  y: 400,
  duration: 1.3,
})
  .from(".mosque", {
    opacity: 0,
    y: -200,
    duration: 1.3,
  })
  .from(".Word", {
    opacity: 0,
    duration: 1.2,
  });
