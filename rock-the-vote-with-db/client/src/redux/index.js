import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

const initialState = {
    data: [],
    comments: []
}

const reducer = (state = initialState
    , action) => {
    console.log("action", action)
    switch (action.type) {
        case "GET_POSTING":
        return { 
            ...state,
            data: action.data
        };
        case "VOTE":
        return {
            ...state,
            data: state.data.map(obj =>{//we mapping through everyting in the state
                if(action.data._id===obj._id){//if the id is match return the new data obj if its not return the original obj
                    return action.data;//
                }
                return obj;
            })
        }
        default:
            return state;
    }

}
export const getPosting = () => {
    return dispatch => {
        axios.get('/post')
            .then(response => {
                dispatch({
                    type: "GET_POSTING",
                    data: response.data
                })
            })
    }
}

export const downvotePosting = (postingID) => {
    return dispatch => {
        console.log("downvote")
        axios.get(`/downvote/${postingID}`)
        .then(response => {
            dispatch({
                type: 'VOTE',
                data: response.data
            })
        })
    }
}

export const upvotePosting = (postingID) => {
    return dispatch => {
        axios.get(`/upvote/${postingID}`)
        .then(response => {
            dispatch({
                type: "VOTE",
                data: response.data
            })
        })
    }
}

export const newPosting =(obj)=>{
    //console.log('redux', obj);
    return dispatch =>{
        axios.post(`/post`,obj)
    }

}






const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log("store", store.getState()));



export default store;