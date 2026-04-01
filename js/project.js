document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".collage-item");

  items.forEach(item => {
    const img = item.getAttribute("data-img");
    if (img) {
      // 핵심: CSS 파일이 css/ 폴더 안에 있으므로 상위로 이동(../) 후 이미지를 찾도록 수정
      item.style.setProperty("--bg", `url('../${img}')`);
    }
  });
});