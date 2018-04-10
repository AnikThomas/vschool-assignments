import axios from 'axios';

const initialState = {
    data: [],
    loading: true,
    errMsg: ''

}

const planetReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PLANETS':
            return {
                ...state,
                data: action.planets,
                loading: false
            }
        case "ERR_MSG":
            return {
                ...state,
                loading: false,
                errMsg: action.errMsg
            }
        default:
            return state;
    }
}

const swapiUrl = 'https://swapi.co/api/planets';

export const getPlanets = () => {
    return dispatch => {
        axios.get(swapiUrl)
            .then(response => {
                dispatch({
                    type: "GET_PLANETS",
                    planets: response.data.results
                })
            })
            .catch(err => {
                dispatch({
                    type: 'ERR_MSG',
                    errMsg: "sorry, youre data is unavailable"
                });
            });
    }
}

export default planetReducer;