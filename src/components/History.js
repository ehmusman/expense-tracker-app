import React, { Fragment, useContext, useState } from 'react';
import TransactionContext from '../context/transactionContext'
import Transactions from './Transactions';
function History() {
    const [showHistory, setShowHistory] = useState(false)

    const handleShowHistory = () => {
        setShowHistory(!showHistory)
    }
    const { transactions } = useContext(TransactionContext);
    return (
        <div className='card-body'>
            <h2>History
                 <i className="fas fa-sort-down"
                    style={{ cursor: 'pointer', float: 'right' }}
                    onClick={handleShowHistory}
                ></i>
            </h2>

            <hr />

            {showHistory ? (
                <Fragment>
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
                </Fragment>
            ) :
                null}

        </div>
    )
}

export default History
