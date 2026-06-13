document.addEventListener("DOMContentLoaded", () => {

    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }

    if (typeof gsap !== 'undefined') {
        
        // Register ScrollTrigger plugin safely
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
    }
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari) {
        const glassElements = document.querySelectorAll("[class*='backdrop-blur']");
        glassElements.forEach(el => {
            
            el.style.webkitBackdropFilter = "blur(8px)"; 
        });
    }
});