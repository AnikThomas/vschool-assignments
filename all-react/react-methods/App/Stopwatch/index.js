import React, { Component } from "react";

class Stopwatch extends Component {
    constructor(props){
        super(props);
        this.state={
            stopwatch:0
        }
    }
    
    componentWillReceiveProps(newProps) {
        console.log(this.Props);
        console.log(newProps);
    }

    shouldComponentUpdate(){
        return this.props.stopwatch % 2;
    }

    render() {
        const {stopwatch} = this.props;
        return (
            <div>
                {stopwatch}
            </div>
        )
    }

}

export default Stopwatch;