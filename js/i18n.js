document.addEventListener("DOMContentLoaded", () => {
  const langButtons = document.querySelectorAll(".lang-btn");
  
  // 1. 언어 변경 함수
  const updateLanguage = (lang) => {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (i18nData[lang][key]) {
        el.textContent = i18nData[lang][key];
      }
    });
    
    // 활성화 버튼 스타일 업데이트
    langButtons.forEach(btn => {
      btn.classList.toggle("is-active", btn.dataset.lang === lang);
    });
    
    // 설정 저장
    localStorage.setItem("selectedLang", lang);
    document.documentElement.lang = lang; // HTML lang 속성 업데이트
  };

  // 2. 버튼 클릭 이벤트
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      updateLanguage(btn.dataset.lang);
    });
  });

  // 3. 초기 언어 설정 (저장된 값 혹은 기본값 ko)
  const savedLang = localStorage.getItem("selectedLang") || "ko";
  updateLanguage(savedLang);
});