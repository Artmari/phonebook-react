import './css/styles.css';
import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux' 
import { createStore } from 'redux'; 
import App from './App/components/App'
import configureStore from './App/store/configureStore';
import ReduxThunk from 'redux-thunk' 

const store = configureStore(root);

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById('root')
  );
  