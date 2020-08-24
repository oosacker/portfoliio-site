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
                <MDBCol >
                <h3>Software Development Projects</h3>
                <p>
                    This page shows off some of my software development projects that I have worked on at university and at home. Some were group projects, while others were individual ones.
                </p>
                </MDBCol>
            </MDBRow>
            
                <MDBRow>

                    <MDBCol lg='3'>
                        <MDBCard className='mb-3'>
                            <MDBCardImage className="img-fluid" src="/images/weather-checker.png" waves />
                            <MDBCardBody>
                                <MDBCardTitle>WeatherChecker</MDBCardTitle>
                                <MDBCardText>
                                Some quick example text to build on the card title and make
                                    up the bulk of the card's content.
                                </MDBCardText>
                                <MDBBtn onClick={btn1Handler}>Details</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol lg='3'>
                        <MDBCard className='mb-3'>
                            <MDBCardImage className="img-fluid" src="/images/type.png" waves />
                            <MDBCardBody>
                                <MDBCardTitle>TypingTester</MDBCardTitle>
                                <MDBCardText>
                                Some quick example text to build on the card title and make
                                    up the bulk of the card's content.
                                </MDBCardText>
                                <MDBBtn onClick={btn1Handler}>Details</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol lg='3'>
                        <MDBCard className='mb-3'>
                            <MDBCardImage className="img-fluid" src="/images/tictac.png" waves />
                            <MDBCardBody>
                                <MDBCardTitle>Tic-Tac-Toe</MDBCardTitle>
                                <MDBCardText>
                                Some quick example text to build on the card title and make
                                    up the bulk of the card's content.
                                </MDBCardText>
                                <MDBBtn onClick={btn1Handler}>Details</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol lg='3'>
                        <MDBCard className='mb-3'>
                            <MDBCardImage className="img-fluid" src="/images/stylefit.png" waves />
                            <MDBCardBody>
                                <MDBCardTitle>Stylefit</MDBCardTitle>
                                <MDBCardText>
                                    Some quick example text to build on the card title and make
                                    up the bulk of the card's content.
                                </MDBCardText>
                                <MDBBtn onClick={btn1Handler}>Details</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    

                </MDBRow>

                <MDBRow>
                    <MDBCol lg='3'>
                        <MDBCard className='mb-3'>
                            <MDBCardImage className="img-fluid" src="/images/makeripples.png" waves />
                            <MDBCardBody>
                                <MDBCardTitle>MakeRipples</MDBCardTitle>
                                <MDBCardText>
                                    Some quick example text to build on the card title and make
                                    up the bulk of the card's content.
                                </MDBCardText>
                                <MDBBtn onClick={btn1Handler}>Details</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol lg='3'>
                        <MDBCard className='mb-3'>
                            <MDBCardImage className="img-fluid" src="/images/pizza.png" waves />
                            <MDBCardBody>
                                <MDBCardTitle>Customised Pizzas</MDBCardTitle>
                                <MDBCardText>
                                    Some quick example text to build on the card title and make
                                    up the bulk of the card's content.
                                </MDBCardText>
                                <MDBBtn onClick={btn1Handler}>Details</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol lg='3'>
                        <MDBCard className='mb-3'>
                            <MDBCardImage className="img-fluid" src="/images/browser.png" waves />
                            <MDBCardBody>
                                <MDBCardTitle>Web Browser</MDBCardTitle>
                                <MDBCardText>
                                    Some quick example text to build on the card title and make
                                    up the bulk of the card's content.
                                </MDBCardText>
                                <MDBBtn onClick={btn1Handler}>Details</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            
        </MDBContainer>
    );
}
export default Projects;