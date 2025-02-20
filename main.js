document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll(".skill-card");
    
    skills.forEach(skill => {
        skill.addEventListener("mouseenter", () => {
            skill.style.transform = "scale(1.2)";
        });

        skill.addEventListener("mouseleave", () => {
            skill.style.transform = "scale(1)";
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll(".skill-card");
    
    skills.forEach(skill => {
        skill.addEventListener("mouseenter", () => {
            skill.style.transform = "scale(1.2)";
        });

        skill.addEventListener("mouseleave", () => {
            skill.style.transform = "scale(1)";
        });
    });

    // Image slider functionality
    let slides = document.getElementsByClassName("mySlides fade");
console.log(slides); // 
if (slides.length === 0) {
    console.error("No elements with class 'mySlides fade' found.");
} else {
        slides[0].style.display = "block";  
    }
    });
