import React from "react";

import { 
    MDBRow, 
    MDBCol, 
    MDBIcon,
    MDBContainer
} from "mdbreact";


const HobbyCard = (props) => {

    return (
        <MDBCol className="mb-3">

            <MDBContainer className="z-depth-1 round-corner">

                <MDBRow className="px-3 pt-3 pb-2">
                    <h4><MDBIcon icon={props.icon} /> {props.title}</h4>
                </MDBRow>

                <MDBRow>
                    <MDBCol lg="6" sm="12">
                        <p>{props.desc}</p>
                    </MDBCol>

                    <MDBCol lg="6" sm="12">
                        <img src={props.image} className="img-fluid mb-3 rounded z-depth-1" alt={props.title}/>
                    </MDBCol>

                </MDBRow>

                

            </MDBContainer>
        </MDBCol>
    );
}
export default HobbyCard;