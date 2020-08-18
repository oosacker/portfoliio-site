import React, {    
    useState, 
    useEffect 
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

import Modal from './modal';



const Projects = () => {

    const[modal1State, setModal1State] = useState(false);

    const btn1Handler = () => {
        setModal1State(!modal1State);
    }



    return (
        <MDBContainer>

            <Modal header={'header'} body={'body'} display={modal1State}/>

            <MDBRow>

                <MDBCol>
                    <MDBCard>
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"  />
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
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
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
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
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