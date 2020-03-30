import React from 'react';
import './modal.css';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: props.visible,
        };
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.visible !== this.state.visible) {
            this.setState({'visible': this.props.visible});
        }
    }

    closeModal() {
        this.props.onClose();
    }

    render() {
        return (
            <div className={"modal__wrapper" + (this.state.visible ? ' visible' : '')}>
                <div className="modal-content">
                    {this.props.text}
                    <div onClick={this.closeModal} className="modal__close_button">Ok</div>
                </div>
            </div>
        );
    }
}

export default Modal;
