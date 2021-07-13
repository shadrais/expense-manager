import React, { useState } from 'react'

import ExpenseList from '../ExpenseList/ExpenseList'
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter'
import ExpensesChart from '../ExpensesChart/ExpensesChart'

import './Expense.css'

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  )

  return (
    <>
      <div className='expenses'>
        <ExpenseFilter
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList item={filteredExpenses} />
      </div>
    </>
  )
}

export default Expense
