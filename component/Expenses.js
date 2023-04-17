import './Expenses.css'
import ExpenseItem from './expense'
export default function Expenses(props){
    return <div className="expenses">
        <ExpenseItem {...props[0]}></ExpenseItem>
      <ExpenseItem {...props[1]}></ExpenseItem>
      <ExpenseItem {...props[2]}></ExpenseItem>
      <ExpenseItem {...props[3]}></ExpenseItem>
      </div>
}
