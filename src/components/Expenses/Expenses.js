import Card from '../UI/Card';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {

    const [selectedYear, setSelectedYear] = useState('2024');

    const filterChangeHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
        console.log(`Your data in Expenses.js: ${selectedYear}`);
    };

    return (

        <Card className='expenses'>
            <ExpensesFilter selected={selectedYear} onChangeFilter={filterChangeHandler} />
            <ExpenseItem data={props.expenses[0]}/>
            <ExpenseItem data={props.expenses[1]}/>
        </Card>
    );
}

export default Expenses;