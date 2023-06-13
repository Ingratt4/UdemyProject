import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
function Expenses(props) {
  const saveExpenseYearHandler = (selectedYear) => {
    setYearSelected(selectedYear);
  };

  const [yearSelected, setYearSelected] = useState("2020");
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullyear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={yearSelected}
          onSaveExpenseYear={saveExpenseYearHandler}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key ={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};
export default Expenses;
