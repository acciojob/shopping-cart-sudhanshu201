//your code here
function addItem() {
    var itemNameInput = document.getElementById("item-name-input");
    var itemPriceInput = document.getElementById("item-price-input");

    var itemName = itemNameInput.value.trim();
    var itemPrice = parseFloat(itemPriceInput.value);

    if (itemName === "" || isNaN(itemPrice) || itemPrice <= 0) {
        alert("Please enter a valid item name and price.");
        return;
    }

    // Clear input fields
    itemNameInput.value = "";
    itemPriceInput.value = "";

    // Update table with new item
    var itemList = document.getElementById("item-list");
    var newRow = itemList.insertRow(-1);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    cell1.innerHTML = itemName;
    cell2.innerHTML = itemPrice.toFixed(2);

    // Update grand total
    updateGrandTotal();
}

function updateGrandTotal() {
    var totalAmount = 0;
    var itemPrices = document.querySelectorAll("#item-list td[aria-label='Item Price']");

    itemPrices.forEach(function (price) {
        totalAmount += parseFloat(price.textContent);
    });

    // Update grand total display
    var grandTotalElement = document.getElementById("total-amount");
    grandTotalElement.textContent = totalAmount.toFixed(2);
}

