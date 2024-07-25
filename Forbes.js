document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('#forbesTable tbody');
    const serverButtons = document.querySelectorAll('.server-buttons button');

    // Sample data for demonstration
    const data = {
        server1: [
            { name: 'Иван Иванов', level: 10, money: 100000 },
            { name: 'Алексей Смирнов', level: 8, money: 80000 },
            // Другие игроки
        ],
        server2: [
            { name: 'Петр Петров', level: 20, money: 200000 },
            { name: 'Сергей Кузнецов', level: 18, money: 180000 },
            // Другие игроки
        ],
        // Другие серверы
    };

    function loadTable(server) {
        const players = data[server] || [];
        tableBody.innerHTML = ''; // Очистка таблицы

        players.forEach(player => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${player.name}</td>
                <td>${server}</td>
                <td>${player.level}</td>
                <td>${player.money}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    serverButtons.forEach(button => {
        button.addEventListener('click', () => {
            const server = button.getAttribute('data-server');
            loadTable(server);
        });
    });
});
