import React from "react";
import { Link } from 'react-router-dom';



function postingMin(props) {
    console.log("postingMin Props", props);
    const { description, downvote, title, upvote, _id ,downvotePosting, upvotePosting} = props
    const votes = upvote - downvote;
    console.log(votes)

    return (
        <div className="singlePost">
            <div className="voteBox" ><i className="far fa-hand-point-up fa-2x" onClick={() => upvotePosting(_id)} title={upvote}></i><h3>{votes}</h3><i className="far fa-hand-point-down fa-2x" onClick={() => downvotePosting(_id)} title={downvote}></i></div>
            <div>
                <h2><Link to = {`posting/${_id}`}>{title}</Link></h2>

                <div>
                    {description}</div>
            </div>
        </div>
    )
}

export default postingMin;