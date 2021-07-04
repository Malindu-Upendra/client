import React from 'react'; //importing the react
import {render} from 'react-dom'; //render is the method is used to insert  a react application into html
import App from "./App";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './components/reducers/combineReducer.js';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

render(
    <Provider store={store}>
    <App/>
    </Provider>
    ,
    document.getElementById('app')
);