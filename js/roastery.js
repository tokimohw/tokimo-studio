/* ============================================================
   TOKIMO ARCHIVE - DETAIL PAGE INTERACTION
   [제약] 무거운 외부 라이브러리 금지. Vanilla JS만 사용.
   [역할] 스크롤에 따른 우아한 Fade-in 등장 애니메이션 (일본 감성)
============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  
  // 1. 부드러운 스크롤 (Lenis 없이 네이티브 기반으로 쾌적하게 설정)
  // HTML 태그에 직접 적용하여 외부 라이브러리 의존성 제거
  document.documentElement.style.scrollBehavior = "smooth";

  // 2. Scroll Reveal Animation (Intersection Observer API)
  // 화면에 요소가 15% 정도 나타나면 천천히 떠오르는 효과
  const revealElements = document.querySelectorAll('.reveal');

    /* detail.js 수정 */
    const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -80px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
        // 순차적 등장을 위한 delay 부여
        setTimeout(() => {
            entry.target.classList.add('active');
        }, index * 150); // 요소간 0.15초 간격
        }
    });
    }, revealOptions);

  // 모든 .reveal 요소에 관찰자 부착
  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // 3. 페이지 로드 직후 첫 번째 섹션(Intro) 강제 노출
  // 네트워크 로딩 지연 등으로 Intro가 안 뜨는 현상 방지
  setTimeout(() => {
    const intro = document.querySelector('.cs-intro.reveal');
    if(intro && !intro.classList.contains('active')) {
      intro.classList.add('active');
    }
  }, 100);

});