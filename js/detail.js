// ===================== [TOKIMO] PARALLAX =====================

// 🔥 성능 개선: requestAnimationFrame 사용
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const parallaxBg = document.querySelector('#parallax-bg');
      if (parallaxBg) {
        const scrollY = window.pageYOffset;
        parallaxBg.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
      ticking = false;
    });
    ticking = true;
  }
});


// ===================== [TOKIMO] GALLERY =====================

document.addEventListener("DOMContentLoaded", () => {

  const modal = document.querySelector(".editorial-modal");
  if (!modal) return;

  let scrollY = 0;

  function openModal() {
    scrollY = window.scrollY;

    document.body.style.top = `-${scrollY}px`;
    document.body.style.position = "fixed";
    document.body.style.width = "100%";

    document.body.classList.add("modal-open");

    if (window.lenis) {
      lenis.stop();
      lenis.scrollTo(window.scrollY, { immediate: true }); // 🔥 여기
    }
  }

  function closeModal() {
    modal.classList.remove("active");

    document.body.classList.remove("modal-open");
    document.body.style.top = "";
    document.body.style.position = "";
    document.body.style.width = "";

    window.scrollTo(0, scrollY);

    if (window.lenis) {
      lenis.start();
    }    
  }

  // 나머지 코드 그대로
  const cards = document.querySelectorAll(".gallery-card");

  cards.forEach(card => {
  const price = card.dataset.price;
  const priceEl = card.querySelector(".price-mini");

  if (priceEl && price) {
    priceEl.textContent = price;
  }
  });

  const modalImg = modal.querySelector(".modal-img");
  const modalTitle = modal.querySelector(".modal-title");
  const modalDesc = modal.querySelector(".modal-desc");
  const priceEl = modal.querySelector(".price");
  const colorChips = modal.querySelectorAll(".color-chip");

  const closeBtn = modal.querySelector(".modal-close");
  const bg = modal.querySelector(".modal-bg");

  // 🔥 색상 캐싱 (성능 핵심)
  const colorCache = {};

  function getDominantColors(img, src) {
    if (colorCache[src]) return colorCache[src];

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 50;
    canvas.height = 50;

    ctx.drawImage(img, 0, 0, 50, 50);

    const data = ctx.getImageData(0, 0, 50, 50).data;

    let colorMap = {};

    for (let i = 0; i < data.length; i += 4) {
      const r = Math.round(data[i] / 32) * 32;
      const g = Math.round(data[i + 1] / 32) * 32;
      const b = Math.round(data[i + 2] / 32) * 32;

      const key = `${r},${g},${b}`;
      colorMap[key] = (colorMap[key] || 0) + 1;
    }

    const sortedColors = Object.entries(colorMap)
      .sort((a, b) => b[1] - a[1])
      .map(c => c[0])
      .slice(0, 2);

    colorCache[src] = sortedColors;

    return sortedColors;
  }

  // 🔥 이벤트 위임 (성능 + 유지보수)
  document.addEventListener("click", (e) => {
    const card = e.target.closest(".gallery-card");
    if (!card) return;

    const imgEl = card.querySelector("img");
    const imgSrc = imgEl.src;

    // 🔥 1. 위치 가져오기
    const rect = imgEl.getBoundingClientRect();

    // 🔥 2. 클론 생성
    const clone = imgEl.cloneNode();
    clone.classList.add("image-clone");

    clone.style.top = rect.top + "px";
    clone.style.left = rect.left + "px";
    clone.style.width = rect.width + "px";
    clone.style.height = rect.height + "px";

    document.body.appendChild(clone);

    // 🔥 기존 데이터 세팅
    modalImg.src = imgSrc;
    modalTitle.textContent = card.dataset.title;
    modalDesc.innerHTML = card.dataset.desc;
    priceEl.textContent = card.dataset.price || "₩—";

    // 🔥 색상 추출 (기존 그대로 유지)
    const tempImg = new Image();
    tempImg.crossOrigin = "Anonymous";
    tempImg.src = imgSrc;

    const currentSrc = imgSrc;

    tempImg.onload = () => {
      if (modalImg.src !== currentSrc) return;

      const colors = getDominantColors(tempImg, imgSrc);

      colorChips.forEach((chip, i) => {
        chip.style.background = colors[i]
          ? `rgb(${colors[i]})`
          : "transparent";
      });
    };

    // 🔥 3. 강제 리플로우 (애니메이션 시작 준비)
    clone.getBoundingClientRect();

    // 🔥 4. 중앙으로 이동
    clone.style.top = "50%";
    clone.style.left = "50%";
    clone.style.transform = "translate(-50%, -50%) scale(1.1)";
    clone.style.width = "70vw";
    clone.style.height = "70vh";

    // 🔥 5. 애니메이션 끝나면 모달 열기
    setTimeout(() => {
      modal.classList.add("active");
      openModal();

      clone.remove(); // 🔥 클론 제거
    }, 500);
  });

  closeBtn.addEventListener("click", closeModal);
  if (bg) {
    bg.addEventListener("click", closeModal);
  }

});