/* Site copy is intentionally centralized for quick customization. */
const translations = {
  en: {
    navAbout: 'About', navResearch: 'Research', navProjects: 'Projects', navHonors: 'Honors', navContact: 'Contact',
    heroEyebrow: 'SOFTWARE ENGINEERING · AI RESEARCH', heroIntro: "Hi, I'm",
    heroLead: 'I turn <em>curiosity</em> into research,<br>and research into <em>things that work.</em>',
    heroDesc: 'Software engineering student exploring AI Agents, AI Infrastructure, and trustworthy machine learning. Interested in both fundamental questions and systems that make an impact.',
    exploreResearch: 'Explore research', heroFootnote: 'Currently at Xiangtan University · China',
    statGpa: 'Undergraduate GPA', statRank: 'Major ranking', statComp: 'Regional medalist',
    aboutLabel: 'THE PERSON BEHIND THE CODE', aboutTitle: 'Curious by nature.<br><span class="subtle">Driven by impact.</span>',
    aboutLead: 'My interests sit at the intersection of <strong>intelligent algorithms</strong>, <strong>reliable systems</strong>, and <strong>real-world applications</strong>.',
    aboutText: "I'm an undergraduate software engineering student at Xiangtan University. My experience spans algorithm competitions, open-world deepfake attribution, cross-modal retrieval security, and building practical AI tools. I'm now exploring the next generation of LLM-based agents and the infrastructure behind them.",
    eduName: 'Xiangtan University', eduProgram: 'B.Eng. in Software Engineering · Undergraduate', interestsTitle: 'CURRENT INTERESTS',
    researchLabel: 'QUESTIONS WORTH PURSUING', researchTitle: 'Selected <em>research.</em>',
    researchIntro: 'Learning to ask better questions, design stronger methods, and evaluate results rigorously.',
    research1Title: 'Long-Tailed Open-World Deepfake Attribution',
    research1Desc: 'Exploring how to identify known forgery methods while discovering unlabeled, previously unseen method categories under imbalanced data. Focused on quality-aware learning and structure-guided representation.',
    research2Title: 'Privacy Protection for Cross-Modal Video Retrieval',
    research2Desc: 'Investigating selective retrieval suppression for video-text systems, aiming to protect designated content while preserving the utility of normal retrieval.',
    research3Title: 'LLM Agents & AI Infrastructure',
    research3Desc: 'An emerging direction of interest: agent memory, workflow orchestration, evaluation, inference efficiency, and scalable systems for language-model applications.',
    researchProjectTag: 'RESEARCH PROJECT', interestTag: 'CURRENT INTEREST',
    researchNote: 'Research projects are listed without publication claims; papers and links can be added after public release.',
    projectsLabel: 'FROM IDEAS TO IMPLEMENTATION', projectsTitle: "Things I've <em>built.</em>",
    projectsIntro: 'A mix of agent tooling, full-stack engineering, and applied AI experiments.',
    projectOpenSource: 'OPEN SOURCE', projectApplied: 'APPLIED AI',
    agentRecallDesc: 'A local workspace for discovering, organizing, restoring, and migrating AI coding-agent sessions across tools.',
    finloopDesc: 'An experimental decision studio featuring auditable agent workflows, evidence snapshots, reproducible evaluations, and failure recovery.',
    recipeName: 'Smart Recipe Assistant',
    recipeDesc: 'An end-to-end recipe assistant combining ingredient detection with YOLO and a locally deployed language model for cooking suggestions.',
    viewGitHub: 'More on GitHub',
    honorsLabel: 'MILESTONES & RECOGNITION', honorsTitle: 'A few <em>highlights.</em>',
    honorsIntro: 'Competitive programming taught me how to think clearly under pressure and keep improving through iteration.',
    honor1: 'CCPC Regional Contest', honor1Result: 'Silver Medal · 2025', honor2: 'ICPC Regional Contest', honor2Result: 'Bronze Medal',
    honor3: 'Lanqiao Cup National Final', honor3Result: 'First Prize · C/C++',
    honor4: 'National Information Security Contest', honor4Result: 'Third Prize · National',
    contactEyebrow: "05 / LET'S CONNECT", contactTitle: 'Have an idea?<br><em>Let\'s explore it.</em>',
    contactDesc: "I'm always interested in thoughtful conversations about research, open source, and building useful AI systems.",
    findGithub: 'Find me on GitHub', footerRights: 'Built with curiosity.', backTop: 'Back to top ↑'
  },
  zh: {
    navAbout: '关于我', navResearch: '科研工作', navProjects: '项目实践', navHonors: '荣誉奖项', navContact: '联系我',
    heroEyebrow: '软件工程 · 人工智能研究', heroIntro: '你好，我是',
    heroLead: '以<em>好奇心</em>驱动科研，<br>让研究成果真正<em>落地。</em>',
    heroDesc: '软件工程专业学生，关注 AI Agents、AI Infrastructure 与可信机器学习。既热衷探索基础问题，也喜欢构建可靠、实用的智能系统。',
    exploreResearch: '了解科研工作', heroFootnote: '现就读于湘潭大学 · 中国',
    statGpa: '本科 GPA', statRank: '专业排名', statComp: '区域赛奖牌',
    aboutLabel: '代码背后的人', aboutTitle: '保持好奇。<br><span class="subtle">持续探索。</span>',
    aboutLead: '我的兴趣集中在 <strong>智能算法</strong>、<strong>可靠系统</strong> 与 <strong>实际应用</strong> 的交叉领域。',
    aboutText: '我目前就读于湘潭大学软件工程专业。本科期间参与算法竞赛，并围绕开放世界深度伪造溯源、跨模态检索安全等问题开展研究，同时探索 AI 工具的工程落地。目前正进一步学习大语言模型智能体及支撑其运行的系统基础设施。',
    eduName: '湘潭大学', eduProgram: '软件工程 · 工学学士（本科在读）', interestsTitle: '近期关注方向',
    researchLabel: '值得探索的问题', researchTitle: '科研与<em>探索。</em>',
    researchIntro: '从提出问题、构建方法到实验评估，逐步打磨严谨的科研能力。',
    research1Title: '长尾开放世界深度伪造溯源',
    research1Desc: '研究长尾数据分布下已知伪造方法的识别与无标签未知类别的发现，重点探索质量感知学习及结构先验对表示学习的帮助。',
    research2Title: '跨模态视频检索隐私保护',
    research2Desc: '研究视频—文本检索系统中的选择性检索抑制，在尽可能保留正常检索性能的同时保护指定视频内容。',
    research3Title: 'LLM 智能体与 AI 基础设施',
    research3Desc: '正在深入探索的研究兴趣，包括智能体记忆、工作流编排与评测，以及推理效率和可扩展大模型系统。',
    researchProjectTag: '科研项目', interestTag: '研究兴趣',
    researchNote: '这里展示的是研究工作与兴趣方向；论文正式公开后可补充发表信息和链接。',
    projectsLabel: '让想法落地', projectsTitle: '项目与<em>实践。</em>',
    projectsIntro: '从 Agent 工具、全栈系统到 AI 应用，持续尝试将想法实现为可运行的软件。',
    projectOpenSource: '开源项目', projectApplied: 'AI 应用',
    agentRecallDesc: '面向 AI 编程助手会话的本地工作台，支持跨工具搜索、整理、恢复和迁移历史会话。',
    finloopDesc: '面向模拟决策场景的 Agent 工作台，支持可追溯执行、证据快照、可复现实验和故障恢复。',
    recipeName: '智能食谱推荐系统',
    recipeDesc: '结合 YOLO 食材检测与本地部署大语言模型的端到端智能食谱推荐应用。',
    viewGitHub: '查看更多 GitHub 项目',
    honorsLabel: '竞赛与成长', honorsTitle: '一些<em>里程碑。</em>',
    honorsIntro: '算法竞赛让我学会在压力下清晰思考，也培养了持续复盘与迭代的习惯。',
    honor1: 'CCPC 中国大学生程序设计竞赛区域赛', honor1Result: '银奖 · 2025',
    honor2: 'ICPC 国际大学生程序设计竞赛区域赛', honor2Result: '铜奖',
    honor3: '蓝桥杯全国总决赛', honor3Result: '国家一等奖 · C/C++',
    honor4: '全国大学生信息安全竞赛', honor4Result: '国家三等奖',
    contactEyebrow: '05 / 保持联系', contactTitle: '有新的想法？<br><em>一起交流。</em>',
    contactDesc: '欢迎交流科研问题、开源项目，以及如何构建真正有用的 AI 系统。',
    findGithub: '在 GitHub 联系我', footerRights: '以好奇心构建。', backTop: '返回顶部 ↑'
  }
};

const html = document.documentElement;
const themeButton = document.getElementById('theme-toggle');
const languageButton = document.getElementById('language-toggle');
const menuButton = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');

function getStored(key) {
  try { return localStorage.getItem(key); } catch (_) { return null; }
}
function store(key, value) {
  try { localStorage.setItem(key, value); } catch (_) { /* private browsing */ }
}
function setTheme(theme) {
  html.dataset.theme = theme;
  themeButton.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  themeButton.setAttribute('title', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  store('hannn-theme', theme);
}
function setLanguage(lang) {
  if (!translations[lang]) lang = 'en';
  const dictionary = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(node => {
    const value = dictionary[node.dataset.i18n];
    if (typeof value !== 'string') return;
    // All markup comes exclusively from the trusted, hard-coded dictionary above.
    node.innerHTML = value;
  });
  html.lang = lang === 'zh' ? 'zh-CN' : 'en';
  languageButton.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切换为中文');
  languageButton.setAttribute('aria-pressed', String(lang === 'zh'));
  document.title = lang === 'zh' ? 'Hannn — 科研与工程' : 'Hannn — Research & Engineering';
  store('hannn-lang', lang);
}
function closeMobileMenu() {
  mobileNav.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation menu');
}

const savedTheme = getStored('hannn-theme');
setTheme(savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'light');
const savedLanguage = getStored('hannn-lang');
setLanguage(savedLanguage === 'zh' ? 'zh' : 'en');

themeButton.addEventListener('click', () => setTheme(html.dataset.theme === 'dark' ? 'light' : 'dark'));
languageButton.addEventListener('click', () => setLanguage(html.lang === 'en' ? 'zh' : 'en'));
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  mobileNav.hidden = isOpen;
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMobileMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMobileMenu(); });
document.getElementById('copyright-year').textContent = String(new Date().getFullYear());

if ('IntersectionObserver' in window) {
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav a');
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      navLinks.forEach(link => {
        const active = link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }
  }, { rootMargin: '-20% 0px -60% 0px', threshold: 0 });
  sections.forEach(section => observer.observe(section));
}