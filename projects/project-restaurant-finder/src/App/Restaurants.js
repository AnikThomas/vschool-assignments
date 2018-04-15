import React, { Component } from 'react';
import Restaurant from './Restaurant';
import {getRestaurants} from '../redux/index.js';
import {connect} from 'react-redux';


class Restaurants extends Component {
    constructor() {
        super();
        this.state = {
            restaurants: [],
        }
    }
    componentDidMount() {
        console.log(this.props);
        this.props.getRestaurants();
    
    }
    render() {
        const restaurants = this.props.restaurants.map((restaurant, i) => {
             console.log("hrd",restaurant)
            return <Restaurant key={i} {...restaurant} />
        });
        return (

            <div className='Restaurants'>
               {restaurants}
            </div>
        )
    }
}



const mapStateToProps = state => {
    return state;
}


export default connect(mapStateToProps,{ getRestaurants })(Restaurants);





