import axios from 'axios';

const initialState = {
    currently: {}, 
    daily: {},
    loading: true,
    errMsg: ''
}

const WeatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_WEATHER':
            return {
                ...state,
                currently: action.weather.currently,
                daily: action.weather.daily,
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

const key = '993ed88069dad2607a59e381dbba8b8e';
const darkSkyURL = `http://cors.vschool.io/?url=https://api.darksky.net/forecast/${key}/40.76,-111.9?units=si`;

export const getWeather = () => {
    return dispatch => {
        axios.get(darkSkyURL)
            .then(response => {
                //console.log(response.data);
                dispatch({
                    type: "GET_WEATHER",
                    weather: response.data
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






export default WeatherReducer;