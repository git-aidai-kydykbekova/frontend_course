const addItemBtn = document.getElementById('add-item-btn');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

const items = [];

addItemBtn.addEventListener('click', function() {
    const itemName = itemInput.value.trim(); // Получаем текст из input

    if (itemName !== "") {
        const newItem = {
            name: itemName,
            purchased: false
        };

        items.push(newItem);

        const li = document.createElement('li');
        li.textContent = itemName;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';

        deleteBtn.addEventListener('click', function() {
            itemList.removeChild(li)
            const array = items.findIndex(item => item.name === itemName);
            if (array > -1) {
                items.splice(array, 1);
            }
        });

        li.appendChild(deleteBtn);
        itemList.appendChild(li);

        itemInput.value = "";
    } else {
        alert("Please enter an item name.");
    }
});
