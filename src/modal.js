import React, {   
    useState, 
    useEffect 
} from 'react';

import { 
    MDBContainer, 
    MDBBtn, 
    MDBModal, 
    MDBModalBody, 
    MDBModalHeader, 
    MDBModalFooter 
} from 'mdbreact';


const Modal = (props) => {

    return (
        <MDBContainer>
            {/* <MDBBtn onClick={toggleModal}>Modal</MDBBtn> */}

            <MDBModal isOpen={props.display} >

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