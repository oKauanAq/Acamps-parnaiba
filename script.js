/*
  Interações leves da landing page:
  - Troca o bloco "Vídeo em breve" por iframe se um link real do YouTube for informado.
  - Abre apenas uma pergunta do FAQ por vez.
  - Revela blocos com animações leves conforme entram na tela.
*/
document.documentElement.classList.add("js");

const PLACEHOLDER_VALUES = new Set([
  "",
  "COLOCAR_LINK_VIDEO_AQUI",
  "#"
]);

function getYouTubeEmbedUrl(url) {
  if (PLACEHOLDER_VALUES.has(url)) return null;

  try {
    const parsedUrl = new URL(url);
    const host = parsedUrl.hostname.replace("www.", "");

    if (host === "youtu.be") {
      return `https://www.youtube.com/embed/${parsedUrl.pathname.slice(1)}`;
    }

    if (host.includes("youtube.com")) {
      const videoId = parsedUrl.searchParams.get("v");
      if (videoId) return `https://www.youtube.com/embed/${videoId}`;

      if (parsedUrl.pathname.startsWith("/embed/")) {
        return url;
      }
    }
  } catch (error) {
    return null;
  }

  return null;
}

function renderVideo() {
  const videoFrame = document.querySelector(".video-frame");
  if (!videoFrame) return;

  const embedUrl = getYouTubeEmbedUrl(videoFrame.dataset.videoUrl?.trim() || "");
  if (!embedUrl) return;

  videoFrame.innerHTML = `
    <iframe
      src="${embedUrl}"
      title="Vídeo do ACAMP’S Shalom Parnaíba"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen>
    </iframe>
  `;
}

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

renderVideo();
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
