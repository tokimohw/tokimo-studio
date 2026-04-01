document.addEventListener("DOMContentLoaded", () => {

  const items = document.querySelectorAll(".collage-item");

  /* =========================
     BACKGROUND IMAGE SET
  ========================= */
  items.forEach(item => {
    const img = item.getAttribute("data-img");
    if (img) {
      item.style.setProperty("--bg", `url(${img})`);
    }
  });

});