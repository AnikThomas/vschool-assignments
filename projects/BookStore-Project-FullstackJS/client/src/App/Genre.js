import React, { Component } from 'react';
import { getBookCollection } from "../redux";
import { connect } from "react-redux";

class Genre extends Component {
    componentDidMount() {
        this.props.getBookCollection(this.props._id, this.props.name)
    }
    render() {
        console.log('genreProps', this.props_id);
        let bookCollection = [];
        if (this.props.hasOwnProperty(this.props.name)) {
            bookCollection = this.props.filter(obj => {
                if (obj.name === this.props.name) return true;
                return false;
            })
            console.log(bookCollection);
        }

            return (
                <div>

                </div>
            )
        }
    }



    const mapStateToProps = (state) => state

    export default connect(mapStateToProps, { getBookCollection })(Genre);