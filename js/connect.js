/**
 * TOKIMO ARCHIVE - Connect Page Logic
 * 폼 제출 애니메이션 및 토스트 메시지 제어
 */
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form'); // ID 기반으로 더 명확하게 선택
    const toast = document.getElementById('toast');

    if (contactForm && toast) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const btn = this.querySelector('.submit-btn');
            const arrow = btn.querySelector('.arrow');
            if (!btn) return;

            // 1. 상태 변경: 제출 중 (Sending...)
            const originalHTML = btn.innerHTML;
            
            // 버튼 비활성화 및 시각적 피드백
            btn.style.pointerEvents = 'none';
            btn.style.opacity = '0.7';
            btn.innerHTML = `Sending... <span class="arrow">→</span>`;

            // 2. 가상의 서버 통신 (1.2초 후 완료)
            setTimeout(() => {
                // 토스트 알림 표시
                showToast(toast);

                // 폼 초기화
                contactForm.reset();
                
                // 3. 버튼 복구
                btn.innerHTML = originalHTML;
                btn.style.opacity = '1';
                btn.style.pointerEvents = 'auto';

            }, 1200);
        });
    }

    /**
     * 토스트 메시지를 화면에 띄우고 자동으로 숨기는 헬퍼 함수
     */
    function showToast(element) {
        element.classList.add('active');
        
        // 3.5초 후 제거 (CSS 트랜지션 시간 고려)
        setTimeout(() => {
            element.classList.remove('active');
        }, 3500);
    }
});