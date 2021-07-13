import React from 'react'

import ExpenseItem from '../ExpenseItem/ExpenseItem'

import './ExpenseList.css'

const ExpenseList = (props) => {
  if (props.item.length === 0) {
    return <h2 className='expenses-list__fallback'>No Expenses Found</h2>
  }

  return (
    <ul className='expenses-list'>
      {props.item.map((expense) => (
        <ExpenseItem
          date={expense.date}
          amount={expense.amount}
          title={expense.title}
          key={expense.id}
        />
      ))}
    </ul>
  )
}

export default ExpenseList
