// ===================== [TOKIMO] PARALLAX =====================
// 배경 패럴랙스 (스크롤에 따라 부드럽게 이동)
window.addEventListener('scroll', function() {
  const scrollY = window.pageYOffset;
  const parallaxBg = document.querySelector('#parallax-bg');
  if (parallaxBg) {
    parallaxBg.style.transform = `translateY(${scrollY * 0.2}px)`;
  }
});


// ===================== [TOKIMO] GALLERY AUTO SLIDE =====================
const track = document.querySelector('.gallery-track');

if (track) {
  // 무한 슬라이드를 위해 요소를 복제 (Cloning)
  if (!track.classList.contains('cloned')) {
    track.innerHTML += track.innerHTML;
    track.classList.add('cloned');
  }

  let scrollAmount = 0;
  let currentSpeed = 0.25;
  let targetSpeed = 0.25; 
  
  // 마우스 호버 시 부드러운 감속/가속 (Interaction)
  track.addEventListener('mouseenter', () => targetSpeed = 0);
  track.addEventListener('mouseleave', () => targetSpeed = 0.25);

  function autoSlide() {
    // Lerp(선형 보간)를 사용해 기계적인 멈춤이 아닌, 자연스럽고 조용한 제동 구현
    currentSpeed += (targetSpeed - currentSpeed) * 0.05; 
    scrollAmount += currentSpeed;

    // 미세한 노이즈를 더해 멈춰있을 때도 유기적인 느낌 부여
    const noise = Math.sin(scrollAmount * 0.01) * 0.3;
    track.style.transform = `translateX(-${scrollAmount + noise}px)`;

    // 절반 지점을 지나면 자연스럽게 처음으로 리셋 (무한 루프)
    if (scrollAmount >= track.scrollWidth / 2) {
      scrollAmount = 0;
    }
    requestAnimationFrame(autoSlide);
  }
  autoSlide();
}


// ===================== [TOKIMO] COLOR UTILS & EXTRACT =====================

// 🎨 RGB 배열을 HEX 문자열로 변환 (UI 표시용)
function rgbToHex(rgb) {
  const res = rgb.match(/\d+/g);
  if (!res) return "#000000";
  return "#" + res.map(x => {
    const hex = parseInt(x).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }).join("");
}

// 🎨 캔버스를 활용해 이미지의 주요 색상을 추출 (Performance & Craft)
function extractColors(img) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  ctx.drawImage(img, 0, 0);

  try {
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    const colors = {};
    for (let i = 0; i < data.length; i += 80) { // 성능 최적화를 위해 픽셀 건너뛰기
      const r = data[i], g = data[i + 1], b = data[i + 2];
      const key = `${Math.round(r/40)*40},${Math.round(g/40)*40},${Math.round(b/40)*40}`;
      colors[key] = (colors[key] || 0) + 1;
    }
    return Object.entries(colors)
      .sort((a,b) => b[1] - a[1]) // 가장 빈도가 높은 색상 순 정렬
      .slice(0, 3) // 상위 3개 색상 추출
      .map(c => `rgb(${c[0]})`);
  } catch (e) {
    // 로컬 환경이나 외부 이미지 사용 시 CORS 에러 대비 (안전성 증명)
    console.warn("Color extraction blocked by CORS. Using fallback colors.");
    return ["rgb(150,150,150)", "rgb(100,100,100)"];
  }
}


// ===================== [TOKIMO] MODAL SYSTEM =====================
// ===================== [TOKIMO] MODAL SYSTEM =====================

const modal = document.querySelector('.gallery-modal');
const modalImg = document.querySelector('.modal-img');
const modalPalette = document.querySelector('.modal-palette');
const modalBg = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.modal-close');
const nav = document.querySelector('nav');
const cards = document.querySelectorAll('.gallery-card');

let currentScrollY = 0;

// 🎨 이미지 색상 추출 (기존 로직 유지)
function applyColors() {
  const colors = extractColors(modalImg);
  modalPalette.innerHTML = '';
  colors.forEach(color => {
    const hexCode = rgbToHex(color);
    const chip = document.createElement('div');
    chip.className = 'color-chip';
    const colorBar = document.createElement('div');
    colorBar.className = 'color-bar';
    colorBar.style.backgroundColor = color;
    const hexText = document.createElement('span');
    hexText.className = 'hex-code mono';
    hexText.textContent = hexCode.toUpperCase();
    chip.appendChild(colorBar);
    chip.appendChild(hexText);
    modalPalette.appendChild(chip);
  });
}

// 🔓 모달 열기 (꼭 스크롤이 되게 만드는 로직)
function openModal(imgSrc) {
  if (!modal) return;

  // 🔥 [핵심] main.js에서 선언한 lenis 인스턴스를 멈춥니다.
  if (typeof lenis !== 'undefined') lenis.stop(); 

  // 기존 로직들...
  currentScrollY = window.scrollY;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${currentScrollY}px`;
  document.body.style.width = '100%';
  document.body.classList.add('modal-open');
  
  modalImg.src = imgSrc;
  modal.classList.add('active');
  
  // 이미지가 로드된 후 색상 추출 실행
  if (modalImg.complete) {
    applyColors();
  } else {
    modalImg.onload = applyColors;
  }
}

// 🔒 모달 닫기
function closeModal() {
  if (!modal) return;

  modal.classList.remove('active');
  
  // 🔥 [핵심] 모달을 닫을 때 Lenis를 다시 시작합니다.
  if (typeof lenis !== 'undefined') lenis.start();

  // 기존 로직들...
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  document.body.classList.remove('modal-open');
  window.scrollTo(0, currentScrollY); 
  
  if (nav) nav.style.zIndex = ''; 
  
  const modalContent = document.querySelector('.modal-content');
  if (modalContent) modalContent.scrollTop = 0;
}

// 👉 이벤트 연결 (이전과 동일)
if (modal) {
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      openModal(img.src);
    });
  });

  if (modalBg) modalBg.addEventListener('click', closeModal);
  if (modalClose) {
    modalClose.addEventListener('click', (e) => {
      e.stopPropagation();
      closeModal();
    });
  }
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });
}