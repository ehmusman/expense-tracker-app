import React, { useState, useContext } from 'react';
import classnames from 'classnames';
import { v1 as uuid } from 'uuid';
import TransactionContext from '../context/transactionContext'


function AddTransaction() {

    const { addTransaction } = useContext(TransactionContext)

    const [toggle, setToggle] = useState(true)
    const [itemName, setItemName] = useState('')
    const [income, setIncome] = useState('');
    const [expense, setExpense] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()
        let data = {}
        if (income === '') {
            data = {
                id: uuid(),
                text: itemName,
                amount: -Math.abs(expense)
            }
        } else if (expense === '') {
            data = {
                id: uuid(),
                text: itemName,
                amount: +Math.abs(income)
            }
        }
        if ((income !== '' && itemName !== '') || (expense !== '' && itemName !== '')) {
            addTransaction(data)
        }


        setItemName('')
        setIncome('')
        setExpense('')
    }
    const handleIncomeToggle = (e) => {
        e.preventDefault()
        setToggle(true)
        setIncome('')
    }
    const handleExpenseToggle = (e) => {
        e.preventDefault()
        setToggle(false)
        setExpense('')
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
            <div className='row justify-content-around'>
                <button className={classnames('col-md-3 btn btn-outline-primary btn-lg', {
                    "active": toggle
                })}
                    onClick={handleIncomeToggle}
                >
                    Income
                    </button>
                <button className={classnames('col-md-3 btn btn-outline-primary btn-lg', {
                    "active": !toggle
                })}
                    onClick={handleExpenseToggle}
                >
                    Expense</button>
            </div>
            <h2 >Add Transaction</h2>
            <div className="row">
                <div className="form-group col-md-6">
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

                    <div className="form-group col-md-6">
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
                    <div className="form-group col-md-6">
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
            </div>
            <input type="submit" value="Add Transaction" className='btn btn-primary mx-auto' />
        </form>
    )
}

export default AddTransaction;
