/**
 * TOKIMO ARCHIVE - index.js (Main Page Specific)
 */

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. 히어로 슬라이더 초기화
  const initHeroSlider = () => {
    const slides = document.querySelectorAll('.hero-slider .slide');
    const dots = document.querySelectorAll('.hero-dots .dot');
    
    if (slides.length === 0) return;

    let current = 0;
    let timer;

    const showSlide = (index) => {
      // 모든 슬라이드와 도트 초기화
      slides.forEach(s => s.classList.remove('active'));
      dots.forEach(d => d.classList.remove('active'));
      
      // 해당 인덱스 활성화
      current = index;
      slides[current].classList.add('active');
      if (dots[current]) dots[current].classList.add('active');
    };

    const startAutoPlay = () => {
      timer = setInterval(() => {
        let next = (current + 1) % slides.length;
        showSlide(next);
      }, 3000);
    };

    // 도트 클릭 시 즉시 이동
    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        clearInterval(timer);
        showSlide(idx);
        startAutoPlay();
      });
    });

    startAutoPlay();
  };

  // 2. 스크롤 등장 애니메이션 (Intersection Observer)
  const initRevealObserver = () => {
    const options = { threshold: 0.15 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // 자식 요소들 (.p-tech-tags span 등) 순차 지연 등장
          const children = entry.target.querySelectorAll('.hero-label, .p-tech-tags span, .archive-item');
          children.forEach((child, index) => {
            child.style.transitionDelay = `${index * 0.15}s`;
            child.classList.add('visible');
          });
          
          observer.unobserve(entry.target);
        }
      });
    }, options);

    document.querySelectorAll('.fade-up, .reveal').forEach(el => observer.observe(el));
  };

  // 3. 패럴랙스 효과 (Scroll Event)
  const initParallax = () => {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallaxItems = document.querySelectorAll('[data-speed]');
      
      parallaxItems.forEach(item => {
        const speed = parseFloat(item.getAttribute('data-speed')) || 0.05;
        const yPos = -(scrolled * speed);
        item.style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    });
  };

  // 실행
  initHeroSlider();
  initRevealObserver();
  initParallax();
  
  // 페이지 로드 페이드인
  document.body.classList.add('fade-in');
});