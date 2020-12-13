import React, { useState, useContext } from 'react';
import classnames from 'classnames';
import { v1 as uuid } from 'uuid';
import TransactionContext from '../context/transactionContext'


function AddTransaction() {

    const { addTransaction } = useContext(TransactionContext)

    const [toggle, setToggle] = useState(true)
    const [itemName, setItemName] = useState('')
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);

    const onSubmit = (e) => {
        e.preventDefault()
        let data = {}
        if (income === 0) {
            data = {
                id: uuid(),
                text: itemName,
                amount: -expense
            }
        } else if (expense === 0) {
            data = {
                id: uuid(),
                text: itemName,
                amount: +income
            }
        }
        addTransaction(data)

        setItemName('')
        setIncome(0)
        setExpense(0)
    }
    const handleToggle = (e) => {
        e.preventDefault()
        setToggle(!toggle)
        if (toggle === true) {
            setIncome(0)
        } else if (toggle === false) {
            setExpense(0)
        }
    }

    const onItemNameChange = (e) => {
        setItemName(e.target.value)
    }
    const onIncomeChange = (e) => {
        setIncome(e.target.value)

    }
    const onExpenseChange = (e) => {
        setExpense(e.target.value)
    }
    return (
        <form className='pl-3 my-3 py-3' onSubmit={onSubmit}>
            <h3 classnames='text-center' >Select the Category First</h3>
            <div className='row'>
                <button className={classnames('col-md-6 btn btn-outline-primary btn-lg', {
                    "active": toggle
                })}
                    onClick={handleToggle}
                >
                    Income
                    </button>
                <button className={classnames('col-md-6 btn btn-outline-primary btn-lg', {
                    "active": !toggle
                })}
                    onClick={handleToggle}
                >
                    Expense</button>
            </div>
            <h2 >Add Transaction</h2>
            <div className="form-group ">
                <label htmlFor="item-name" className='h5'>Item Name</label>
                <input
                    className='form-control'
                    type="text"
                    placeholder='Item name....'
                    value={itemName}
                    onChange={onItemNameChange}
                />
            </div>
            {toggle ? (

                <div className="form-group ">
                    <label
                        htmlFor="amount"
                        className='h5'>
                        Amount
                </label>
                    <input
                        className='form-control'
                        type="number"
                        placeholder='Income Amount....'
                        value={income}
                        onChange={onIncomeChange}
                    />
                </div>
            ) :
                <div className="form-group ">
                    <label
                        htmlFor="amount"
                        className='h5'>
                        Amount
                    </label>
                    <input
                        className='form-control'
                        type="number"
                        placeholder='Expense  Amount....'
                        value={expense}
                        onChange={onExpenseChange}
                    />
                </div>}
            <input type="submit" value="Add Transaction" className='btn btn-primary btn-block btn-lg' />
        </form>
    )
}

export default AddTransaction;
