import { createStore, applyMiddleware, compose} from 'redux';
import reducers from './../reducers';

const initialState = {};

export const store = createStore(reducers, initialState, compose(applyMiddleware(), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) );