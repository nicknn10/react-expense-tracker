import React from "react";

export default function AddNewExpense(props) {
  const displayNewExpenseForm = (event) => {
    props.display(true);
  };

  return (
    <div className="new-expense">
      <button onClick={displayNewExpenseForm}>Add New Expense</button>
    </div>
  );
}
