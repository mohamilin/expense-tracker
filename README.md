# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

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

    ![Application](/img/Screenshot%20from%202021-02-02%2022-07-54.png?raw=true)

    <br/>

```

```

```

```

```

```
