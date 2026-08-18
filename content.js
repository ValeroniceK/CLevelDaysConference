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

const d = (b64) => atob(b64);

window.CV_CONTENT = {

  /* ---- ЛИЧНОСТЬ (используется и на заставке, и в резюме) ------------------ */
  firstName: "VALERY",
  lastName:  "KASMACH",

  /* ---- КОНТАКТЫ (base64) ------------------------------ */
  email: d("dmthc21hY2hAZ21haWwuY29t"),
  phone: d("KzM3NTMzNjMxMzMzNw=="),
  linkedinUrl: d("aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3ZrYXNtYWNoLw=="),
  githubUrl: d("aHR0cHM6Ly9naXRodWIuY29tL1ZhbGVyb25pY2VL"),
  telegramUrl: d("aHR0cHM6Ly90Lm1lL3ZhbGVyb25pY2U="),
  telegramHandle: d("QHZhbGVyb25pY2U="),
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
  about: "QA Automation Engineer с 8+ годами опыта — от единственного тестировщика в стартапе до performance-инженера в студии на 300+ человек. Превращаю качество в конкурентное преимущество: ускоряю релизы, автоматизирую рутину и снижаю число багов, которые долетают до пользователей. AI использую не для галочки, а чтобы экономить команде дни ручной работы каждый спринт.",
  // Плашки под текстом About
  badges: ["ISTQB CERTIFIED", "CONFERENCE SPEAKER", "MENTOR"],

  /* ---- 02 // CAREER_HIGHLIGHTS ------------------------------------------ */
  // Каждая карточка: stat (крупная цифра), tag (подпись, EN), text (описание, RU)
  // Для конференции — только 4 карточки, самые понятные для C-level
  highlights: [
    { stat: "5×",       tag: "FASTER RELEASES",       text: "Полный цикл регресса — с 10–20 часов до 2–3. Фичи и фиксы доезжают до пользователей быстрее, бизнес быстрее видит результат." },
    { stat: "98%",      tag: "NEAR-ZERO PROD BUGS",   text: "Автопокрытие выросло с 30% до 98%, первый прогон проходит на 99–100%. Инциденты после релиза — почти исчезли." },
    { stat: "1–5 дн.",  tag: "MANUAL WORK SAVED",     text: "Автоматические отчёты в Slack и Jira по одной задаче — команда каждый спринт экономит дни ручной работы." },
    { stat: "AI",       tag: "REAL AI, NOT A DEMO",   text: "Внедрил LLM (Claude, Cursor) в рабочие процессы и обучил модель искать проблемы в контенте — рабочий инструмент, а не эксперимент для отчёта." },
  ],

  /* ---- 03 // SKILL_MATRIX ----------------------------------------------- */
  // Каждая группа: name (заголовок, EN) + items (список навыков)
  // Сжато до 3 групп — детали инструментов не главное для C-level аудитории
  skillGroups: [
    { name: "AUTOMATION",   items: ["Python / Playwright", "Mobile: iOS & Android", "CI/CD пайплайны"] },
    { name: "PERFORMANCE",  items: ["Профилирование на реальных устройствах", "Кастомные dev-инструменты"] },
    { name: "AI / TOOLING", items: ["Claude, Cursor в работе", "Обучение моделей на своих данных"] },
  ],
  platforms: ["Android", "iOS", "macOS", "Linux", "Windows"],

  /* ---- 04 // EXPERIENCE_LOG ---------------------------------------------- */
  // Каждая работа: role, company, period + bullets (список достижений, RU, покороче для конференции)
  experience: [
    {
      role: "AQA → Client Performance QA Engineer",
      company: "Moon Active — Family Island / Family Bay · 300+ studio",
      period: "2022 — PRESENT",
      bullets: [
        "Создал внутренние инструменты профилирования (TrueSight, StandaloneProfiler) — стали стандартом студии для замеров на реальных устройствах.",
        "Веду сложные расследования просадок производительности и довожу их до конкретных фиксов вместе с разработкой.",
        "Ускорил полный регресс с 10–20 часов до 2–3, поднял автопокрытие с 30% до 98%, прогон проходит на 99–100%.",
      ],
    },
    {
      role: "QA Manual → QA Full Stack / AQA (Python)",
      company: "Melsoft — My Cafe",
      period: "2019 — 2022",
      bullets: [
        "Перевёл команду с 80% ручного тестирования на 100% автоматизированное — без потери качества.",
        "Внедрил защиту от неправильно настроенных ивентов, которые могли уронить продакшен.",
      ],
    },
    {
      role: "QA Manual → QA Team Lead",
      company: "Blak-IT.com",
      period: "2018 — 2019",
      bullets: [
        "Пришёл единственным QA и построил процесс с нуля: документация, баг-трекинг, стандарты отчётности.",
        "Вырос до тим-лида, довёл команду до 4 человек, вёл до 4 проектов одновременно (health-tech, fintech, fitness).",
      ],
    },
  ],

  /* ---- 05 // TRAINING & LANGUAGES --------------------------------------- */
  // Каждая запись: year, title, sub — сжато до самого релевантного для C-level
  education: [
    { year: "2025", title: "AI / Secure Programming · Cursor Basics", sub: "Moon Active (внутреннее обучение)" },
    { year: "2019", title: "ISTQB Foundation Level · Test Manager",   sub: "Quality Lab" },
  ],
  languages: ["English — Professional", "Russian — Native"],

  /* ---- CTA (финальный блок) --------------------------------------------- */
  ctaText: "Ускоряю релизы, снижаю баги в проде и экономлю бюджет на ручном QA — без раздувания команды. Обсудим ваш кейс?",
};
