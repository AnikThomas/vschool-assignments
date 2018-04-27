import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosting, upvotePosting, downvotePosting } from '../redux';
import PostingMin from './PostingMin';


class AllPosting extends Component {
    componentDidMount() {
        this.props.getPosting();
    }
    render() {
        console.log(this.props);
        let { data } = this.props;
        data.sort((a, b) => { return b.upvote - a.upvote })
        const posting = data.map((obj) => <PostingMin key={obj._id} {...obj} downvotePosting = {this.props.downvotePosting} upvotePosting = {this.props.upvotePosting}  />)

        return (
            <div>
                {posting}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return state
}


export default connect(mapStateToProps, { getPosting, upvotePosting, downvotePosting})(AllPosting);