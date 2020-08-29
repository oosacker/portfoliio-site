import React, {   
    useState, 
    useEffect,
    useContext
} from 'react';

import { 
    MDBContainer, 
    MDBRow,
    MDBCol,
    MDBBtn, 
    MDBModal, 
    MDBModalBody, 
    MDBModalHeader, 
    MDBModalFooter 
} from 'mdbreact';


import { ModalContext } from './projectCard';

const Modal = (props) => {

    const [modalState, setModalState] = useContext(ModalContext);

    const toggleModal = () => {
        setModalState(!modalState);
    }

    return (
            <MDBModal isOpen={modalState} toggle={toggleModal} animation="top" Modal autoFocus={true}>

                <MDBModalHeader toggle={toggleModal}>
                    {props.header}
                </MDBModalHeader>

                <MDBModalBody>

                    <MDBContainer>
                        <MDBCol md="4">
                            <img className="img-fluid" src={props.image} />
                        </MDBCol>

                        <MDBCol md="8">
                            {props.body}
                        </MDBCol>
                    </MDBContainer>

                    
                </MDBModalBody>

                <MDBModalFooter>
                    {/* {props.footer} */}
                    <MDBBtn onClick={toggleModal}>Close</MDBBtn>
                </MDBModalFooter>

            </MDBModal>
    );
}
export default Modal;