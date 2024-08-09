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
            new: 'Новое',
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
    updateGoal(1, 'new', 0); // Цель 1: статус "Новое", прогресс 0%
    updateGoal(2, 'new', 0); // Цель 2: статус "Новое", прогресс 0%
    updateGoal(3, 'new', 0); // Цель 3: статус "Новое", прогресс 0%
    updateGoal(4, 'new', 0); // Цель 4: статус "Новое", прогресс 0%
    updateGoal(5, 'new', 0); // Цель 5: статус "Новое", прогресс 0%

    // Примеры обновления новостей
    updateNews(1, 'new'); // Новость 1: статус "Новое"
   
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


// Получаем все элементы с классом help-item
const helpItems = document.querySelectorAll('.help-item');

// Добавляем обработчик события на каждый элемент
helpItems.forEach(item => {
    item.addEventListener('click', () => {
        // Убираем класс 'open' у всех плиток, кроме нажатой
        helpItems.forEach(i => {
            if (i !== item) {
                i.classList.remove('open');
            }
        });
        
        // Переключаем класс 'open' на нажатой плитке
        item.classList.toggle('open');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const helpItems = document.querySelectorAll('.help-item');

    helpItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Закрыть все элементы
            helpItems.forEach(i => {
                if (i !== item) {
                    i.classList.remove('open');
                }
            });
            // Открыть текущий элемент
            item.classList.add('open');
        });

        item.addEventListener('mouseleave', () => {
            // Закрыть текущий элемент
            item.classList.remove('open');
        });
    });
});