import React from "react";

import { 
    MDBRow, 
    MDBCol, 
    MDBBtn,
    MDBContainer
} from "mdbreact";


const HobbyCard = (props) => {

    return (
        <>
            <MDBRow>
                <h5>{props.title}</h5>
            </MDBRow>
            <MDBRow>
                <p>{props.desc}</p>
            </MDBRow>
            <MDBRow>
                <MDBCol>

                </MDBCol>
            </MDBRow>
        </>
    );
}
export default HobbyCard;