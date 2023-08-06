import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import thunk from 'redux-thunk';

import { reducer } from "../reducers";


const saveToLocalStorage = (store) => {
    try {
        window.localStorage.setItem('hackathonStore', JSON.stringify(store));
    } catch (error) {
        console.log(error);
    }
}

const loadFromLocalStorage = () => {
    try {

        let hackathonStore = window.localStorage.getItem('hackathonStore')
        if (hackathonStore === null) return undefined
        return JSON.parse(hackathonStore)

    } catch (error) {
        console.log(error);
        return undefined
    }
}

const composeEnhancers = (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(reducer, loadFromLocalStorage(), composeEnhancers(applyMiddleware(thunk)));

store.subscribe(() => saveToLocalStorage(store.getState()))


export default store;