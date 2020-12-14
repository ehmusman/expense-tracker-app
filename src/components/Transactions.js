import React, { useContext } from 'react';
import classnames from 'classnames';
import TransactionContext from '../context/transactionContext';

const Transactions = ({ text, amount, id }) => {
    const { deleteTransaction } = useContext(TransactionContext)

    return (
        <li className={classnames('list-group-item mb-2 d-flex justify-content-between border border-success', {
            'border border-danger': amount < 0
        })}>
            <h4> {text}</h4>
            <h4>{amount}</h4>
            <h4 className='cross' style={{ color: 'red', fontSize: 'bold', cursor: 'pointer', float: 'right' }}> <i className="fas fa-times"
                onClick={() => deleteTransaction(id)}
            ></i> </h4>
        </li>
    )

}

export default Transactions;
