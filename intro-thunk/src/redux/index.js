import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import planetReducer from './planets.js';


const store = createStore(combineReducers({ planets: planetReducer }), applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));





export default store;