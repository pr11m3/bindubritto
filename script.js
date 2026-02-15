function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

function gotoLogin() {
    window.location.href = "https://bindubritto.itsamiul.top";
}
function showCourses() {
    document.getElementById("courses").scrollIntoView({
        behavior: "smooth"
    });
}

function jumpReg() {
    window.location.href = "https://bindubritto.itsamiul.top";
}

const logo = document.querySelector(".nav-left")
const footerLogo = document.querySelector(".footer-container .logo")
logo.addEventListener("click", () => scrollToTop())
footerLogo.addEventListener("click", () => scrollToTop())
window.addEventListener("load", () => scrollToTop())

function gsapAnimation() {
    let mm = gsap.matchMedia();

    // -----------------------------
    // DESKTOP & TABLET ANIMATIONS
    // -----------------------------
    mm.add("(min-width: 769px)", () => {
        const tl = gsap.timeline();

        // Navbar & Hero
        tl.from(".nav-left,.nav-center li,.nav-right button", {
            y: -100,
            duration: 0.6,
            stagger: 0.3,
        });
        tl.from(".hero-section-title", { x: -300, opacity: 0, duration: 0.8 }, "firstHeroSet");
        tl.from(".hero-section-desc", { x: 300, opacity: 0, duration: 0.8 }, "firstHeroSet");
        tl.from(".hero-image", { scale: 0, duration: 1 }, "heroImages");
        tl.from(".hero-section-image .extra-shape", {
            width: "10%",
            duration: 1,
            scrollTrigger: { trigger: ".extra-shape", start: "top 50%", end: "top top", scrub: 2 }
        }, "heroImages");

        // Features
        tl.from(".feature", {
            scale: 0,
            duration: 2,
            stagger: 0.3,
            scrollTrigger: { trigger: ".feature", start: "top 90%", end: "top 60%", scrub: 2 }
        });

        // Courses
        tl.from(".course-section-title", {
            y: 100,
            opacity: 0,
            duration: 1,
            scrollTrigger: { trigger: ".course-section-title", start: "top 90%", end: "top 85%", scrub: 2 }
        });
        tl.from(".hero-section-two .left", {
            scale: 0,
            x: "-100%",
            duration: 1,
            scrollTrigger: {
                trigger: ".hero-section-two .left",
                start: "top 100%",
                end: "top 50%",
                scrub: 2
            }
        }, "secondHeroSet")
        tl.from(".hero-section-two .right div", {
            x: "100%",
            duration: 1,
            stagger: .2,
            scrollTrigger: {
                trigger: ".hero-section-two .right div",
                start: "top 70%",
                end: "top 30%",
                scrub: 2
            }
        }, "secondHeroSet")
        tl.from(".course", {
            scale: 0,
            duration: 2,
            stagger: 0.3,
            scrollTrigger: { trigger: ".course", start: "top 90%", end: "top 85%", scrub: 2 }
        });

        // Process
   
        // -----------------------------
        // INSTRUCTORS SECTION DESKTOP
        // -----------------------------
        tl.from(".instructors-section", {
            scale: 0,
            opacity: 0,
            duration: 1,
            scrollTrigger: { trigger: ".instructors-section", start: "top 100%", end: "top 96%", scrub: 2 }
        });

        // Instructor cards with combined timeline per card
        gsap.utils.toArray(".instructors-section .instructor-card").forEach(card => {
            const cardTl = gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                    start: "top 100%", end: "top 96%",
                    scrub: 1,
                    immediateRender: false
                }
            });

            cardTl.from(card, { y: 100, scale: 0.8, opacity: 0, duration: 0.8, immediateRender: false })
                .from(card.querySelector("img"), { scale: 0, opacity: 0, duration: 0.6 }, "-=0.4")
                .from(card.querySelector("h3"), { y: 20, opacity: 0, duration: 0.5 }, "-=0.4")
                .from(card.querySelector("p"), { y: 20, opacity: 0, duration: 0.5 }, "-=0.4");
        });

        // -----------------------------
        // Footer (desktop)
        // -----------------------------
        gsap.from(".footer .extra-shape", {
            width: "10%",
            duration: 1,
            scrollTrigger: { trigger: ".footer .extra-shape", start: "top 100%", end: "top 93%", toggleActions: "play none none reverse" }
        });
        gsap.from(".footer-container", {
            scale: 0,
            duration: 1,
            scrollTrigger: { trigger: ".footer-container", start: "top 100%", end: "top 95%", toggleActions: "play none none reverse" }
        });
        gsap.from(".footer-container .left div", {
            y: 200, x: -500,
            duration: 2, stagger: 0.3,
            scrollTrigger: { trigger: ".footer-container .left div", start: "top 100%", end: "top 95%", toggleActions: "play none none reverse" }
        });
        gsap.from(".link-set li", {
            y: 200, x: 500,
            duration: 2, stagger: 0.3,
            scrollTrigger: { trigger: ".link-set li", start: "top 100%", end: "top 95%", toggleActions: "play none none reverse" }
        });
    });

    // -----------------------------
    // MOBILE ANIMATIONS
    // -----------------------------
    mm.add("(max-width: 768px)", () => {
        const tl = gsap.timeline();

        // Navbar
        tl.from(".nav-left,.nav-center li,.nav-right button", { y: -100, duration: 0.6, stagger: 0.3 });

        // Hero Section
        tl.from(".hero-section-title", { x: -300, opacity: 0, duration: 0.8 }, "firstHeroSet");
        tl.from(".hero-section-desc", { x: 300, opacity: 0, duration: 0.8 }, "firstHeroSet");
        tl.from(".hero-image", { scale: 0, duration: 1 }, "heroImages");
        tl.from(".hero-section-two .left", {
            scale: 0,
            x: "-100%",
            duration: 1,
            scrollTrigger: {
                trigger: ".hero-section-two .left",
                start: "top 100%",
                end: "top 50%",
                scrub: 2
            }
        }, "secondHeroSet")
        tl.from(".hero-section-two .right div", {
            x: "100%",
            duration: 1,
            stagger: .2,
            scrollTrigger: {
                trigger: ".hero-section-two .right div",
                start: "top 70%",
                end: "top 30%",
                scrub: 2
            }
        }, "secondHeroSet")

        // Features
        tl.from(".feature", { scale: 0, duration: 2, stagger: 0.3, scrollTrigger: { trigger: ".feature", start: "top 90%", end: "top 60%", scrub: 2 } });

        // Courses
        tl.from(".course-section-title", { y: 100, opacity: 0, duration: 1, scrollTrigger: { trigger: ".course-section-title", start: "top 80%", end: "top 70%", scrub: 2 } });
        tl.from(".course", { scale: 0, duration: 2, stagger: 0.3, scrollTrigger: { trigger: ".course", start: "top 90%", end: "top 70%", scrub: 2 } });

      
        // -----------------------------
        // INSTRUCTORS SECTION MOBILE
        // -----------------------------
        gsap.from(".instructors-section", {
            scale: 0,
            opacity: 0,
            duration: 1,
            scrollTrigger: { trigger: ".instructors-section", start: "top 100%", end: "top 95%", scrub: 2 }
        });

        gsap.utils.toArray(".instructors-section .instructor-card").forEach(card => {
            const cardTl = gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                   start: "top 100%", end: "top 96%",
                    scrub: 1,
                    immediateRender: false
                }
            });

            cardTl.from(card, { y: 100, scale: 0.8, opacity: 0, duration: 0.8, immediateRender: false })
                .from(card.querySelector("img"), { scale: 0, opacity: 0, duration: 0.6 }, "-=0.4")
                .from(card.querySelector("h3"), { y: 20, opacity: 0, duration: 0.5 }, "-=0.4")
                .from(card.querySelector("p"), { y: 20, opacity: 0, duration: 0.5 }, "-=0.4");
        });

        // Footer (mobile)
        gsap.from(".footer .extra-shape", {
            width: "10%",
            duration: 1,
            scrollTrigger: { trigger: ".footer .extra-shape", start: "top 100%", end: "top 99%", toggleActions: "play none none reverse" }
        });
        gsap.from(".footer-container", {
            scale: 0,
            duration: 1,
            scrollTrigger: { trigger: ".footer-container", start: "top 100%", end: "top 99%", toggleActions: "play none none reverse" }
        });
        gsap.from(".footer-container .left div", {
            y: 200, x: -500,
            duration: 2, stagger: 0.3,
            scrollTrigger: { trigger: ".footer-container .left div", start: "top 100%", end: "top 99%", toggleActions: "play none none reverse" }
        });
        gsap.from(".link-set li", {
            y: 200, x: 500,
            duration: 2, stagger: 0.3,
            scrollTrigger: { trigger: ".link-set li", start: "top 100%", end: "top 99%", toggleActions: "play none none reverse" }
        });
    });
}

// Register plugin and refresh after load
window.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    window.addEventListener("load", () => ScrollTrigger.refresh());

    gsapAnimation();
});
