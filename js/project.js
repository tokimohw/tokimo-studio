document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    // 마우스 이동에 따른 이미지 위치 업데이트
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        projectCards.forEach(card => {
            const thumb = card.querySelector('.card-thumb');
            if (thumb) {
                // requestAnimationFrame을 사용하여 부드러운 이동 구현
                requestAnimationFrame(() => {
                    thumb.style.left = `${mouseX}px`;
                    thumb.style.top = `${mouseY}px`;
                });
            }
        });
    });

    // 필터링 기능 (기존 기능 유지하되 애니메이션 추가)
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            
            projectCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => card.style.opacity = '1', 10);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => card.style.display = 'none', 500);
                }
            });
        });
    });
});