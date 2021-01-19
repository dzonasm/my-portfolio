let tl = gsap.timeline()

tl.add(gsap.from(".my-hero", { duration: 1.5, scale: 1, opacity: 0.5 }))
    .from(".anim1", { duration: 1, opacity: 0, y: 30, stagger: 0.2 })
    .from(".nav-item", { duration: 1, x: 50, opacity: 0, stagger: 0.1 }, "-=2")
    .from(".logo", { duration: 1, opacity: 0 }, "-=1")