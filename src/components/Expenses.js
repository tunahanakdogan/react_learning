import Card from "./Card";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
function Expenses(props) {
     return (
          <Card className="expense">
               <ExpenseItem
                    title={props.expenseList[0].title}
                    amount={props.expenseList[0].amount}
                    date={props.expenseList[0].date}
               ></ExpenseItem>
               <ExpenseItem
                    title={props.expenseList[1].title}
                    amount={props.expenseList[1].amount}
                    date={props.expenseList[1].date}
               ></ExpenseItem>
               <ExpenseItem
                    title={props.expenseList[2].title}
                    amount={props.expenseList[2].amount}
                    date={props.expenseList[2].date}
               ></ExpenseItem>
               <ExpenseItem
                    title={props.expenseList[3].title}
                    amount={props.expenseList[3].amount}
                    date={props.expenseList[3].date}
               ></ExpenseItem>
          </Card>
     );
}
export default Expenses;
