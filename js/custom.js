
        function myFunction(x) {
            if (x.matches) { // If media query matches
                gsap.timeline({
                scrollTrigger: {
                trigger: ".trigger",
                scrub: 0.5,
                pin: true,
                start: "top top",
                end: "+=150%"
                }
            })
            .to("#sec_right", {
                force3D: true, 
                duration: 1,
                xPercent: 100,
                ease: "power1.inOut",
                stagger: { amount: 1 }
            })
            .to("#sec_right", { ease: "power1.out", duration: 1, translateX: "50%" }, 0)
            
    
            gsap.timeline({
                scrollTrigger: {
                trigger: ".trigger",
                scrub: 0.5,
                pin: true,
                start: "top top",
                end: "+=150%"
                }
            })
            .to("#sec_left", {
                force3D: true, 
                duration: 1,
                xPercent: -100,
                ease: "power1.inOut",
                stagger: { amount: 1 }
            })
            .to("#sec_left", { ease: "power1.out", duration: 1, translateX: "-50%" }, 0)
            } else {
                gsap.timeline({
                scrollTrigger: {
                trigger: ".trigger",
                scrub: 0.5,
                pin: true,
                start: "top top",
                end: "+=150%"
                }
            })
            .to("#sec_right", {
                force3D: true, 
                duration: 1,
                xPercent: 0,
                ease: "power1.inOut",
                stagger: { amount: 1 }
            })
            .to("#sec_right", { ease: "power1.out", duration: 1, translateX: "00%" }, 0)
            
    
            gsap.timeline({
                scrollTrigger: {
                trigger: ".trigger",
                scrub: 0.5,
                pin: true,
                start: "top top",
                end: "+=150%"
                }
            })
            .to("#sec_left", {
                force3D: true, 
                duration: 1,
                xPercent: -0,
                ease: "power1.inOut",
                stagger: { amount: 1 }
            })
            .to("#sec_left", { ease: "power1.out", duration: 1, translateX: "-0%" }, 0)
            }
            }
    
            var x = window.matchMedia("(min-width: 768px)")
            myFunction(x) // Call listener function at run time
            x.addListener(myFunction) // Attach listener function on state changes
    
           
    