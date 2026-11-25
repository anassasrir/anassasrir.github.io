/**
 * Portfolio Shared Core
 * Dynamic calculations, command palette & shared UI utilities
 */

const PORTFOLIO_CONFIG = {
  careerStartDate: "2016-08-01", // Début chez Capgemini en Août 2016
  email: "asrir.anass@hotmail.fr"
};

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

  // Compteurs simples "10+"
  document.querySelectorAll("[data-dynamic-years]").forEach((el) => {
    el.textContent = yearsPlus;
  });

  // Textes "10+ ans"
  document.querySelectorAll("[data-dynamic-years-text]").forEach((el) => {
    const template = el.getAttribute("data-dynamic-years-text");
    if (template) {
      el.textContent = template.replace("{years}", yearsPlus);
    } else {
      el.textContent = `${yearsPlus} ans`;
    }
  });

  // Année courante dans le footer
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

  // Bouton de copie d'email
  const copyEmailBtn = document.getElementById("copyEmailBtn");
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", async () => {
      const email = copyEmailBtn.getAttribute("data-email") || PORTFOLIO_CONFIG.email;
      try {
        await navigator.clipboard.writeText(email);
        showToast("Email copié : " + email);
      } catch (err) {
        window.location.href = "mailto:" + email;
      }
    });
  }

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

  // Initialisation du Command Palette (⌘K / Ctrl+K)
  initCommandPalette();
});

/**
 * Gestion du Command Palette
 */
function initCommandPalette() {
  const cmdPalette = document.getElementById("cmdPalette");
  const cmdInput = document.getElementById("cmdSearchInput");
  const openCmdBtn = document.getElementById("openCmdBtn");
  if (!cmdPalette) return;

  function openPalette() {
    cmdPalette.classList.add("active");
    if (cmdInput) {
      cmdInput.value = "";
      filterCmdItems("");
      setTimeout(() => cmdInput.focus(), 50);
    }
  }

  function closePalette() {
    cmdPalette.classList.remove("active");
  }

  if (openCmdBtn) openCmdBtn.addEventListener("click", openPalette);

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

  if (cmdInput) {
    cmdInput.addEventListener("input", (e) => {
      filterCmdItems(e.target.value.toLowerCase().trim());
    });
  }

  function filterCmdItems(query) {
    const items = document.querySelectorAll("#cmdResultsList .cmd-item");
    items.forEach((item) => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(query) ? "flex" : "none";
    });
  }

  const cmdCopyEmail = document.getElementById("cmdCopyEmail");
  if (cmdCopyEmail) {
    cmdCopyEmail.addEventListener("click", async () => {
      await navigator.clipboard.writeText(PORTFOLIO_CONFIG.email);
      closePalette();
      showToast("Email copié : " + PORTFOLIO_CONFIG.email);
    });
  }
}
