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

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={yearSelected}
        onSaveExpenseYear={saveExpenseYearHandler}
      />
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}
export default Expenses;
