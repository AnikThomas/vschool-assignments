import React, { Component } from 'react';
import Restaurant from './Restaurant';
import {getRestaurants} from '../redux/index.js';
import {connect} from 'react-redux';


class Restaurants extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         restaurants: [],
    //     }
    // }
    componentDidMount() {
        console.log(this.props);
        this.props.getRestaurants();
    
    }
    render() {
        const restaurants = this.props.restaurants.map((restaurant, i) => {
             console.log(restaurant)
            return <Restaurant key={i} {...restaurant} />
        });
        return (

            <div className='Restaurants'>
               {restaurants}
            </div>
        )
    }
}


// takes everything in the store and place that in to props
const mapStateToProps = state => { 
    return state;
}

// this component connect to the redux store
export default connect(mapStateToProps,{ getRestaurants })(Restaurants);





