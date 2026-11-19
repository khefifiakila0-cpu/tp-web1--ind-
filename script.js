document.addEventListener("DOMContentLoaded", () => {
  // Menu mobile
  const menuBtn = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
  }

  // Mode sombre persistant
  const themeBtn = document.getElementById("theme-toggle");
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    if (themeBtn) themeBtn.textContent = "Mode clair";
  }
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      const isDark = document.body.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      themeBtn.textContent = isDark ? "Mode clair" : "Mode sombre";
    });
  }

  // Quiz / Checklist Cybersécurité
  const quizForm = document.getElementById("cyber-quiz");
  const quizResult = document.getElementById("quiz-result");
  if (quizForm && quizResult) {
    quizForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const checks = quizForm.querySelectorAll("input[type='checkbox']:checked");
      const total = quizForm.querySelectorAll("input[type='checkbox']").length;
      const score = checks.length;
      let msg = `Score : ${score}/${total}. `;
      if (score === total) {
        msg += "Excellent ! Vos habitudes numériques respectent les bonnes pratiques de sécurité.";
      } else if (score >= 4) {
        msg += "Bon niveau, mais appliquez les points manquants pour renforcer votre protection.";
      } else {
        msg += "Attention : activez rapidement la double authentification et utilisez un gestionnaire de mots de passe.";
      }
      quizResult.textContent = msg;
      quizResult.style.fontWeight = "bold";
    });
  }

  // Visualiseur simple de tri à bulles (Algorithmique)
  const sortBtn = document.getElementById("run-bubble-sort");
  const sortOutput = document.getElementById("sort-steps");
  if (sortBtn && sortOutput) {
    sortBtn.addEventListener("click", () => {
      let arr = [34, 12, 45, 7, 23];
      let log = [`Tableau initial : [${arr.join(", ")}]`];
      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
          if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          }
        }
        log.push(`Après passage ${i + 1} : [${arr.join(", ")}]`);
      }
      sortOutput.innerHTML = log.map(line => `<div>${line}</div>`).join("");
    });
  }
});
