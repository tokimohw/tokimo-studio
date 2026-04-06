/* ============================================================
   TOKIMO ARCHIVE - FASHION DETAIL JS
   File: js/detail.js
   Features: Smooth Scroll, Intersection Observer
============================================================ */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Intersection Observer (Reveal Animation)
    // 화면에 요소가 나타날 때 부드럽게 떠오르는 효과를 제어합니다.
    const revealElements = document.querySelectorAll('.reveal');

    const revealOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px', // 요소가 화면 하단에서 10% 정도 올라왔을 때 실행
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // 한 번 나타난 요소는 다시 감지하지 않음 (조용한 경험 유지)
                observer.unobserve(entry.target); 
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 2. Parallax Effect (Hero Image)
    // 스크롤 시 메인 이미지가 미세하게 느리게 이동하여 깊이감을 줍니다.
    const heroImage = document.querySelector('.hero-image img');
    
    if (heroImage) {
        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY;
            // 스크롤 속도의 15%만큼만 Y축 이동
            heroImage.style.transform = `translateY(${scrollPos * 0.15}px)`;
        });
    }

});