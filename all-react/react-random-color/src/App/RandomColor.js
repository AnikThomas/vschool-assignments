import React from "react";
import axios from 'axios';

const apiURL = 'http://www.colr.org/json/color/random';


class RandomColor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {
                backgroundColor: '#ffb6c1',

            }
        }
    }

    componentDidMount() {
        axios.get(apiURL).then(response => {
            console.log(response.data.colors[0])
            this.setState({
                style: {
                    backgroundColor: '#' + response.data.colors[0].hex}
                })
            
        })
    
    }

    render() {
        return (

            <div style={this.state.style} >
                heyyy
            </div>
        )
    }
}

export default RandomColor