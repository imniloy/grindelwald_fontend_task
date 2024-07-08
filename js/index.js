// Code for capturing some words of about-section that will be highlighted so I add about-section_display-text-highlight

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



