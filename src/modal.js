import React, {   
    useState, 
    useEffect,
    useContext
} from 'react';

import { 
    MDBContainer, 
    MDBBtn, 
    MDBModal, 
    MDBModalBody, 
    MDBModalHeader, 
    MDBModalFooter 
} from 'mdbreact';


import { ModalContext } from './projects';

const Modal = (props) => {

    const [modalState, setModalState] = useContext(ModalContext);

    const toggleModal = () => {
        setModalState(!modalState);
    }

    return (
        <MDBContainer>

            <MDBModal isOpen={modalState} toggle={toggleModal}>

                <MDBModalHeader toggle={toggleModal}>
                    {props.header}
                </MDBModalHeader>

                <MDBModalBody>
                    {props.body}
                </MDBModalBody>

                <MDBModalFooter>
                    {/* {props.footer} */}
                    <MDBBtn onClick={toggleModal}>Close</MDBBtn>
                </MDBModalFooter>

            </MDBModal>
      </MDBContainer>
    );
}
export default Modal;