import Card from '../UI/Card';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';


const Expenses = (props) => {

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === props.selectedYear
    })

    return (

        <Card className='expenses'>
            <ExpensesFilter
                selected={props.selectedYear}
                onChangeFilter={props.onChangeFilter}
            />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
}

export default Expenses;