document.addEventListener("DOMContentLoaded", () => {

   
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }

 
    if (typeof gsap !== 'undefined') {
        
       
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }
        gsap.from(".speaker-card", {
            scrollTrigger: {
                trigger: ".speakers-section", 
                start: "top 80%",            
                toggleActions: "play none none none" 
            },
            opacity: 0,
            y: 60,                
            scale: 0.95,          
            duration: 0.8,        
            stagger: 0.2,         
            ease: "power2.out"    
        });
        gsap.from(".grid > .group", {
            scrollTrigger: {
                trigger: ".grid",          
                start: "top 85%",          
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,                         
            scale: 0.9,               
            duration: 0.7,
            stagger: 0.15,                 
            ease: "back.out(1.2)"          
        });


        gsap.from("header, [class*='backdrop-blur']", {
            scrollTrigger: {
                trigger: "header",
                start: "top 90%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: -30,
            duration: 0.8,
            ease: "power3.out"
        });
        const magneticElements = document.querySelectorAll("button, .cursor-pointer, .back-btn");
        magneticElements.forEach(btn => {
            btn.addEventListener("mousemove", (e) => {
                const bound = btn.getBoundingClientRect();
                const x = e.clientX - bound.left - (bound.width / 2);
                const y = e.clientY - bound.top - (bound.height / 2);
                
                gsap.to(btn, {
                    x: x * 0.35, 
                    y: y * 0.35,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
            
            btn.addEventListener("mouseleave", () => {
                gsap.to(btn, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: "elastic.out(1, 0.3)" 
                });
            });
        });
        gsap.from(".event-info-block, .timeline-item", {
            scrollTrigger: {
                trigger: ".timeline-item", 
                start: "top 85%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            x: -40, 
            duration: 0.6,
            stagger: 0.1,
            ease: "power1.out"
        });

    }
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari) {
    
        const glassElements = document.querySelectorAll("[class*='backdrop-blur']");
        glassElements.forEach(el => {
           
            el.style.webkitBackdropFilter = "blur(8px)"; 
        });
    }
});