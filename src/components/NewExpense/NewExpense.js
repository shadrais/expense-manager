import React ,{useState} from 'react'

import ExpenseForm from '../ExpenseForm/ExpenseForm'

import './NewExpense.css'

const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false)

  const expenseDataHandler = (expenses) => {
    const newExpense = {
      ...expenses
    } 
    props.newExpenseDataHandler(newExpense)
    setIsEditing(false)
  }

  const isEditingHandler = () => {
    setIsEditing(true)
  }
  
  const stopEditingHandler = () => {
    setIsEditing(false)
  }
  
  

  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={isEditingHandler}>Add Expense</button>}
     {isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveDataHandler={expenseDataHandler}/>}
    </div>
  )
}

export default NewExpense
