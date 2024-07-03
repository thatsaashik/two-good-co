function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
locomotiveAnimation();

function navbarAnimation() {
  gsap.to("#nav-part1 svg", {
    transform: "translateY(-100%)",
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top 0",
      end: "top -5%",
      scrub: true,
      // markers: true,
    },
  });
  gsap.to("#nav-part2 #links", {
    transform: "translateY(-100%)",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top 0",
      end: "top -5%",
      scrub: true,
    },
  });
  var tl = gsap.timeline();
  tl.from("#nav-part2", {
    y: -30,
    opacity: 0,
    duration: 1,
  });
  tl.from("svg", {
    x: -110,
    duration: 1,
    opacity: 0,
  });
}
navbarAnimation();

function videoconAnimation() {
  var videocon = document.querySelector("#video-container");
  var playbtn = document.querySelector("#play");
  videocon.addEventListener("mouseenter", function () {
    gsap.to(playbtn, {
      scale: 1,
      opacity: 1,
    });
  });
  videocon.addEventListener("mouseleave", function () {
    gsap.to(playbtn, {
      scale: 0,
      opacity: 0,
    });
  });
  document.addEventListener("mousemove", function (dets) {
    gsap.to(playbtn, {
      left: dets.x - 70,
      top: dets.y - 80,
    });
  });
}
videoconAnimation();

function loadinganimation() {
  gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.3,
  });
  gsap.from("#page1 #video-container", {
    scale: 0.9,
    opacity: 0,
    delay: 1.3,
    duration: 0.5,
  });
}
loadinganimation();

function part2detsko() {
  gsap.from("#page2 .elem .dets1 i", {
    x: -300,

    duration: 1,
    rotate: 360,
    scrollTrigger: {
      trigger: "#page2 .elem .dets1 span",
      scroller: "#main",
      // markers: true,
      start: "top 90%",
      // end: "top 30%",
    },
  });

  gsap.from("#page2 .elem .dets1 span", {
    x: 300,

    duration: 2,

    scrollTrigger: {
      trigger: "#page2 .elem .dets1 span",
      scroller: "#main",
      // markers: true,
      start: "top 90%",

      // end: "top 30%",
    },
  });

  gsap.from("#page2 .elem .dets2 i", {
    x: -300,

    duration: 1,
    rotate: 360,
    scrollTrigger: {
      trigger: "#page2 .elem .dets2 span",
      scroller: "#main",
      // markers: true,
      start: "top 90%",
      // end: "top 30%",
    },
  });

  gsap.from("#page2 .elem .dets2 span", {
    x: 300,

    duration: 2,

    scrollTrigger: {
      trigger: "#page2 .elem .dets2 span",
      scroller: "#main",
      // markers: true,
      start: "top 90%",

      // end: "top 30%",
    },
  });

  gsap.from("#page2 .elem .dets3 i", {
    x: -300,

    duration: 1,
    rotate: 360,
    scrollTrigger: {
      trigger: "#page2 .elem .dets3 span",
      scroller: "#main",
      // markers: true,
      start: "top 90%",
      // end: "top 30%",
    },
  });

  gsap.from("#page2 .elem .dets3 span", {
    x: 300,

    duration: 2,

    scrollTrigger: {
      trigger: "#page2 .elem .dets3 span",
      scroller: "#main",
      // markers: true,
      start: "top 90%",

      // end: "top 30%",
    },
  });
}
part2detsko();

function part3child() {
  gsap.from("#page3 .child", {
    y: 150,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: "#page3 .child",
      scroller: "#main",
      // markers: true,
      start: "top 70%",
    },
  });
}
part3child();

function part4() {
  gsap.from(".page4 .page4-content", {
    y: 300,
    duration: 1.4,
    opacity: 0,
    scrollTrigger: {
      trigger: ".page4 .page4-content",
      scroller: "#main",
      // markers: true,
      start: "top 80%",
    },
  });
  gsap.from(".page5  p", {
    y: 300,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
      trigger: ".page4 .page4-content",
      scroller: "#main",
      // markers: true,
      start: "top 80%",
    },
  });
}
part4();
function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      left: dets.x,
      top: dets.y,
    });
  });

  document.querySelectorAll(".child").forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(1)",
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(0)",
      });
    });
  });
}
cursorAnimation();
