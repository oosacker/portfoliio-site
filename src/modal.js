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
            {/* <MDBBtn onClick={toggleModal}>Modal</MDBBtn> */}

            <MDBModal isOpen={modalState} toggle={toggleModal}>

                <MDBModalHeader >
                    {props.header}
                </MDBModalHeader>

                <MDBModalBody>
                    {props.body}
                </MDBModalBody>

                <MDBModalFooter>
                    {/* <MDBBtn color="primary" onClick={toggleModal}>Close</MDBBtn> */}
                </MDBModalFooter>

            </MDBModal>
      </MDBContainer>
    );
}
export default Modal;