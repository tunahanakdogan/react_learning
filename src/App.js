import "./App.css";
import "./components/ExpenseItem";
import ExpenseItem from "./components/ExpenseItem";
function App() {
     const expenses = [
          { title: "Car Insurance", amount: 298.23, date: new Date(2021, 2, 28) },
          { title: "House", amount: 198.23, date: new Date(2022, 2, 28) },
          { title: "Phone", amount: 398.23, date: new Date(2023, 2, 28) },
          { title: "Car Repair", amount: 498.23, date: new Date(2024, 2, 28) },
     ];

     return (
          <div>
               <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
               <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
               <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
               <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
          </div>
     );
}

export default App;
