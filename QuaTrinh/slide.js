let currentIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    currentIndex++;

    if (currentIndex > slides.length) {
        currentIndex = 1;
    }

    slides[currentIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Chuyển ảnh mỗi 5 giây (5000 mili giây)
}

document.addEventListener("DOMContentLoaded", showSlides);
