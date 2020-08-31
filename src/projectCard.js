import React, {    
    useState, 
    useEffect,
    useContext,
    createContext
} from "react";

import { 
    MDBRow, 
    MDBCol, 
    MDBBtn
} from "mdbreact";


import Modal from './modal';

export const ModalContext = createContext(false);


const ProjectCard = (props) => {

    const[modalState, setModalState] = useState(false);
    const btnHandler = () => {
        setModalState(!modalState);
    }

    return (
        <MDBCol className="m-3 z-depth-1-half round-corner project-card" lg="3" md="4" sm="6" xs="12">

            <ModalContext.Provider value={[modalState, setModalState]}>
                <Modal
                    header={props.ModalHeader}
                    body={props.ModalBody}
                    footer={props.ModalFooter}
                    image={props.ModalImage}
                />
            </ModalContext.Provider>

            <MDBRow className="px-3 py-2" center>
                <img className="img-fluid z-depth-1-half rounded" src={props.image} />
            </MDBRow>

            <MDBRow className="px-3 py-1">
                <h4>
                    {props.title}
                </h4>
            </MDBRow>

            <MDBRow className="px-3">
                {props.desc}
            </MDBRow>

            <MDBRow className="px-3 py-1">
                <MDBBtn onClick={btnHandler}>Details</MDBBtn>
            </MDBRow>

        </MDBCol>
    );
}
export default ProjectCard;