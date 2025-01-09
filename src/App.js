import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    {
      date: new Date(2024, 10, 22),
      title: 'New Book',
      price: 30.99
    },
    {
      date: new Date(2024, 10, 22),
      title: 'Opel Omega 1993 2.0 DOCH',
      price: 14.99
    }
  ]
  

  return (
    <div className="App">
      <NewExpense></NewExpense>
      <Expenses expenses = {expenses} /> 
    </div>
  );
}

export default App;
