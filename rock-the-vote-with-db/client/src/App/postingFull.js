import React, { Component } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

class PostingFull extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            comments: []
        };

        this.getOnePosting = this.getOnePosting.bind(this);
        this.upVotePosting = this.upVotePosting.bind(this);
        this.downVotePosting = this.downVotePosting.bind(this);
        this.deletePosting = this.deletePosting.bind(this);


    }
    getOnePosting = postingID => {
        axios.get(`/post/${postingID}`)
            .then(response => {
                // console.log(response.data)
                this.setState({
                    ...this.state,
                    data: response.data
                })
            })
        axios.get(`/comments?post_id=${postingID}`)
        .then(response =>{
            //console.log("comments", response.data);
            this.setState({
                ...this.state,
                comments: response.data
            })
        })
    }

    downVotePosting = postingID => {
        axios.get(`/downvote/${postingID}`)
            .then(response => {
                this.setState({
                    ...this.state,
                    data: response.data
                })
            })
    }

    upVotePosting = postingID => {
        axios.get(`/upvote/${postingID}`)
            .then(response => {
                this.setState({
                    ...this.state,
                    data: response.data
                })
            })
    }
    deletePosting = (postingID)=>{
        let recycle = window.confirm("click to delete! ");
        if(recycle){
            axios.delete(`/post/${postingID}`)
            .then(window.location.assign('/'))
        }
    }

    componentDidMount() {
        this.getOnePosting(this.props.match.params.id)

    }

    render() {
        console.log("PostingFull", this.state);
        const { description, downvote, title, upvote, _id } = this.state.data;
        let votes = 0;
        if (upvote) votes = upvote - downvote;

        const comments = this.state.comments.map(comment => <div className="comment" key={comment._id}>{comment.comment}</div>)


        return (<div>
            <div className="singlePost">
                <div className="voteBox" >
                    <i className="far fa-hand-point-up fa-2x" onClick={() => this.upVotePosting(_id)} title={upvote}></i>
                    <h3>{votes}</h3>
                    <i className="far fa-hand-point-down fa-2x" onClick={() => this.downVotePosting(_id)} title={downvote}></i>
                    <i className="fas fa-trash-alt fa-lg" onClick={() => this.deletePosting(_id)}></i>
                    <Link to={`/editPosting/${_id}`}><i className="fas fa-edit "></i></Link>  
                  

                </div>
                <div>
                    <h2 className='title'>{title}</h2>

                    <div>
                        {description}</div>
                </div>
                

            </div>
            {comments}
            </div>
        )
    }

}



export default PostingFull;
