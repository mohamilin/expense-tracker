# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

[http://localhost:3000](http://localhost:3000) to view it in the browser.

## Learn More

1. [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
2. [React documentation](https://reactjs.org/).

### Making a Progressive Web App

[https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

## Steps build Expense Tracker

1.  Install react js : yarn create react-app expense-tracker
2.  Delete some file : index.css, logo.svg
3.  Delete content on app.css
4.  configurate with other app (import - export)
5.  Setelah kita lakukan penyesuaian, maka code untuk

    - Code app.js sebagai berikut :

    ```js
    import "./App.css";
    function App() {
      return (
        <>
          <div className="App">
            <p>Aplikasi Expense tracker</p>
          </div>
        </>
      );
    }

    export default App;
    ```

    - Code index.js sebagai berikut :

    ```js
    import React from "react";
    import ReactDOM from "react-dom";
    import App from "./App";

    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById("root")
    );
    ```

6.  Buat style dengan css di file app.css, code css nya bisa diperoleh <br/>
    [Link](https://github.com/bradtraversy/vanillawebprojects/blob/master/expense-tracker/style.css)

7.  Kita akan melakan slicing terlebih dahulu dengan melakukan beberapa hal diantaranya

    - Buat folder components yang terdiri dari Header.js, Balance.js, IncomeExpense.js <br/>
      TransactionList.js dan AddTransaction.js

      - Code Header.js :

      ```js
      import React from "react";
      export default function Header() {
        return (
          <>
            <h2>Expense Tracker App</h2>
          </>
        );
      }
      ```

      - Code Balance.js :

      ```js
      import React from "react";
      export default function Balance() {
        return (
          <>
            <h4>Your Balance</h4>
            <h1>$0.00</h1>
          </>
        );
      }
      ```

      - Code IncomeExpense.js :

        ```js
        import React from "react";
        export default function Income() {
          return (
            <>
              <div className="inc-exp-container">
                <div>
                  <h4>Income</h4>
                  <p className="money plus">+$0.00</p>
                </div>
                <div>
                  <h4>Expense</h4>
                  <p className="money minus">-$0.00</p>
                </div>
              </div>
            </>
          );
        }
        ```

        - Code TransactionList.js

        ```js
        import React from "react";
        export default function TransactionLits() {
          return (
            <>
              <h3>History</h3>
              <ul id="list" className="list">
                <li className="minus">
                  Cash <span>-$400</span>
                  <button className="delete-btn">x</button>
                </li>
              </ul>
            </>
          );
        }
        ```

        - Code AddTransaction.js

        ```js
        import React from "react";
        export default function AddTransaction() {
          return (
            <>
              <h3>Add Transaction</h3>
              <form id="form">
                <div className="form-control">
                  <label htmlFor="text">Text</label>
                  <input type="text" id="text" placeholder="Enter text..." />
                </div>
                <div className="form-control">
                  <label htmlFor="amount">
                    Amount <br />
                    (negative - expense, positive - income)
                  </label>
                  <input
                    type="number"
                    id="amount"
                    placeholder="Enter amount..."
                  />
                </div>
                <button className="btn">Add transaction</button>
              </form>
            </>
          );
        }
        ```

8.  import Header, Balance, IncomeExpense, TransactionList, dan AddTransaction agar berada dalam app.js

    - Code App.js

    ```js
    import "./App.css";
    import Header from "./components/Header";
    import Balance from "./components/Balance";
    import IncomeExpense from "./components/IncomeExpense";
    import TransactionLits from "./components/TransactionList";
    import AddTransaction from "./components/AddTransaction";

    function App() {
      return (
        <>
          <div>
            <Header />
            <div className="container">
              <Balance />
              <IncomeExpense />
              <TransactionLits />
              <AddTransaction />
            </div>
          </div>
        </>
      );
    }

    export default App;
    ```

9.  Setelah kita slicing maka tampilannya seperti ini
    <br/>
    ![Application](/img/Screenshot%20from%202021-02-02%2022-07-54.png?raw=true)

10. Kemudian kita akan membuat fungsionalitasnya, nah dibagian ini kita akan sering mengalami eror heheh

11. Membuat state baru dengan menggunakan useState dalam AddTransaction.js

    - Code AddTransaction.js

    ```js
    import React, { useState } from "react";
    export default function AddTransaction() {
      const [text, setText] = useState("");
      const [amount, setAmount] = useState(0);

      return (
        <>
          <h3>Add Transaction</h3>
          <form id="form">
            <div className="form-control">
              <label htmlFor="text">Text</label>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text..."
              />
            </div>
            <div className="form-control">
              <label htmlFor="amount">
                Amount <br />
                (negative - expense, positive - income)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount..."
              />
            </div>
            <button className="btn">Add transaction</button>
          </form>
        </>
      );
    }
    ```

12. Selanjutanya kita akan memanfaatkan React Hook dan Context API dengan membuat folder context dalam src

    - Didalam folder context terdapat GlobalState.js dan AppReducer.js
    - Code GlobalState.js

    ```js
    import React, { createContext, useReducer } from "react";
    import AppReducer from "./AppReducer";

    // initial state
    const initialState = {
      transactions: [
        { id: 1, text: "Flower", amount: -20 },
        { id: 2, text: "Salary", amount: 300 },
        { id: 3, text: "Book", amount: -10 },
        { id: 4, text: "Camera", amount: 150 },
      ],
    };

    // create context
    export const GlobalContext = createContext(initialState);

    // Provider components
    export const GlobalProvider = ({ children }) => {
      const [state, dispatch] = useReducer(AppReducer, initialState);
      return (
        <GlobalContext.Provider value={{ transactions: state.transactions }}>
          {children}
        </GlobalContext.Provider>
      );
    };
    ```

    - Code AppReducer.js

    ```js
    export default (state, action) => {
      switch (action.type) {
        default:
          return state;
      }
    };
    ```

13. Kemudian import GlobalProvider ke App.js
    ```js
    <GlobalProvider>
      <Header />
      .....................
    </GlobalProvider>
    ```
14. Import GlobalState ke TransactionList.js

    - Code TransactionList.js

    ```js
    import React, { useContext } from "react";
    import { GlobalContext } from "../context/GlobalState";

    export default function TransactionLits() {
      const { transactions } = useContext(GlobalContext);
      return (
        <>
          <h3>History</h3>
          <ul id="list" className="list">
            {transactions.map((item, index) => (
              <li className="minus" key={index}>
                {item.text} <span>-$400</span>
                <button className="delete-btn">x</button>
              </li>
            ))}
          </ul>
        </>
      );
    }
    ```

15. Didalam TransactionList.js terdapat mapping data dari transaction, kita akan keluarkan dengan membuat file Transaction.js

    - Code Transaction.js

    ```js
    import React from "react";
    export default function Transaction({ item }) {
      const sign = item.amount < 0 ? "-" : "+";
      return (
        <>
          <li className={item.amount < 0 ? "minus" : "plus"}>
            {item.text}{" "}
            <span>
              {sign}${Math.abs(item.amount)}
            </span>
            <button className="delete-btn">x</button>
          </li>
        </>
      );
    }
    ```

16. import GlobalContext dan Transaction ke dalam Balance.js

    - Code Transaction.js

    ```js
    import React, { useContext } from "react";
    import { GlobalContext } from "../context/GlobalState";

    export default function Balance() {
      const { transactions } = useContext(GlobalContext);
      const amounts = transactions.map((item) => item.amount);
      const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
      return (
        <>
          <h4>Your Balance</h4>
          <h1>${total}</h1>
        </>
      );
    }
    ```

17. import GlobalContext dan Transaction ke dalam IncomeExpense.js

    ```js
    import React, { useContext } from "react";
    import { GlobalContext } from "../context/GlobalState";

    export default function Income() {
      const { transactions } = useContext(GlobalContext);
      const amounts = transactions.map((transaction) => transaction.amount);

      const income = amounts
        .filter((item) => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

      const expense = (
        amounts
          .filter((item) => item < 0)
          .reduce((acc, item) => (acc += item), 0) * -1
      ).toFixed(2);
      console.log("out in", { income, expense });
      return (
        <>
          <div className="inc-exp-container">
            <div>
              <h4>Income</h4>
              <p className="money plus">{income}</p>
            </div>
            <div>
              <h4>Expense</h4>
              <p className="money minus">{expense}</p>
            </div>
          </div>
        </>
      );
    }
    ```

18. Selanjutnya membuat function delete item transaction dan add transaction, yang nantinya akan secara auto terhubung dengan Balance, yaitu dengan membuat action di GlobalState.js dan case di AppReducer.js

        - Code GlobalState.js

        ```js
        // Provider components
        export const GlobalProvider = ({ children }) => {
          const [state, dispatch] = useReducer(AppReducer, initialState);

          //action delete
          function deleteTransaction(id) {
            dispatch({
              type: "DELETE_TRANSACTION",
              payload: id,
            });
          }

          function addTransaction(transaction) {
            dispatch({
              type: "ADD_TRANSACTION",
              payload: transaction,
            });
          }

            return (
              <GlobalContext.Provider
                value={{
                  transactions: state.transactions,
                  deleteTransaction,
                  addTransaction,
                }}
              >
                {children}
              </GlobalContext.Provider>
            );
          };
        ```
        - Code AppReducer.js

        ```js
            export default (state, action) => {
              switch (action.type) {
                  case 'DELETE_TRANSACTION':
                      return {
                          ...state,
                          transactions : state.transactions.filter(transaction =>
                              transaction.id !== action.payload)
                      }
                  case 'ADD_TRANSACTION':
                      return {
                          ...state,
                          transactions : [action.payload, ...state.transactions]
                      }
                  default:
                      return state
                }
              }
          ```

19. Kita akan menyesuaikan function delete ke Transaction.js dan function add transaction ke AddTransactions.js

    - Code Transaction

    ```js
    import React, { useContext } from "react";
    import { GlobalContext } from "../context/GlobalState";
    import Transaction from "./Transaction";

    export default function TransactionLits() {
      const { transactions } = useContext(GlobalContext);

      return (
        <>
          <h3>History</h3>
          <ul id="list" className="list">
            {transactions.map((item) => (
              <Transaction key={item.id} item={item} />
            ))}
          </ul>
        </>
      );
    }
    ```

    - Code AddTransaction.js

    ```js
    import React, { useState, useContext } from "react";
    import { GlobalContext } from "../context/GlobalState";

    export default function AddTransaction() {
      const [text, setText] = useState("");
      const [amount, setAmount] = useState(0);

      const { addTransaction } = useContext(GlobalContext);

      const handleSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
          id: Math.floor(Math.random() * 100000000),
          text,
          amount: +amount,
        };

        addTransaction(newTransaction);
      };
      return (
        <>
          <h3>Add Transaction</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label htmlFor="text">Text</label>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text..."
              />
            </div>
            <div className="form-control">
              <label htmlFor="amount">
                Amount <br />
                (negative - expense, positive - income)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount..."
              />
            </div>
            <button className="btn">Add transaction</button>
          </form>
        </>
      );
    }
    ```

20. Nah, sampai sini, tutorial ini. Tutorial ini saya dapatkan dari Channel [Traversy Media](https://www.youtube.com/watch?v=XuFDcZABiDQ)
