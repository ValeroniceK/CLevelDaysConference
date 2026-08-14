/* =============================================================================
   CONTENT / ТЕКСТ РЕЗЮМЕ  —  единственный файл, который нужно править.
   -----------------------------------------------------------------------------
   Здесь лежит ВЕСЬ текст сайта, разбитый по блокам. Меняй значения справа от
   двоеточия, сохраняй кавычки. Разметку и анимации трогать не нужно —
   они живут в index.html и сами подхватят новый текст.

   Правила:
   • Строки — в кавычках: name: "VALERY"
   • Списки — в квадратных скобках через запятую: ["A", "B", "C"]
   • Внутри текста апострофы пиши так: "I've" (двойные кавычки снаружи).
   • Символ «·» — это разделитель-точка, можно копировать как есть.
============================================================================= */

window.CV_CONTENT = {

  /* ---- ЛИЧНОСТЬ (используется и на заставке, и в резюме) ------------------ */
  firstName: "VALERY",
  lastName:  "KASMACH",

  /* ---- КОНТАКТЫ ---------------------------------------------------------- */
  email: "vkasmach@gmail.com",
  phone: "+375336313337",
  linkedinUrl: "https://www.linkedin.com/in/vkasmach/",
  githubUrl: "https://github.com/ValeroniceK",
  telegramUrl: "https://t.me/valeronice",
  telegramHandle: "@valeronice",
  // Ссылка на «классическое» PDF-резюме (синяя таблетка)
  pdfUrl: "https://drive.google.com/file/d/1rcLT5rTPbU3CxjUbxhVAKpU8eU7eyvgS/view?usp=sharing",

  /* ---- ЗАСТАВКА / ВЫБОР ТАБЛЕТКИ ----------------------------------------- */
  landing: {
    systemLine:   "// SYSTEM :: WAKE_PROTOCOL — READY",
    tagline:      "QA AUTOMATION ENGINEER · PERFORMANCE · AI",
    choicePrompt: "MAKE YOUR CHOICE",
    // Красная таблетка → цифровое резюме
    redTitle: "Wake up in the digital reality",
    redCode:  "ENTER_DIGITAL_RESUME",
    // Синяя таблетка → PDF
    blueTitle: "Take the classic path",
    blueCode:  "OPEN_CLASSIC_PDF",
  },

  /* ---- ШАПКА РЕЗЮМЕ ------------------------------------------------------ */
  roleLine: "QA AUTOMATION ENGINEER / QA FULL STACK",
  roleSub:  "PYTHON · MOBILE · PERFORMANCE · AI-DRIVEN TOOLING",

  /* ---- 01 // ABOUT ------------------------------------------------------- */
  about: "QA Engineer / AQA with 8+ years of experience spanning Fullstack QA, Automation, and Client Performance testing. Equally effective as the sole engineer in an early-stage startup or inside a 300+ person game studio — adapting QA strategy to any team scale, domain, and risk profile. My focus: turning quality into a competitive advantage through automation, performance insight, and AI-driven tooling. I build things that last — frameworks, pipelines, and processes that save teams time long after I've moved on to the next challenge.",
  // Плашки под текстом About
  badges: ["ISTQB CERTIFIED", "CONFERENCE SPEAKER", "MENTOR"],

  /* ---- 02 // CAREER_HIGHLIGHTS ------------------------------------------ */
  // Каждая карточка: stat (крупная цифра), tag (подпись), text (описание)
  highlights: [
    { stat: "5×",     tag: "FASTER RELEASES",      text: "Scaled the mobile device farm and redesigned execution pipelines — cutting full regression runtime from 10–20h to ~2–3h." },
    { stat: "98%",    tag: "REGRESSION COVERAGE",  text: "Grew automated coverage from 30% → 98% and first-run pass rate from 70% → 99–100%, driving post-release incidents to near zero." },
    { stat: "1-click", tag: "AUTOMATION",          text: "Slack/Jira integrations deliver full automated reports from a single task — saving 1–5 days of manual work per sprint." },
    { stat: "AI/ML",  tag: "INTEGRATION",          text: "Integrated LLM tooling (Claude, Cursor) into daily workflows and built datasets to train a net for content-quality detection." },
    { stat: "0→4",    tag: "TEAM GROWTH",          text: "Progressed from sole QA engineer building teams from scratch to Client Performance QA in a 300+ person studio." },
    { stat: "100M+",  tag: "CROSS-INDUSTRY",       text: "Delivered quality for mobile games, health tech and award-winning startups — each with its own risk & compliance profile." },
  ],

  /* ---- 03 // SKILL_MATRIX ----------------------------------------------- */
  // Каждая группа: name (заголовок) + items (список навыков)
  skillGroups: [
    { name: "LANGUAGES & FRAMEWORKS", items: ["Python", "pytest", "PyCharm", "Playwright"] },
    { name: "MOBILE AUTOMATION",      items: ["Airtest", "Poco", "iOS WebDriver", "Device farm mgmt"] },
    { name: "CI/CD & INFRASTRUCTURE", items: ["GitHub Actions", "CI/CD", "YAML", "Pipelines"] },
    { name: "PERFORMANCE",            items: ["Perf profiling", "Custom tools", "Charles Proxy", "Frame/memory analysis"] },
    { name: "API & QA TOOLS",         items: ["REST API", "Postman", "TestRail", "Jira", "Confluence"] },
    { name: "AI / ML",                items: ["Claude", "Cursor", "LLM tooling", "Dataset building"] },
  ],
  platforms: ["Android", "iOS", "macOS", "Linux", "Windows"],

  /* ---- 04 // EXPERIENCE_LOG ---------------------------------------------- */
  // Каждая работа: role, company, period + bullets (список достижений)
  experience: [
    {
      role: "AQA → Client Performance QA Engineer",
      company: "Moon Active — Family Island / Family Bay · 300+ studio",
      period: "2022 — PRESENT",
      bullets: [
        "Built custom internal performance tools (TrueSight, StandaloneProfiler) that became studio-wide standards for reproducible measurement.",
        "Led complex SlowFrameTime investigations, diagnosing non-trivial regressions and shipping actionable hotfixes with engineering.",
        "Engineered automated performance reporting and on-device profiling of loading time, frame drops and memory on real devices.",
        "As part of a 10-person AQA team, built & maintained 500+ E2E tests on real iOS/Android via the device farm.",
        "Scaled the farm and cut full regression from 10–20h to ~2–3h; grew coverage 30% → 98%, pass rate 70% → 99–100%.",
      ],
    },
    {
      role: "QA Manual → QA Full Stack / AQA (Python)",
      company: "Melsoft — My Cafe",
      period: "2019 — 2022",
      bullets: [
        "Owned the full feature quality cycle: test-case authoring → manual testing → automated coverage → infra support.",
        "Transitioned the role from 80% manual / 20% automation to 100% automated testing, driving a tech-first quality approach.",
        "Implemented LiveOps 'fool-proofing' guards preventing misconfigured events from reaching production.",
        "Delivered internal talk 'Charles Proxy: Simplifying Tester Life' (2020), adopted as the team's API-testing reference.",
      ],
    },
    {
      role: "QA Manual → QA Team Lead",
      company: "Blak-IT.com",
      period: "2018 — 2019",
      bullets: [
        "Joined as sole QA engineer and built the entire QA function from scratch: processes, docs, bug tracking, reporting standards.",
        "Scaled the team to 4 engineers as QA Lead — setting goals, running reviews, establishing engineering standards.",
        "Managed up to 4 concurrent projects across healthcare, fitness, engineering and fintech (Profy — Best Startup of 2019, Georgia).",
      ],
    },
  ],

  /* ---- 05 // TRAINING & LANGUAGES --------------------------------------- */
  // Каждая запись: year, title, sub
  education: [
    { year: "2011 — 2016",  title: "BSc · Computer Science & Electronics",             sub: "Belarusian State University of Informatics and Radioelectronics" },
    { year: "2019",         title: "Test Manager",                                     sub: "Quality Lab" },
    { year: "2018 / 2019",  title: "Mobile Software Testing · Test Planning & Estimation", sub: "IT Academy" },
    { year: "2025",         title: "Cursor Basics · Secure Programming",               sub: "Moon Active (Internal) · ISTQB Foundation Level" },
  ],
  languages: ["English — Professional", "Russian — Native"],

  /* ---- CTA (финальный блок) --------------------------------------------- */
  ctaText: "References available upon request. Prefer the paper trail? Take the classic route.",
};
