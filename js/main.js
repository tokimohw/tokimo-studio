/**
 * TOKIMO ARCHIVE - Core JavaScript
 * 정리: 부드러운 스크롤, 애니메이션, 시간, 메뉴, 페이지 전환
 */

// ===================== 1. 부드러운 스크롤 (Lenis) =====================
// 웹사이트 전체에 고급스러운 스크롤 감도를 부여합니다.
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
// 요소가 화면에 10% 정도 보일 때 '.visible' 클래스를 추가하여 나타나게 합니다.
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // 하위 요소들이 시간차를 두고 등장하게 설정 (Stagger 효과)
      const children = entry.target.querySelectorAll('.hero-label, .display-title, .description, .work-item, .service-item, .display-text, .border-text, .vogue-title, .editorial-content');
      
      children.forEach((child, index) => {
        child.style.transitionDelay = `${index * 0.15}s`;
        child.classList.add('visible');
      });
      
      observer.unobserve(entry.target); // 성능을 위해 관찰 중단
    }
  });
}, observerOptions);

// ===================== 3. 패럴랙스 & 헤더 (Scroll Event) =====================
// 스크롤 시 이미지들이 미세하게 움직여 공간감을 줍니다.
const header = document.querySelector(".header");
const parallaxImages = document.querySelectorAll(".work-bg, .work-card img, .repo-item img, .gallery-item img, .editorial-image img, .vision-item img");

lenis.on('scroll', (e) => {
  const scrollY = e.animatedScroll;

  // 헤더 변화 (50px 스크롤 시 배경 생김 등)
  if (scrollY > 50) {
    header?.classList.add("scrolled");
  } else {
    header?.classList.remove("scrolled");
  }

  // 패럴랙스 로직
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
// 푸터 등에 위치한 시간을 실시간으로 갱신합니다.
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

// ===================== 5. DOM 실행 시 활성화 (초기화) =====================
document.addEventListener('DOMContentLoaded', () => {
  
  // 5-1. 페이지 로드 시 페이드 인 애니메이션
  document.body.classList.add('fade-in');

  // 5-2. 스크롤 애니메이션 관찰 시작
  document.querySelectorAll('.fade-up').forEach(section => observer.observe(section));

  // 5-3. 시간 업데이트 시작
  setInterval(updateTime, 1000);
  updateTime();

  // 5-4. 페이지 전환 로직 (모든 내부 링크 클릭 시 페이드 아웃)
  const links = document.querySelectorAll('a:not([target="_blank"]):not([href^="#"])');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      // 메뉴 링크 등 특수 상황 제외 로직 (필요시 추가)
      if (link.closest('#mobile-menu')) return; 

      e.preventDefault();
      const targetUrl = link.href;
      document.body.classList.add('fade-out');
      setTimeout(() => { window.location.href = targetUrl; }, 600);
    });
  });

  // 5-5. 모바일 메뉴 제어
  const trigger = document.getElementById('menu-trigger');
  const menu = document.getElementById('mobile-menu');

  if (trigger && menu) {
    const toggleMenu = (state) => {
      const isActive = state !== undefined ? state : trigger.classList.toggle('is-active');
      menu.classList.toggle('is-active', isActive);
      
      if (isActive) {
        document.body.style.overflow = 'hidden';
        lenis.stop();
      } else {
        document.body.style.overflow = '';
        lenis.start();
      }
    };

    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });

    // 메뉴 내 링크 클릭 시 닫고 이동
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetUrl = link.href;
        toggleMenu(false);
        document.body.classList.add('fade-out');
        setTimeout(() => { window.location.href = targetUrl; }, 600);
      });
    });
  }

  // 5-6. 일본어 텍스트 호버 (이벤트 위임)
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