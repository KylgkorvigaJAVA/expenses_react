import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const DUMMY_EXPENSES = [
  {
    id: Math.random().toString(),
    date: new Date(2024, 10, 24),
    title: 'New Book',
    price: 30.99
  },
  {
    id: Math.random().toString(),
    date: new Date(2025, 10, 25),
    title: 'Opel Omega 1993 2.0 DOCH',
    price: 14.99
  },
  {
    id: Math.random().toString(),
    date: new Date(2025, 10, 26),
    title: 'New Milk',
    price: 18.59
  }
]

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  const [selectedYear, setSelectedYear] = useState('2024')
    
  const addExpenseHandler = (expense) => {
    console.log('In App.js')
    console.log(expense)
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses]
    })
  }

  const filterChangeHandler = (year) => {
    setSelectedYear(year)
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses 
        expenses = {expenses} 
        selectedYear = {selectedYear}
        onChangeFilter = {filterChangeHandler}
      /> 
    </div>
  )
}

export default App;
