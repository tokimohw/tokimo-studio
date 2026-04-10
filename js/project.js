document.addEventListener("DOMContentLoaded", () => {

  const items = document.querySelectorAll(".collage-item");
  const filters = document.querySelectorAll(".project-category span");
  const grid = document.querySelector(".collage-grid");

  // 이미지 세팅
  items.forEach(item => {
    const img = item.getAttribute("data-img");
    if (img) {
      item.style.setProperty("--bg", `url('../${img}')`);
    }
  });

  // ===== FILTER =====
  const categoryMap = {
    ALL: () => true,
    SPACE: (item) => {
      const text = item.innerText.toLowerCase();
      return text.includes("cafe") || text.includes("roastery");
    },
    OBJECT: (item) => {
      const text = item.innerText.toLowerCase();
      return text.includes("furniture") || text.includes("stationery");
    },
    IDENTITY: (item) => {
      const text = item.innerText.toLowerCase();
      return text.includes("brand") || text.includes("fashion");
    }
  };

  filters.forEach(filter => {
    filter.addEventListener("click", () => {
      const type = filter.innerText.trim().toUpperCase();

      filters.forEach(f => f.classList.remove("active"));
      filter.classList.add("active");

      // ALL 처리
      if (type === "ALL") {
        grid.classList.remove("filtered");
        document.querySelector(".collage-container").classList.remove("filtered");

        items.forEach(item => {
          item.style.display = "block";
        });

        return;
      }

      // FILTER 모드 시작
      grid.classList.add("filtered");
      document.querySelector(".collage-container").classList.add("filtered");

      items.forEach(item => {
        const show = categoryMap[type](item);
        item.style.display = show ? "block" : "none";
      });
    });
  });

});