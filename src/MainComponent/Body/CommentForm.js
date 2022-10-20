import React, { Component } from "react";
import { Button } from "reactstrap";
import "./CommentForm.css";
import { connect } from "react-redux";
import { addComment, addNewComment } from "../../redux/actionCreators";

const mapStateToProps = state => {
    return {
        Comments: state.Comments,
        userId: state.userId,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addComment: (photoId, comment, userName) => dispatch(addComment(photoId, comment, userName)),
        addNewComment: (photoId, comment, userName, userId) => dispatch(addNewComment(photoId, comment, userName, userId)),
    }
}

class CommentForm extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        photoComment: {
            photoId: this.props.photoId,
            comment: "",
            userName: "",
        },
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
        // this.props.addComment(this.state.photoComment.photoId, this.state.photoComment.comment, this.state.photoComment.userName);
        this.props.addNewComment(this.state.photoComment.photoId, this.state.photoComment.comment, this.state.photoComment.userName, this.props.userId);
        this.setState({
            photoComment: {
                photoId: this.props.photoId,
                comment: "",
                userName: "",
            }
        })

    }

    render() {

        return (
            <div>
                <hr />
                <form onSubmit={this.submitHandler} className="commentForm">
                    <label htmlFor="photoId">Photo-Id: <span style={{ color: "red" }}>(Can not changed)</span></label>
                    <br />
                    <input type="text"
                        value={this.state.photoComment.photoId}
                        placeholder={this.state.photoComment.photoId}
                        name="photoId"
                        readOnly
                    />
                    <br />

                    <label htmlFor="userName">User Name:<span style={{ color: "red" }}>***</span></label>
                    <br />
                    <input type="text"
                        value={this.state.photoComment.userName}
                        name="userName"
                        placeholder="User Name"
                        onChange={this.inputChangeHandler}
                        required />
                    <br />

                    <label htmlFor="comment">Comment:<span style={{ color: "red" }}>***</span></label>
                    <br />
                    <input type="text"
                        value={this.state.photoComment.comment}
                        name="comment"
                        placeholder="your comment"
                        onChange={this.inputChangeHandler}
                        required />
                    <br />

                    <Button>Submit</Button>

                </form>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);