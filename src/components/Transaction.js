import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export default function Transaction({item}) {
    const sign = item.amount < 0 ? '-' : '+'

    const {deleteTransaction} = useContext(GlobalContext)
    return (
        <>
         <li className={item.amount < 0 ? 'minus' : 'plus'} >
            {item.text} <span>{sign}${Math.abs(item.amount)}</span>
            <button onClick={() => deleteTransaction(item.id)} className="delete-btn">x</button>
          </li>
        </>
    )
}
