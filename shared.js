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
