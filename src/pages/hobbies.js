import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

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
                    icon={"futbol"}
                    desc="I am a football fan and currently play indoor soccer at the waterfront. I played for several years in the Wellington Sunday League for Inter Galactic FC, primarily as a right midfielder. Muscle injuries became a problem for me (keep getting leg cramps), so I'm taking a break from 11-vs-11 games."
                    image={"./images/hobby_img/football/1.jpg"}
                />
            </MDBRow>

            <MDBRow>
                <HobbyCard 
                    title="Guitar"
                    icon={"guitar"}
                    desc="I've been playing the guitar since my university days. My dad is also a musician, and I initially learned from him. I own 3 guitars - A Fender Highway One Telecaster (as seen in the photo), a Yamaha FG720S acoustic, and a Yamaha Pacifica electric (broken). I used to copy Bob Dylan's songs when I was young."
                    image={"./images/hobby_img/guitar/5.jpg"}
                />
            </MDBRow>

            <MDBRow>
                <HobbyCard 
                    title="Kendo"
                    icon={"fist-raised"}
                    desc="I hold a 1st dan grade in kendo, a Japanese martial art involving bamboo swords. I started practicing it in high school. I train at Rembuden Kendo Club, based at Victoria University of Wellington. The photo shows me in a small local competition where I won silver. I'm the one with the red ribbon."
                    image={"./images/hobby_img/kendo/3.jpg"}
                />
            </MDBRow>

        </MDBContainer>
    );
}
export default Hobbies;