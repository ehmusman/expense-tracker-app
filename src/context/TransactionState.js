
import React, { useReducer } from 'react';
import TransactionContext from './transactionContext';
import TransactionReducer from './transactionReducer'
import { ADD_TRANSACTION, DELETE_TRANSACTION } from './types'

const TransactionState = (props) => {
    const initialState = {
        transactions: []
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