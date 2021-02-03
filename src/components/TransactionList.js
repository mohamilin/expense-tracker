import React, {useContext} from "react";
import {GlobalContext} from '../context/GlobalState'
import Transaction from "./Transaction";


export default function TransactionLits() {
  const {transactions} = useContext(GlobalContext)

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
