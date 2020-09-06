import React from "react";

import { 
    MDBRow, 
    MDBCol, 
    MDBIcon,
    MDBContainer
} from "mdbreact";


const HobbyCard = (props) => {

    return (
        <MDBCol>
            <MDBContainer className="pro-container z-depth-1 round-corner">
                <MDBRow>
                    <h5><MDBIcon icon={props.icon} /> {props.title}</h5>
                </MDBRow>
                <MDBRow>
                    <p>{props.desc}</p>
                </MDBRow>
                <MDBRow>
                    
                    {props.images.map( (value) => {
                        return ( 
                            <MDBCol >
                                <img src={value} className="img-fluid" alt={props.title}/>
                            </MDBCol> 
                        )
                    } )}
                    
                </MDBRow>
            </MDBContainer>
        </MDBCol>
    );
}
export default HobbyCard;