import React, { Component } from 'react';
import { Modal, ModalHeader, ModalFooter, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { uiErrorReset } from '../redux/actions';
import {
    UI_FLAG_RESOLVED, UI_FLAG_SUCCESS, UI_FLAG_GET_FAIL, UI_FLAG_DISPLAY_ERROR,
    UI_FLAG_API_ERROR, UI_FLAG_UPDATE_ERROR, UI_FLAG_DELETE_ERROR, UI_FLAG_ADD_BOOK_TWICE
} from '../constants';

class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            message: ""
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({ modalOpen: !this.state.modalOpen })
        this.props.uiErrorReset();
    }

    setMessage() {
        switch (this.props.flag) {
            case (UI_FLAG_API_ERROR): {
                return "Could not fetch search results";
            } case (UI_FLAG_DISPLAY_ERROR): {
                return "Could not display search results";
            } case (UI_FLAG_GET_FAIL): {
                return "Could not retrieve your lists";
            } case (UI_FLAG_UPDATE_ERROR): {
                return "Could not update the book list placement";
            } case (UI_FLAG_DELETE_ERROR): {
                return "Could not delete book";
            } case (UI_FLAG_ADD_BOOK_TWICE): {
                return "You can not add the same book twice";
            }
            default: {
                return ""
            }
        }
    }

    checkError() {
        if (this.props.flag !== UI_FLAG_RESOLVED && this.props.flag !== UI_FLAG_SUCCESS) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        return (
            <Modal isOpen={this.checkError()} toggle={this.toggle}>
                <ModalHeader>
                    Error: {this.setMessage()}
                </ModalHeader>
                <ModalFooter>
                    <Button onClick={this.toggle}>OK</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

let mapStateToProps = function (state, props) {
    return {
        flag: state.userFeedback.flag
    }
}

export default connect(mapStateToProps, { uiErrorReset })(Feedback);