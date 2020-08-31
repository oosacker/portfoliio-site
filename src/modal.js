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
            <MDBModal isOpen={modalState} toggle={toggleModal} animation="top" Modal autoFocus={true} Modal size="lg" >

                <MDBModalHeader toggle={toggleModal}>
                    {props.header}
                </MDBModalHeader>

                <MDBModalBody>
                    <MDBContainer>
                        <MDBRow >
                            <img src={props.image} className={"img-fluid z-depth-1-half rounded"}/>
                        </MDBRow>
                        <MDBRow>
                            <p>{props.body}</p>
                        </MDBRow>
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