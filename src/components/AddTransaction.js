import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

// Component name should match the exported name and start with capital letter
export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext); // Fixed function name (was addTransactionTransaction)

    const onSubmit = (e) => { // Added curly braces for function body
      e.preventDefault();

      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount // Converts string to number
      };

      addTransaction(newTransaction); // Fixed function name and variable name (was AddTransaction, newtransaction)
    };

    return (
      <>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
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
};

export default AddTransaction;