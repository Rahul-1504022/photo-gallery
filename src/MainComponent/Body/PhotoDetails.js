import React from "react";
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";
import LoadComments from "./LoadComments";
import CommentForm from "./CommentForm";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        loggedIn: state.LoggedIn,
    }
}


const PhotoDetails = props => {
    return (
        <div>
            <Card style={{ marginTop: "10px" }}>
                <CardImg top src={props.photo.path} alt="image" />
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle style={{ fontWeight: "bold", fontFamily: "cursive", color: "green" }}>{props.photo.name}</CardTitle>
                    <hr />
                    <h5 style={{ fontStyle: "italic" }}><u>Comments</u></h5>
                    {props.comments.length !== 0 ? <LoadComments comments={props.comments} /> : <p>There is no comment yet!!!</p>}
                    {/* <LoadComments comments={props.comments} /> */}
                    <hr />
                    {props.loggedIn ?
                        <CommentForm photoId={props.photo.id} /> :
                        <><Link to="/auth" style={{ textDecoration: "none", fontWeight: "500" }}>Login </Link> <span>first to comment</span></>}
                    {/* if  a href use it cause hard reload */}

                </CardBody>
            </Card>
        </div>
    )
}

export default connect(mapStateToProps)(PhotoDetails);