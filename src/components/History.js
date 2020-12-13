import React, { useContext } from 'react';
import TransactionContext from '../context/transactionContext'
import Transactions from './Transactions';
function History() {

    const { transactions } = useContext(TransactionContext);
    return (
        <div className='card-body'>
            <h2>History</h2>
            <hr />
            <div className="d-flex justify-content-between mb-0">
                <h3>Item</h3>
                <h3>Amount</h3>
                <h3> </h3>
            </div>
            <ul className="list-group mb-3">
                {transactions.map(transaction =>
                    <Transactions
                        key={transaction.id}
                        text={transaction.text}
                        amount={transaction.amount}
                    />
                )}
            </ul>
        </div>
    )
}

export default History
