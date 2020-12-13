
import React, { useReducer } from 'react';
import TransactionContext from './transactionContext';
import TransactionReducer from './transactionReducer'


const TransactionState = (props) => {
    const initialState = {
        transactions: [
            { id: 1, text: 'Flower', amount: -20 },
            { id: 2, text: 'Salary', amount: 300 },
            { id: 3, text: 'Book', amount: -10 },
            { id: 4, text: 'Camera', amount: 150 }
        ]
    }
    const [state, dispatch] = useReducer(TransactionReducer, initialState)


    return <TransactionContext.Provider
        value={{
            transactions: state.transactions
        }}>
        {props.children}
    </TransactionContext.Provider>

}

export default TransactionState;