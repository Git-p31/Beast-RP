// Shop.js
document.addEventListener("DOMContentLoaded", function() {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Удаляем класс active у всех кнопок и контентов
            tabButtons.forEach(btn => btn.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            // Добавляем класс active для текущей кнопки и связанного контента
            button.classList.add("active");
            document.getElementById(button.getAttribute("data-tab")).classList.add("active");
        });
    });
});
