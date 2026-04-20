document.addEventListener("DOMContentLoaded", () => {
  const langButtons = document.querySelectorAll(".lang-btn");
  
  /**
   * 1. 언어 변경 및 렌더링 함수
   */
  const updateLanguage = (lang) => {
    // i18nData가 로드되지 않았을 경우를 대비한 안전장치
    if (typeof i18nData === 'undefined') {
      console.error("i18nData is not defined. Check translations.js");
      return;
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const translation = i18nData[lang][key];

      if (translation) {
        // [강화 포인트 1] Form 요소(Input, Textarea)의 Placeholder 대응
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          el.placeholder = translation;
        } 
        // [강화 포인트 2] 일반 요소의 HTML 태그(<br>, <em>) 대응
        else {
          el.innerHTML = translation;
        }
      }
    });
    
    // 활성화 버튼 스타일 업데이트
    langButtons.forEach(btn => {
      btn.classList.toggle("is-active", btn.dataset.lang === lang);
    });
    
    // 설정 저장 및 HTML 속성 업데이트
    localStorage.setItem("selectedLang", lang);
    document.documentElement.lang = lang;
  };

  /**
   * 2. 버튼 클릭 이벤트
   */
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // 부드러운 전환 효과를 원한다면 여기에 페이드 아웃 로직을 추가할 수 있습니다.
      updateLanguage(btn.dataset.lang);
    });
  });

  /**
   * 3. 초기 언어 설정 (저장된 값 -> 브라우저 기본 언어 -> 한국어 순)
   */
  const getInitialLang = () => {
    const saved = localStorage.getItem("selectedLang");
    if (saved) return saved;

    // 저장된 값이 없을 때 브라우저 언어가 일본어면 JP로 시작하는 센스
    const browserLang = navigator.language.slice(0, 2);
    if (["ko", "jp", "en"].includes(browserLang)) return browserLang;
    
    return "ko"; // 기본값
  };

  updateLanguage(getInitialLang());
});