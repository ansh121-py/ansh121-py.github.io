gsap.registerPlugin(ScrollTrigger);

/* Left text moves right */
gsap.to(".hello-left", {
  x: "70vw",
  scrollTrigger: {
    scrub: true
  }
});

/* Right text moves left */
gsap.to(".hello-right", {
  x: "-70vw",
  scrollTrigger: {
    scrub: true
  }
});
