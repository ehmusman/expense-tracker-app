import React, { useContext } from 'react'
import TransactionContext from '../context/transactionContext'


function Balance() {
    const { transactions } = useContext(TransactionContext)
    const amount = transactions.map(transaction => transaction.amount)

    return (
        <div className=' px-3 card-title d-flex flex-column '>
            <p className='h3'>Balance is</p>
            <span className='h4'>$ {amount.reduce((a, b) => a + b)}</span>
        </div>
    )
}

export default Balance
