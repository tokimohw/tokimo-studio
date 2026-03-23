// Spatial Card Hover Interaction
const spatialCards = document.querySelectorAll('.card-image');

spatialCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    gsap.to(card.querySelector('img'), { scale: 1.05, duration: 1.2, ease: "power2.out" });
    // 도면 레이어가 있다면 여기서 애니메이션 실행
  });
  
  card.addEventListener('mouseleave', () => {
    gsap.to(card.querySelector('img'), { scale: 1, duration: 1.2, ease: "power2.out" });
  });
});

// Blueprint Interaction
const blueprintBoxes = document.querySelectorAll('.blueprint-box');

blueprintBoxes.forEach(box => {
  const lines = box.querySelectorAll('.dimension-line');
  const nodes = box.querySelectorAll('.equipment-node');

  box.addEventListener('mouseenter', () => {
    // 치수선이 0에서 목표치까지 늘어나는 효과
    gsap.fromTo(lines, 
      { scale: 0, opacity: 0 }, 
      { scale: 1, opacity: 0.5, duration: 0.8, stagger: 0.1, ease: "power2.out" }
    );
    // 장비 노드들이 통통 튀며 나타나는 효과
    gsap.fromTo(nodes, 
      { scale: 0, y: 10 }, 
      { scale: 1, y: 0, duration: 0.5, stagger: 0.05, ease: "back.out(1.7)" }
    );
  });
});