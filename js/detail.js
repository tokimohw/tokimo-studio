// [TOKIMO] Detail Page Parallax Effect
window.addEventListener('scroll', function() {
  const scrollY = window.pageYOffset;
  const parallaxBg = document.querySelector('#parallax-bg');
  
  if (parallaxBg) {
    // 스크롤 속도의 0.2배만큼 이미지를 이동시켜 입체감 생성
    parallaxBg.style.transform = `translateY(${scrollY * 0.2}px)`;
  }
});