import React, { Component } from 'react';
import { getBookCollection } from "../redux";
import { connect } from "react-redux";
import Book from "./book"

class Genre extends Component {
    componentDidMount() {
        this.props.getBookCollection(this.props._id, this.props.name)
    }
    render() {
        console.log('genreProps', this.props);
        let bookCollection = [];
        if (this.props[this.props.name]) {
        

            bookCollection = this.props[this.props.name].map((obj) => {<Book key={obj._id} {...obj} />

                
            })
        }
        return (
            <div style={{ display: "flex" }}>
                {bookCollection}
            </div>
        )
    }
}




const mapStateToProps = (state) => state

export default connect(mapStateToProps, { getBookCollection })(Genre);