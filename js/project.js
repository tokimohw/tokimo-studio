document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.getElementById("hover-cursor");
  const targetImg = document.getElementById("reveal-target");
  const items = document.querySelectorAll(".collage-item");

  let mouseX = 0, mouseY = 0;   // 마우스 좌표
  let currentX = 0, currentY = 0; // 이미지 추적 좌표

  // 1. LERP (Linear Interpolation) 애니메이션 루프
  function animate() {
    // 0.07: 따라오는 속도 조절 (더 부드러운 딜레이)
    currentX += (mouseX - currentX) * 0.07;
    currentY += (mouseY - currentY) * 0.07;

    // 이미지 센터링 (-150px, -200px)
    cursor.style.left = `${currentX - 150}px`;
    cursor.style.top = `${currentY - 200}px`;

    requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // 2. 호버 이벤트 매핑
  items.forEach(item => {
    item.addEventListener("mouseenter", () => {
      const imgPath = item.getAttribute("data-img");
      if(imgPath) {
        targetImg.src = imgPath;
        cursor.classList.add("active");
      }
    });

    item.addEventListener("mouseleave", () => {
      cursor.classList.remove("active");
    });
  });
});