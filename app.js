// Animação suave ao carregar páginas + marcar menu ativo
document.addEventListener("DOMContentLoaded", () => {
  const inner = document.querySelector(".page-inner");
  if (inner) requestAnimationFrame(() => inner.classList.add("show"));

  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(a => {
    if (a.getAttribute("href") === current) a.classList.add("active");
  });

  const pdfBtn = document.querySelector("[data-pdf]");
  if (pdfBtn) {
    pdfBtn.addEventListener("click", () => window.print());
  }
});
