class CustomerList {
    constructor() {
        this.form = document.querySelector('form');
        this.tableContainer = document.getElementById('userList');
        this.table = this.tableContainer.querySelector('table');
        if (!this.table) {
            this.table = document.createElement('table');
            this.tableContainer.appendChild(this.table);
        }
        this.tbody = this.table.querySelector('tbody');
        if (!this.tbody) {
            this.tbody = document.createElement('tbody');
            this.table.appendChild(this.tbody);
        }
    }

    addCustomer(event) {
        event.preventDefault(); // Zamezí výchozímu chování formuláře (odeslání dat na server)

        // Získání hodnot z inputů
        let userName = document.getElementById('userName').value;
        let userSurname = document.getElementById('userSurname').value;
        let userAge = document.getElementById('userAge').value;
        let userPhone = document.getElementById('userPhone').value;

        // Získání seznamu existujících klientů
        let existingClients = document.querySelectorAll('#userList tbody tr');

        // Kontrola duplicity
        let isDuplicate = false;
        existingClients.forEach(function(row) {
            let existingName = row.cells[0].textContent;
            let existingPhone = row.cells[1].textContent;
            let existingAge = row.cells[2].textContent;

            if (existingName === (userName + ' ' + userSurname) && existingAge === userAge && existingPhone === userPhone) {
                isDuplicate = true;
            }
        });

        // Pokud již klient existuje, zobrazit poznámku a nepokračovat
        if (isDuplicate) {
            return alert('Tento klient již existuje');
        }

        // Vytvoření řádku pro tabulku a vložení hodnot
        let row = this.tbody.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        cell1.textContent = userName + ' ' + userSurname; // Sloučení jména a příjmení do jednoho řetězce
        cell2.textContent = userPhone;
        cell3.textContent = userAge;
    }

    bindEvents() {
        this.form.addEventListener('submit', this.addCustomer.bind(this));
    }
}
