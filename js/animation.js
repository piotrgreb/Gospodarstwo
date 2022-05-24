gsap.registerPlugin(ScrollTrigger);

const text = document.querySelector(".content__text");
const imageQuote = document.querySelector(".content__section-quote figure img");
const btnBaner = document.querySelector(".baner__link");
let tl = gsap.timeline({ duration: 1 });
let tl2 = gsap.timeline({scrollTrigger: { trigger: ".footer__content", start: "top 70%" },});
let tl3 = gsap.timeline({ duration: 1 });

tl.fromTo(
  ".baner",
  { opacity: 0, scale: 1.1 },
  { scale: 1, opacity: 1, duration: 2, ease: "power4" }
)
  .from(".baner__title img", { opacity: 0 })
  .from(".baner__title-1", { opacity: 0 })
  .from(".baner__title-2", { opacity: 0 })
  .fromTo(".baner__scroll", { y: -300, opacity: 0 }, { y: 0, opacity: 1 })
  .fromTo(".baner__arrow", { y: -50, opacity: 0 }, { y: 0, opacity: 1 });

gsap.fromTo(
  text.children,
  { y: "+=50", opacity: 0 },
  {
    y: 0,
    opacity: 1,
    stagger: 0.2,
    duration: 2,
    ease: "easeInOut",
    scrollTrigger: ".content__text",
  }
);

gsap.from(".content__desc-text", {
  opacity: 0,
  x: 100,
  duration: 1,
  stagger: 1,
  scrollTrigger: ".content__desc-text",
});

gsap.fromTo(
  ".content__desc-text2",
  { y: "+=50", opacity: 0 },
  {
    y: 0,
    opacity: 1,
    stagger: 0.2,
    duration: 2,
    ease: "easeInOut",
    scrollTrigger: ".content__desc-text2",
  }
);


btnBaner.addEventListener("click", function () {
  gsap.to(window, { scrollTo: "#content", duration: 2 });
});


tl2
  .from(".footer__content h2", {
    opacity: 0,
    y: 50,
  })
  .from(".footer__content p", {
    opacity: 0,
    y: 50,
  });
gsap.fromTo(
  ".footer__line",
  { scaleX: 0 },
  {
    opacity: 1,
    scaleX: 1,
    duration: 2,
    scrollTrigger: { trigger: ".footer__content", start: "top 70%" },
  }
);



const scrollHover = document.querySelector(".baner__scroll");

scrollHover.addEventListener("mouseover", () => {
  tl3.fromTo(".baner__arrow", { y: 0 }, { y: 10, duration: 1 });

  console.log(tl3.isActive());
});

scrollHover.addEventListener("mouseleave", () => {
  tl3.fromTo(".baner__arrow", { y: 10 }, { y: 0, rotate: 0, duration: 1 });
});

tl3.killTweensOf(".baner__arrow");
