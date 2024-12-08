// Отримання елементів
const pairList = document.getElementById('pairList');
const inputField = document.getElementById('nameValueInput');

// Додавання пари
function addPair() {
    const pair = inputField.value.trim();
    const regex = /^[a-zA-Z0-9]+\s*=\s*[a-zA-Z0-9]+$/;

    // Перевірка правельного вводу
    if (!regex.test(pair)) {
        alert('Не вірно введений формат! Введіть Name=Value.');
        return;
    }

    // Видалення зайвих пробілів
    const cleanPair = pair.replace(/\s*=\s*/, '=');

     // Додавання пари в список
    const option = document.createElement('option');
    option.textContent = cleanPair;
    pairList.appendChild(option);

    // Очишчення вводу
    inputField.value = '';
}

// Сортування за ім'ям або значенням
function sortBy(type) {
    const items = Array.from(pairList.options);

    // Сортування
    items.sort((a, b) => {
        const [nameA, valueA] = a.textContent.split('=');
        const [nameB, valueB] = b.textContent.split('=');

        return type === 'name'
            ? nameA.localeCompare(nameB)
            : valueA.localeCompare(valueB);
    });

    // Оновлення списку
    pairList.innerText = '';
    items.forEach(item => {
        pairList.appendChild(item);
    });
}

// Видалення вибраних елементів
function deleteSelected() {
    const selectedOptions = Array.from(pairList.selectedOptions);
    selectedOptions.forEach(option => option.remove());
}
