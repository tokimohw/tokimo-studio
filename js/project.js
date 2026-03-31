document.addEventListener("DOMContentLoaded", () => {
  const cursorFollow = document.getElementById("cursor-img");
  const targetImg = document.getElementById("target-img");
  const projectItems = document.querySelectorAll(".project-item");

  let mouseX = 0, mouseY = 0;   // 실제 마우스 위치
  let currentX = 0, currentY = 0; // 이미지가 부드럽게 따라갈 위치

  const speed = 0.08; // 낮을수록 딜레이가 묵직함 (고급스러운 느낌)

  function lerpAnimate() {
    currentX += (mouseX - currentX) * speed;
    currentY += (mouseY - currentY) * speed;

    // 이미지 센터링 보정 (-160, -220)
    cursorFollow.style.transform = `translate(${currentX - 160}px, ${currentY - 220}px)`;
    requestAnimationFrame(lerpAnimate);
  }
  lerpAnimate();

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  projectItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const imgPath = item.getAttribute("data-img");
      if (imgPath) {
        targetImg.src = imgPath;
        cursorFollow.classList.add("active");
      }
    });
    item.addEventListener("mouseleave", () => {
      cursorFollow.classList.remove("active");
    });
  });
});