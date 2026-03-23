// [PROJECT FILTER LOGIC]
document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // 1. 활성화된 버튼 스타일 변경
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      // 2. 카드 필터링 애니메이션
      projectCards.forEach(card => {
        // 일단 모든 카드를 투명하게 처리
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
          if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
            card.style.display = 'block';
            // 약간의 시차를 두고 다시 나타나게 함 (애니메이션 효과)
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 100);
          } else {
            card.style.display = 'none';
          }
        }, 300); // 사라지는 시간을 기다린 후 디스플레이 변경
      });
    });
  });
});