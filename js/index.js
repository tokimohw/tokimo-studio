
//  TOKIMO ARCHIVE - Integrated & Optimized Core JS


// 1. Lenis 초기화 (단일 소스)
// const lenis = new Lenis({
//   duration: 1.2,
//   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//   smoothWheel: true,
// });

// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }
// requestAnimationFrame(raf);

// 2. 통합 IntersectionObserver (하나의 감시자로 모든 애니메이션 처리)
// const revealObserver = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('reveal', 'visible');
      
//       자식 요소 순차 지연 효과
//       const children = entry.target.querySelectorAll('.split-char, .hero-label, .p-tech-tags span');
//       children.forEach((child, index) => {
//         child.style.transitionDelay = `${index * 0.1}s`;
//         child.classList.add('visible');
//       });
//       revealObserver.unobserve(entry.target);
//     }
//   });
// }, { threshold: 0.15 });

// 3. 통합 스크롤 이벤트 (Lenis 콜백 활용 - 성능 최적화 핵심)
// lenis.on('scroll', ({ scroll, animatedScroll }) => {
//   헤더 상태 제어
//   document.querySelector(".header")?.classList.toggle("scrolled", scroll > 50);

//   패럴랙스 통합 처리 (getBoundingClientRect 호출 금지)
//   data-speed 속성이 있는 요소들 처리
//   document.querySelectorAll('[data-speed]').forEach(item => {
//     const speed = parseFloat(item.getAttribute('data-speed'));
//     const yPos = -(scroll * speed);
//     item.style.transform = `translate3d(0, ${yPos}px, 0)`;
//   });
// });

// 4. 시간 업데이트 (단일 함수)
// function updateGlobalTime() {
//   const timeElements = document.querySelectorAll('#local-time, #current-time');
//   if (!timeElements.length) return;

//   const now = new Date();
//   const timeString = new Intl.DateTimeFormat('en-GB', {
//     timeZone: 'Asia/Seoul',
//     hour: '2-digit', minute: '2-digit', second: '2-digit',
//     hour12: false
//   }).format(now);

//   timeElements.forEach(el => {
//     if (el.textContent !== timeString) el.textContent = `TOKYO / SEOUL — ${timeString}`;
//   });
// }

// 5. 초기화
// document.addEventListener('DOMContentLoaded', () => {
//   SEO 및 초기 로드
//   document.body.classList.add('fade-in');
  
//   요소 감시 시작
//   document.querySelectorAll('.fade-up, .reveal, [data-split]').forEach(el => {
//     텍스트 분리 로직 (Split Text)
//     if (el.hasAttribute('data-split')) {
//         const content = el.textContent;
//         el.textContent = '';
//         [...content].forEach(char => {
//             const span = document.createElement('span');
//             span.className = 'split-char';
//             span.textContent = char === ' ' ? '\u00A0' : char;
//             el.appendChild(span);
//         });
//     }
//     revealObserver.observe(el);
//   });

//   슬라이더 및 기타 초기화 함수 호출
//   initHeroSlider();
//   setInterval(updateGlobalTime, 1000);
//   updateGlobalTime();
  
//   모바일 메뉴 (기존 로직 유지하되 lenis와 연동)
//   const trigger = document.getElementById('menu-trigger');
//   const menu = document.getElementById('mobile-menu');
//   if (trigger && menu) {
//     trigger.addEventListener('click', () => {
//       const isOpened = menu.classList.toggle('is-active');
//       trigger.classList.toggle('is-active');
//       document.body.classList.toggle('menu-open', isOpened);
//       isOpened ? lenis.stop() : lenis.start();
//     });
//   }
// });

// 6. 히어로 슬라이더 (메모리 효율화)
// function initHeroSlider() {
//     const slides = document.querySelectorAll('.hero-slider .slide');
//     const dots = document.querySelectorAll('.hero-dots .dot');
//     if (!slides.length) return;

//     let current = 0;
//     const nextSlide = () => {
//         slides[current].classList.remove('active');
//         dots[current]?.classList.remove('active');
//         current = (current + 1) % slides.length;
//         slides[current].classList.add('active');
//         dots[current]?.classList.add('active');
//     };
    
//     let timer = setInterval(nextSlide, 4000);
    
//     dots.forEach((dot, idx) => {
//         dot.addEventListener('click', () => {
//             clearInterval(timer);
//             slides[current].classList.remove('active');
//             dots[current].classList.remove('active');
//             current = idx;
//             slides[current].classList.add('active');
//             dots[current].classList.add('active');
//             timer = setInterval(nextSlide, 4000);
//         });
//     });
// }