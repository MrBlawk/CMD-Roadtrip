
let sections = gsap.utils.toArray(".city");
let car = document.querySelector(".van-img");
let scrollLength = 3500;
car.autoAlpha = 0;

let bg = document.getElementById("bg-parallax");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1.5),
  ease: "none",
  scrollTrigger: {
    trigger: "#levelThree",
    start: "0",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length -1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=" + scrollLength,
    markers: true
  }
});


gsap.to(car, {
    xPercent: window.innerWidth - 100,
    scrollTrigger:{
        trigger: "#levelThree",
        start: "0",
        scrub: 2,
        end: "+=" + scrollLength,
        markers: true
    }
})

gsap.to(car, {
    autoAlpha: 0,
    scrollTrigger:{
        trigger: "#levelFour",
        start: "-=1000",
        scrub: 1,
        markers: true,
        end: "+=50",

    }
})

gsap.to(bg, {
    xPercent: -20,
    scrollTrigger:{
        trigger: "#levelThree",
        start: "0",
        scrub: 1,
        end: "+=" + scrollLength,
    }
})




