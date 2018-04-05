const redux = require('redux');

//set up initial state
const initialState = {
    counter
        : 0
}
//define reducer, which will spit out a new state based on action prevState
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                counter: state.counter + action.amount
            }
        case "DECREMENT":  //'RESET': return initialState
            return {
                counter: state.counter - action.amount
            }
        default:
            return state;
    }
}

//actions are OBJECTS that carry information that potentially will be usefull for state
const action = {
    type: 'INCREMENT',
    amount: 1
}
const action2 = {
    type: 'DECREMENT',
    amount: 1
}

//const reset ={
//     type: 'RESET',
// }


//create store
const store = redux.createStore(reducer);
store.subscribe(() => console.log(store.getState()));
console.log(store);

//dispatch actions
store.dispatch(action);
store.dispatch(action);
store.dispatch(action);
store.dispatch(action);
store.dispatch(action);
store.dispatch(action);
store.dispatch(action);
store.dispatch(action2);


