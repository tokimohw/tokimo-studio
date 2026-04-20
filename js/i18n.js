document.addEventListener("DOMContentLoaded", () => {
  const langButtons = document.querySelectorAll(".lang-btn");
  
  /**
   * 1. 언어 변경 및 렌더링 함수
   */
  const updateLanguage = (lang) => {
    // [보안/안전] i18nData가 로드되지 않았을 경우 에러 방지
    if (typeof i18nData === 'undefined') {
      console.error("번역 데이터(translations.js)를 찾을 수 없습니다.");
      return;
    }

    // [핵심] 모든 번역 대상 요소를 순회하며 텍스트/HTML 교체
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const translation = i18nData[lang][key];

      if (translation) {
        // [강화 1] 입력창(Input)이나 텍스트영역(Textarea)의 가이드 문구(Placeholder) 대응
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          el.placeholder = translation;
        } 
        // [강화 2] 일반 요소는 HTML 태그(<br>, <em> 등)를 해석하여 렌더링
        else {
          el.innerHTML = translation;
        }
      }
    });
    
    // [UI] 현재 선택된 언어 버튼에 활성화 클래스(is-active) 부여
    langButtons.forEach(btn => {
      btn.classList.toggle("is-active", btn.dataset.lang === lang);
    });
    
    // [저장] 사용자의 언어 설정을 브라우저에 저장하고 HTML 태그의 lang 속성 업데이트
    localStorage.setItem("selectedLang", lang);
    document.documentElement.lang = lang;

    /**
     * [비즈니스 로직 추가] 레이아웃 리프레시 (중요!)
     * 일본어처럼 텍스트가 길어져서 높이가 변하는 경우를 대비해 
     * 브라우저와 스크롤 엔진(Lenis)에 크기 재계산을 요청합니다.
     */
    setTimeout(() => {
      // 1. Lenis 스무스 스크롤을 사용 중이라면 리사이즈 실행
      if (window.lenis) {
        window.lenis.resize();
      }
      // 2. 브라우저 전체에 리사이즈 이벤트를 발생시켜 CSS(clamp 등) 재계산 유도
      window.dispatchEvent(new Event('resize'));
    }, 100); // 텍스트 렌더링이 완료된 직후 실행되도록 약간의 지연(100ms) 부여
  };

  /**
   * 2. 버튼 클릭 이벤트 등록
   */
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetLang = btn.dataset.lang;
      // 현재 언어와 다를 때만 업데이트 실행
      if (document.documentElement.lang !== targetLang) {
        updateLanguage(targetLang);
      }
    });
  });

  /**
   * 3. 초기 언어 설정 프로세스
   * 우선순위: 1. 기존 방문시 저장값 -> 2. 사용자의 브라우저 언어 -> 3. 한국어(기본)
   */
  const getInitialLang = () => {
    const saved = localStorage.getItem("selectedLang");
    if (saved) return saved;

    // 브라우저 언어 감지 (앞 두 글자만 추출: ko, ja, en)
    const browserLang = navigator.language.slice(0, 2);
    // 지원하는 언어일 경우 해당 언어 반환, 아닐 경우 한국어 반환
    const supportedLangs = ["ko", "jp", "en"];
    
    // 일본어의 경우 브라우저는 'ja'를 반환하므로 데이터 형식인 'jp'와 매칭 확인 필요
    const detectedLang = browserLang === "ja" ? "jp" : browserLang;
    
    return supportedLangs.includes(detectedLang) ? detectedLang : "ko";
  };

  // 페이지 로드 시 최종 결정된 언어로 실행
  updateLanguage(getInitialLang());
});