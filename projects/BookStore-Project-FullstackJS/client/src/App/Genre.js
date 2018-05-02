import React, { Component } from 'react';
//import { getBookCollection } from "../redux";
import { connect } from "react-redux";

class Genre extends Component {
    componentDidMount() {
     //  this.props.getBookCollection(this.props.match.url)
    }
    render() {
        console.log('genreProps', this.props);
         let bookCollection = [];
         if (this.props[this.props.match.url.substr(1)]) {
            bookCollection = this.props[this.props.match.url.substr(1)].map((obj) => {
                return <div key={obj._id} style={{ maxWidth: "500px" }}><h2>{obj.title}</h2><div>by {obj.author_ID[0].firstname} {obj.author_ID[0].lastname} <strong>Price:${obj.price}</strong></div><img src={obj.image} alt='' style={{ display: "block" }} /> {obj.isbn}</div>

            })
        }






        return (
            <div >
                {bookCollection}
            </div>
        )
    }
}



const mapStateToProps = (state) => state

export default connect(mapStateToProps, { })(Genre);