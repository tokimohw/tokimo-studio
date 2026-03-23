document.addEventListener("DOMContentLoaded", () => {
    
    // 1. 등장 애니메이션 감지 (fade-up과 image-mask 모두 감지)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 이미지가 스르륵 나타나게 클래스 추가
                entry.target.classList.add('reveal');
            }
        });
    }, { threshold: 0.1 });

    // 감지할 대상들 등록
    document.querySelectorAll('.fade-up, .image-mask, [data-split]').forEach(el => observer.observe(el));

    // 2. 텍스트 스플릿 로직 (기존 유지)
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

    // 3. 리스트 호버 이미지 (index.html의 data-img 속성과 연결)
    const listItems = document.querySelectorAll('.list-item');
    const hoverReveal = document.createElement('div');
    hoverReveal.className = 'hover-reveal';
    document.body.appendChild(hoverReveal);

    listItems.forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const imgPath = item.getAttribute('data-img');
            hoverReveal.style.backgroundImage = `url(${imgPath})`;
            hoverReveal.style.opacity = '1';
            hoverReveal.style.transform = `translate(${e.clientX + 20}px, ${e.clientY - 100}px)`;
        });
        item.addEventListener('mouseleave', () => {
            hoverReveal.style.opacity = '0';
        });
    });
});

function updateIndexTime() {
    const options = {
        timeZone: 'Asia/Tokyo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    const formatter = new Intl.DateTimeFormat('en-GB', options);
    const tokyoTime = formatter.format(new Date());

    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        timeElement.textContent = `TOKYO / SEOUL — ${tokyoTime}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateIndexTime();
    setInterval(updateIndexTime, 1000);
});

/* --- [index.js] MATERIAL HOVER EFFECT --- */
const materialItem = document.querySelector('.item-material');
const materialLists = document.querySelectorAll('.material-list li');

if (materialItem) {
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