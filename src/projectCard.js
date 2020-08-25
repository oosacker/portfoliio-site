import React, {    
    useState, 
    useEffect,
    useContext,
    createContext
} from "react";

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBTypography  } from "mdbreact";

const ProjectCard = (props) => {
    return (
        <MDBCol className="m-3 z-depth-1-half round-corner" sm="3">

            <MDBRow className="px-3 py-1">
                <img className="img-fluid rounded" src={props.image} />
            </MDBRow>

            <MDBRow className="px-3 py-1">
                <MDBTypography tag='h4' variant="h4-responsive" className="h3">
                    {props.title}
                </MDBTypography>
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