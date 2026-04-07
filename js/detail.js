// [TOKIMO] Detail Page Parallax Effect
window.addEventListener('scroll', function() {
  const scrollY = window.pageYOffset;
  const parallaxBg = document.querySelector('#parallax-bg');
  
  if (parallaxBg) {
    // 스크롤 속도의 0.2배만큼 이미지를 이동시켜 입체감 생성
    parallaxBg.style.transform = `translateY(${scrollY * 0.2}px)`;
  }

});

document.addEventListener('DOMContentLoaded', () => {

  const track = document.querySelector('.gallery-track');
  if (!track) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  /* ================= DRAG ================= */
  track.addEventListener('mousedown', (e) => {
    isDown = true;
    track.classList.add('dragging');
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });

  track.addEventListener('mouseleave', () => {
    isDown = false;
    track.classList.remove('dragging');
  });

  track.addEventListener('mouseup', () => {
    isDown = false;
    track.classList.remove('dragging');
  });

  track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    track.scrollLeft = scrollLeft - walk;
  });

  /* ================= AUTO SLIDE ================= */

  let autoSlideSpeed = 0.5;
  let isHovering = false;

  function autoSlide() {
    if (!isHovering && !isDown) {
      track.scrollLeft += autoSlideSpeed;

      // 🔥 끝까지 가면 다시 처음
      if (track.scrollLeft >= track.scrollWidth - track.clientWidth) {
        track.scrollLeft = 0;
      }
    }

    requestAnimationFrame(autoSlide);
  }

  autoSlide();

  /* ================= HOVER CONTROL ================= */

  track.addEventListener('mouseenter', () => {
    isHovering = true;
  });

  track.addEventListener('mouseleave', () => {
    isHovering = false;
  });

});


