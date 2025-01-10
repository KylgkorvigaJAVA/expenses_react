import Card from '../UI/Card';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === props.selectedYear
    })

    /* const filterChangeHandler = (selectedYear) => {
        setSelectedYear(selectedYear);

        console.log(`Your data in Expenses.js: ${selectedYear}`)
    }; */

    return (

        <Card className='expenses'>
            <ExpensesFilter
            selected={props.selectedYear}
            onChangeFilter={props.onChangeFilter}
            />
            {filteredExpenses.map(expense => (
                <ExpenseItem
                    key={expense.id}
                    date={expense.date}
                    title={expense.title}
                    price={expense.price}
                />
            ))
            }
        </Card>
    );
}

export default Expenses;