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

    const modalState = useContext(ModalContext);

    return (
        <MDBContainer>
            {/* <MDBBtn onClick={toggleModal}>Modal</MDBBtn> */}

            <MDBModal isOpen={modalState} toggle={!props.modalState}>

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