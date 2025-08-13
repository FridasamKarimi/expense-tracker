import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses }from './components/IncomeExpenses';
import { TransactionList }from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvier } from './context/GlobalState';
function App() {
  return (
    <GlobalProvier >
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
        
      </div>
    </GlobalProvier>
  );
}

export default App;
