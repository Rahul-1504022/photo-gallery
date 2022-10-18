import React from "react";
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";
import LoadComments from "./LoadComments";
import CommentForm from "./CommentForm";

const PhotoDetails = props => {
    return (
        <div>
            <Card style={{ marginTop: "10px" }}>
                <CardImg top src={props.photo.path} alt="image" />
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle style={{ fontWeight: "bold", fontFamily: "cursive", color: "green" }}>{props.photo.name}</CardTitle>
                    <hr />
                    <h5 style={{ fontStyle: "italic" }}><u>Comments</u></h5>
                    <LoadComments comments={props.comments} />
                    <hr />
                    <CommentForm photoId={props.photo.id} />

                </CardBody>
            </Card>
        </div>
    )
}

export default PhotoDetails;