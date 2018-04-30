import{ createStore, combineReducers, applyMiddleware} from 'redux';
import WeatherReducer from './WeatherReducer';
import thunk from 'redux-thunk';







const store = createStore(combineReducers({ Weather: WeatherReducer}), applyMiddleware(thunk));
store.subscribe(() =>{
    console.log(store.getState());
})



export default store;