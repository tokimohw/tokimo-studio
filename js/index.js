document.addEventListener("DOMContentLoaded", () => {
    initRevealAnimation();
    initSplitText();
    initHoverReveal();
    initTime();
    initMaterialHover();
    initHeroSlider();
});

/* ------------------------------
1. SCROLL REVEAL
------------------------------ */
function initRevealAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up, .image-mask, [data-split]')
        .forEach(el => observer.observe(el));
}

/* ------------------------------
2. TEXT SPLIT
------------------------------ */
function initSplitText() {
    const splitTexts = document.querySelectorAll('[data-split]');

    splitTexts.forEach(txt => {
        const content = txt.textContent;
        txt.textContent = '';

        [...content].forEach(char => {
            const parent = document.createElement('span');
            parent.className = 'split-parent';

            const child = document.createElement('span');
            child.className = 'split-char';
            child.textContent = char === ' ' ? '\u00A0' : char;

            parent.appendChild(child);
            txt.appendChild(parent);
        });
    });
}

/* ------------------------------
3. HOVER IMAGE (LIST)
------------------------------ */
function initHoverReveal() {
    const listItems = document.querySelectorAll('.list-item');
    if (listItems.length === 0) return;

    const hoverReveal = document.createElement('div');
    hoverReveal.className = 'hover-reveal';
    document.body.appendChild(hoverReveal);

    listItems.forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const imgPath = item.getAttribute('data-img');
            if (!imgPath) return;

            hoverReveal.style.backgroundImage = `url(${imgPath})`;
            hoverReveal.style.opacity = '1';
            hoverReveal.style.transform = `translate(${e.clientX + 20}px, ${e.clientY - 100}px)`;
        });

        item.addEventListener('mouseleave', () => {
            hoverReveal.style.opacity = '0';
        });
    });
}

/* ------------------------------
4. TIME (TOKYO / SEOUL)
------------------------------ */
function initTime() {
    function updateIndexTime() {
        const formatter = new Intl.DateTimeFormat('en-GB', {
            timeZone: 'Asia/Tokyo',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });

        const timeElement = document.getElementById('current-time');
        if (timeElement) {
            timeElement.textContent = `TOKYO / SEOUL — ${formatter.format(new Date())}`;
        }
    }

    updateIndexTime();
    setInterval(updateIndexTime, 1000);
}

/* ------------------------------
5. MATERIAL HOVER
------------------------------ */
function initMaterialHover() {
    const materialItem = document.querySelector('.item-material');
    const materialLists = document.querySelectorAll('.material-list li');

    if (!materialItem) return;

    materialItem.addEventListener('mouseenter', () => {
        materialLists.forEach((li, index) => {
            li.style.transitionDelay = `${index * 0.1}s`;
            li.style.transform = 'translateX(10px)';
        });
    });

    materialItem.addEventListener('mouseleave', () => {
        materialLists.forEach((li) => {
            li.style.transitionDelay = '0s';
            li.style.transform = 'translateX(0)';
        });
    });
}

/* ------------------------------
6. HERO SLIDER
------------------------------ */
function initHeroSlider() {
    // HTML의 클래스명과 정확히 일치시킵니다.
    const slides = document.querySelectorAll('.hero-slider .slide');
    const dots = document.querySelectorAll('.hero-dots .dot');

    if (slides.length === 0) return;

    let currentIndex = 0;
    let slideInterval;
    const intervalTime = 4000;

    function updateSlider(index) {
        // 모든 슬라이드와 도트에서 active 제거
        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));

        // 해당 인덱스 활성화
        slides[index].classList.add('active');
        if (dots[index]) dots[index].classList.add('active');

        currentIndex = index;
    }

    function startInterval() {
        stopInterval(); // 중복 방지
        slideInterval = setInterval(() => {
            let nextIndex = (currentIndex + 1) % slides.length;
            updateSlider(nextIndex);
        }, intervalTime);
    }

    function stopInterval() {
        if (slideInterval) clearInterval(slideInterval);
    }

    // 1. 초기 상태 설정
    updateSlider(0);
    startInterval();

    // 2. 도트 클릭 이벤트 (이 부분이 안됐던 이유는 클래스명 불일치 때문)
    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            updateSlider(idx);
            startInterval(); // 클릭 시 시간 초기화 후 다시 시작
        });
    });
}