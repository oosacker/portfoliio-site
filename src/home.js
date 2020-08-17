import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const Home = () => {
    return (
        <MDBContainer>
              <MDBRow>
                <MDBCol ><img src='/images/photo.png' className='profile-pic'/></MDBCol>
                <MDBCol >profile</MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
export default Home;