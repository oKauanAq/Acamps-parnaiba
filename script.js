/*
  Interações leves da landing page:
  - Abre apenas uma pergunta do FAQ por vez.
  - Revela blocos com animações leves conforme entram na tela.
*/
document.documentElement.classList.add("js");

function setupFaqAccordion() {
  const items = document.querySelectorAll(".faq-list details");

  items.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;

      items.forEach((otherItem) => {
        if (otherItem !== item) otherItem.removeAttribute("open");
      });
    });
  });
}

setupFaqAccordion();

function setupScrollReveal() {
  const items = document.querySelectorAll(".reveal-on-scroll");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.16 });

  items.forEach((item) => observer.observe(item));
}

setupScrollReveal();
