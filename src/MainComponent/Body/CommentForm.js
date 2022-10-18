import React, { Component } from "react";
import { Button } from "reactstrap";
import "./CommentForm.css";

class CommentForm extends Component {
    state = {
        photoComment: {
            photoName: "",
            comment: "",
            userName: "",
        },
        submit: false,
    }

    inputChangeHandler = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            photoComment: {
                ...this.state.photoComment,
                [name]: value,
            }

        })

    }

    submitHandler = event => {
        event.preventDefault();
        this.setState({
            submit: true,
        })

    }

    render() {
        let loadComment = null;
        if (this.state.submit) {
            loadComment = (
                <div className="comment">
                    User Name:<h6>{this.state.photoComment.userName}</h6>
                    <p>{this.state.photoComment.comment}</p>
                </div>
            )
        }

        return (
            <div>
                {this.state.comment === "" ? <p>No Comment yet</p> : loadComment}
                <hr />
                <form onSubmit={this.submitHandler} className="commentForm">
                    <label for="userName">User Name:</label>
                    <br />
                    <input type="text"
                        value={this.state.photoComment.userName}
                        name="userName"
                        placeholder="User Name"
                        onChange={this.inputChangeHandler} />
                    <br />

                    <label for="comment">Comment:</label>
                    <br />
                    <input type="text"
                        value={this.state.photoComment.comment}
                        name="comment"
                        placeholder="your comment"
                        onChange={this.inputChangeHandler} />
                    <br />

                    <Button>Submit</Button>

                </form>
            </div>
        )
    }
}
export default CommentForm;