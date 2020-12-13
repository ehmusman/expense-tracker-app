import AddTransaction from '../components/AddTransaction';
import { ADD_TRANSACTION } from './types'

const TransactionReducer = (state, action) => {
    switch (action.type) {
        case ADD_TRANSACTION:
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        default:
            return state
    }
}

export default TransactionReducer;