import React, {  
    useContext
} from 'react';

import { 
    MDBContainer, 
    MDBRow,
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
            <MDBModal 
                isOpen={modalState} 
                toggle={toggleModal} 
                animation="top" 
                Modal 
                autoFocus={true} 
                size="lg" 
                keyboard={true}
            >

                <MDBModalHeader toggle={toggleModal}>
                    <h4>{props.header}</h4>
                </MDBModalHeader>
                <MDBModalBody>
                    <MDBContainer>
                        <MDBRow >
                            <img src={props.image} className={"img-fluid z-depth-1-half rounded"} alt={props.header} />
                        </MDBRow>
                        <MDBRow className="pt-3">
                            <p>{props.body}</p>
                        </MDBRow>
                        <MDBRow >
                            <p><a href={props.url}>Link</a></p>
                        </MDBRow>
                        <MDBRow >
                            <p><a href={props.github}>GitHub</a></p>
                        </MDBRow>
                    </MDBContainer>
                </MDBModalBody>

                <MDBModalFooter>
                    <MDBBtn onClick={toggleModal}>Close</MDBBtn>
                </MDBModalFooter>

            </MDBModal>
    );
}
export default Modal;