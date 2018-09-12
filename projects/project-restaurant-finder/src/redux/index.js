import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import axios from 'axios';

const initialState = {
    restaurants:[]
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_RESTAURANTS':
            return { restaurants: action.restaurants }

        default:
            return state;
    }
}

export function getRestaurants() {
    return dispatch => {
        const zomatoURL = 'https://developers.zomato.com/api/v2.1/search?entity_id=Salt%20lake%20city&lat=40.769367&lon=-112.0346505&sort=rating&order=desc';
        let config = {
            headers: { 'user-key': '2cbcad77171e4166fcb726160b27b5a6' }
        };
        axios.get(zomatoURL, config).then(response => {
            console.log("res", response.data.restaurants);
            dispatch({
                type: "GET_RESTAURANTS",
                restaurants: response.data.restaurants
            })
        })
    }
}

//thunk : hey I know you dont have response from axios yet, here's what you need to do once you have that
//applyMiddleware : gives redux more capability
const store = createStore(reducer, applyMiddleware(thunk));
export default store;