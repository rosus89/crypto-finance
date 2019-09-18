import {
    AUTH_USER,
    REGISTER_USER,
    ADD_TRANSACTION,
    ADD_CURRENCY,
    SET_LOADED,
    SET_DATA_FETCHED,
    CREATE_TRANSACTION,
    DELETE_TRANSACTION,
    FETCH_DATA
} from "../actions/types";


let initialState = {
    transactions: [],
    currencies: [],
    isAuth: false,
    isLoading: false,
    dataFetched: false,
    newTransaction: {}
};



export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_USER:
            return {
                ...state,
                isAuth: action.payload
            }

        case FETCH_DATA:
            return {
                ...state,
                currencies: action.payload.currencies,
                transactions: action.payload.transactions
            }

        case ADD_TRANSACTION:
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        
        case DELETE_TRANSACTION: 
            let newTransactions = [...state.transactions];
            newTransactions.splice(action.payload, 1);
            return {
                ...state,
                transactions: newTransactions
            }

        case SET_LOADED:
            return { 
                ...state,
                isLoading: action.payload
            }
        
        default:
            return state;
    }
};

