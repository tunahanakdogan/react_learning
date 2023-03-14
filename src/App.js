import "./App.css";
import "./components/ExpenseItem";

import Expenses from "./components/Expenses";
function App() {
     const expenseArray = [
          { title: "Car Insurance", amount: 298.23, date: new Date(2021, 2, 28) },
          { title: "House", amount: 198.23, date: new Date(2022, 2, 28) },
          { title: "Phone", amount: 398.23, date: new Date(2023, 2, 28) },
          { title: "Car Repair", amount: 498.23, date: new Date(2024, 2, 28) },
     ];

     return <Expenses expenseList={expenseArray}></Expenses>;
}

export default App;
