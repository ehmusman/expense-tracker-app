import React, { useContext } from 'react'
import TransactionContext from '../context/transactionContext'

function ExpenseIncome() {
    const { transactions } = useContext(TransactionContext)
    const amount = transactions.map(transaction => transaction.amount)
    const income = [];
    const expense = [];
    amount.forEach((value) => {
        if (value > 0) {
            income.push(value)
        } else {
            expense.push(value)
        }
    })
    return (
        <div className='row px-3'>
            <div className="col-6">
                <h3>Income is</h3>
                <h4 className="text-success">$ {income.length !== 0 && income.reduce((a, b) => a + b)} </h4>
            </div>
            <div className="col-6">
                <h3>Expense Is</h3>
                <h4 className="text-danger">$ {expense.length !== 0 && expense.reduce((a, b) => a + b)}</h4>
            </div>
        </div>
    )
}

export default ExpenseIncome
