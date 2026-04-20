// about 페이지
const i18nData = {
  ko: {
    // 공통 요소
    "nav-about": "Architecture",
    "nav-project": "Repositories",
    "nav-connect": "Connect",
    "side-craft": "디지털·크래프트맨십",
    "footer-cta": "간결한 가치를 만듭니다.",

    // index
    // Hero 섹션
    "hero-sub-title": "디자인 주도 프론트엔드 & 정숙한 시각적 서사",
    "hero-desc": `카페와 작은 브랜드, 그리고 정적인 공간을 위한 웹사이트.`,
    "hero-role": "프론트엔드 / 브랜딩 / 디렉션",
    "hero-cta": "프로젝트 시작하기 →",
    "meta-role-val": "프론트엔드 개발자",
    "meta-base-val": "서울 / 도쿄",
    "meta-status-val": "작업 가능",

    // About 섹션
    "idx-about-p1": "서울과 도쿄를 오가며, 브랜드와 공간을 위한 차분하고 의도적인 디지털 경험을 만듭니다.",
    "idx-about-p2": "무드와 리듬, 절제된 인터랙션을 중심으로 과하지 않고 자연스럽게 느껴지는 경험을 지향합니다.",
    "idx-about-p3": "빛, 공간, 그리고 정적인 분위기를 웹으로 옮기는 작업에 관심이 있습니다.",

    // Project 섹션
    "proj-header-title": "Selected Projects",
    "proj-header-desc": "구조, 브랜딩, 그리고 디지털 경험에 집중합니다.",
    "proj-header-note": "정숙한 구조와 시각적 흐름을 탐구한 작업물들입니다.",
    "proj-view": "상세 보기",
    "proj-01-desc-full": "편집샵을 위한 미니멀 웹사이트. 레이아웃과 제품의 흐름에 집중합니다.",
    "proj-02-desc-full": "조용한 카페의 분위기를 담은 웹사이트. 기능보다 공기감을 반영합니다.",

    // Process 섹션
    "proc-sub": "하나의 브랜드가 디지털 공간에 안착하기까지의 여정.",
    "proc-01-title": "Discovery & Mood",
    "proc-01-desc": "브랜드의 본질을 분석하고 시각적 무드보드를 통해 방향성을 설정합니다.",
    "proc-02-title": "Digital Craft",
    "proc-02-desc": "Vanilla JS를 활용하여 정숙하고 세밀한 인터랙션을 구현합니다.",
    "proc-03-title": "Localization & Launch",
    "proc-03-desc": "일본 시장 진출을 위한 번역 최적화 및 로컬 뉘앙스를 반영합니다.",

    // Services
    "svc-title": "What I Do",
    "svc-desc": "카페와 작은 브랜드를 위한 간결한 웹사이트를 제작합니다.",
    "svc-proof": "단순한 구조, 차분한 인터랙션, 명확한 브랜딩.",
    "svc-01": "카페 웹사이트",
    "svc-01-sub": "싱글 페이지 혹은 소규모 사이트",
    "svc-02": "랜딩 페이지",
    "svc-02-sub": "개인 브랜드 및 프로젝트용",
    "svc-03": "프론트엔드",
    "svc-cta": "소규모 프로젝트 작업 가능합니다. 인스타그램이나 이메일로 연락 주세요.",

    // FAQ & Status
    "faq-title": "Frequently Asked Questions",
    "faq-q1": "제작 기간은 얼마나 걸리나요?",
    "faq-a1": "프로젝트에 따라 다르지만 보통 3~5주 정도 소요됩니다.",
    "faq-q2": "개발만 의뢰하는 것도 가능한가요?",
    "faq-a2": "네, 이미 디자인이 준비되어 있다면 가능합니다.",
    
    // cta
    "cta-jp-small": "정숙한 제작을, 함께.",
    "cta-main": `당신의 브랜드 아이덴티티를 아카이브하세요.`,
    "cta-sub-text": "새로운 프로젝트에 대한 영감을 기다립니다.",
    "cta-link-text": "대화 시작하기 →",

    // CTA Footer
    "cta-jp-small": "정숙한 제작을, 함께.",
    "cta-sub-text": "새로운 프로젝트에 대한 영감을 기다립니다.",

    // about 페이지
    "about-hero-title": "브랜드의 숨결을, 디지털의 정적으로.",
    "about-hero-sub": "서울과 도쿄를 기반으로 브랜드의 철학을 디지털 공간에 설계하는 프론트엔드 디렉터입니다.",
    "about-philo-title": "정돈된 감각 / Structured Sensitivity",
    "about-philo-desc1": "서울에서 시작해 도쿄의 거리로 이어지는 여정을 준비하고 있습니다. 저에게 웹은 단순한 인터페이스가 아닌, 브랜드의 철학이 머무는 '디지털 플래그십 스토어'입니다.",
    "about-philo-desc2": "불필요한 장식을 걷어내고, 여백과 질감 그리고 절제된 움직임을 통해 브랜드 본연의 가치를 전달하는 데 집중합니다.",
    "about-note-title": "디렉터의 메모",
    "about-note-quote": "\"기술은 보이지 않을 때 가장 아름답습니다.\"",
    "about-note-desc": "TOKIMO는 웹사이트 제작을 넘어, 장기적으로 일본 현지에서 카페와 패션 브랜드를 직접 운영하려는 계획을 품고 있습니다. 공간의 여백과 사물의 질감을 디지털로 번역하는 '디지털 제작자'의 자세로 모든 프로젝트에 임합니다.",
    "about-signature": "TOKIMO / 디렉터 현우"
  },
  jp: {
    // index
    "nav-about": "Architecture",
    "nav-project": "Repositories",
    "nav-connect": "Connect",
    "side-craft": "デジタル・クラフトマンシップ",
    "footer-cta": "シンプルなものづくりを。",

    "hero-sub-title": "デザイン主導のフロントエンドと静かな視覚的物語",
    "hero-desc": `カフェや小さなブランド、<br>そして静かな空間のためのウェブ制作。`,
    "hero-role": "フロントエンド・ブランディング",
    "hero-cta": "プロジェクトを始める →",
    "meta-role-val": "フロントエンド開発",
    "meta-base-val": "ソウル / 東京",
    "meta-status-val": "ご依頼受付中",

    "idx-about-p1": "ソウルと東京を拠点に、ブランドや空間のための静かで意図のあるデジタル体験を設計しています。",
    "idx-about-p2": "ムードやリズム、控えめなインタラクションを大切にし、自然に感じられる体験を目指しています。",
    "idx-about-p3": "光や空間、静けさといった空気感をウェブに落とし込むことに関心があります。",

    "proj-header-title": "Selected Projects",
    "proj-header-desc": "構造、ブランディング、デジタル体験に焦점을 맞추고 있습니다.",
    "proj-header-note": "静かな構造と視覚的な流れを追求したアーカイブ。",
    "proj-view": "詳細を見る",
    "proj-01-desc-full": "セレクトショップのためのミニマルなウェブデザイン。レイアウトと製品の流れを重視。",
    "proj-02-desc-full": "静かなカフェの空気感を表現したウェブサイト。機能ではなく雰囲기를 반영.",

    // Services
    "svc-title": "What I Do",
    "svc-desc": "カフェや小さなブランドのためのシンプルなウェブ制作。",
    "svc-proof": "シンプルな構造、控えめなインタラクション、明快なブランディング。",
    "svc-01": "カフェのウェブサイト",
    "svc-01-sub": "シングルページ、または小規模サイト",
    "svc-02": "ランディングページ",
    "svc-02-sub": "個人ブランドやプロジェクト向け",
    "svc-03": "フロントエンド",
    "svc-cta": "小規模プロジェクトのご依頼を承っております。<br>Instagramまたはメールでお問い合わせください。",

    // process
    "proc-sub": "一つのブランドが、デジタル空間に深く根を下ろすまでの軌跡。",
    "proc-01-title": "Discovery & Mood",
    "proc-01-desc": "ブランドの本質を読み解き、ムードボードを通じて最適な視覚的アプローチを設計します。",
    "proc-02-title": "Digital Craft",
    "proc-02-desc": "ピクセル単位のUI設計と、細部までこだわり抜いたフロントエンド開発を行います。",
    "proc-03-title": "Localization & Launch",
    "proc-03-desc": "日本のローカルな文脈に寄り添い、違和感のない自然なデジタル体験へと翻訳します。",

    // FAQ & Status
    "faq-title": "Frequently Asked Questions",
    "faq-q1": "制作期間はどのくらいですか？",
    "faq-a1": "プロジェクトによりますが、通常3〜5週間ほどです。",
    "faq-q2": "開発のみの依頼は可能ですか？",
    "faq-a2": "はい、デザインが既に完成している場合は可能です。",

    // cta
    "cta-jp-small": "静かなものづくりを、共に。",
    "cta-main": `ブランドの価値をデジタル空間に記録いたします。`, // 직역보다 '기록/아카이브' 의미 강조
    "cta-sub-text": "新しいプロジェクトへのインスピレーションをお待ちしております。",
    "cta-link-text": "お問い合わせ →",

    // CTA Footer
    "cta-jp-small": "静かなものづくりを、共に。",
    "cta-sub-text": "新しいプロジェクトへのインスピレーションをお待ちしております。",

    // about
    "about-hero-title": "ブランドの息吹を、デジタルの静寂へ。",
    "about-hero-sub": "ソウルと東京を拠点に、ブランドの哲学をデジタル空間に設計するフロントエンド・ディレクターです。",
    "about-philo-title": "静かな抵抗 / Structured Sensitivity",
    "about-philo-desc1": "ソウルで始まり、東京の街並みへと続く旅を準備しています。私にとってウェブは単なるインターフェースではなく、ブランドの哲学が宿る「デジタル・フラッグシップストア」です。",
    "about-philo-desc2": "過剰な装飾を削ぎ落とし、余白や質感、そして控えめなインタラクションを通じて、ブランド本来の価値を伝えることに注力しています。",
    "about-note-title": "ディレクターズ・ノート",
    "about-note-quote": "「技術は見えない時に最も美しい。」",
    "about-note-desc": "TOKIMOは単にウェブサイトを作ることを超え、長期的に日本国内でカフェやファッションブランドを自ら運営するという計画を抱いています。空間の余白と物の質感をデジタルに翻訳する「デジタル職人」の姿勢で、すべてのプロジェクトに臨みます。",
    "about-signature": "TOKIMO / ディレクター ヒョンウ"
  },
  en: {
    // index
    "nav-about": "Architecture",
    "nav-project": "Repositories",
    "nav-connect": "Connect",
    "side-craft": "Digital Craftsmanship",
    "footer-cta": "Let’s build something simple.",

    "hero-sub-title": "Design-driven frontend & quiet visual storytelling",
    "hero-desc": `for cafes, small brands,<br>and quiet spaces.`,
    "hero-role": "frontend / branding / direction",
    "hero-cta": "Start a Project →",
    "meta-role-val": "Frontend Developer",
    "meta-base-val": "Seoul / Tokyo",
    "meta-status-val": "Available for freelance",

    "idx-about-p1": "Based in Seoul and Tokyo, designing calm and intentional digital experiences for brands and spaces.",
    "idx-about-p2": "Focusing on mood, pacing, and restrained interaction to create experiences that feel natural.",
    "idx-about-p3": "Interested in translating atmosphere — light, space, and silence — into digital form.",
    
    // project
    "proj-header-title": "Selected Projects",
    "proj-header-desc": "Focused on structure, branding, and digital experience.",
    "proj-header-note": "A selection of works exploring quiet structure and visual flow.",
    "proj-view": "Browse Selection",
    "proj-01-desc-full": "A minimal website for a fashion select shop. Focused on layout and product flow.",
    "proj-02-desc-full": "A simple website for a quiet coffee shop. Reflecting atmosphere rather than features.",
    
    // services
    "svc-title": "What I Do",
    "svc-desc": "Simple websites for cafes and small brands.",
    "svc-proof": "Simple structure, calm interaction, and clear branding.",
    "svc-01": "Cafe websites",
    "svc-01-sub": "Single-page or small websites",
    "svc-02": "Landing pages",
    "svc-02-sub": "For small brands and projects",
    "svc-03": "Frontend",
    "svc-cta": "Available for small projects. Contact via Instagram or Email.",

    // process
    "proc-sub": "The journey of a brand landing in the digital space.",
    "proc-01-title": "Discovery & Mood",
    "proc-01-desc": "Analyzing brand essence and defining direction through visual moodboards.",
    "proc-02-title": "Digital Craft",
    "proc-02-desc": "Implementing quiet interactions using editorial layouts and Vanilla JS.",
    "proc-03-title": "Localization & Launch",
    "proc-03-desc": "Translation optimization and reflecting local nuances for the Japanese market.",

    // cta
    "cta-jp-small": "Creating silence, together.",
    "cta-main": `Let’s archive your Brand Identity.`,
    "cta-sub-text": "I look forward to hearing about your new project.",
    "cta-link-text": "Start a Conversation →",

    // FAQ & Status
    "faq-title": "Frequently Asked Questions",
    "faq-q1": "How long does it take?",
    "faq-a1": "Around 3–5 weeks, depending on the project.",
    "faq-q2": "Can I request only development?",
    "faq-a2": "Yes, if you already have a design.",

    // CTA Footer
    "cta-jp-small": "Creating silence, together.",
    "cta-sub-text": "I look forward to hearing about your new project.",

    // about 페이지
    "about-hero-title": "Architecting the breath of brands into digital silence.",
    "about-hero-sub": "A frontend director based in Seoul and Tokyo, designing brand philosophy into digital spaces.",
    "about-philo-title": "Structured Sensitivity",
    "about-philo-desc1": "Preparing for a journey that starts in Seoul and continues to the streets of Tokyo. To me, a website is not just an interface, but a 'Digital Flagship Store' where a brand's philosophy resides.",
    "about-philo-desc2": "I focus on delivering the core value of a brand through clean structure, raw textures, and quiet interactions, stripping away unnecessary noise.",
    "about-note-title": "Director’s Note",
    "about-note-quote": "\"Technology is most beautiful when invisible.\"",
    "about-note-desc": "Beyond building websites, TOKIMO plans to operate a physical cafe and fashion brand in Japan. I approach every project as a 'Digital Craftsman', translating the void of space and the texture of objects into digital form.",
    "about-signature": "TOKIMO / DIRECTOR HYUNWOO"
  }
};