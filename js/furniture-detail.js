/**
 * FURNITURE ARCHIVE INTERACTION (Mid-Century Modern Landing Page)
 * 통합 최적화 버전 - TOKIMO ARCHIVE
 */
document.addEventListener('DOMContentLoaded', () => {
    // [공통 변수 선언]
    const body = document.querySelector('.fn-body');
    const viewer = document.querySelector('.fn-chair-viewer');
    const chairWrap = document.querySelector('.fn-chair-img-wrap');
    const navItems = document.querySelectorAll('.fn-nav-links li');
    const swatches = document.querySelectorAll('.swatch');
    const descText = document.getElementById('fn-desc-text');

    // [1. 초기 로딩 및 기본 설정]
    body.classList.add('mode-explore');
    gsap.to('.fn-fade-up', {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    });

    // [2. 마우스 인터랙션 (배경 도형 & 의자 뷰어)]
    window.addEventListener('mousemove', (e) => {
        // 배경 도형 움직임
        const bgMoveX = (e.clientX - window.innerWidth / 2) * 0.005;
        const bgMoveY = (e.clientY - window.innerHeight / 2) * 0.005;
        gsap.to('.mcm-shape', {
            x: bgMoveX,
            y: bgMoveY,
            duration: 1.5,
            ease: "power1.out",
            stagger: 0.1
        });

        // 의자 뷰어 회전 및 스케일 (EXPLORE 모드 등에서 활성화)
        if (viewer && chairWrap) {
            const rect = viewer.getBoundingClientRect();
            const relX = (e.clientX - rect.left) / rect.width - 0.5;
            const relY = (e.clientY - rect.top) / rect.height - 0.5;

            gsap.to(chairWrap, {
                rotateY: relX * 20,
                rotateX: -relY * 20,
                scale: 1 + Math.abs(relX * relY) * 0.2,
                duration: 0.5,
                ease: "power2.out",
                transformPerspective: 1000
            });
        }
    });

    if (viewer) {
        viewer.addEventListener('mouseleave', () => {
            gsap.to(chairWrap, {
                rotateX: 0, rotateY: 0, scale: 1,
                duration: 1,
                ease: "elastic.out(1, 0.3)"
            });
        });
    }

    // [3. 모드 전환 시스템 (EXPLORE / MATERIALS / BLUEPRINT)]
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const mode = item.querySelector('a').getAttribute('href').replace('#', '');
            
            navItems.forEach(li => li.classList.remove('active'));
            item.classList.add('active');

            body.classList.remove('mode-explore', 'mode-materials', 'mode-blueprint');
            body.classList.add(`mode-${mode}`);

            switchMode(mode);
        });
    });

    function switchMode(mode) {
        // 모든 모드에서 공통적으로 수치 라벨 제거
        document.querySelectorAll('.fn-spec-label').forEach(el => el.remove());

        if (mode === 'explore') {
            gsap.to(chairWrap, { scale: 1, opacity: 1, duration: 1, ease: "power3.out" });
        } 
        else if (mode === 'materials') {
            gsap.to(chairWrap, { scale: 1.1, duration: 1, ease: "back.out(1.7)" });
        } 
        else if (mode === 'blueprint') {
            // 도면 선 애니메이션
            gsap.fromTo('.fn-blueprint-overlay', 
                { strokeDashoffset: 1000 }, 
                { strokeDashoffset: 0, duration: 2, ease: "power2.inOut" }
            );

            // BLUEPRINT 전용 수치 데이터 노출
            const specs = [
                { label: 'H: 720mm', top: '20%', left: '45%' },
                { label: 'W: 480mm', top: '75%', left: '35%' },
                { label: 'D: 510mm', top: '65%', left: '60%' },
                { label: 'ANGLE: 105°', top: '35%', left: '55%' }
            ];

            specs.forEach(spec => {
                const label = document.createElement('div');
                label.className = 'fn-spec-label';
                label.innerText = spec.label;
                Object.assign(label.style, {
                    position: 'absolute', top: spec.top, left: spec.left,
                    fontSize: '10px', fontFamily: 'monospace', zIndex: '10'
                });
                viewer.appendChild(label);
                gsap.from(label, { opacity: 0, scale: 0, duration: 0.5, delay: 0.5 });
            });
        }
    }

    // [4. 소재 스와치 클릭 인터랙션]
    const materialData = {
        walnut: "짙고 풍부한 나무결의 월넛 우드. 수공예로 깎아 유려한 곡선을 완성했습니다. 따뜻함을 담당합니다.",
        concrete: "거칠고 차가운 질감의 노출 콘크리트 베이스. 묵직한 하중을 지탱하며 공간의 중심을 잡습니다."
    };

    swatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
            const material = swatch.dataset.material;
            
            document.querySelector('.swatch.active').classList.remove('active');
            swatch.classList.add('active');

            if (materialData[material]) {
                gsap.to(descText, {
                    opacity: 0, duration: 0.3,
                    onComplete: () => {
                        descText.textContent = materialData[material];
                        gsap.to(descText, { opacity: 1, duration: 0.3 });
                    }
                });
            }
            
            const bgColor = material === 'walnut' ? '#faf2f0' : '#f2f2f2';
            gsap.to(body, { backgroundColor: bgColor, duration: 0.5 });
        });
    });
});