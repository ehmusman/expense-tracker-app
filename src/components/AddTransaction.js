import React, { useState } from 'react';
import classnames from 'classnames';



function AddTransaction() {
    const [toggle, setToggle] = useState(true)

    const handleToggle = (e) => {
        e.preventDefault()
        setToggle(!toggle)
    }
    return (
        <form className='pl-3 my-3 py-3'>
            <h3>Select the Category First</h3>
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

                    />
                </div>}
            <input type="submit" value="Add Transaction" className='btn btn-primary btn-block btn-lg' />
        </form>
    )
}

export default AddTransaction;
