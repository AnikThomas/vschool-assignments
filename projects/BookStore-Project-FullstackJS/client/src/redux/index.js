import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

const initialState = {

}

const reducer = (state = initialState
    , action) => {
    console.log("action", action)
    switch (action.type) {
        case "GET_GENRE":
            return {
                ...state,
                Genre: action.data
            }
        case "GET_BOOKCOLLECTION":
            return {
                ...state,
                [action.name]: action.data
            }
        default:
            return state;
    }

}
export const getGenre = () => {
    return dispatch => {
        axios.get('/Genre')
            .then(response => {
                console.log('axios', response.data)
                dispatch({
                    type: "GET_GENRE",
                    data: response.data
                })
            })
    }
}
export const getBookCollection = (genre_id, genre_name) => {
    return dispatch => {
        console.log(genre_id, genre_name)
        axios.get(`/BooksCollection?genre_ID=${genre_id}`)
            .then(response => {
                console.log('books', response.data)
                dispatch({
                    type: "GET_BOOKCOLLECTION",
                    data: response.data,
                    name: genre_name
                })
            })
    }
}










const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log("store", store.getState()));




export default store;