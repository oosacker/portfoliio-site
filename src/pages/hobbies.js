import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import HobbyCard from "../hobbyCard"

const Hobbies = () => {



    return (
        <MDBContainer>

              <MDBRow>
                <MDBCol>
                    <h3>Hobbies</h3>
                    <p>This page shows some of my hobbies and interests.</p>
                </MDBCol>
            </MDBRow>

            <MDBRow>

                <HobbyCard 
                    title="Football"
                    desc="I am a football fan and currently play indoor soccer at the waterfront. I played for several years in the Wellington Sunday League for Inter Galactic FC, primarily as a right midfielder."
                    images={[
                        "./images/hobby_img/football/1.jpg",
                        "./images/hobby_img/football/2.jpg",
                        "./images/hobby_img/football/3.jpg",
                        "./images/hobby_img/football/4.jpg",
                        "./images/hobby_img/football/5.jpg",
                        "./images/hobby_img/football/6.jpg",
                    ]}
                />
                
            </MDBRow>

        </MDBContainer>
    );
}
export default Hobbies;