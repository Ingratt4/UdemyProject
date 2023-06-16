import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const saveExpenseYearHandler = (selectedYear) => {
    setYearSelected(selectedYear);
  };

  const [yearSelected, setYearSelected] = useState("2020");
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === yearSelected;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={yearSelected}
          onSaveExpenseYear={saveExpenseYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}
export default Expenses;
