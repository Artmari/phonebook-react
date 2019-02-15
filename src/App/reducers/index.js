
import { combineReducers } from 'redux';
import contacts from './contactReducer';
import {itemsHasErrored, itemsIsLoading, items  } from './itemsReducer';

export default combineReducers({
    contacts,  // short form of contacts: contact
    itemsIsLoading,
    itemsHasErrored,
    items
});