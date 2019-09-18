import { AUTH_USER,
         REGISTER_USER,
         ADD_TRANSACTION,
         ADD_CURRENCY,
         SET_LOADED,
         SET_DATA_FETCHED,
         CREATE_TRANSACTION,
         DELETE_TRANSACTION,
         FETCH_DATA} from './types'
         
import firebase from 'firebase/app'
import {fb, auth} from '../firebase';

export function getData() {
    return function (dispatch) {
        fb.collection('users').doc(auth.currentUser.uid).get()
        .then(doc =>  doc.data())
        .then(data => dispatch({
            type: FETCH_DATA,
            payload: data
        }));
    };
};

export function createTransaction(addedTransaction) {
    fb.collection('users').doc(auth.currentUser.uid).update({
        transactions: firebase.firestore.FieldValue.arrayUnion(addedTransaction)
    })
    return {
        type: ADD_TRANSACTION,
        payload: addedTransaction
    }       
};

export function deleteTransaction(transaction, index){
    fb.collection('users').doc(auth.currentUser.uid).update({
        transactions: firebase.firestore.FieldValue.arrayRemove(transaction)
    })
    return {
        type: DELETE_TRANSACTION,
        payload: index
    }
}

export function authUser(state){
    return {
        type: AUTH_USER,
        payload: state
    }
}

export function setLoading(state){
    return {
        type: SET_LOADED,
        payload: state
    }
}