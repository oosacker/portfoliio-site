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

            <MDBRow left >
                <MDBCol className="m-3 z-depth-1-half round-corner" md={"5"}>
                    test test
                </MDBCol>

                <MDBCol className="m-3 z-depth-1-half round-corner" md={"5"}>
                    test test
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
export default Hobbies;