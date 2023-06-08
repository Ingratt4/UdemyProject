import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
function Expenses(props) {

    const saveExpenseYearHandler = (selectedYear) => {

        setYearSelected(selectedYear);
        console.log(yearSelected);
   
 }

    const [yearSelected, setYearSelected] =  useState('2020');
    const expenses = props.expenses;

    
 





    return(
        
            
       
       <Card className="expenses">
       <ExpensesFilter selected = {yearSelected} onSaveExpenseYear = {saveExpenseYearHandler} />
       <ExpenseItem
       title = {expenses[0].title}
       amount = {expenses[0].amount}
       date = {expenses[0].date}
        />
        <ExpenseItem
       title = {expenses[1].title}
       amount = {expenses[1].amount}
       date = {expenses[1].date}
        />
        <ExpenseItem
       title = {expenses[2].title}
       amount = {expenses[2].amount}
       date = {expenses[2].date}
        />
        <ExpenseItem
       title = {expenses[3].title}
       amount = {expenses[3].amount}
       date = {expenses[3].date}
        />
       </Card>
    



    )


    


}
export default Expenses;