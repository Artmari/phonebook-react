import { createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers'
import thunk from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension';

export default function configureStore(initialState) {
    // rootReducer -->
    return createStore(rootReducer, initialState, applyMiddleware(thunk) /*devToolsEnhancer()*/); // passing thunk middleware as an argument to store
}

