/**
 * TOKIMO ARCHIVE - about.js (About Page Specific)
 * main.js와 겹치는 Lenis, Observer, Parallax 로직은 제외했습니다.
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. 디렉터 노드(Director Note) 섹션 내 시그니처 애니메이션
  // main.js의 observer가 .reveal을 감지하지만, 시그니처는 더 늦게 나오도록 별도 처리
  const initDirectorSignature = () => {
    const signature = document.querySelector('.signature');
    if (!signature) return;

    const sigObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 약간의 시간차를 두고 등장
          setTimeout(() => {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }, 800); 
          sigObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    // 초기 상태 설정
    signature.style.opacity = "0";
    signature.style.transform = "translateY(10px)";
    signature.style.transition = "all 1.2s cubic-bezier(0.215, 0.61, 0.355, 1)";
    
    sigObserver.observe(signature);
  };

  // 2. 메인 헤드라인 텍스트 가독성 보정 (선택 사항)
  // 일본어와 영어 헤드라인이 겹칠 때 시각적 깊이감을 주는 미세 조정
  const adjustManifestoText = () => {
    const jpHeadline = document.querySelector('.main-headline .jp');
    const enHeadline = document.querySelector('.main-headline .en');
    
    if (jpHeadline && enHeadline) {
      // 스크롤 시 두 텍스트의 이동 속도를 아주 미세하게 다르게 하여 입체감 부여
      lenis.on('scroll', ({ scroll }) => {
        const move = scroll * 0.02;
        enHeadline.style.transform = `translate3d(0, ${move}px, 0)`;
        jpHeadline.style.transform = `translate3d(0, ${-move * 0.5}px, 0)`;
      });
    }
  };

  // 실행
  initDirectorSignature();
  adjustManifestoText();

});