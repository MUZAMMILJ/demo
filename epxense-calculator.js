let expenses = []

function deleteExpense(index) {
  expenses.splice(index, 1); // remove 1 item at index
  renderExpenses();          // re-render list
}

function renderExpenses() {
  let list = document.getElementById("shopping-list");

  // clear old list
  list.innerHTML = "";

  // loop through array
  for (let i = 0; i < expenses.length; i++) {
    let li = document.createElement("li");
    let btn = document.createElement("button")
    btn.innerText = "Delete";
   li.innerText = `${expenses[i].name} - ${expenses[i].amount}`;

   
   btn.addEventListener("click", function () {
      deleteExpense(i);
    });

    li.appendChild(btn);
    list.appendChild(li);
  }
}


document.getElementById("addExpense").addEventListener("click", function () {
  
  let expenseName = document.getElementById("expense-name").value;
  let expenseAmount = document.getElementById("expense-amount").value;

  // basic validation
  if (expenseName === "" || expenseAmount === "") {
    return;
  }

  // store in array
  expenses.push({
    name: expenseName,
    amount: expenseAmount
  });

  console.log(expenses); // for understanding

  renderExpenses();
});
