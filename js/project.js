document.addEventListener("DOMContentLoaded", () => {
  const projectList = document.getElementById("project-list");
  const cursorFollow = document.getElementById("cursor-img");
  const targetImg = document.getElementById("target-img");
  const projectItems = document.querySelectorAll(".project-item");

  // 1. 마우스 이동에 따른 이미지 위치 추적
  window.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    // 이미지가 마우스 정중앙에 오도록 좌표 보정
    cursorFollow.style.transform = `translate(${x - 210}px, ${y - 270}px)`;
  });

  // 2. 각 아이템 호버 시 이미지 교체 및 활성화
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