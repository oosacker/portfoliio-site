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
    MDBTypography  
} from "mdbreact";

const ProjectCard = (props) => {
    return (
        <MDBCol className="m-3 z-depth-1-half round-corner" lg="3" md="4" sm="6" xs="12">

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
                <MDBBtn onClick={props.buttonHandler}>Details</MDBBtn>
            </MDBRow>

        </MDBCol>
    );
}
export default ProjectCard;