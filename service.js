// Inicializace instance třídy a připojení obsluhy událostí
document.addEventListener('DOMContentLoaded', () => {
    const customerList = new CustomerList();
    customerList.bindEvents();
});