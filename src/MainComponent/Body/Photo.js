import React from "react";

const Photo = props => {
    return (
        <img src={props.photoItem.path} alt="image" onClick={props.selectedPhoto} />
    )
}

export default Photo;