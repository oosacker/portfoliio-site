import React, {    
    useState, 
    useEffect,
    useContext,
    createContext
} from "react";

import { 
    MDBRow, 
    MDBCol, 
    MDBBtn,
    MDBContainer
} from "mdbreact";


import Modal from './modal';

export const ModalContext = createContext(false);


const ProjectCard = (props) => {

    const[modalState, setModalState] = useState(false);
    const btnHandler = () => {
        setModalState(!modalState);
    }

    return (
        <MDBCol className="round-corner" lg="3" md="4" sm="6" xs="12">

            <MDBContainer className="m-2 z-depth-1 round-corner">

                <ModalContext.Provider value={[modalState, setModalState]}>
                    <Modal
                        header={props.ModalHeader}
                        body={props.ModalBody}
                        footer={props.ModalFooter}
                        image={props.ModalImage}
                        url={props.ModalURL}
                        github={props.ModalGitHub}
                    />
                </ModalContext.Provider>

                <MDBRow className="px-3 py-2" center>
                    <img className="img-fluid z-depth-1 rounded" src={props.image} />
                </MDBRow>

                <MDBRow className="px-3 py-1">
                    <h4>
                        {props.title}
                    </h4>
                </MDBRow>

                <MDBRow className="px-3 pb-3">
                    {props.desc}
                </MDBRow>

                <MDBRow className="px-3 py-1 project-card-footer" end>
                    <MDBBtn onClick={btnHandler}>Details</MDBBtn>
                </MDBRow>

            </MDBContainer>
        </MDBCol>
    );
}
export default ProjectCard;