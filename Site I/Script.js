document.addEventListener("DOMContentLoaded", function () {
    const skillBars = document.querySelectorAll(".skill-fill");

    skillBars.forEach((bar) => {
        let percentage = bar.getAttribute("data-percent");
        bar.style.width = percentage + "%";
        
    });
});
