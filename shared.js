/**
 * Portfolio Shared Core
 * Dynamic calculations, command palette & Full-Text Search Engine
 */

const PORTFOLIO_CONFIG = {
  careerStartDate: "2016-08-01", // Début chez Capgemini en Août 2016
  email: "asrir.anass@hotmail.fr",
  web3formsKey: "6019276f-5de2-4fb7-9932-8f30d7f10d22"
};

/**
 * Utilitaire global d'échappement HTML pour éviter les failles XSS et les ReferenceErrors
 */
function escapeHtml(str) {
  if (str === null || str === undefined) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Base de Données Complète pour la Recherche Plein Texte (Grep-like Full-Text Index)
 * Chaque entrée contient la totalité de son contenu textuel (bullets, descriptions, métriques).
 */
const SEARCH_INDEX = [
  // =========================================================================
  // 1. Pages Principales & Navigation
  // =========================================================================
  {
    id: "nav-home",
    title: "Accueil — Portfolio Linktree",
    subtitle: "Vue d'ensemble, réseaux et accès direct aux projets phares",
    url: "/",
    category: "Navigation",
    icon: "🏠",
    action: "Aller ↵",
    content: "Anass Asrir Senior SDET Architect & Builder. Stratégie Shift-Left, Industrialisation CI/CD & Création d'applications web modernes et performantes. Disponible pour échanger et projets.",
    keywords: [
      "accueil", "home", "landing", "linktree", "hub", "sommaire", "start", "racine",
      "anass", "asrir", "anass asrir", "sdet", "architecte", "presentation", "bio",
      "qui suis je", "profil", "reseaux", "liens", "contacts", "page principale"
    ]
  },
  {
    id: "nav-about",
    title: "Parcours & Métriques d'Impact",
    subtitle: "Synthèse de carrière, chiffres clés et certifications professionnelles",
    url: "/about",
    category: "Navigation",
    icon: "📊",
    action: "Aller ↵",
    content: "Plus de 10 ans dédiés à l'architecture qualité logicielle, la mise en œuvre de stratégies Shift-Left et l'industrialisation des pipelines CI/CD. 8+ années d'expertise SDET Architect, QA Lead. -90% de temps de test manuel économisé grâce à l'automatisation E2E/API en Pull Request. 30+ projets livrés SaaS, PropTech, E-commerce, assurance. 2 500+ défauts critiques évités détectés en amont de la production grâce aux boucles de feedback ultra-rapides et tests visuels.",
    keywords: [
      "about", "a propos", "experience", "experiences", "parcours", "carriere", "cv",
      "curriculum", "resume", "profil professionnel", "postes", "emplois", "jobs",
      "historique", "timeline", "metriques", "impact", "chiffres", "statistiques",
      "stats", "kpi", "q-kpi", "annees", "senior", "architecte sdet", "qa lead",
      "10 ans", "10+", "annees d'experience", "defauts", "critiques", "evites"
    ]
  },
  {
    id: "nav-projects",
    title: "Projets Personnels & Dev",
    subtitle: "Architecture QA, frameworks open-source et applications web",
    url: "/projects",
    category: "Navigation",
    icon: "💻",
    action: "Aller ↵",
    content: "Projets Personnels & Dev. Architecture QA & Frameworks : Enterprise Cypress E2E & API, Selenium WebDriver & C#, GEMAT Generic QA Automation Engine, Cross-Platform Mobile Testing Appium. Développement & Applications Web : Jolipas Jeu Éducatif Interactif PWA, Les Équier'Mômes Plateforme Associative Next.js. Vidéos & Formations : Formation SDET & BDD.",
    keywords: [
      "projets", "projects", "dev", "developpement", "apps", "applications", "frameworks",
      "cypress", "selenium", "gemat", "appium", "jolipas", "equier momes", "open source"
    ]
  },
  {
    id: "nav-formations",
    title: "Espace Formations Vidéo",
    subtitle: "Lecteur vidéo intégré et programme complet BDD (Cucumber / Selenium)",
    url: "/formations",
    category: "Navigation",
    icon: "🎥",
    action: "Aller ↵",
    content: "Formation SDET & BDD Selenium & Cucumber. Cours vidéo structuré pas-à-pas pour concevoir des architectures d'automatisation de tests robustes basées sur le comportement avec Cucumber syntaxe Gherkin et Selenium. 100% gratuit et open source sur YouTube.",
    keywords: [
      "formation", "formations", "video", "videos", "youtube", "playlist", "cours",
      "tuto", "tutos", "tutoriel", "tutoriels", "tutorial", "apprendre", "pedagogie",
      "mentoring", "transmission", "bdd", "behavior driven development", "selenium",
      "cucumber", "gherkin", "masterclass", "cours gratuit", "chaine youtube",
      "lecteur", "video youtube", "syllabus", "modules", "apprenant", "formation gratuite"
    ]
  },
  {
    id: "action-qr",
    title: "QR Code du portfolio",
    subtitle: "Scanner avec un smartphone ou télécharger le badge",
    url: "#qr",
    category: "Action",
    icon: "📱",
    action: "Afficher ↵",
    content: "Afficher le QR Code du portfolio pour scanner ou partager avec un smartphone",
    keywords: ["qr", "qrcode", "qr-code", "flashcode", "mobile", "scanner", "scan", "partager", "wallet", "carte"]
  },

  // =========================================================================
  // 2. Postes & Entreprises (Deep-links directs /about#...)
  // =========================================================================
  {
    id: "exp-kodehyve",
    title: "kodehyve — QA Manager / SDET Architect",
    subtitle: "Shift-Left, Cypress TypeScript, GitHub Actions & Postgres (Depuis 07/2023)",
    url: "/about#kodehyve",
    category: "Expériences & Postes",
    icon: "🚀",
    action: "Voir poste ↵",
    content: "Socle Qualité : Définition et déploiement du processus global de qualité logicielle (Shift-Left), garantissant la robustesse des livrables de la plateforme. Architecture d'Automatisation : Conception d'un framework Cypress / TypeScript intégré au processus de Pull Request pour une validation immédiate. Intégration Continue : Industrialisation des workflows GitHub Actions pour raccourcir les boucles de rétroaction (-90% de temps sur les tests critiques). Données de Test : Automatisation de la génération et du nettoyage des jeux de données API via SQL / PostgreSQL.",
    keywords: [
      "kodehyve", "qa manager", "responsable qa", "sdet architect", "architecte sdet",
      "poste actuel", "actuel", "present", "2023", "2024", "2025", "2026", "juillet 2023",
      "shift-left", "shift left", "processus qualite", "qualite logicielle", "robustesse",
      "cypress", "typescript", "javascript", "pull request", "pr", "validation pr",
      "ci/cd", "ci", "cd", "github actions", "workflows", "retroaction", "tests critiques",
      "critiques", "postman", "api", "test data", "donnees de test", "jeu de donnees", "sql", "postgres",
      "postgresql", "reproductibilite", "proptech", "saas", "experience", "historique"
    ]
  },
  {
    id: "exp-raja",
    title: "Raja — QA Lead (CI/CD Industrialization)",
    subtitle: "E-commerce critique, Azure DevOps, Cypress & Percy (05/2021 – 07/2023)",
    url: "/about#raja",
    category: "Expériences & Postes",
    icon: "📦",
    action: "Voir poste ↵",
    content: "Domaines Critiques : Référent automatisation garantissant la couverture QA des parcours d'achat et tunnels de paiement à haute disponibilité. Azure DevOps & Cypress : Intégration avancée dans Azure DevOps Services garantissant 100% de validation automatisée avant mise en production. Visual Testing : Implémentation de Percy pour la détection des régressions d'interface (-15% d'anomalies UI en production).",
    keywords: [
      "raja", "qa lead", "lead qa", "lead testeur", "2021", "2022", "2023", "mai 2021",
      "e-commerce", "ecommerce", "commerce", "tunnel d'achat", "tunnel de commande",
      "paiement", "panier", "checkout", "haute disponibilite", "disponibilite",
      "domaines critiques", "critiques", "critique", "cypress", "typescript", "azure devops", "azure", "devops", "pipelines",
      "releases", "percy", "visual testing", "tests visuels", "regression visuelle",
      "ui defects", "anomalies ui", "100% automatise", "experience", "historique"
    ]
  },
  {
    id: "exp-enablon",
    title: "Enablon — QA Engineer (Strategy & Frameworks)",
    subtitle: "Harmonisation multi-squads, Power BI, Q-KPIs & Selenium C# (04/2018 – 05/2021)",
    url: "/about#enablon",
    category: "Expériences & Postes",
    icon: "📊",
    action: "Voir poste ↵",
    content: "Harmonisation Multi-Squads : Pilotage de la stratégie QA transverse et harmonisation des outils d'automatisation (Selenium C#, Ranorex, Appium). Q-KPIs & Décision : Mise en place de tableaux de bord Power BI basés sur les données d'exécution de tests pour guider le management produit. Maintenabilité : Augmentation de 30% de la maintenabilité des suites de tests suite à la standardisation des architectures.",
    keywords: [
      "enablon", "wolters kluwer", "qa engineer", "ingenieur qa", "ingenieur test",
      "2018", "2019", "2020", "2021", "avril 2018", "strategie qa", "multi squads",
      "multi equipes", "harmonisation", "benchmarking", "ranorex", "selenium c#",
      "c#", ".net", "dotnet", "csharp", "appium", "mobile", "q-kpi", "q-kpis", "kpi",
      "kpis", "indicateurs", "power bi", "powerbi", "dashboards", "tableaux de bord",
      "aide a la decision", "decision support", "maintenabilite", "experience", "historique"
    ]
  },
  {
    id: "exp-capgemini",
    title: "Capgemini — Test Analyst",
    subtitle: "Migration open-source, Selenium WebDriver, BDD Java & Jenkins (08/2016 – 03/2018)",
    url: "/about#capgemini",
    category: "Expériences & Postes",
    icon: "🏢",
    action: "Voir poste ↵",
    content: "Migration Open-Source : Transition réussie d'outils propriétaires payants (HP UFT) vers une suite open-source basée sur Selenium WebDriver. Framework BDD : Développement d'un framework Java + Cucumber / Gherkin permettant aux testeurs fonctionnels d'automatiser leurs scénarios. Selenium Grid & Jenkins : Déploiement de l'exécution parallèle distribuée et automatisation des builds nocturnes sous Jenkins.",
    keywords: [
      "capgemini", "cap", "cap gemini", "test analyst", "analyste de test", "analyste qa",
      "premier poste", "debut de carriere", "2016", "2017", "2018", "aout 2016",
      "migration", "open source", "open-source", "hp uft", "uft", "qtp", "hp alm", "alm",
      "selenium", "selenium webdriver", "webdriver", "java", "cucumber", "gherkin",
      "bdd", "selenium grid", "grid", "parallele", "jenkins", "nightly builds",
      "tests nocturnes", "nocturnes", "ci", "esn", "service", "experience", "historique"
    ]
  },

  // =========================================================================
  // 3. Certifications & Standards
  // =========================================================================
  {
    id: "cert-all",
    title: "Certifications & Standards Professionnels",
    subtitle: "ISTQB® Certified Tester & Certified ScrumMaster® (CSM®)",
    url: "/about#certifications",
    category: "Certifications",
    icon: "📜",
    action: "Consulter ↵",
    content: "Rigueur méthodologique et compétences d'ingénierie certifiées : ISTQB® Certified Tester, Certified ScrumMaster® (CSM®), Shift-Left Testing, BDD (Behavior-Driven Development), Q-KPIs & Power BI Analytics.",
    keywords: [
      "istqb", "cstl", "certification", "certifications", "certifie", "certified tester",
      "testeur certifie", "fondation", "normes", "iso", "standards de test",
      "csm", "scrum", "scrummaster", "agile", "agilite", "scrum alliance", "sprint",
      "rituels agiles", "daily", "retrospective", "jira", "shift-left", "bdd", "power bi"
    ]
  },

  // =========================================================================
  // 4. Projets QA & Frameworks
  // =========================================================================
  {
    id: "proj-cypress",
    title: "Enterprise Cypress E2E & API Framework",
    subtitle: "Solution complète d'automatisation UI/API en pipeline CI/CD",
    url: "https://github.com/anassasrir/cypress-tests",
    category: "Projets QA & Outils",
    icon: "⚡",
    action: "GitHub ↗",
    content: "Framework d'automatisation UI & API complet, pensé pour les pipelines CI/CD haute vélocité avec exécution en pull request. Cypress, JavaScript, TypeScript, API Testing, CI/CD Validation, Behavior Testing, open-source.",
    keywords: [
      "cypress", "cypress framework", "cypress tests", "tests e2e", "end-to-end",
      "api testing", "tests api", "javascript", "typescript", "ts", "js", "ci/cd",
      "continuous integration", "github actions", "pr validation", "validation continue",
      "open source", "open-source", "automatisation web", "ui testing", "rest api"
    ]
  },
  {
    id: "proj-selenium",
    title: "Selenium WebDriver & C# Architecture",
    subtitle: "Architecture Page Object Model (POM) enterprise sous .NET",
    url: "https://github.com/anassasrir/selenium-framework",
    category: "Projets QA & Outils",
    icon: "🎯",
    action: "GitHub ↗",
    content: "Architecture Page Object Model (POM) hautement structurée sous l'écosystème .NET pour des tests d'entreprise fiables et maintenables. C# .NET, Selenium WebDriver, xUnit, MSTest, POM Pattern, Open-Source.",
    keywords: [
      "selenium", "selenium webdriver", "c#", ".net", "dotnet", "csharp", "pom",
      "page object model", "xunit", "mstest", "nunit", "architecture de test",
      "enterprise testing", "scalable", "open source", "webdriver", "framework c#",
      "framework dotnet", "automatisation e2e", "pattern pom"
    ]
  },
  {
    id: "proj-gemat",
    title: "GEMAT — Generic QA Automation Engine",
    subtitle: "Outil QA : données de test, health checks d'environnements et API/BDD",
    url: "https://github.com/anassasrir/GEMAT",
    category: "Projets QA & Outils",
    icon: "🔧",
    action: "GitHub ↗",
    content: "Outil et utilitaire dédié à l'automatisation des tâches répétitives : génération de données de test, health checks d'environnements et nettoyage BDD/API. Test Data Management, API & DB Integration, Shell, PowerShell, Bash, Efficiency.",
    keywords: [
      "gemat", "generic engine", "mobile engine", "test data", "donnees de test",
      "jeux de donnees", "data management", "health checks", "sante environnement",
      "nettoyage base de donnees", "database cleanup", "api cleanup", "shell", "bash",
      "powershell", "utilitaire qa", "outil qa", "tool", "automatisation repetitives",
      "db", "sql", "gain de temps"
    ]
  },
  {
    id: "proj-appium",
    title: "Cross-Platform Mobile Testing (Appium)",
    subtitle: "Framework de test mobile unifié pour applications iOS et Android",
    url: "https://github.com/anassasrir/Appium",
    category: "Projets QA & Outils",
    icon: "📱",
    action: "GitHub ↗",
    content: "Framework modulaire pour applications mobiles natives, hybrides et web pour iOS et Android basé sur le protocole unifié WebDriver. Appium, Mobile Testing, iOS, Android, Cross-Platform, WebDriver Protocol.",
    keywords: [
      "appium", "mobile", "tests mobiles", "mobile testing", "ios", "android",
      "iphone", "smartphone", "tablette", "cross-platform", "multiplateforme",
      "native app", "hybrid app", "webdriver protocol", "w3c", "mobile qa",
      "automatisation mobile", "apk", "ipa"
    ]
  },

  // =========================================================================
  // 5. Projets Dév & Applications Web
  // =========================================================================
  {
    id: "proj-jolipas",
    title: "Jolipas — Jeu Éducatif Interactif",
    subtitle: "PWA moderne pour l'éveil et l'apprentissage ludique des enfants",
    url: "https://jolipas-app.pages.dev/",
    category: "Projets Développement",
    icon: "🎨",
    action: "Live App ↗",
    content: "Application web progressive (PWA) conçue pour l'éveil et l'apprentissage ludique des enfants : univers visuel captivant, animations fluides et réactivité tactile. PWA, Web App, EdTech, Interactive, Cloudflare Pages, apprentissage des couleurs, formes, motricité.",
    keywords: [
      "jolipas", "jolipas-app", "jolipas app", "jeu", "jeux", "game", "jeu educatif",
      "jeu enfant", "enfants", "kids", "tout-petits", "apprentissage", "eveil",
      "pedagogie", "pwa", "progressive web app", "web app", "application web",
      "edtech", "vue", "vite", "cloudflare", "cloudflare pages", "tactile", "mobile",
      "couleurs", "formes", "ludique", "developpement frontend", "en ligne"
    ]
  },
  {
    id: "proj-equier",
    title: "Les Équier'Mômes — Portail Associatif Scolaire",
    subtitle: "Next.js, TypeScript, PostgreSQL Neon, Vercel & Resend",
    url: "https://equier-momes.fr",
    category: "Projets Développement",
    icon: "🏫",
    action: "Site Web ↗",
    content: "Portail complet pour l'association de parents d'élèves de Bétheny : inscriptions en temps réel aux événements scolaires, kermesse, fête de l'école, planification des créneaux bénévoles par stand (buvette, pêche aux canards, chamboule-tout), espace élus sécurisé par code d'accès, export Excel .xlsx, confirmation e-mail via Resend, base de données serverless Neon PostgreSQL.",
    keywords: [
      "equier momes", "equiermomes", "les equier'momes", "les equiermomes", "equier",
      "momes", "association", "parents d'eleves", "fcpe", "betheny", "ecole",
      "groupe scolaire", "benevoles", "evenements", "kermesse", "stands", "buvette",
      "planning", "inscriptions", "espace elus", "tableau de bord", "nextjs", "next.js",
      "react", "typescript", "tailwind", "postgres", "postgresql", "neon", "resend",
      "ovh", "vercel", "developpement fullstack", "en ligne", "excel"
    ]
  },

  // =========================================================================
  // 6. Formations & Chaîne YouTube
  // =========================================================================
  {
    id: "video-youtube-playlist",
    title: "Playlist YouTube — Formation SDET & BDD",
    subtitle: "Série complète de vidéos gratuites : Cucumber, Gherkin & Selenium",
    url: "https://youtube.com/playlist?list=PL4BtVtsdnzadpYqpzXNrArRKXiG1MI6nH&si=esxQyFSGFNbqq2zQ",
    category: "Vidéos & Formations",
    icon: "▶️",
    action: "YouTube ↗",
    content: "Cours vidéo complet et gratuit pas-à-pas pour maîtriser l'architecture de tests automatisés basée sur le comportement (BDD) avec Cucumber, Gherkin et Selenium. Mentoring, formation publique gratuite, playlist YouTube.",
    keywords: [
      "youtube", "chaine youtube", "video youtube", "playlist youtube", "formation youtube",
      "cours youtube", "video", "videos", "cours", "tuto", "tutos", "tutoriel", "masterclass",
      "bdd", "behavior driven development", "cucumber", "gherkin", "selenium", "selenium webdriver",
      "cours gratuit", "formation gratuite", "free course", "open source", "mentoring", "chaine"
    ]
  },
  {
    id: "video-modules-detail",
    title: "Programme Détaillé du Cours BDD & Selenium",
    subtitle: "5 modules pas-à-pas : Philosophie, Gherkin, POM, Glue Code & Reporting",
    url: "/formations",
    category: "Vidéos & Formations",
    icon: "📚",
    action: "Syllabus ↵",
    content: "Module 01 : Principes du Behavior-Driven Development (BDD), rituel des 3 Amigos. Module 02 : Syntaxe Gherkin & Rédaction de Scénarios Given When Then, Scenario Outline, Examples. Module 03 : Architecture Page Object Model (POM), découplage strict. Module 04 : Step Definitions & Liaisons Selenium, Explicit Waits, synchronisation dynamique. Module 05 : Rapports d'Exécution & Bonnes Pratiques, Cucumber HTML Reports, captures d'écrans.",
    keywords: [
      "programme", "syllabus", "modules", "cours", "3 amigos", "given", "when", "then",
      "scenario", "scenario outline", "pom", "page object model", "step definitions",
      "explicit waits", "assertions", "reporting", "cucumber html reports"
    ]
  },

  // =========================================================================
  // 7. Actions Rapides & Contact
  // =========================================================================
  {
    id: "action-contact",
    title: "Envoyer un message (Formulaire)",
    subtitle: "Formulaire de contact direct pour opportunités ou projets",
    url: "action:open-contact",
    category: "Contact & Actions",
    icon: "✉️",
    action: "Écrire ↵",
    content: "Formulaire de contact direct pour envoyer un message à Anass Asrir. Disponible pour opportunités, échanges techniques, architecture QA, missions SDET et conseil.",
    keywords: [
      "contact", "contacter", "formulaire", "message", "email", "mail", "courriel", "me contacter", "ecrire",
      "embauche", "recrutement", "freelance", "collaboration", "opportunite",
      "coordonnees", "asrir", "anass", "discuter", "echanger"
    ]
  },
  {
    id: "action-download-cv-fr",
    title: "Télécharger mon CV en Français (PDF)",
    subtitle: "Curriculum Vitae officiel en français — Anass Asrir",
    url: "CV_ANASS_ASRIR.pdf",
    category: "Contact & Actions",
    icon: "🇫🇷",
    action: "Télécharger ↵",
    content: "Télécharger le CV officiel en français d'Anass Asrir au format PDF. Expériences Kodehyve, Raja, Enablon, Capgemini, compétences Playwright, Cypress, Selenium, IA Agentique, CI/CD, certifications ISTQB et CSM.",
    keywords: ["cv fr", "cv francais", "cv", "resume", "curriculum", "vitae", "pdf", "telecharger", "francais", "french", "cv_anass_asrir"]
  },
  {
    id: "action-download-cv-en",
    title: "Download Resume in English (PDF)",
    subtitle: "Official English resume — Anass Asrir",
    url: "RESUME_ANASS_ASRIR.pdf",
    category: "Contact & Actions",
    icon: "🇬🇧",
    action: "Download ↵",
    content: "Download official English resume of Anass Asrir in PDF format. QA Lead & SDET background, Kodehyve, Raja, Enablon, Capgemini, Cypress, Selenium, Cucumber BDD, CI/CD, ISTQB and CSM certifications.",
    keywords: ["cv en", "resume english", "english", "anglais", "cv anglais", "resume", "curriculum", "download", "pdf", "resume_anass_asrir"]
  },
  {
    id: "action-catch-my-stack",
    title: "Catch My Stack — Terrain de Jeu Interactif",
    subtitle: "Explorez de manière interactive les technologies et frameworks d'Anass",
    url: "/catch-my-stack",
    category: "Navigation & Outils",
    icon: "🎮",
    action: "Explorer ↵",
    content: "Jeu interactif Catch My Stack : capturez les technologies Cypress, Playwright, Selenium, TypeScript, C#, Python, Java, GitHub Actions, Azure DevOps, PostgreSQL, Postman, Percy, Cucumber, Docker, Power BI, Appium, Next.js, React, Vue.js, Vercel, Cloudflare Pages, Supabase, Resend, Web3Forms, Tailwind CSS, Vitest.",
    keywords: [
      "catch my stack", "stack hunter", "jeu", "game", "technos", "stacks", "competences",
      "interactif", "bug hunter", "nextjs", "react", "vuejs", "vercel", "cloudflare", "supabase", "resend", "vitest", "tailwind"
    ]
  },
  {
    id: "action-linkedin",
    title: "Profil LinkedIn — Anass Asrir",
    subtitle: "linkedin.com/in/anassasrir — Connexion & recommandations",
    url: "https://linkedin.com/in/anassasrir",
    category: "Contact & Actions",
    icon: "💼",
    action: "Ouvrir ↗",
    content: "Profil LinkedIn officiel d'Anass Asrir, Senior SDET Architect & Builder. Réseau professionnel, recommandations, articles et parcours.",
    keywords: [
      "linkedin", "reseau social", "reseau professionnel", "profil linkedin", "connexion",
      "inmail", "recommandations", "reseaux", "social"
    ]
  },
  {
    id: "action-github",
    title: "Profil GitHub — @anassasrir",
    subtitle: "github.com/anassasrir — Dépôts open-source et contributions",
    url: "https://github.com/anassasrir",
    category: "Contact & Actions",
    icon: "🐙",
    action: "Ouvrir ↗",
    content: "Dépôts GitHub d'Anass Asrir. Projets open-source : cypress-tests, selenium-framework, GEMAT, Appium, jahia-cypress, jolipas-app, equier-momes.",
    keywords: [
      "github", "git", "repos", "depots", "projets open source", "code source",
      "commits", "pull requests", "open-source", "depot"
    ]
  }
];

/**
 * Nettoie et normalise une chaîne (minuscules, sans accents, caractères spéciaux assainis)
 */
function normalizeText(text = "") {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Vérifie si un mot/token correspond au texte cible avec tolérance pluriel/singulier
 */
function matchToken(targetText, token) {
  if (!targetText || !token) return false;
  const normTarget = normalizeText(targetText);
  const normToken = normalizeText(token);
  if (!normToken) return false;

  // Correspondance directe
  if (normTarget.includes(normToken)) return true;

  // Tolérance pluriel/singulier en 's' (ex: critiques <-> critique, tests <-> test)
  if (normToken.length > 3 && normToken.endsWith("s")) {
    if (normTarget.includes(normToken.slice(0, -1))) return true;
  }
  // Tolérance singulier recherché dans pluriel
  if (normTarget.length > 3 && normTarget.endsWith("s")) {
    if (normTarget.slice(0, -1) === normToken) return true;
  }

  // Tolérance en 'x' (ex: travaux, métaux)
  if (normToken.length > 4 && normToken.endsWith("x")) {
    if (normTarget.includes(normToken.slice(0, -1))) return true;
  }

  return false;
}

/**
 * Extrait un extrait pertinent (snippet) autour du mot trouvé, style grep
 */
function extractSnippet(fullText, query) {
  if (!fullText || !query) return "";
  const words = fullText.split(/\s+/);
  const tokens = normalizeText(query).split(/\s+/).filter(Boolean);
  if (!tokens.length) return "";

  let matchIndex = -1;
  for (let i = 0; i < words.length; i++) {
    for (const token of tokens) {
      if (matchToken(words[i], token)) {
        matchIndex = i;
        break;
      }
    }
    if (matchIndex !== -1) break;
  }

  if (matchIndex === -1) return "";

  const start = Math.max(0, matchIndex - 5);
  const end = Math.min(words.length, matchIndex + 7);
  let snippet = words.slice(start, end).join(" ");
  if (start > 0) snippet = "..." + snippet;
  if (end < words.length) snippet = snippet + "...";
  return snippet;
}

/**
 * Calcule dynamiquement le nombre d'années d'expérience
 * à partir du début de carrière (Capgemini 08/2016)
 */
function getYearsOfExperience(startDateStr = PORTFOLIO_CONFIG.careerStartDate) {
  const start = new Date(startDateStr);
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  const m = now.getMonth() - start.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < start.getDate())) {
    years--;
  }
  return Math.max(1, years);
}

/**
 * Met à jour tous les compteurs et textes dynamiques sur la page
 */
function updateDynamicContent() {
  const years = getYearsOfExperience();
  const yearsPlus = `${years}+`;

  document.querySelectorAll("[data-dynamic-years]").forEach((el) => {
    el.textContent = yearsPlus;
  });

  document.querySelectorAll("[data-dynamic-years-text]").forEach((el) => {
    const template = el.getAttribute("data-dynamic-years-text");
    if (template) {
      el.textContent = template.replace("{years}", yearsPlus);
    } else {
      el.textContent = `${yearsPlus} ans`;
    }
  });

  document.querySelectorAll("[data-current-year], #currentYear").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
}

/**
 * Toast de notification
 */
let toastTimeout = null;
function showToast(message) {
  const toast = document.getElementById("toast");
  const toastMsg = document.getElementById("toastMsg");
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add("show");
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

/**
 * Initialisation au chargement du DOM
 */
document.addEventListener("DOMContentLoaded", () => {
  updateDynamicContent();

  // Initialisation du modal formulaire de contact
  initContactModal();

  // Initialisation du modal QR Code & Partage
  initQrModal();

  // Initialisation de la section Catch My Stack (Stack Hunter)
  initStackHunter();

  // Initialisation du hover mini-window YouTube
  initYouTubePreview();

  // Initialisation du menu de téléchargement du CV (FR / EN)
  initCvDropdown();

  // Initialisation du parcours temporel interactif (Time Travel Timeline)
  initInteractiveTimeline();

  // Spotlight Linear sur les cartes
  const cards = document.querySelectorAll(".link-card");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });

  // Initialisation du Command Palette avec moteur plein texte
  initCommandPalette();
});

/**
 * Gestion du Popup Modal Formulaire de Contact (Linear Style)
 */
function initContactModal() {
  ensureContactModalHtml();

  const modal = document.getElementById("contactModal");
  if (!modal) return;

  const form = document.getElementById("contactForm");
  const successState = document.getElementById("contactSuccessState");
  const closeBtn = document.getElementById("closeContactModal");
  const cancelBtn = document.getElementById("cancelContactBtn");
  const closeSuccessBtn = document.getElementById("closeSuccessBtn");
  const submitBtn = document.getElementById("submitContactBtn");
  const errorAlert = document.getElementById("contactFormError");

  // Champs de formulaire
  const nameInput = document.getElementById("contactName");
  const emailInput = document.getElementById("contactEmail");
  const subjectInput = document.getElementById("contactSubject");
  const messageInput = document.getElementById("contactMessage");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  function openContact() {
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    // Réinitialise l'état si déjà envoyé
    if (form && successState && successState.style.display !== "none") {
      form.reset();
      form.style.display = "flex";
      successState.style.display = "none";
      if (errorAlert) errorAlert.style.display = "none";
      if (submitBtn) {
        submitBtn.disabled = false;
        const btnText = submitBtn.querySelector(".btn-text");
        const btnSpinner = submitBtn.querySelector(".btn-spinner");
        if (btnText) btnText.textContent = "Envoyer le message";
        if (btnSpinner) btnSpinner.style.display = "none";
      }
      clearErrors();
    }

    setTimeout(() => {
      if (nameInput) nameInput.focus();
    }, 150);
  }

  function closeContact() {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (errorAlert) errorAlert.style.display = "none";
    clearErrors();
  }

  function clearErrors() {
    [nameInput, emailInput, messageInput].forEach((input) => {
      if (input) input.classList.remove("invalid");
    });
    if (nameError) nameError.textContent = "";
    if (emailError) emailError.textContent = "";
    if (messageError) messageError.textContent = "";
    if (errorAlert) errorAlert.style.display = "none";
  }

  // Fonctions globales
  window.openContactModal = openContact;
  window.closeContactModal = closeContact;

  // Attachement des écouteurs sur tous les déclencheurs
  document.querySelectorAll("[data-open-contact], #openContactBtn, #cmdOpenContact").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const palette = document.getElementById("cmdPalette");
      if (palette && palette.classList.contains("show")) {
        palette.classList.remove("show");
      }
      openContact();
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeContact);
  if (cancelBtn) cancelBtn.addEventListener("click", closeContact);
  if (closeSuccessBtn) closeSuccessBtn.addEventListener("click", closeContact);

  // Fermeture clic dehors
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeContact();
    }
  });

  // Touche ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("show")) {
      closeContact();
    }
  });

  // Validation en direct
  if (nameInput) {
    nameInput.addEventListener("input", () => {
      if (nameInput.value.trim().length >= 2) {
        nameInput.classList.remove("invalid");
        if (nameError) nameError.textContent = "";
      }
    });
  }

  if (emailInput) {
    emailInput.addEventListener("input", () => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailPattern.test(emailInput.value.trim())) {
        emailInput.classList.remove("invalid");
        if (emailError) emailError.textContent = "";
      }
    });
  }

  if (messageInput) {
    messageInput.addEventListener("input", () => {
      if (messageInput.value.trim().length >= 5) {
        messageInput.classList.remove("invalid");
        if (messageError) messageError.textContent = "";
      }
    });
  }

  // Soumission
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      clearErrors();

      const nameVal = nameInput ? nameInput.value.trim() : "";
      const emailVal = emailInput ? emailInput.value.trim() : "";
      const subjectVal = subjectInput ? subjectInput.value.trim() : "";
      const messageVal = messageInput ? messageInput.value.trim() : "";

      let isValid = true;

      if (!nameVal || nameVal.length < 2) {
        if (nameInput) nameInput.classList.add("invalid");
        if (nameError) nameError.textContent = "Veuillez indiquer votre nom ou société.";
        isValid = false;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailVal || !emailPattern.test(emailVal)) {
        if (emailInput) emailInput.classList.add("invalid");
        if (emailError) emailError.textContent = "Veuillez entrer une adresse email valide.";
        isValid = false;
      }

      if (!messageVal || messageVal.length < 5) {
        if (messageInput) messageInput.classList.add("invalid");
        if (messageError) messageError.textContent = "Veuillez saisir votre message (min. 5 caractères).";
        isValid = false;
      }

      if (!isValid) return;

      const btnText = submitBtn.querySelector(".btn-text");
      const btnSpinner = submitBtn.querySelector(".btn-spinner");
      submitBtn.disabled = true;
      if (btnText) btnText.textContent = "Envoi en cours...";
      if (btnSpinner) btnSpinner.style.display = "inline-block";
      if (errorAlert) errorAlert.style.display = "none";

      const payload = {
        name: nameVal,
        email: emailVal,
        subject: subjectVal || "Nouveau message portfolio",
        message: messageVal
      };

      let sent = false;
      let lastErrorMessage = "";

      // Envoi du formulaire vers FormSubmit (avec journalisation locale si en dev)
      const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
      if (isLocal) {
        // Enregistre en local dans la console de serve.js
        fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        }).catch(() => {});
      }

      const key = PORTFOLIO_CONFIG.web3formsKey;
      const isWeb3FormsConfigured = key && !key.startsWith("__WEB3FORMS");

      if (isWeb3FormsConfigured) {
        // Envoi rapide via l'API Web3Forms (~150ms)
        try {
          const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({
              access_key: key,
              name: payload.name,
              email: payload.email,
              subject: payload.subject,
              message: payload.message,
              from_name: payload.name,
              botcheck: ""
            })
          });

          const data = await res.json().catch(() => null);
          if (res.ok && data && (data.success === true || data.success === "true")) {
            sent = true;
          } else {
            lastErrorMessage = data && data.message ? data.message : `Erreur Web3Forms (code ${res.status})`;
          }
        } catch (err) {
          console.warn("Erreur Web3Forms:", err);
          lastErrorMessage = "Erreur de connexion lors de l'envoi du message.";
        }
      } else {
        // En développement local sans la clé injectée
        if (isLocal) {
          sent = true;
        } else {
          lastErrorMessage = "Configuration du formulaire en cours (clé Web3Forms manquante).";
        }
      }

      submitBtn.disabled = false;
      if (btnText) btnText.textContent = "Envoyer le message";
      if (btnSpinner) btnSpinner.style.display = "none";

      if (sent) {
        form.style.display = "none";
        if (successState) successState.style.display = "flex";
      } else {
        const mailtoUrl = `mailto:${PORTFOLIO_CONFIG.email}?subject=${encodeURIComponent(payload.subject)}&body=${encodeURIComponent("De : " + payload.name + " <" + payload.email + ">\n\n" + payload.message)}`;
        if (errorAlert) {
          errorAlert.innerHTML = `⚠️ <strong>Échec d'envoi :</strong> ${lastErrorMessage}<br><br><a href="${mailtoUrl}" style="color: #fff; text-decoration: underline; font-weight: 600;">Cliquez ici pour l'envoyer directement via votre messagerie</a>.`;
          errorAlert.style.display = "block";
        }
      }
    });
  }
}

/**
 * Assure que le markup du modal de contact est présent sur la page
 */
function ensureContactModalHtml() {
  if (document.getElementById("contactModal")) return;

  const modalHtml = `
    <div id="contactModal" class="contact-modal-backdrop" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="contactModalTitle">
      <div class="contact-modal-card">
        <div class="contact-modal-header">
          <div class="contact-modal-title-group">
            <div class="contact-modal-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div>
              <h3 id="contactModalTitle" class="contact-modal-title">Envoyer un message</h3>
              <p class="contact-modal-subtitle">Une opportunité, un projet ou une question ? Écrivez-moi directement.</p>
            </div>
          </div>
          <button type="button" class="contact-modal-close" id="closeContactModal" aria-label="Fermer la fenêtre">
            <span class="cmd-kbd-badge">ESC</span>
          </button>
        </div>

        <div class="contact-modal-body">
          <form id="contactForm" class="contact-form" novalidate>
            <div class="contact-form-grid">
              <div class="contact-field">
                <label for="contactName">Votre Nom / Société <span class="required">*</span></label>
                <input
                  type="text"
                  id="contactName"
                  name="name"
                  placeholder="Ex: Thomas Laurent"
                  required
                  autocomplete="name"
                />
                <span class="contact-field-error" id="nameError"></span>
              </div>

              <div class="contact-field">
                <label for="contactEmail">Votre Adresse Email <span class="required">*</span></label>
                <input
                  type="email"
                  id="contactEmail"
                  name="email"
                  placeholder="Ex: thomas@entreprise.com"
                  required
                  autocomplete="email"
                />
                <span class="contact-field-error" id="emailError"></span>
              </div>
            </div>

            <div class="contact-field">
              <label for="contactSubject">Objet du message</label>
              <input
                type="text"
                id="contactSubject"
                name="subject"
                placeholder="Ex: Mission SDET, Collaboration, Question tech..."
              />
            </div>

            <div class="contact-field">
              <label for="contactMessage">Votre Message <span class="required">*</span></label>
              <textarea
                id="contactMessage"
                name="message"
                rows="4"
                placeholder="Décrivez votre besoin, votre projet ou votre question..."
                required
              ></textarea>
              <span class="contact-field-error" id="messageError"></span>
            </div>

            <div id="contactFormError" class="contact-form-alert error" style="display: none;"></div>

            <div class="contact-form-footer">
              <button type="button" class="contact-btn-ghost" id="cancelContactBtn">Annuler</button>
              <button type="submit" class="contact-btn-primary" id="submitContactBtn">
                <span class="btn-text">Envoyer le message</span>
                <span class="btn-spinner" style="display: none;"></span>
              </button>
            </div>
          </form>

          <div id="contactSuccessState" class="contact-success-state" style="display: none;">
            <div class="success-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h4>Message envoyé avec succès !</h4>
            <p>Merci pour votre message. Je vous répondrai dans les plus brefs délais sur votre adresse email.</p>
            <button type="button" class="contact-btn-primary" id="closeSuccessBtn">Fermer</button>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", modalHtml);
}

/**
 * Gestion du Modal QR Code & Partage (Linear Style)
 */
function initQrModal() {
  ensureQrModalHtml();

  const modal = document.getElementById("qrModal");
  if (!modal) return;

  const closeBtn = document.getElementById("closeQrModal");
  const copyBtn = document.getElementById("copyQrUrlBtn");
  const openButtons = document.querySelectorAll("[data-open-qr], #openQrBtn");

  function openQr() {
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeQr() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  openButtons.forEach((btn) => btn.addEventListener("click", openQr));
  if (closeBtn) closeBtn.addEventListener("click", closeQr);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeQr();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeQr();
    }
  });

  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const url = "https://anassasrir.github.io/";
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(() => {
          showToast("Lien du portfolio copié dans le presse-papier !");
        }).catch(() => {
          fallbackCopyText(url);
        });
      } else {
        fallbackCopyText(url);
      }
    });
  }

  function fallbackCopyText(text) {
    const dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    showToast("Lien du portfolio copié dans le presse-papier !");
  }

  // Rendre accessible globalement
  window.openQrModal = openQr;
  window.closeQrModal = closeQr;
}

/**
 * Assure que le markup du modal QR Code est présent sur la page
 */
function ensureQrModalHtml() {
  if (document.getElementById("qrModal")) return;

  const modalHtml = `
    <div id="qrModal" class="cmd-palette-backdrop qr-modal-backdrop" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="qrModalTitle">
      <div class="cmd-palette-modal qr-modal-card">
        <div class="qr-modal-header">
          <div class="qr-modal-title-group">
            <span class="qr-modal-dot">●</span>
            <span id="qrModalTitle" class="qr-modal-title">Partager le Portfolio</span>
          </div>
          <button class="qr-modal-close" id="closeQrModal" aria-label="Fermer">✕</button>
        </div>

        <div class="qr-modal-body">
          <div class="qr-modal-profile">
            <div class="qr-modal-avatar-frame">
              <img src="anass-bw-transparent.png" alt="Anass Asrir" class="qr-modal-avatar">
            </div>
            <div class="qr-modal-profile-text">
              <h3 class="qr-modal-name">Anass Asrir</h3>
              <p class="qr-modal-role">Senior QA Engineer | Test Automation</p>
            </div>
          </div>

          <div class="qr-modal-box">
            <img src="qr/qrcode-light.png" alt="QR Code Portfolio" class="qr-modal-img" width="210" height="210">
          </div>

          <div class="qr-modal-url-pill">
            <span class="qr-url-icon">🔗</span>
            <span class="qr-url-text">anassasrir.github.io</span>
          </div>

          <p class="qr-modal-hint">Scannez avec l'appareil photo de votre smartphone pour ouvrir le portfolio instantanément.</p>

          <div class="qr-modal-actions">
            <button class="social-button highlight" id="copyQrUrlBtn" type="button">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span>Copier le lien</span>
            </button>
            <a href="qr/qrcode-light.png" download="QR-Code-Anass-Asrir.png" class="social-button">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Télécharger QR (PNG)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", modalHtml);
}


/**
 * Moteur de Recherche Plein Texte avec Scoring & Snippets d'Extrait
 */
function searchPortfolio(rawQuery = "") {
  const cleanQuery = normalizeText(rawQuery);
  if (!cleanQuery) {
    return SEARCH_INDEX.map((item) => ({ ...item, displaySubtitle: item.subtitle }));
  }

  const tokens = cleanQuery.split(/\s+/).filter(Boolean);
  const scoredResults = [];

  for (const item of SEARCH_INDEX) {
    let itemScore = 0;
    let matchedAllTokens = true;
    let matchedInContent = false;

    for (const token of tokens) {
      let tokenScore = 0;

      // 1. Titre
      if (matchToken(item.title, token)) {
        tokenScore += 100;
      }

      // 2. Mots-clés taggués
      for (const kw of item.keywords) {
        if (matchToken(kw, token)) {
          tokenScore += 50;
          break;
        }
      }

      // 3. Catégorie
      if (matchToken(item.category, token)) {
        tokenScore += 30;
      }

      // 4. Sous-titre
      if (matchToken(item.subtitle, token)) {
        tokenScore += 25;
      }

      // 5. Recherche Plein Texte intégrale (content / bullets)
      if (item.content && matchToken(item.content, token)) {
        tokenScore += 35;
        matchedInContent = true;
      }

      if (tokenScore === 0) {
        matchedAllTokens = false;
        break;
      }

      itemScore += tokenScore;
    }

    if (matchedAllTokens && itemScore > 0) {
      let displaySubtitle = item.subtitle;

      // Si le terme a été trouvé dans le corps du texte (ex: "critiques", "rétroaction"),
      // on affiche l'extrait grep en sous-titre !
      if (matchedInContent && item.content) {
        const snippet = extractSnippet(item.content, cleanQuery);
        if (snippet) {
          displaySubtitle = `Extrait : "${snippet}"`;
        }
      }

      scoredResults.push({
        item: { ...item, displaySubtitle },
        score: itemScore
      });
    }
  }

  // Tri par pertinence décroissante
  scoredResults.sort((a, b) => b.score - a.score);

  return scoredResults.map((r) => r.item);
}

/**
 * Gestion du Command Palette & Navigation au Clavier
 */
function initCommandPalette() {
  const cmdPalette = document.getElementById("cmdPalette");
  const cmdInput = document.getElementById("cmdSearchInput");
  const cmdResultsList = document.getElementById("cmdResultsList");
  const openCmdBtn = document.getElementById("openCmdBtn");
  if (!cmdPalette || !cmdResultsList) return;

  let selectedIndex = 0;
  let currentFilteredItems = [];

  function openPalette() {
    cmdPalette.classList.add("active");
    if (cmdInput) {
      cmdInput.value = "";
      renderSearchResults("");
      setTimeout(() => cmdInput.focus(), 50);
    }
  }

  function closePalette() {
    cmdPalette.classList.remove("active");
  }

  if (openCmdBtn) openCmdBtn.addEventListener("click", openPalette);

  // Raccourcis clavier globaux (Ctrl+K ou ⌘K)
  window.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (cmdPalette.classList.contains("active")) {
        closePalette();
      } else {
        openPalette();
      }
    }
    if (e.key === "Escape" && cmdPalette.classList.contains("active")) {
      closePalette();
    }
  });

  cmdPalette.addEventListener("click", (e) => {
    if (e.target === cmdPalette) closePalette();
  });

  // Écoute de l'input de recherche
  if (cmdInput) {
    cmdInput.addEventListener("input", (e) => {
      renderSearchResults(e.target.value);
    });

    // Navigation au clavier
    cmdInput.addEventListener("keydown", (e) => {
      if (!currentFilteredItems.length) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        selectedIndex = (selectedIndex + 1) % currentFilteredItems.length;
        updateItemSelection();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        selectedIndex = (selectedIndex - 1 + currentFilteredItems.length) % currentFilteredItems.length;
        updateItemSelection();
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (currentFilteredItems[selectedIndex]) {
          executeCommand(currentFilteredItems[selectedIndex]);
        }
      }
    });
  }

  function updateItemSelection() {
    const renderedItems = cmdResultsList.querySelectorAll(".cmd-item");
    renderedItems.forEach((el, idx) => {
      if (idx === selectedIndex) {
        el.classList.add("selected");
        el.scrollIntoView({ block: "nearest" });
      } else {
        el.classList.remove("selected");
      }
    });
  }

  /**
   * Rendu visuel des résultats dans la palette
   */
  function renderSearchResults(rawQuery = "") {
    currentFilteredItems = searchPortfolio(rawQuery);
    selectedIndex = 0;

    if (!currentFilteredItems.length) {
      cmdResultsList.innerHTML = `
        <div style="padding: 2.25rem 1rem; text-align: center; color: var(--text-muted); font-size: 0.875rem;">
          Aucun résultat pour <strong style="color: var(--text-primary);">"${escapeHtml(rawQuery)}"</strong>.<br>
          <div style="margin-top: 0.75rem; display: flex; gap: 0.4rem; justify-content: center; flex-wrap: wrap;">
            <span class="cmd-kbd-badge" style="cursor: pointer;" onclick="document.getElementById('cmdSearchInput').value='critiques'; document.getElementById('cmdSearchInput').dispatchEvent(new Event('input'));">critiques</span>
            <span class="cmd-kbd-badge" style="cursor: pointer;" onclick="document.getElementById('cmdSearchInput').value='youtube'; document.getElementById('cmdSearchInput').dispatchEvent(new Event('input'));">youtube</span>
            <span class="cmd-kbd-badge" style="cursor: pointer;" onclick="document.getElementById('cmdSearchInput').value='capgemini'; document.getElementById('cmdSearchInput').dispatchEvent(new Event('input'));">capgemini</span>
            <span class="cmd-kbd-badge" style="cursor: pointer;" onclick="document.getElementById('cmdSearchInput').value='cypress'; document.getElementById('cmdSearchInput').dispatchEvent(new Event('input'));">cypress</span>
            <span class="cmd-kbd-badge" style="cursor: pointer;" onclick="document.getElementById('cmdSearchInput').value='experience'; document.getElementById('cmdSearchInput').dispatchEvent(new Event('input'));">experience</span>
          </div>
        </div>
      `;
      return;
    }

    // Regroupement par catégorie
    const groups = {};
    currentFilteredItems.forEach((item, index) => {
      const cat = item.category || "Général";
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push({ item, globalIndex: index });
    });

    let html = "";
    Object.keys(groups).forEach((catName) => {
      html += `<div class="cmd-group-label">${escapeHtml(catName)}</div>`;
      groups[catName].forEach(({ item, globalIndex }) => {
        const isSelected = globalIndex === selectedIndex ? "selected" : "";
        html += `
          <div class="cmd-item ${isSelected}" data-index="${globalIndex}" role="button" tabindex="0">
            <div class="cmd-item-left">
              <span class="cmd-item-icon">${item.icon}</span>
              <div>
                <span class="cmd-item-title">${escapeHtml(item.title)}</span>
                <span class="cmd-item-subtitle">${escapeHtml(item.displaySubtitle || item.subtitle)}</span>
              </div>
            </div>
            <span class="cmd-item-action">${escapeHtml(item.action)}</span>
          </div>
        `;
      });
    });

    cmdResultsList.innerHTML = html;

    // Événements clic & survol
    cmdResultsList.querySelectorAll(".cmd-item").forEach((el) => {
      el.addEventListener("click", () => {
        const idx = parseInt(el.getAttribute("data-index"), 10);
        if (currentFilteredItems[idx]) {
          executeCommand(currentFilteredItems[idx]);
        }
      });
      el.addEventListener("mouseenter", () => {
        selectedIndex = parseInt(el.getAttribute("data-index"), 10);
        updateItemSelection();
      });
    });
  }

  /**
   * Exécution de l'action sélectionnée (URL, ancre ou fonction)
   */
  function executeCommand(item) {
    closePalette();

    if (item.url === "action:open-contact" || item.url === "action:copy-email") {
      if (window.openContactModal) {
        window.openContactModal();
      }
      return;
    }

    if (item.id === "action-qr" || item.url === "#qr") {
      if (typeof window.openQrModal === "function") {
        window.openQrModal();
      }
      return;
    }

    if (item.url.startsWith("http")) {
      window.open(item.url, "_blank", "noopener,noreferrer");
      return;
    }

    // Gestion intelligente des ancres internes (/about#capgemini)
    if (item.url.includes("#")) {
      const [path, hash] = item.url.split("#");
      const currentPath = window.location.pathname.replace(/\/index\.html$/, "/").replace(/\/$/, "");
      const targetPath = path.replace(/\/$/, "");

      if (currentPath === targetPath || (currentPath === "" && targetPath === "/about")) {
        const targetEl = document.getElementById(hash);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: "smooth" });
          window.location.hash = hash;
          return;
        }
      }
    }

    window.location.href = item.url;
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Rendu initial par défaut
  renderSearchResults("");
}

/**
 * =========================================================================
 * Hover Mini-Window Video Preview pour YouTube
 * =========================================================================
 */
function initYouTubePreview() {
  const wrapper = document.getElementById("ytPreviewWrapper");
  const popover = document.getElementById("ytMiniWindow");
  const ytLink = document.getElementById("youtubeLink");
  if (!wrapper || !popover || !ytLink) return;

  // Sur mobile / touch : un tap affiche la mini-window si non affichée
  const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  if (isTouchDevice) {
    ytLink.addEventListener("click", (e) => {
      if (!popover.classList.contains("is-active")) {
        e.preventDefault();
        popover.classList.add("is-active");
      }
    });

    document.addEventListener("click", (e) => {
      if (!wrapper.contains(e.target)) {
        popover.classList.remove("is-active");
      }
    });
  }
}

/**
 * =========================================================================
 * Interactive Gamified Stack Explorer: Catch My Stack (Stack Hunter)
 * Inspiré du "Bug Hunter", avec logos des stacks, squash effect, popover
 * de métriques d'usage par entreprise et compteur gamifié.
 * =========================================================================
 */
function initStackHunter() {
  const arenaWrap = document.getElementById("shArenaWrap");
  const arena = document.getElementById("shArena");
  const popover = document.getElementById("shPopover");
  const scoreCurrentEl = document.getElementById("shScoreCurrent");
  const scoreTotalEl = document.getElementById("shScoreTotal");
  const soundToggleBtn = document.getElementById("shSoundToggle");
  const soundIconEl = document.getElementById("shSoundIcon");
  const resetBtn = document.getElementById("shResetBtn");

  if (!arenaWrap || !arena || !popover) return;

  // Dictionnaire des 16 stacks clés d'Anass avec vrais logos officiels SVG & cas d'usage réels
  const STACKS = [
    {
      id: "cypress",
      name: "Cypress",
      icon: "icons/cypress.svg",
      category: "AUTOMATION E2E",
      timing: "4+ ans • Production",
      role: "Architecture E2E TypeScript & validation des Pull Requests",
      experiences: [
        { company: "Kodehyve (Depuis 2023)", metric: "Processus PR Shift-Left & retour sous 5 min (-90% temps)" },
        { company: "Raja (2021 – 2023)", metric: "Tunnels d'achat & parcours de paiement critiques" }
      ],
      link: "/about#kodehyve"
    },
    {
      id: "playwright",
      name: "Playwright",
      icon: "icons/playwright.svg",
      category: "AUTOMATION E2E",
      timing: "Moderne & Rapide",
      role: "Framework E2E nouvelle génération multi-navigateurs & API mocks",
      experiences: [
        { company: "Projets Perso & R&D", metric: "Suites de tests résilientes, traces interactives & isolation" }
      ],
      link: "/projects"
    },
    {
      id: "selenium",
      name: "Selenium WebDriver",
      icon: "icons/selenium.svg",
      category: "ENTERPRISE QA",
      timing: "6+ ans • Standard",
      role: "Frameworks Page Object Model d'entreprise (C# & Java) et Grid",
      experiences: [
        { company: "Enablon (2018 – 2021)", metric: "Harmonisation multi-squads en Selenium C# .NET" },
        { company: "Capgemini (2016 – 2018)", metric: "Migration réussie HP UFT vers Selenium open-source" },
        { company: "YouTube", metric: "Auteur d'une formation vidéo complète de A à Z" }
      ],
      link: "/formations"
    },
    {
      id: "typescript",
      name: "TypeScript / JS",
      icon: "icons/typescript.svg",
      category: "LANGAGES & DEV",
      timing: "Quotidien",
      role: "Typage strict, architecture logicielle des frameworks et web apps",
      experiences: [
        { company: "Kodehyve", metric: "Socle robuste Cypress + TypeScript pour toute la squad" },
        { company: "Projets Web", metric: "Développement d'applications complètes (Next.js, PWA)" }
      ],
      link: "/about#kodehyve"
    },
    {
      id: "github-actions",
      name: "GitHub Actions",
      icon: "icons/github-actions.svg",
      category: "CI/CD & SHIFT-LEFT",
      timing: "-90% Feedback",
      role: "Industrialisation CI/CD : exécution parallèle & validation instantanée",
      experiences: [
        { company: "Kodehyve", metric: "Workflows PR-driven avec reporting et exécution distribuée" },
        { company: "Projets & Portfolios", metric: "Déploiements automatisés sans friction sur GitHub Pages" }
      ],
      link: "/about#kodehyve"
    },
    {
      id: "azure-devops",
      name: "Azure DevOps",
      icon: "icons/azure-devops.svg",
      category: "CI/CD & RELEASE",
      timing: "100% Automatisé",
      role: "Pipelines multi-étapes et Quality Gates avant déploiement en prod",
      experiences: [
        { company: "Raja (2021 – 2023)", metric: "100% de validation QA automatisée avant mise en production" }
      ],
      link: "/about#raja"
    },
    {
      id: "postgresql",
      name: "PostgreSQL & SQL",
      icon: "icons/postgresql.svg",
      category: "DATA & BACKEND",
      timing: "Données de Test",
      role: "Automatisation de la génération, injection et nettoyage des données API",
      experiences: [
        { company: "Kodehyve", metric: "Reproductibilité garantie des tests grâce à l'isolation SQL" },
        { company: "Les Équier'Mômes", metric: "Schéma relationnel & persistance Next.js" }
      ],
      link: "/about#kodehyve"
    },
    {
      id: "csharp",
      name: "C# / .NET",
      icon: "icons/csharp.svg",
      category: "LANGAGES & DEV",
      timing: "Architecture .NET",
      role: "Architecture Page Object Model, NUnit et intégration multi-squads",
      experiences: [
        { company: "Enablon (Wolters Kluwer)", metric: "+30% de maintenabilité sur les suites Selenium C#" }
      ],
      link: "/about#enablon"
    },
    {
      id: "python",
      name: "Python",
      icon: "icons/python.svg",
      category: "SCRIPTING & DATA",
      timing: "Utilitaires & PyTest",
      role: "Scripts d'automatisation, parsing de logs et génération de fixtures",
      experiences: [
        { company: "Ingénierie & R&D", metric: "Mocks rapides de services et manipulation de jeux de données" }
      ],
      link: "/about"
    },
    {
      id: "java",
      name: "Java",
      icon: "icons/java.svg",
      category: "LANGAGES & ENTERPRISE",
      timing: "BDD & Enterprise",
      role: "Frameworks BDD d'entreprise Cucumber + Selenium et support pédagogique",
      experiences: [
        { company: "Capgemini", metric: "Framework BDD Java permettant l'automatisation par les fonctionnels" },
        { company: "Formation YouTube", metric: "Support complet du cursus SDET / Cucumber" }
      ],
      link: "/formations"
    },
    {
      id: "postman",
      name: "Postman & Newman",
      icon: "icons/postman.svg",
      category: "API TESTING",
      timing: "REST & Contrats",
      role: "Validation fonctionnelle des APIs et exécution automatisée en CI",
      experiences: [
        { company: "Kodehyve & E-Commerce", metric: "Collections de régression exécutées à chaque build" }
      ],
      link: "/about"
    },
    {
      id: "percy",
      name: "Percy (BrowserStack)",
      icon: "icons/percy.svg",
      category: "VISUAL TESTING",
      timing: "-15% Anomalies UI",
      role: "Tests de régression visuelle pixel-perfect multi-résolutions",
      experiences: [
        { company: "Raja (2021 – 2023)", metric: "-15% d'anomalies visuelles sur le tunnel d'achat critique" }
      ],
      link: "/about#raja"
    },
    {
      id: "cucumber",
      name: "Cucumber & Gherkin",
      icon: "icons/cucumber.svg",
      category: "BDD & MÉTHODOLOGIE",
      timing: "3 Amigos",
      role: "Spécifications exécutables partagées entre Product, Dev et QA",
      experiences: [
        { company: "Capgemini", metric: "Déploiement du BDD à l'échelle pour clarifier le besoin client" },
        { company: "Formation Vidéo", metric: "Instructeur sur YouTube avec des centaines d'apprenants" }
      ],
      link: "/formations"
    },
    {
      id: "docker",
      name: "Docker",
      icon: "icons/docker.svg",
      category: "DEVOPS & ENVIRONNEMENTS",
      timing: "Reproductibilité",
      role: "Conteneurisation des agents de test, Grid distribué et mocks",
      experiences: [
        { company: "Enablon & Kodehyve", metric: "Exécution isolée des suites sans dépendance d'OS" }
      ],
      link: "/about"
    },
    {
      id: "powerbi",
      name: "Power BI & Q-KPIs",
      icon: "icons/powerbi.svg",
      category: "QUALIMÉTRIE & MANAGEMENT",
      timing: "Aide à la Décision",
      role: "Tableaux de bord d'analyse de qualité basés sur les données d'exécution",
      experiences: [
        { company: "Enablon (Wolters Kluwer)", metric: "Dashboards managériaux guidant les décisions de releases" }
      ],
      link: "/about#enablon"
    },
    {
      id: "appium",
      name: "Appium & Ranorex",
      icon: "icons/appium.svg",
      category: "MOBILE & APPLICATION",
      timing: "Multi-Plateformes",
      role: "Automatisation de tests sur applications mobiles et riches",
      experiences: [
        { company: "Enablon", metric: "Standardisation transversale multi-produits desktop & mobile" }
      ],
      link: "/about#enablon"
    },
    {
      id: "nextjs",
      name: "Next.js",
      icon: "icons/nextjs.svg",
      category: "DEV & FULLSTACK",
      timing: "Production • App Router",
      role: "Architecture React Fullstack, Server Components & Actions",
      experiences: [
        { company: "Les Équier'Mômes", metric: "Portail associatif complet (App Router, Server Actions)" },
        { company: "Portfolio & Projets Perso", metric: "Web apps haute performance avec SEO optimisé" }
      ],
      link: "/projects"
    },
    {
      id: "react",
      name: "React",
      icon: "icons/react.svg",
      category: "FRONTEND & UI",
      timing: "Moderne",
      role: "Composants interactifs modulaires & architectures réactives",
      experiences: [
        { company: "Projets Perso & Open-Source", metric: "Interfaces dynamiques, hooks avancés & design systems" }
      ],
      link: "/projects"
    },
    {
      id: "vuejs",
      name: "Vue.js 3",
      icon: "icons/vuejs.svg",
      category: "FRONTEND & PWA",
      timing: "Composition API",
      role: "Développement réactif avec Pinia, Vite & animations tactiles",
      experiences: [
        { company: "Jolipas (PWA)", metric: "Jeu éducatif interactif, fluidité 60fps & réactivité tactile" }
      ],
      link: "/projects"
    },
    {
      id: "vercel",
      name: "Vercel",
      icon: "icons/vercel.svg",
      category: "DEPLOY & CLOUD",
      timing: "Serverless Edge",
      role: "Déploiement continu automatisé, Edge Functions & monitoring",
      experiences: [
        { company: "Les Équier'Mômes", metric: "Déploiement instantané à chaque git push avec zero-downtime" }
      ],
      link: "/projects"
    },
    {
      id: "cloudflare",
      name: "Cloudflare Pages",
      icon: "icons/cloudflare.svg",
      category: "EDGE & CDN",
      timing: "Edge Hosting",
      role: "Hébergement edge ultra-rapide mondial, workers & sécurité",
      experiences: [
        { company: "Jolipas App", metric: "Distribution mondiale sur le réseau Cloudflare edge CDN" }
      ],
      link: "/projects"
    },
    {
      id: "supabase",
      name: "Supabase",
      icon: "icons/supabase.svg",
      category: "BACKEND & BDD",
      timing: "BaaS Serverless",
      role: "Backend as a Service, base PostgreSQL managée, Auth & Storage",
      experiences: [
        { company: "Jolipas & Apps", metric: "Gestion des utilisateurs, synchronisation temps réel & assets" }
      ],
      link: "/projects"
    },
    {
      id: "resend",
      name: "Resend API",
      icon: "icons/resend.svg",
      category: "EMAILS & NOTIFICATIONS",
      timing: "Transactional API",
      role: "Envoi d'e-mails transactionnels sécurisés et suivi de délivrabilité",
      experiences: [
        { company: "Les Équier'Mômes", metric: "Confirmations automatiques d'inscriptions et planning bénévoles" }
      ],
      link: "/projects"
    },
    {
      id: "web3forms",
      name: "Web3Forms",
      icon: "icons/web3forms.svg",
      category: "FORM & SERVERLESS",
      timing: "Production",
      role: "Passerelle formulaires serverless avec protection antispam & webhook",
      experiences: [
        { company: "Portfolio Anass Asrir", metric: "Envoi direct des prises de contact sans backend lourd" }
      ],
      link: "#"
    },
    {
      id: "tailwindcss",
      name: "Tailwind CSS",
      icon: "icons/tailwindcss.svg",
      category: "STYLING & DESIGN",
      timing: "Design System",
      role: "Design system utility-first, animations et interfaces responsives",
      experiences: [
        { company: "Équier'Mômes & Beehive", metric: "Design épuré, mode sombre et composants UI accessibles" }
      ],
      link: "/projects"
    },
    {
      id: "vitest",
      name: "Vitest",
      icon: "icons/vitest.svg",
      category: "TESTING & UNIT",
      timing: "Ultra-rapide",
      role: "Tests unitaires et d'intégration ultra-rapides compatibles Vite",
      experiences: [
        { company: "Jolipas App", metric: "Validation des composants Vue et calculs d'états Pinia" }
      ],
      link: "/projects"
    }
  ];

  if (scoreTotalEl) {
    scoreTotalEl.textContent = String(STACKS.length);
  }

  // État du son (synthétiseur Web Audio API)
  let soundEnabled = localStorage.getItem("sh_sound") !== "off";
  updateSoundIcon();

  soundToggleBtn.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    localStorage.setItem("sh_sound", soundEnabled ? "on" : "off");
    updateSoundIcon();
  });

  function updateSoundIcon() {
    soundIconEl.textContent = soundEnabled ? "🔊" : "🔇";
    soundToggleBtn.title = soundEnabled ? "Couper le son" : "Activer le son";
  }

  function playPopSound() {
    if (!soundEnabled) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(520, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1180, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.18, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.13);
    } catch (e) {}
  }

  // Création des objets et de la physique
  const itemElements = [];
  const ITEM_SIZE = 44;
  let arenaWidth = arenaWrap.clientWidth || 600;
  let arenaHeight = arenaWrap.clientHeight || 400;

  function updateArenaDimensions() {
    arenaWidth = arenaWrap.clientWidth || 600;
    arenaHeight = arenaWrap.clientHeight || 400;
  }
  window.addEventListener("resize", updateArenaDimensions);

  // Initialisation des éléments
  arena.innerHTML = "";
  STACKS.forEach((stack, index) => {
    const el = document.createElement("div");
    el.className = "sh-item";
    el.title = `${stack.name} — Cliquez pour capturer !`;
    el.setAttribute("data-id", stack.id);
    el.innerHTML = `<img src="${stack.icon}" alt="${escapeHtml(stack.name)}" class="sh-icon-img" loading="eager" draggable="false" />`;

    // Position initiale aléatoire bien répartie
    const cols = 6;
    const row = Math.floor(index / cols);
    const col = index % cols;
    const startX = Math.max(10, Math.min(arenaWidth - ITEM_SIZE - 10, (col * (arenaWidth / cols)) + (Math.random() * 30 - 15)));
    const startY = Math.max(10, Math.min(arenaHeight - ITEM_SIZE - 10, (row * (arenaHeight / Math.ceil(STACKS.length / cols))) + (Math.random() * 25 - 12)));

    // Vélocité aléatoire douce
    const angle = Math.random() * Math.PI * 2;
    const speed = 0.35 + Math.random() * 0.45;
    const vx = Math.cos(angle) * speed;
    const vy = Math.sin(angle) * speed;

    const itemObj = {
      data: stack,
      el: el,
      x: startX,
      y: startY,
      vx: vx,
      vy: vy,
      isHovered: false,
      isCaptured: false
    };

    el.style.transform = `translate3d(${startX}px, ${startY}px, 0)`;

    // Événements Hover
    el.addEventListener("mouseenter", () => {
      itemObj.isHovered = true;
      el.classList.add("is-hovered");
      showPopover(itemObj);
    });

    el.addEventListener("mouseleave", () => {
      itemObj.isHovered = false;
      el.classList.remove("is-hovered");
      scheduleHidePopover();
    });

    // Événement Click / Tap (Capture / Squash & Stop immédiat)
    function handleCapture(e) {
      if (e) e.stopPropagation();
      captureItem(itemObj);
      showPopover(itemObj);
    }

    el.addEventListener("click", handleCapture);
    el.addEventListener("pointerdown", (e) => {
      if (e.pointerType === "touch") {
        handleCapture(e);
      }
    });

    arena.appendChild(el);
    itemElements.push(itemObj);
  });

  // Maintien du popover si la souris entre dessus
  popover.addEventListener("mouseenter", () => {
    cancelHidePopover();
  });
  popover.addEventListener("mouseleave", () => {
    scheduleHidePopover();
  });

  // Fermeture du popover au tap/clic en dehors
  document.addEventListener("pointerdown", (e) => {
    if (!popover.contains(e.target) && !arena.contains(e.target)) {
      popover.classList.remove("is-visible");
    }
  });

  arena.addEventListener("pointerdown", (e) => {
    if (!e.target.closest(".sh-item") && !popover.contains(e.target)) {
      popover.classList.remove("is-visible");
    }
  });

  // Gestion du Popover
  let hidePopoverTimer = null;

  function showPopover(itemObj) {
    cancelHidePopover();
    const data = itemObj.data;

    // Remplissage du contenu
    document.getElementById("shPopoverCategoryText").textContent = data.category;
    document.getElementById("shPopoverTimingText").textContent = data.timing;
    document.getElementById("shPopoverIcon").innerHTML = `<img src="${data.icon}" alt="${escapeHtml(data.name)}" class="sh-popover-img" />`;
    document.getElementById("shPopoverTitle").textContent = data.name;
    document.getElementById("shPopoverRole").textContent = data.role;

    const expList = document.getElementById("shPopoverExpList");
    expList.innerHTML = "";
    data.experiences.forEach((exp) => {
      const expDiv = document.createElement("div");
      expDiv.className = "sh-popover-exp-item";
      expDiv.innerHTML = `
        <span class="sh-exp-company">${escapeHtml(exp.company)}</span>
        <span class="sh-exp-metric">${escapeHtml(exp.metric)}</span>
      `;
      expList.appendChild(expDiv);
    });

    const linkEl = document.getElementById("shPopoverLink");
    linkEl.href = data.link;

    // Calcul de position intelligente (dynamique et clampée pour éviter tout rognage)
    updateArenaDimensions();

    // Rendre mesurable pour obtenir la hauteur réelle exacte
    popover.style.visibility = "hidden";
    popover.classList.add("is-visible");
    const popoverWidth = Math.min(320, arenaWidth - 20);
    const popoverHeight = popover.offsetHeight || 270;
    popover.style.visibility = "";

    // Position horizontale : à droite si l'espace suffit, sinon à gauche
    let posX = itemObj.x + ITEM_SIZE + 14;
    if (posX + popoverWidth > arenaWidth - 10) {
      posX = itemObj.x - popoverWidth - 14;
    }
    if (posX < 10) posX = 10;

    // Position verticale : centrée sur l'élément, et clampée pour ne JAMAIS être tronquée en bas
    let posY = itemObj.y + (ITEM_SIZE / 2) - (popoverHeight / 2);
    const maxPosY = arenaHeight - popoverHeight - 10;
    if (posY > maxPosY) {
      posY = maxPosY;
    }
    if (posY < 10) {
      posY = 10;
    }

    popover.style.left = `${Math.round(posX)}px`;
    popover.style.top = `${Math.round(posY)}px`;
    popover.classList.add("is-visible");
  }

  function scheduleHidePopover() {
    cancelHidePopover();
    hidePopoverTimer = setTimeout(() => {
      popover.classList.remove("is-visible");
    }, 220);
  }

  function cancelHidePopover() {
    if (hidePopoverTimer) {
      clearTimeout(hidePopoverTimer);
      hidePopoverTimer = null;
    }
  }

  // Capture d'un élément (Arrête le mouvement, grise et ajoute le check vert)
  function captureItem(itemObj) {
    if (!itemObj.isCaptured) {
      itemObj.isCaptured = true;
      // Stoppe définitivement le mouvement de cette stack
      itemObj.vx = 0;
      itemObj.vy = 0;
      itemObj.el.classList.add("is-captured");

      // Effet squash bref
      itemObj.el.classList.add("is-squashing");
      setTimeout(() => {
        itemObj.el.classList.remove("is-squashing");
      }, 350);

      // Son de validation
      playPopSound();

      // Mise à jour du score
      const capturedCount = itemElements.filter((i) => i.isCaptured).length;
      if (scoreCurrentEl) {
        scoreCurrentEl.textContent = String(capturedCount);
      }

      // Si tout est capturé : félicitations !
      if (capturedCount === STACKS.length) {
        if (typeof showToast === "function") {
          showToast("🏆 Impressionnant ! Vous avez exploré toutes les stacks techniques d'Anass !");
        }
      }
    }
  }

  // Réinitialisation de l'arène
  resetBtn.addEventListener("click", () => {
    popover.classList.remove("is-visible");
    if (scoreCurrentEl) {
      scoreCurrentEl.textContent = "0";
    }
    itemElements.forEach((item) => {
      item.isCaptured = false;
      item.isHovered = false;
      item.el.classList.remove("is-captured", "is-hovered", "is-squashing");

      // Nouvel emplacement aléatoire
      item.x = Math.max(10, Math.min(arenaWidth - ITEM_SIZE - 10, Math.random() * (arenaWidth - ITEM_SIZE)));
      item.y = Math.max(10, Math.min(arenaHeight - ITEM_SIZE - 10, Math.random() * (arenaHeight - ITEM_SIZE)));
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.35 + Math.random() * 0.45;
      item.vx = Math.cos(angle) * speed;
      item.vy = Math.sin(angle) * speed;
      item.el.style.transform = `translate3d(${item.x}px, ${item.y}px, 0)`;
    });
    scoreCurrentEl.textContent = "0";
    if (typeof showToast === "function") {
      showToast("Arène réinitialisée. Prêt pour la chasse aux stacks !");
    }
  });

  // Boucle d'animation fluide en requestAnimationFrame
  let isRunning = true;
  function animate() {
    if (!isRunning) return;

    for (let i = 0; i < itemElements.length; i++) {
      const item = itemElements[i];

      // Si l'élément est capturé ou survolé, il est COMPLÈTEMENT FIGÉ (ne bouge plus)
      if (item.isCaptured || item.isHovered) continue;

      item.x += item.vx;
      item.y += item.vy;

      // Rebond sur les bords
      const maxX = arenaWidth - ITEM_SIZE;
      const maxY = arenaHeight - ITEM_SIZE;

      if (item.x <= 0) {
        item.x = 0;
        item.vx = Math.abs(item.vx);
      } else if (item.x >= maxX) {
        item.x = maxX;
        item.vx = -Math.abs(item.vx);
      }

      if (item.y <= 0) {
        item.y = 0;
        item.vy = Math.abs(item.vy);
      } else if (item.y >= maxY) {
        item.y = maxY;
        item.vy = -Math.abs(item.vy);
      }

      item.el.style.transform = `translate3d(${item.x.toFixed(1)}px, ${item.y.toFixed(1)}px, 0)`;
    }

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

/**
 * =========================================================================
 * Dropdown de téléchargement du CV en Français et Anglais
 * =========================================================================
 */
function initCvDropdown() {
  const wrapper = document.getElementById("cvDropdownWrapper");
  const btn = document.getElementById("cvDropdownBtn");
  const popover = document.getElementById("cvMenuPopover");
  if (!wrapper || !btn || !popover) return;

  // Clic sur le bouton principal : toggle du menu
  btn.addEventListener("click", (e) => {
    // Si l'utilisateur clique directement sur un badge de langue (FR ou EN)
    const langBadge = e.target.closest("[data-dl-lang]");
    if (langBadge) {
      e.stopPropagation();
      const lang = langBadge.getAttribute("data-dl-lang");
      const file = lang === "en" ? "RESUME_ANASS_ASRIR.pdf" : "CV_ANASS_ASRIR.pdf";
      const filename = lang === "en" ? "RESUME_ANASS_ASRIR.pdf" : "CV_ANASS_ASRIR.pdf";
      const a = document.createElement("a");
      a.href = file;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      if (typeof showToast === "function") {
        showToast(lang === "en" ? "✓ English Resume download started!" : "✓ Téléchargement du CV en Français lancé !");
      }
      return;
    }

    const isOpen = popover.classList.contains("is-open");
    if (isOpen) {
      popover.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
    } else {
      popover.classList.add("is-open");
      btn.setAttribute("aria-expanded", "true");
    }
  });

  // Fermer au clic extérieur
  document.addEventListener("click", (e) => {
    if (!wrapper.contains(e.target)) {
      popover.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
    }
  });

  // Fermer avec Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && popover.classList.contains("is-open")) {
      popover.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
    }
  });
}

/**
 * =========================================================================
 * Parcours Temporel Interactif (Time Travel Timeline)
 * Permet de voyager à travers les années du parcours avec une ligne laser
 * réactive au scroll, des puces interactives et des animations de focus.
 * =========================================================================
 */
function initInteractiveTimeline() {
  const wrap = document.getElementById("timelineWrap");
  if (!wrap) return;

  const items = Array.from(wrap.querySelectorAll(".timeline-item"));
  const interactiveTriggers = wrap.querySelectorAll(".timeline-year-chip, .stepper-node");

  if (!items.length) return;

  // 1. Navigation directe par clic sur les puces d'années ou nœuds stepper
  interactiveTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = trigger.getAttribute("data-target");
      if (!targetId) return;

      const targetCard = document.getElementById(targetId);
      if (targetCard) {
        // Défilement fluide centré
        targetCard.scrollIntoView({ behavior: "smooth", block: "center" });

        // Animation de mise en avant (spotlight)
        items.forEach((item) => item.classList.remove("is-spotlighted"));
        const parentItem = targetCard.closest(".timeline-item");
        if (parentItem) {
          parentItem.classList.add("is-spotlighted");
          setTimeout(() => {
            parentItem.classList.remove("is-spotlighted");
          }, 2200);
        }
      }
    });
  });

  // 2. Synchronisation de la carte active selon la lecture au scroll
  let ticking = false;

  function updateTimelineProgress() {
    const windowH = window.innerHeight;
    const focalY = windowH * 0.42;

    // Détermination de la carte en cours de lecture
    let activeItem = items[0]; // Par défaut, 2023 (Kodehyve)

    items.forEach((item) => {
      const card = item.querySelector(".timeline-card");
      if (!card) return;

      const cardRect = card.getBoundingClientRect();
      // Si la ligne focale se situe sur cette carte
      if (cardRect.top <= focalY && cardRect.bottom >= focalY - 40) {
        activeItem = item;
      }
    });

    // Harmonisation : seule la carte active (en cours de lecture) a le halo
    items.forEach((item) => {
      if (item === activeItem) {
        item.classList.add("is-active");
      } else {
        item.classList.remove("is-active");
      }
    });

    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(updateTimelineProgress);
        ticking = true;
      }
    },
    { passive: true }
  );

  window.addEventListener(
    "resize",
    () => {
      if (!ticking) {
        requestAnimationFrame(updateTimelineProgress);
        ticking = true;
      }
    },
    { passive: true }
  );

  // Exécution initiale au chargement
  updateTimelineProgress();
}


