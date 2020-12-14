
import React, { useReducer } from 'react';
import TransactionContext from './transactionContext';
import TransactionReducer from './transactionReducer'
import { ADD_TRANSACTION, DELETE_TRANSACTION } from './types'

const TransactionState = (props) => {
    const initialState = {
        transactions: [
            { id: 1, text: 'Flower', amount: -20 },
            { id: 2, text: 'Salary', amount: 300 },
            { id: 3, text: 'Book', amount: -10 },
            { id: 4, text: 'Camera', amount: 150 }
        ]
    }

    const addTransaction = (data) => {
        dispatch({
            type: ADD_TRANSACTION,
            payload: data
        })

    }
    const deleteTransaction = (data) => {
        dispatch({
            type: DELETE_TRANSACTION,
            payload: data
        })
    }
    const [state, dispatch] = useReducer(TransactionReducer, initialState)


    return <TransactionContext.Provider
        value={{
            transactions: state.transactions,
            addTransaction,
            deleteTransaction
        }}>
        {props.children}
    </TransactionContext.Provider>

}

export default TransactionState;