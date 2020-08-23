import React, {    
    useState, 
    useEffect,
    useContext,
    createContext
} from "react";

import { 
    MDBContainer, 
    MDBBtn, 
    MDBCard, 
    MDBCardBody, 
    MDBCardImage, 
    MDBCardTitle, 
    MDBCardText, 
    MDBCol, 
    MDBRow, 
} from "mdbreact";

import Modal from '../modal';

export const ModalContext = createContext(false);

const Projects = () => {

    const[modalState, setModalState] = useState(false);

    const btn1Handler = () => {
        setModalState(!modalState);
    }

    return (
        <MDBContainer>

            <ModalContext.Provider value={[modalState, setModalState]}>
                <Modal 
                    header={'header'} 
                    body={'body'} 
                    footer={'footer'}
                />
            </ModalContext.Provider>
            

            <MDBRow>

                <MDBCol>
                    <MDBCard>
                        <MDBCardImage className="img-fluid" src="/images/logo512.png" waves />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make
                                up the bulk of the card&apos;s content.
                            </MDBCardText>
                            <MDBBtn onClick={btn1Handler}>Button1</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol>
                    <MDBCard>
                        <MDBCardImage className="img-fluid" src="/images/logo512.png" waves />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make
                                up the bulk of the card&apos;s content.
                            </MDBCardText>
                            <MDBBtn href="#">MDBBtn</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol>
                    <MDBCard>
                        <MDBCardImage className="img-fluid" src="/images/logo512.png" waves />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make
                                up the bulk of the card&apos;s content.
                            </MDBCardText>
                            <MDBBtn href="#">MDBBtn</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            
        </MDBContainer>
    );
}
export default Projects;