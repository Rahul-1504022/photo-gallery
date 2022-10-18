import React, { Component } from "react";
import "./WallpaperList.css";
import { connect } from "react-redux";
import { loadPhotos } from "../../redux/actionCreators";
import CommentForm from "./CommentForm";
import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import Photo from "./Photo";
import PhotoDetails from "./PhotoDetails";

const mapStateToProps = state => {
    return {
        Photo: state.Photo,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadAllPhotos: () => dispatch(loadPhotos()),
    }
}

class WallpaperList extends Component {
    state = {
        modalOpen: false,
        photo: null,
    }

    //fetch all photo after Mount
    componentDidMount() {
        this.props.loadAllPhotos();
    }
    //Select specific Photo
    selectedPhoto = photoItem => {
        this.setState({
            modalOpen: true,
            photo: photoItem,
        })
    }
    //toggle the Modal
    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    render() {
        let photo = null;
        let photoDetails = null;
        //Photo on Home Page
        if (this.props.Photo) {
            photo = this.props.Photo.map(photoItem => {
                return (
                    <Photo
                        key={photoItem.id}
                        photoItem={photoItem}
                        selectedPhoto={() => this.selectedPhoto(photoItem)}
                    />
                )
            })
        }

        //Select Photo for Modal
        if (this.state.photo) {
            photoDetails = (<PhotoDetails
                photo={this.state.photo}
            />)
        }

        return (
            <div className="gallery">
                {photo}
                <Modal isOpen={this.state.modalOpen} >
                    <ModalBody>
                        {this.state.photo ? photoDetails : null}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggleModal}>
                            Close
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WallpaperList);