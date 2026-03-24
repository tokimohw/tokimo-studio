document.addEventListener('DOMContentLoaded', () => {
  /* ------------------------------------------------------------------------
     1. Menu Overlay & Body Scroll Lock
     ------------------------------------------------------------------------ */
  const menuTrigger = document.querySelector('.menu-trigger');
  const menuOverlay = document.querySelector('.menu-overlay');
  const body = document.body;
  const menuLinks = document.querySelectorAll('.menu-link');

  function toggleMenu() {
    const isOpen = menuOverlay.classList.contains('is-open');
    
    if (!isOpen) {
      // 메뉴 열기
      menuTrigger.classList.add('is-active');
      menuOverlay.classList.add('is-open');
      body.classList.add('no-scroll'); // 스크롤 완벽 차단
    } else {
      // 메뉴 닫기
      menuTrigger.classList.remove('is-active');
      menuOverlay.classList.remove('is-open');
      body.classList.remove('no-scroll'); // 스크롤 복구
    }
  }

  menuTrigger.addEventListener('click', toggleMenu);

  // 메뉴 링크 클릭 시 오버레이 닫기
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu();
    });
  });

  /* ------------------------------------------------------------------------
     2. Smooth Reveal Animation (Intersection Observer)
     ------------------------------------------------------------------------ */
  const revealElements = document.querySelectorAll('.reveal');

  const revealOptions = {
    root: null, // viewport 기준
    rootMargin: '0px 0px -10% 0px', // 요소가 화면 하단에서 10% 올라왔을 때 실행
    threshold: 0.1 // 요소가 10% 보일 때
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // 한번 나타난 요소는 다시 관찰하지 않음 (선택 사항)
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });
});