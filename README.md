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

    export default App
    ```

9. Setelah kita slicing maka tampilannya seperti ini
    <br/>
<<<<<<< HEAD
    ![Application](/img/Screenshot from 2021-02-02 22-07-54.png?raw=true)
=======

    ![Application](/img/Screenshot%20from%202021-02-02%2022-07-54.png?raw=true)
>>>>>>> b318dfb267c0b895e6a5c35bcc9fb4573d3ba0dd

10. Kemudian kita akan membuat fungsionalitasnya, nah dibagian ini kita akan sering mengalami eror heheh

11. 
