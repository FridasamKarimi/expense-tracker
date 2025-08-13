import React from 'react'

export const TransactionList = () => {
  return (
    <>
    <h3>History</h3>
    <ul id="list" class="list">
        <li class="minus">
            Cah <span>-400$</span><button class="delete-btn">x</button>
        </li>
    </ul>
    </>
  )
}

export default TransactionList
