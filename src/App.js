import React, { useState } from "react";
import AddNewExpense from "./components/AddNewExpense/AddNewExpense";

import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const initial_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450.0,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(initial_expenses);
  const [displayExpenseControl, setDisplayExpenseControl] = useState(false);

  const AddExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      {displayExpenseControl ? (
        <NewExpense
          onAddExpense={AddExpenseHandler}
          display={setDisplayExpenseControl}
        />
      ) : (
        <AddNewExpense display={setDisplayExpenseControl} />
      )}
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
