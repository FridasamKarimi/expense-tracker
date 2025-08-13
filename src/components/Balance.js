import React, { useContext } from 'react'; // Added useContext import
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  // Calculate total with proper reduce syntax and initial value
  const total = transactions
    .map(transaction => transaction.amount)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1> {/* Added currency symbol for clarity */}
    </>
  );
};

export default Balance;