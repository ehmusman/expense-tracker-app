import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance'
import ExpenseIncome from './components/ExpenseIncome';
import Header from './components/Header';
import History from './components/History';
import TransactionState from './context/TransactionState';

function App() {
  return (
    <TransactionState >
      <div className='container card p-3'>
        <Header />
        <hr />
        <Balance />
        <hr />
        <ExpenseIncome />
        <History />
        <AddTransaction />
      </div>
    </TransactionState>
  );
}

export default App;
