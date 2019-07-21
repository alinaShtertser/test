import React from 'react';
import PropTypes from 'prop-types';
import { Modal as BootstrapModal, ModalHeader, ModalBody } from 'reactstrap';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  toggle = () => this.setState({ isModalOpen: !this.state.isModalOpen });



  render() {
    const { header } = this.props;
    return <BootstrapModal isOpen={this.state.isModalOpen} toggle={this.toggle} centered={true}>
      <ModalHeader toggle={this.toggle}>{header}</ModalHeader>
      <ModalBody>
        {this.props.children}
      </ModalBody>
    </BootstrapModal>;
  }
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.string.isRequired,
};
