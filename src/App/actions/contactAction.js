
import * as actionTypes from './actionType';

/*export const createContact = (contact) => {
    return {
      type: actionTypes.CREATE_NEW_CONTACT,
      contact: contact
    }
};

export const deleteContact = (id) => {
    return {
        type: actionTypes.REMOVE_CONTACT,
        id: id
    }
}

export const editContact = (contact, id) => {
    return {
        type: actionTypes.EDIT_CONTACT,
        payload: {contact, id}
    }
}*/

export const sendContactsOnSubmit = (bool) => {
    return {
        type: 'SEND_CONTACTS_ON_SUBMIT', // creating an action
        isLoading: bool
    };
}

export const getContacts = (items) => {
    return{
        type: 'GET_CONTACTS',
        items
    }
}

export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export const deleteItemById = (id) =>{
    return {
        type: 'DELETE_ITEM',
        id
    }
}

export const editItemById = (item, id) =>{
    return{
        type:'EDIT_ITEM',
        payload: {item, id}
    }
}

// async actions return function instead objects (in usual sync actions)


const sendDataUrl = 'http://localhost:8008/api/contact/create'
const getDataUrl = 'http://localhost:8008/api/contact/get'
const deleteDataUrl = 'http://localhost:8008/api/contact/delete/'
const editDataUrl ='http://localhost:8008/api/contact/update'

export function sendData(contact) {
    return (dispatch) => {
        dispatch(sendContactsOnSubmit(true)); // passing bool to actions;  actions --> reducer --> store --> view -->dispatch

        fetch(sendDataUrl, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(contact)
        })
            .then((response) => {
                if (!response.ok) {
                    console.log(response);
                    throw Error(response.statusText);
                }

                dispatch(sendContactsOnSubmit(false));
                return response;
            })
    };
}

export function getData() {
    return (dispatch) => {
        dispatch(sendContactsOnSubmit(true)); // passing bool to actions;  actions --> reducer --> store --> view -->dispatch

        fetch(getDataUrl, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({})
        })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(sendContactsOnSubmit(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(getContacts(items)))
    };
}

export function deleteItem(id){
    return (dispatch) => {
        dispatch(deleteItemById(id));

        fetch(deleteDataUrl+id);
    }
}

export function editItem(item) {
    return (dispatch) =>{
        dispatch(editItemById(item));

        fetch(editDataUrl,{
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })

    }
}


