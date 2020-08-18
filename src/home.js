import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const Home = () => {
    return (
        <MDBContainer>
              <MDBRow>
                <MDBCol lg='4' md='12'>
                    <div className='image-container'>
                        <img src='/images/photo.png' className='profile-pic z-depth-1-half' alt='profile'/>
                    </div>
                </MDBCol>

                <MDBCol lg='8' md='12'>
                    <h3>Profile</h3>
                    <p>My name is Natsuki Hasegawa, and I've just completed my studies toward a Master of Software Development (MSwDev) degree at Victoria University of Wellington (my degree is due to be awarded this December with Distinction). I also hold a Master of Science (MSc) in Electronic and Computer Systems Engineering and was an electronic hardware engineer for over 6 years before making the switch to software.</p>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
export default Home;