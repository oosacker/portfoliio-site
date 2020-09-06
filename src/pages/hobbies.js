import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

import HobbyCard from "../hobbyCard"

const Hobbies = () => {



    return (
        <MDBContainer>

            <MDBRow>
            
            </MDBRow>    <MDBCol>
                    <h3>Hobbies</h3>
                    <p>This page shows some of my hobbies and interests.</p>
                </MDBCol>

            <MDBRow>
                <HobbyCard 
                    title="Football"
                    icon={"futbol"}
                    desc="I am a football fan and currently play indoor soccer at the waterfront. I played for several years in the Wellington Sunday League for Inter Galactic FC, primarily as a right midfielder."
                    images={[
                        "./images/hobby_img/football/1.jpg",
                        "./images/hobby_img/football/2.jpg",
                        "./images/hobby_img/football/5.jpg"
                    ]}
                />
            </MDBRow>

            <MDBRow>
                <HobbyCard 
                    title="Guitar"
                    icon={"guitar"}
                    desc="I've been playing the guitar since my university days. My dad is also a musician, and I initially learned from him. I own 3 guitars - A Fender Highway One Telecaster (made in USA), a Yamaha FG720S acoustic (the black one seen in the photos), and a Yamaha Pacifica electric (my first electric guitar; broken). I like to listen to Japanese rock bands like the pillows, Thee Michelle Gun Elephant and Sparta Locals. I used to copy Bob Dylan's songs when I was young."
                    images={[
                        "./images/hobby_img/guitar/3.jpg",
                        "./images/hobby_img/guitar/4.jpg",
                        "./images/hobby_img/guitar/5.jpg",
                    ]}
                />
            </MDBRow>

            <MDBRow>
                <HobbyCard 
                    title="Kendo"
                    icon={"fist-raised"}
                    desc="I hold a 1st dan grade in kendo, a Japanese martial art involving bamboo swords. I started practicing it in high school. I train at Rembuden Kendo Club, based at Victoria University of Wellington."
                    images={[
                        "./images/hobby_img/kendo/1.jpg",
                        "./images/hobby_img/kendo/2.jpg",
                        "./images/hobby_img/kendo/3.jpg",
                    ]}
                />
            </MDBRow>

        </MDBContainer>
    );
}
export default Hobbies;