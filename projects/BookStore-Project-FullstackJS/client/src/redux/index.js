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
                genre: action.data
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
                dispatch({
                    type: "GET_GENRE",
                    data: response.data
                })

                response.data.map(genre => {
                    axios.get(`/BooksCollection?genre_ID=${genre._id}`).then(response => {
                        dispatch({
                            type: "GET_BOOKCOLLECTION",
                            name: response.data[0].genre_ID.name,
                            data: response.data
                        })
                    })
                    return true;
                })
            })
    }
}



const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log("store", store.getState()));



export default store;