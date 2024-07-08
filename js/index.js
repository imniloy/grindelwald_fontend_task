document.addEventListener("DOMContentLoaded", function () {
    // Code for capturing some words of about-section that will be highlighted so I add about-section_display-text-highlight

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




    // LOGIC FOR SLIDER....

    let isDragging = false;
    let startX, startScrollLeft;

    const slideContainer = document.getElementById("slider-section__slide-container");
    const prevBtn = document.getElementById("slider_prev_btn");
    const NextBtn = document.getElementById("slider_next_btn");
    const slideWidth = 460;


    slideContainer.addEventListener("mousemove", (e) => {
        if (!isDragging) return
        slideContainer.scrollLeft = e.pageX;
        startX = e.pageX;
        startScrollLeft = slideContainer.scrollLeft
    })

    slideContainer.addEventListener("mousedown", (e) => {
        isDragging = true;
        slideContainer.classList.add("slider-section__slide-container--dragging")
        slideContainer.scrollLeft = startScrollLeft - (e.pageX - startX)
    })

    slideContainer.addEventListener("mouseup", (e) => {
        isDragging = false;
        slideContainer.classList.remove("slider-section__slide-container--dragging")
    })


    prevBtn.addEventListener("click", (e) => {
        isDragging = false;
        slideContainer.scrollLeft += -slideWidth;
        slideContainer.classList.remove("slider-section__slide-container--dragging")


    });

    NextBtn.addEventListener("click", (e) => {
        isDragging = false;
        slideContainer.scrollLeft += slideWidth;
        slideContainer.classList.remove("slider-section__slide-container--dragging")
    });
});


