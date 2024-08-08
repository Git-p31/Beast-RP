document.addEventListener('DOMContentLoaded', function () {
    // Функция для обновления статуса
    function updateStatus(element, status) {
        const statusClasses = {
            new: 'status-new',
            'in-progress': 'status-in-progress',
            completed: 'status-completed'
        };
        Object.values(statusClasses).forEach(cls => element.classList.remove(cls));
        element.classList.add(statusClasses[status]);
        element.textContent = {
            new: 'Новая',
            'in-progress': 'В процессе',
            completed: 'Выполнено'
        }[status];
    }

    // Функция для обновления прогресса
    function updateProgress(progressElement, percentage) {
        progressElement.style.width = percentage + '%';
        progressElement.querySelector('.progress-percent').textContent = percentage + '%';
    }

    // Функция для обновления цели
    function updateGoal(id, status, progress) {
        const goal = document.getElementById('goal' + id);
        if (goal) {
            updateStatus(goal.querySelector('.goal-status'), status);
            updateProgress(goal.querySelector('.progress'), progress);
        }
    }

    // Функция для обновления новости
    function updateNews(id, status) {
        const newsItem = document.querySelector(`.news-item[data-news-id="${id}"]`);
        if (newsItem) {
            updateStatus(newsItem.querySelector('.news-status'), status);
        }
    }

    // Примеры обновления целей
    updateGoal(1, 'new', 0); // Цель 1: статус "Новая", прогресс 0%
    updateGoal(2, 'new', 0); // Цель 2: статус "Новая", прогресс 0%
    updateGoal(3, 'new', 0); // Цель 3: статус "Новая", прогресс 0%
    updateGoal(4, 'new', 0); // Цель 4: статус "Новая", прогресс 0%
    updateGoal(5, 'new', 0); // Цель 5: статус "Новая", прогресс 0%

    // Примеры обновления новостей
    updateNews(1, 'new'); // Новость 1: статус "Новая"
   
});

document.addEventListener('DOMContentLoaded', function() {
    const modalOverlay = document.getElementById('modal-overlay');
    const modalClose = document.getElementById('modal-close');
    const moreInfoButton = document.querySelector('.more-info-button');

    moreInfoButton.addEventListener('click', function() {
        modalOverlay.style.display = 'flex';
    });

    modalClose.addEventListener('click', function() {
        modalOverlay.style.display = 'none';
    });

    // Закрытие модального окна при клике вне модального контента
    window.addEventListener('click', function(event) {
        if (event.target === modalOverlay) {
            modalOverlay.style.display = 'none';
        }
    });
});
