import {
    AUTH_USER,
    ADD_TRANSACTION,
    ADD_CURRENCY,
    SET_LOADED,
    DELETE_TRANSACTION,
    FETCH_DATA,
    SET_ALERT
} from "../actions/types";


let initialState = {
    transactions: [],
    currencies: [],
    isAuth: false,
    isLoading: false,
    alert: {
        msg: "",
        open: false
    }
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

        case ADD_CURRENCY:
            // TODO : ADD TO DB
            return{
                ...state,
                currencies: [...state.currencies, action.payload]
            }
        case SET_LOADED:
            return { 
                ...state,
                isLoading: action.payload
            }

        case SET_ALERT:
            return {
                ...state,
                alert: action.payload
            }

        default:
            return state;
    }
};

