import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const Hobbies = () => {
    return (
        <MDBContainer>
              <MDBRow>
                <MDBCol>
                    <h3>Hobbies</h3>
                    <p>This page shows some of my hobbies and interests.</p>
                </MDBCol>
            </MDBRow>

            <MDBContainer className="z-depth-1 round-corner">
                <p>Under construction</p>
                
            </MDBContainer>

        </MDBContainer>
    );
}
export default Hobbies;