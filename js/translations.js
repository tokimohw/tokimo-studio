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
    "about-signature": "TOKIMO / 디렉터 현우",

    "about-presence-title": "현지 대응 및 로컬라이징",
    "about-presence-desc": "서울과 도쿄를 기반으로 활동하며, 일본 현지 비즈니스 매너에 맞춘 긴밀한 소통이 가능합니다. 단순한 번역을 넘어 브랜드의 공기감을 일본 시장에 맞게 재설계합니다.",


    // project 페이지
    "page-title": "PROJECTS | TOKIMO ARCHIVE",
    "archive-title": "WORK SELECTED",
    "cat-all": "ALL",
    "cat-space": "SPACE",
    "cat-object": "OBJECT",
    "cat-identity": "IDENTITY",

    // Project 01
    "p01-name": `Seta Fashion Label Digital Flagship`,
    "p01-desc": "도쿄 베이스 레이블의 시각적 아이덴티티와 자연광의 질감을 담은 디지털 플래그십 설계",
    
    // Project 02
    "p02-name": `Slow Roastery`,
    "p02-desc": "로컬 로스터리의 과정과 질감을 담은 웹 아카이브",
    
    // Project 03
    "p03-name": `Kissa Local Roastery`,
    "p03-desc": "로컬 로스터리 카페의 공간적 경험을 웹 아카이브로 번역하는 브랜딩 프로젝트",
    
    // Project 04
    "p04-name": `Aesthetic Select Shop`,
    "p04-desc": "사물의 질감과 생활감을 중심으로 한 라이프스타일 편집샵 커머스 가이드",
    
    // Project 05
    "p05-name": `Stationery Archive`,
    "p05-desc": "필기 도구의 촉감과 물성을 중심으로 한 오브제 아카이브 프로젝트",

    // CTA Section
    "p-cta-title": `Looking for Digital Craftsmanship?`,
    "p-cta-desc": "당신의 브랜드가 가진 고유한 공기감을 디지털로 옮깁니다. 브랜딩, 웹 구축, 그리고 일본 진출에 대한 협업을 환영합니다.",
    "p-cta-btn": "START A PROJECT",

    // connect 페이지
    "c-hero-label": "Get in Touch",
    "c-display-title": "Start a Conversation.",
    "c-description": "프로젝트 의뢰 및 협업 문의는 아래 양식을 통해 접수해 주세요. 확인 후 정중히 답변드립니다.",
    
    // Form Labels
    "c-label-name": "성함 / 조직명",
    "c-label-service": "문의 서비스",
    "c-label-message": "메시지",
    
    // Placeholders
    "c-ph-name": "성함을 입력해 주세요",
    "c-ph-message": "프로젝트에 대해 알려주세요",
    
    // Select Options
    "c-opt-default": "서비스를 선택해 주세요",
    "c-opt-web": "웹 개발 / UI 디자인",
    "c-opt-brand": "브랜드 아이덴티티 / 개인 브랜딩",
    "c-opt-consult": "일본 진출 컨설팅",
    "c-opt-others": "기타 문의",
    
    // Submit
    "c-btn-submit": "문의 보내기",
    "c-toast": "메시지가 성공적으로 전송되었습니다.",

    // 
    "c-label-budget": "예산 규모",
    "c-opt-budget-default": "예산 범위를 선택해 주세요",
    "c-label-timeline": "희망 일정",
    "c-opt-time-default": "일정을 선택해 주세요",
    "c-opt-time-1": "긴급 (1개월 이내)",
    "c-opt-time-2": "보통 (1-3개월)",
    "c-opt-time-3": "유연함 / 기획 단계",
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
    "proj-02-desc-full": "静かなカフェの雰囲気を表現したウェブサイト。 機能よりも空気感を反映いたします。",

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

    // about 페이지
    "about-hero-title": "ブランドの息吹を、デジタルの静寂へ。",
    "about-hero-sub": "ソウルと東京を拠点に、ブランドの哲学をデジタル空間に設計するフロントエンド・ディレクターです。",
    "about-philo-title": "静かな抵抗 / Structured Sensitivity",
    "about-philo-desc1": "ソウルで始まり、東京の街並みへと続く旅を準備しています。私にとってウェブは単なるインターフェースではなく、ブランドの哲学が宿る「デジタル・フラッグシップストア」です。",
    "about-philo-desc2": "過剰な装飾を削ぎ落とし、余白や質感、そして控えめなインタラクションを通じて、ブランド本来の価値を伝えることに注力しています。",
    "about-note-title": "ディレクターズ・ノート",
    "about-note-quote": "「技術は見えない時に最も美しい。」",
    "about-note-desc": "TOKIMOは単にウェブサイトを作ることを超え、長期的に日本国内でカフェやファッションブランドを自ら運営するという計画を抱いています。空間の余白と物の質感をデジタルに翻訳する「デジタル職人」の姿勢で、すべてのプロジェクトに臨みます。",
    "about-signature": "TOKIMO / ディレクター ヒョンウ",

    "about-presence-title": "現地対応とローカライズ",
    "about-presence-desc": "ソウルと東京を拠点に活動しており、日本独自のビジネス慣行とコミュニケーションマナーを遵守しています。 単なる翻訳にとどまらず、ブランドが持つ「空気感」を日本市場に最適化します。",


    // project 페이지
    "page-title": "PROJECTS | TOKIMO ARCHIVE",
    "archive-title": "WORK SELECTED",
    "cat-all": "すべて",
    "cat-space": "空間",
    "cat-object": "オブジェクト",
    "cat-identity": "アイデンティティ",

    "p01-name": `Seta Fashion Label Digital Flagship`,
    "p01-desc": "東京ベースのファッションレーベルにおける視覚的アイデンティティとデジタルの融合。",
    "p02-name": `Slow Roastery`,
    "p02-desc": "ローカルロースタリーのプロセスと質感にフォーカスしたウェブアーカイブ。",
    "p03-name": `Kissa Local Roastery`,
    "p03-desc": "ローカルロースタリーカフェの空間体験をウェブアーカイブへと翻訳するプロジェクト。",
    "p04-name": `Aesthetic Select Shop`,
    "p04-desc": "物の質感と生活感を中心としたライフスタイルセレクトショップのECガイドライン。",
    "p05-name": `Stationery Archive`,
    "p05-desc": "ステーショナリーの触感と物性に焦点を当てたオブジェアーカイブ。",

    "p-cta-title": `Looking for Digital Craftsmanship?`,
    "p-cta-desc": "貴社のブランドが持つ独自の空気感をデジタルへと翻訳します。ブランディング、ウェブ構築そして日本進出に関する協業をお待ちしております。",
    "p-cta-btn": "プロジェクトを始める",

    // conncet 페이지
    "c-hero-label": "Get in Touch",
    "c-display-title": "Start a Conversation.",
    "c-description": "プロジェクトのご依頼や協業に関するお問い合わせは、下記のフォームより受け付けております。",
    
    "c-label-name": "お名前 / 貴社名",
    "c-label-service": "ご依頼内容",
    "c-label-message": "メッセージ",
    
    "c-ph-name": "お名前をご記入ください",
    "c-ph-message": "プロジェクトの概要をお聞かせください",
    
    "c-opt-default": "内容を選択してください",
    "c-opt-web": "Web開発 / UIデザイン",
    "c-opt-brand": "ブランドアイデンティティ",
    "c-opt-consult": "日本進出コンサルティング",
    "c-opt-others": "その他",
    
    "c-btn-submit": "送信する",
    "c-toast": "メッセージを送信しました。",

    "c-label-budget": "予算規模",
    "c-opt-budget-default": "予算範囲を選択してください",
    "c-label-timeline": "希望納期",
    "c-opt-time-default": "納期を選択してください",
    "c-opt-time-1": "お急ぎ (1ヶ月以内)",
    "c-opt-time-2": "通常 (1-3ヶ月)",
    "c-opt-time-3": "柔軟 / 企画段階",
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
    "about-signature": "TOKIMO / DIRECTOR HYUNWOO",
    
    "about-presence-title": "Local Presence",
    "about-presence-desc": "Based in Seoul and Tokyo, I provide seamless communication tailored to Japanese business etiquette. Beyond translation, I re-engineer your brand's atmosphere for the Japanese market.",

    // project 페이지
    "page-title": "PROJECTS | TOKIMO ARCHIVE",
    "archive-title": "WORK SELECTED",
    "cat-all": "ALL",
    "cat-space": "SPACE",
    "cat-object": "OBJECT",
    "cat-identity": "IDENTITY",

    "p01-name": `Seta Fashion Label Digital Flagship`,
    "p01-desc": "Visual identity and digital flagship design for a Tokyo-based label, capturing the texture of natural light.",
    "p02-name": `Slow Roastery`,
    "p02-desc": "A web archive focused on the process and texture of a local roastery.",
    "p03-name": `Kissa Local Roastery`,
    "p03-desc": "A branding project translating the spatial experience of a local cafe into a digital archive.",
    "p04-name": `Aesthetic Select Shop`,
    "p04-desc": "E-commerce guidelines for a lifestyle select shop focused on materiality and daily life.",
    "p05-name": `Stationery Archive`,
    "p05-desc": "An object archive project focusing on the tactile sensation and physical properties of stationery.",

    "p-cta-title": `Looking for Digital Craftsmanship?`,
    "p-cta-desc": "Translating your brand's unique atmosphere into digital form. Welcoming collaborations for branding, web development, and Japan market entry.",
    "p-cta-btn": "START A PROJECT",

    // conncet 페이지
    "c-hero-label": "Get in Touch",
    "c-display-title": "Start a Conversation.",
    "c-description": "Please submit the form below for project inquiries and collaborations. I will respond as soon as possible.",
    
    "c-label-name": "Name / Organization",
    "c-label-service": "Service",
    "c-label-message": "Message",
    
    "c-ph-name": "Your Name",
    "c-ph-message": "Tell me about your project",
    
    "c-opt-default": "Select a service",
    "c-opt-web": "Web Development / UI Design",
    "c-opt-brand": "Brand Identity / Personal Branding",
    "c-opt-consult": "Japan Entry Consulting",
    "c-opt-others": "Others",
    
    "c-btn-submit": "Send Inquiry",
    "c-toast": "Message Sent Successfully.",

    "c-label-budget": "Estimated Budget",
    "c-opt-budget-default": "Select budget range",
    "c-label-timeline": "Desired Timeline",
    "c-opt-time-default": "Select timeline",
    "c-opt-time-1": "Urgent (Within 1 month)",
    "c-opt-time-2": "Standard (1-3 months)",
    "c-opt-time-3": "Flexible / Planning stage"
  }
};