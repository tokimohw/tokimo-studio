/**
 * TOKIMO ARCHIVE - Core JavaScript (Optimized)
 * 수정사항: 페이지 전환 지연(Fade-out) 삭제, 즉각적인 로딩 구현
 */

// ===================== 1. 부동 스크롤 (Lenis) =====================
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
  smoothWheel: true,
  wheelMultiplier: 1, 
  touchMultiplier: 2,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// ===================== 2. 스크롤 등장 애니메이션 (Observer) =====================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      const children = entry.target.querySelectorAll('.hero-label, .display-title, .description, .work-item, .service-item, .display-text, .border-text, .vogue-title, .editorial-content');
      
      children.forEach((child, index) => {
        child.style.transitionDelay = `${index * 0.15}s`;
        child.classList.add('visible');
      });
      
      observer.unobserve(entry.target); 
    }
  });
}, observerOptions);

// ===================== 3. 패럴랙스 & 헤더 제어 =====================
const header = document.querySelector(".header");
const parallaxImages = document.querySelectorAll(".work-bg, .work-card img, .repo-item img, .gallery-item img, .editorial-image img, .vision-item img");

lenis.on('scroll', (e) => {
  const scrollY = e.animatedScroll;

  if (scrollY > 50) {
    header?.classList.add("scrolled");
  } else {
    header?.classList.remove("scrolled");
  }

  parallaxImages.forEach(img => {
    const rect = img.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      const speed = 0.05; 
      const move = (windowHeight - rect.top) * speed;
      img.style.transform = `translate3d(0, ${move}px, 0) scale(1.15)`;
    }
  });
});

// ===================== 4. 시간 업데이트 (Seoul/Tokyo) =====================
function updateTime() {
  const timeElements = document.querySelectorAll('#local-time, #local-time-hero');
  if (timeElements.length === 0) return;

  const now = new Date();
  const options = {
    timeZone: 'Asia/Seoul',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: false
  };
  
  const timeString = new Intl.DateTimeFormat('en-GB', options).format(now);
  timeElements.forEach(el => {
    if (el.textContent !== timeString) el.textContent = timeString;
  });
}

// ===================== 5. 초기화 및 이벤트 연결 =====================
document.addEventListener('DOMContentLoaded', () => {
  
  // 5-1. 페이지 로드 즉시 페이드 인 (기존 로직 유지)
  document.body.classList.add('fade-in');

  // 5-2. 애니메이션 관찰 시작
  document.querySelectorAll('.fade-up').forEach(section => observer.observe(section));

  // 5-3. 시간 업데이트 시작
  setInterval(updateTime, 1000);
  updateTime();

  /* [삭제됨] 5-4. 기존의 페이지 전환(Fade-out) 로직을 삭제했습니다.
     브라우저가 기본적으로 제공하는 빠른 페이지 이동을 사용하도록 하여 
     클릭 시 멈춤 현상을 해결했습니다.
  */

  // 5-5. 모바일 메뉴 제어
// 5-5. 모바일 메뉴 제어 (보강 버전)
const trigger = document.getElementById('menu-trigger');
const menu = document.getElementById('mobile-menu');

if (trigger && menu) {
  const toggleMenu = (state) => {
    // 상태 파악
    const isActive = state !== undefined ? state : trigger.classList.toggle('is-active');
    menu.classList.toggle('is-active', isActive);
    
    if (isActive) {
      // 메뉴 열림: 스크롤 차단 및 클래스 부여
      document.body.classList.add('menu-open');
      lenis.stop(); // Lenis 스크롤 중지
    } else {
      // 메뉴 닫힘: 스크롤 재개
      document.body.classList.remove('menu-open');
      trigger.classList.remove('is-active');
      lenis.start(); // Lenis 스크롤 시작
    }
  };

  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });

  // 메뉴 내 링크 클릭 시 즉시 닫기
  menu.querySelectorAll('a').forEach((link, index) => {
    // CSS 변수로 애니메이션 순서 부여 (선택사항)
    link.style.setProperty('--i', index);
    
    link.addEventListener('click', () => {
      toggleMenu(false);
    });
  });
}
  // 5-6. 일본어 텍스트 호버 (이벤트 위임 최적화)
  document.addEventListener('mouseover', (e) => {
    const target = e.target.closest('.service-card, .repo-item, .story-content, .work-item, .vision-item');
    if (target) {
      const jpText = target.querySelector('.jp-sub, small, .jp-light, .vogue-label');
      if (jpText) jpText.style.opacity = "1";
    }
  });

  document.addEventListener('mouseout', (e) => {
    const target = e.target.closest('.service-card, .repo-item, .story-content, .work-item, .vision-item');
    if (target) {
      const jpText = target.querySelector('.jp-sub, small, .jp-light, .vogue-label');
      if (jpText) jpText.style.opacity = "0.4";
    }
  });
});