import React from "react";

const LoadComments = props => {
    return (
        props.comments.map(comment => {
            return (
                <div key={comment.id} style={{ border: "1px solid grey ", margin: "5px 0px 5px 0px", borderRadius: "3px", padding: "5px" }}>

                    <h6 style={{ fontWeight: "700", fontSize: "16px", fontFamily: "cursive" }}>{comment.author}</h6>
                    <p style={{ fontSize: "13px", fontFamily: "cursive", }}>{comment.comment}</p>
                </div>
            );
        })
    );
}

export default LoadComments;