let expense_per_category = [0, 0, 0, 0, 0];
let count = 4;

update_sum();

function update_sum() {
    const sums = document.querySelectorAll(".sum");
    for (let i = 0; i < sums.length; i++) {
        sums[i].innerHTML = `- ${expense_per_category[i]} Rs spent`;
    }
}

function add_expense() {
    const amount = document.querySelector('input[name="amount"]').value;
    const date = document.querySelector('input[name="date"]').value;
    const note = document.querySelector('input[name="note"]').value;
    const categoryIndex = document.querySelector('select[name="category"]').selectedIndex;
    const selected = document.querySelector('select[name="category"]').options[categoryIndex].value;

    if (amount && date && note && selected) {
        alert("Successfully added expense!");

        const table = document.querySelector(".expense-table tbody");
        const newRow = document.createElement("tr");
        newRow.style.borderBottom = "1px solid white";
        newRow.innerHTML = `
            <td>${amount}</td>
            <td>${selected}</td>
            <td>${date}</td>
            <td>${note}</td>
        `;
        table.appendChild(newRow);

        expense_per_category[categoryIndex] += parseInt(amount);
        update_sum();

        document.querySelector('.add-new-expense').style.display = "none";
    } else {
        alert("Please enter all details!");
    }
}

function add_category() {
    const newCategoryValue = document.querySelector('input[name="new-category"]').value;
    if (newCategoryValue) {
        const dropdown = document.querySelector('select[name="category"]');
        const availableCategories = document.querySelector(".available-categories");

        const newCategoryOption = document.createElement("option");
        newCategoryOption.textContent = newCategoryValue;
        dropdown.appendChild(newCategoryOption);

        count++;
        expense_per_category[count] = 0;

        const newCategorySpan = document.createElement("span");
        newCategorySpan.innerHTML = `${newCategoryValue} <span class="sum"> -${expense_per_category[count]} Rs spent</span>`;
        availableCategories.appendChild(newCategorySpan);

        document.querySelector('.add-category').style.display = "none";
    }
}

function add_category_page() {
    const addCategoryForm = document.querySelector('.add-category');
    addCategoryForm.style.display = (addCategoryForm.style.display === "block") ? "none" : "block";
}

function add_expense_page() {
    const addExpenseForm = document.querySelector('.add-new-expense');
    addExpenseForm.style.display = (addExpenseForm.style.display === "block") ? "none" : "block";
}
