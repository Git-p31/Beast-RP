document.addEventListener('DOMContentLoaded', function () {
    const governmentButton = document.getElementById('government-button');
    const criminalButton = document.getElementById('criminal-button');
    const governmentFactions = document.getElementById('government-factions');
    const criminalFactions = document.getElementById('criminal-factions');

    governmentButton.addEventListener('click', function () {
        governmentFactions.style.display = 'block';
        criminalFactions.style.display = 'none';
    });

    criminalButton.addEventListener('click', function () {
        governmentFactions.style.display = 'none';
        criminalFactions.style.display = 'block';
    });

    // Код для анимации прогресс-баров
    const progressBars = [
        { id: 'progress1', target: 0 }, // Замените целевые значения на ваши данные
        { id: 'progress2', target: 0 },
        { id: 'progress3', target: 10 },
        { id: 'progress4', target: 0 },
        { id: 'progress5', target: 0 },
    ]

    progressBars.forEach(bar => {
        const progressElement = document.getElementById(bar.id).querySelector('.progress');
        const progressText = progressElement.querySelector('.progress-text');
        let currentProgress = 0;
        const interval = setInterval(() => {
            if (currentProgress >= bar.target) {
                clearInterval(interval);
            } else {
                currentProgress++;
                progressElement.style.width = currentProgress + '%';
                progressText.textContent = currentProgress + '%';
            }
        }, 20); // Скорость анимации (меньше значение - быстрее)
    });
});
