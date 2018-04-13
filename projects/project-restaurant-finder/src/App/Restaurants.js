import React, { Component } from 'react';
import axios from 'axios';
import Restaurant from './Restaurant';


const zomatoURL = 'https://developers.zomato.com/api/v2.1/search?entity_id=Salt%20lake%20city&lat=40.769367&lon=-112.0346505&sort=rating&order=desc';

class Restaurants extends Component {
    constructor() {
        super();
        this.state = {
            restaurants: [],
        }
    }
    componentDidMount() {
        let config = {
            headers: { 'user-key': '2cbcad77171e4166fcb726160b27b5a6' }
        };
        axios.get(zomatoURL, config).then(response => {
            console.log("r3q4",response.data.restaurants);
            this.setState({
                restaurants: response.data.restaurants
            })
        })
    }
    render() {
        const restaurants = this.state.restaurants.map((restaurant, i) => {
             console.log("hrd",restaurant)
            return <Restaurant key={i} {...restaurant} />
        });
        return (

            <div>
               {restaurants}
            </div>
        )
    }
}


export default Restaurants;





