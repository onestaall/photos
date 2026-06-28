const gallery = document.querySelector("#gallery");
const emptyState = document.querySelector("#empty-state");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = lightbox.querySelector("img");
const closeButton = lightbox.querySelector("button");
const heroImage = document.querySelector(".hero__media img");

function updateEmptyState() {
  const visiblePhotos = gallery.querySelectorAll(".photo-card:not(.is-missing)");
  emptyState.classList.toggle("is-visible", visiblePhotos.length === 0);
}

function hideMissingPhoto(card) {
  card.classList.add("is-missing");
  updateEmptyState();
}

document.querySelectorAll(".photo-card").forEach((card) => {
  const image = card.querySelector("img");

  image.addEventListener("error", () => hideMissingPhoto(card));

  card.addEventListener("click", (event) => {
    event.preventDefault();
    lightboxImage.src = card.href;
    lightboxImage.alt = image.alt;
    lightbox.classList.add("is-open");
    closeButton.focus();
  });
});

heroImage.addEventListener("error", () => {
  heroImage.remove();
});

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightboxImage.src = "";
}

closeButton.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
    closeLightbox();
  }
});

updateEmptyState();
