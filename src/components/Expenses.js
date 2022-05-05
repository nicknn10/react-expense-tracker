import React, { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter/ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const submitYearHandler = (year) => {
    setFilteredYear(year);
  };

  let filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  var expensesItemList = filteredExpenses.map(function (expense) {
    return (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });
  return (
    <div className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onSubmitYear={submitYearHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      {filteredExpenses.length === 0 ? (
        <p>No Expenses found.</p>
      ) : (
        expensesItemList
      )}
    </div>
  );
}
