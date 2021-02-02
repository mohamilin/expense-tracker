import './App.css'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpense from './components/IncomeExpense'
import TransactionLits from './components/TransactionList'
import AddTransaction from './components/AddTransaction'

import {GlobalProvider} from './context/GlobalState'
function App() {
  return (
    <>
      <div>
        <GlobalProvider>
        <Header/>
        <div className = 'container'>
          <Balance/>
          <IncomeExpense/>
          <TransactionLits/>
          <AddTransaction/>
        </div>
        </GlobalProvider>
      </div>
    </> 
  )
}

export default App
