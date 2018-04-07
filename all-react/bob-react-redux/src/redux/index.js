import { createStore } from 'redux';


export function increment(num=1) {
    return {
        type: 'INCREMENT',
        amount:num
    }
}
export function decrement() {
    return {
        type: 'DECREMENT'
    }
}

function reducer(state = 0, action) {
    switch (action.type) {
        case "INCREMENT":
            return state + action.amount;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
}




const store = createStore(reducer);
export default store;