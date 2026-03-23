gsap.registerPlugin(ScrollTrigger, Draggable);

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".horizontal-container");

    // 1. 가로 스크롤 매니저
    let scrollTween = gsap.to(container, {
        x: () => -(container.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
            trigger: ".horizontal-wrapper",
            pin: true,
            scrub: 1.2,
            end: () => "+=" + container.scrollWidth,
            onUpdate: (self) => {
                const p = Math.round(self.progress * 100);
                document.querySelector(".progress-bar").style.width = p + "%";
                document.querySelector(".progress-label span").innerText = p + "%";
            }
        }
    });

    // 2. 물리 커서 시스템 (Lerp 지연 효과)
    const dot = document.querySelector(".cursor-dot");
    const follower = document.querySelector(".cursor-follower");
    
    window.addEventListener("mousemove", (e) => {
        gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.1 });
        gsap.to(follower, { x: e.clientX - 20, y: e.clientY - 20, duration: 0.4, ease: "power2.out" });
    });

    // 호버 감지
    const interactives = document.querySelectorAll(".interactive, .draggable-receipt");
    interactives.forEach(el => {
        el.addEventListener("mouseenter", () => document.body.classList.add("is-hovering"));
        el.addEventListener("mouseleave", () => document.body.classList.remove("is-hovering"));
    });

    // 3. 타이포 분리 애니메이션 (Section 01)
    gsap.to(".st-left", {
        x: -200,
        scrollTrigger: { trigger: ".sec-hero", containerAnimation: scrollTween, scrub: true }
    });
    gsap.to(".st-right", {
        x: 200,
        scrollTrigger: { trigger: ".sec-hero", containerAnimation: scrollTween, scrub: true }
    });

    // 4. 배경 패럴럭스 (RADICAL 텍스트)
    gsap.to(".bg-parallax-text", {
        x: 500,
        scrollTrigger: { trigger: ".sec-hero", containerAnimation: scrollTween, scrub: true }
    });

    // 5. 이미지 리빌 (Clip-path)
    gsap.to(".hero-image-wrap", {
        clipPath: "inset(0 0% 0 0)",
        scrollTrigger: {
            trigger: ".sec-hero",
            containerAnimation: scrollTween,
            start: "left 60%",
            toggleActions: "play none none reverse"
        }
    });
    gsap.to(".hero-image-wrap img", {
        scale: 1,
        scrollTrigger: { trigger: ".sec-hero", containerAnimation: scrollTween, scrub: true }
    });

    // 6. 리스트 호버 플로팅 이미지 (Section 03)
    const listItems = document.querySelectorAll(".list-item");
    const floatImg = document.querySelector(".floating-img");
    
    listItems.forEach(item => {
        item.addEventListener("mousemove", (e) => {
            const url = item.dataset.img;
            floatImg.style.backgroundImage = `url(${url})`;
            gsap.to(floatImg, { opacity: 1, scale: 1, x: e.clientX + 20, y: e.clientY - 200, duration: 0.5 });
        });
        item.addEventListener("mouseleave", () => {
            gsap.to(floatImg, { opacity: 0, scale: 0.8, duration: 0.3 });
        });
    });

    // 7. 영수증 드래그 활성화 (Section 04)
    Draggable.create(".draggable-receipt", {
        type: "x,y",
        edgeResistance: 0.5,
        bounds: ".sec-footer",
        inertia: true
    });
});


// 새로 추가
// 기존 JS 하단 혹은 적절한 위치에 추가

// 8. Section 04: 텍스트 등장 (Fade-in & Up)
gsap.from(".np-intro .np-message", {
    y: 50, opacity: 0, duration: 1,
    scrollTrigger: {
        trigger: ".sec-notepad",
        containerAnimation: scrollTween,
        start: "left 80%",
    }
});

// 9. Section 04: 제품 패럴럭스 (다른 속도로 이동)
gsap.utils.toArray(".np-content[data-speed]").forEach(el => {
    const speed = el.dataset.speed;
    gsap.to(el, {
        x: -150 * speed,
        scrollTrigger: {
            trigger: ".sec-notepad",
            containerAnimation: scrollTween,
            scrub: true
        }
    });
});

// 10. 이미지 리빌 (이미 기존 reveal-mask 로직이 있으므로 자동 적용되나, 커스텀 필요시)
gsap.to(".np-img-box", {
    clipPath: "inset(0 0% 0 0)",
    scrollTrigger: {
        trigger: ".np-experience",
        containerAnimation: scrollTween,
        start: "left 70%",
        toggleActions: "play none none reverse"
    }
});

// 11. 종이 페이지 넘김 효과 (Hover 시 clip-path 애니메이션)
const papers = document.querySelectorAll(".np-item");
papers.forEach(paper => {
    paper.addEventListener("mouseenter", () => {
        // 호버 시 살짝 접히는 듯한 느낌
        gsap.to(paper, { 
            clipPath: "polygon(0% 0%, 85% 0%, 100% 15%, 100% 100%, 0% 100%)", 
            duration: 0.4 
        });
        document.body.classList.add("is-hovering");
    });
    paper.addEventListener("mouseleave", () => {
        gsap.to(paper, { 
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", 
            duration: 0.4 
        });
        document.body.classList.remove("is-hovering");
    });
});

// 12. 브랜드 타이포 패럴럭스 (역방향 이동)
gsap.to(".np-brand-link", {
    x: 100,
    scrollTrigger: {
        trigger: ".sec-notepad",
        containerAnimation: scrollTween,
        scrub: true
    }
});

// 기존 스크립트 내 DOMContentLoaded 이벤트 안에 추가

const backBtn = document.querySelector(".back-to-project");

// 1. 커서 호버 클래스 연결 (기존 로직 활용)
backBtn.addEventListener("mouseenter", () => {
    document.body.classList.add("is-hovering");
    gsap.to(".cursor-text", { opacity: 1, scale: 1, textContent: "BACK" });
});

backBtn.addEventListener("mouseleave", () => {
    document.body.classList.remove("is-hovering");
    gsap.to(".cursor-text", { opacity: 0, scale: 0 });
});

// 2. 클릭 시 페이지 전환 애니메이션 (선택 사항)
backBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const targetUrl = backBtn.getAttribute("href");

    gsap.to(".horizontal-wrapper", {
        opacity: 0,
        filter: "blur(20px)",
        duration: 0.8,
        onComplete: () => {
            window.location.href = targetUrl;
        }
    });
});