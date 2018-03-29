import React, { Component } from "react";


class Counter extends Component {
    constructor(props) { //this is where you define static properties
        super(props);
        this.state = {
            counter: 0
        };
        this.incrementCounter = this.incrementCounter.bind(this);
        this.deincrementCounter = this.deincrementCounter.bind(this);
        this.resetState = this.resetState.bind(this);
    }
    //tell react what the new state should look like:
    incrementCounter() {
        this.setState(prevState => {
            return { counter: prevState.counter + 1 }
        })
    }
    resetState() {
        this.setState({ counter: 0 })
    }

    deincrementCounter() {
        this.setState(prevState => {
            return { counter: prevState.counter - 1 }
        })
    }
    //this area defines methods:
    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.incrementCounter}>+1</button>
                <button onClick={this.resetState}>Reset</button>
                <button onClick={this.deincrementCounter}>-1</button>

            </div>
        )
    }
}

export default Counter;