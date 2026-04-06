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

  const revealOptions = {
    threshold: 0.15, // 요소가 15% 보일 때 트리거
    rootMargin: "0px 0px -50px 0px" // 하단에서 50px 여유를 둠
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 화면에 들어오면 .active 클래스 추가하여 CSS 애니메이션 실행
        entry.target.classList.add('active');
        
        // 한 번 나타난 요소는 다시 감지할 필요 없으므로 관찰 해제 (성능 최적화)
        observer.unobserve(entry.target);
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