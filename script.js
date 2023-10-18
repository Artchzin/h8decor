const imagensContainer = document.querySelector(".imagens");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let slideIndex = 0;

prevButton.addEventListener("click", () => {
    slideIndex = Math.max(slideIndex - 1, 0);
    updateSlide();
});

nextButton.addEventListener("click", () => {
    slideIndex = Math.min(slideIndex + 1, imagensContainer.childElementCount - 1);
    updateSlide();
});

function updateSlide() {
    imagensContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}