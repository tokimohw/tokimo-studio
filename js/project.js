document.addEventListener("DOMContentLoaded", () => {
  const cursorImg = document.getElementById("cursor-img");
  const targetImg = document.getElementById("target-img");
  const projectItems = document.querySelectorAll(".project-item");

  let mouseX = 0, mouseY = 0;   // 실제 마우스 위치
  let currentX = 0, currentY = 0; // 이미지가 따라갈 위치

  // 1. 부드러운 추적 애니메이션 루프
  function animate() {
    // 0.08: 따라오는 속도 (값이 낮을수록 더 묵직하게 따라옴)
    currentX += (mouseX - currentX) * 0.08;
    currentY += (mouseY - currentY) * 0.08;

    // 이미지의 정중앙이 커서에 오도록 보정 (-140, -190)
    cursorImg.style.left = `${currentX - 140}px`;
    cursorImg.style.top = `${currentY - 190}px`;

    requestAnimationFrame(animate);
  }
  animate();

  // 2. 마우스 좌표 업데이트
  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // 3. 아이템 호버 이벤트
  projectItems.forEach((item) => {
    item.onmouseenter = () => {
      const imgPath = item.getAttribute("data-img");
      if (imgPath) {
        targetImg.src = imgPath;
        cursorImg.classList.add("active");
      }
    };

    item.onmouseleave = () => {
      cursorImg.classList.remove("active");
    };
  });
});