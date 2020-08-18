import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const Home = () => {
    return (
        <MDBContainer>
              <MDBRow>
                <MDBCol className='image-container' xl='4' lg='12'>
                    <img src='/images/photo.png' className='profile-pic z-depth-1-half' alt='profile'/>
                </MDBCol>

                <MDBCol className='profile-container' xl='8' lg='12'>
                    <h3>Profile</h3>
                    <p>My name is Natsuki Hasegawa, and I've just completed my studies toward a Master of Software Development (MSwDev) degree at Victoria University of Wellington (my degree is due to be awarded this December with Distinction). I also hold a Master of Science (MSc) in Electronic and Computer Systems Engineering and was an electronic hardware engineer for over 6 years before making the switch to software.</p>
                </MDBCol>
            </MDBRow>

            <MDBRow>
                <MDBCol className='history-container'>
                    <h3>Employment History</h3>
                    <p>lorem</p>
                </MDBCol>
            </MDBRow>
            
        </MDBContainer>
    );
}
export default Home;