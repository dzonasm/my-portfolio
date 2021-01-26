let tl = gsap.timeline();

gsap.registerPlugin(ScrollTrigger);

tl.add(gsap.from(".my-hero", { duration: 1.5, opacity: 0.5 }))
    .from(".anim1", { duration: 1, opacity: 0, y: 30, stagger: 0.2 })
    .from(".nav-item", { duration: 1, x: 50, opacity: 0, stagger: 0.1 }, "-=2")
    .from(".logo", { duration: 1, opacity: 0 }, "-=1")


let tl2 = gsap.timeline({
    scrollTrigger: '.anim2'
});

tl2.add(
    gsap.from('.anim2', { duration: 1, stagger: 0.2, y: 30, opacity: 0 }))
    .from('.portfolio-image', { duration: 1.5, stagger: 0.2, opacity: 0 })

let tl3 = gsap.timeline({
    scrollTrigger: '.skills-desc'
})

tl3.add(
    gsap.from(".skills-desc", { duration: 0.5, y: 40, opacity: 0, stagger: 0.3 }))
    .from('.skill-svg', { duration: 0.1, stagger: 0.1, opacity: 0, x: 10 })






// ScrollTrigger.create({
//     trigger: "#id",
//     start: "top top",
//     endTrigger: "#otherID",
//     end: "bottom 50%+=100px",
//     onToggle: self => console.log("toggled, isActive:", self.isActive),
//     onUpdate: self => {
//       console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
//     }
//   });