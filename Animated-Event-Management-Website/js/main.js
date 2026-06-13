document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Counter Animation Logic
    const counters = document.querySelectorAll('.stat-number');
    const speed = 100; // Counter animation speed

    const startCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = parseInt(counter.getAttribute('data-target'));
                
                // FIXED: Agar innerText khali ho ya number na ho, to ye 0 se shuru karega
                const count = parseInt(counter.innerText) || 0; 
                
                // Dynamic increment taake saare numbers ek sath target hit karein
                const increment = Math.ceil(target / speed);

                if (count < target) {
                    counter.innerText = count + increment > target ? target : count + increment;
                    setTimeout(updateCount, 15);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    // Intersection Observer: Jab user scroll karke section tak aaye tabhi chale
    const statsSection = document.querySelector('.statistics-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                startCounters();
                observer.unobserve(entry.target); // Ek baar chalne ke baad dobara trigger na ho
            }
        });
    }, { threshold: 0.2 });

    if(statsSection) {
        observer.observe(statsSection);
    }

    // 2. Responsive Hamburger Menu Logic
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if(hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
    }
});