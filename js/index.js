document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("about-section_display-text");
    const specificWords = [
        "Wilderness Retreat", "peaceful", "serene", "disconnect from the stresses",
        "exploring", "trails", "fishing", "soaking in the hot tub",
        "beauty of your surroundings"
    ];

    let textContent = textElement.innerHTML;

    specificWords.forEach(word => {
        const regex = new RegExp(`(${word})`, 'gi');
        textContent = textContent.replace(regex, '<span class="about-section_display-text-highlight">$1</span>');
    });

    textElement.innerHTML = textContent;
});




// let currentIndex = 0;

// const slides = document.querySelectorAll('.slider-section__image-slide');
// const totalSlides = slides.length;
// const prevButton = document.querySelector('.prev');
// const nextButton = document.querySelector('.next');

// function showSlide(index) {
//     if (index >= totalSlides) {
//         currentIndex = 0;
//     } else if (index < 0) {
//         currentIndex = totalSlides - 1;
//     } else {
//         currentIndex = index;
//     }
//     const newTransform = `translateX(-${currentIndex * (456 + 20)}px)`; // 456 is the slide width, 20 is the gap
//     document.querySelector('.slider-section__slide-container').style.transform = newTransform;
// }

// prevButton.addEventListener('click', () => {
//     showSlide(currentIndex - 1);
// });

// nextButton.addEventListener('click', () => {
//     showSlide(currentIndex + 1);
// });

// // Optionally, you can add auto-slide functionality:
// setInterval(() => {
//     showSlide(currentIndex + 1);
// }, 5000); // Change slide every 5 seconds
