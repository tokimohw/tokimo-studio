// ===================== [TOKIMO] PARALLAX =====================
// 배경 패럴랙스 (스크롤에 따라 부드럽게 이동)
window.addEventListener('scroll', function() {
  const scrollY = window.pageYOffset;
  const parallaxBg = document.querySelector('#parallax-bg');
  if (parallaxBg) {
    parallaxBg.style.transform = `translateY(${scrollY * 0.2}px)`;
  }
});

const cards = document.querySelectorAll(".gallery-card");
const modal = document.querySelector(".editorial-modal");
const modalImg = document.querySelector(".modal-img");
const modalTitle = document.querySelector(".modal-title");
const modalDesc = document.querySelector(".modal-desc");
const priceEl = document.querySelector(".price");
const colorChips = document.querySelectorAll(".color-chip");

const closeBtn = document.querySelector(".modal-close");
const bg = document.querySelector(".modal-bg");

// 🔥 이미지 → RGB 추출 함수
function getDominantColors(img) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const width = canvas.width = 50;
  const height = canvas.height = 50;

  ctx.drawImage(img, 0, 0, width, height);

  const data = ctx.getImageData(0, 0, width, height).data;

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
    .map(c => c[0]);

  return sortedColors.slice(0, 2);
}

// 🔥 클릭 이벤트
cards.forEach(card => {
  card.addEventListener("click", () => {
    const imgEl = card.querySelector("img");
    const imgSrc = imgEl.src;

    modalImg.src = imgSrc;
    modalTitle.textContent = card.dataset.title;
    modalDesc.textContent = card.dataset.desc;
    priceEl.textContent = card.dataset.price || "₩—";

    // 🔥 이미지 로드 후 색 추출
    const tempImg = new Image();
    tempImg.crossOrigin = "Anonymous";
    tempImg.src = imgSrc;

    tempImg.onload = () => {
      const colors = getDominantColors(tempImg);

      colorChips.forEach((chip, i) => {
        if (colors[i]) {
          chip.style.background = `rgb(${colors[i]})`;
        }
      });
    };

    modal.classList.add("active");
    document.body.classList.add("modal-open");
  });
});

// 닫기
function closeModal() {
  modal.classList.remove("active");
  document.body.classList.remove("modal-open");
}

closeBtn.addEventListener("click", closeModal);
bg.addEventListener("click", closeModal);