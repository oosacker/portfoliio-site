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
            <MDBContainer className="">

                <MDBRow className="px-3">
                    <h5><MDBIcon icon={props.icon} /> {props.title}</h5>
                </MDBRow>

                <MDBRow className="px-3">
                    <p>{props.desc}</p>
                </MDBRow>

                <MDBRow>
                    
                    {props.images.map( (value) => {
                        return ( 
                            <MDBCol lg="4" md="6" sm="12">
                                <img src={value} className="img-fluid mb-3 rounded z-depth-1" alt={props.title}/>
                            </MDBCol> 
                        )
                    } )}
                    
                </MDBRow>

            </MDBContainer>
        </MDBCol>
    );
}
export default HobbyCard;