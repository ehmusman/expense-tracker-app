import React from 'react';
import classnames from 'classnames';

const Transactions = ({ text, amount }) => {

    return (
        <li className={classnames('list-group-item mb-2 d-flex justify-content-between border border-success', {
            'border border-danger': amount < 0
        })}>
            <h4> {text}</h4>
            <h4>{amount}</h4>
            <h4 className='cross' style={{ color: 'red', fontSize: 'bold', cursor: 'pointer' }}> <i className="fas fa-times"></i> </h4>
        </li>
    )
}

export default Transactions;
