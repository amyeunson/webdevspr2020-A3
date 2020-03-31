import React, { Component } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
import { uiErrorReset } from '../redux/actions'
import { UI_FLAG_RESOLVED, UI_FLAG_SUCCESS } from '../constants';

class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
        }
        this.toggle = this.toggle.bind(this);
        this.toggleAndClear = this.toggleAndClear(this);
    }

    toggle() {
        this.setState({ modalOpen: !this.state.modalOpen })
    }

    toggleAndClear() {
        this.toggle();
        this.props.uiErrorReset();
    }

    checkError() {
        if (this.props.currentFlag !== UI_FLAG_RESOLVED || this.props.currentFlag !== UI_FLAG_SUCCESS) {
            this.toggle();
        }
    }

    render() {
        console.log(this.props.currentFlag);
        return (
            <Modal isOpen={this.state.modalOpen} toggle={this.toggleAndClear}>
                <ModalBody >
                    <h5>Error</h5>
                </ModalBody>
            </Modal>
        )
    }
}

let mapStateToProps = state => {
    const currentFlag = state.userFeedback;
    return currentFlag;
}

export default connect(mapStateToProps, { uiErrorReset })(Feedback);