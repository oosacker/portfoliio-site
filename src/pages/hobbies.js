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
                    desc={[
                        "I am a football fan and currently play ",
                        <a href="https://www.wis.net.nz/sports/indoor-soccer/indoor-soccer-rules-game-info/">indoor soccer at the waterfront</a>,
                        ". I played for several years in the ",
                        <a href="https://www.sportzone.org.nz/wellington-sunday-league/home">Wellington Sunday Football League</a>,
                        " for Inter Galactic FC, primarily as a right midfielder. Muscle injuries became a problem for me (kept getting leg cramps), so I'm taking a break from 11-vs-11 games. I also regularly visit the local gym for some cardio."
                    ]}
                    image={"./images/hobby_img/football/1.jpg"}
                />
            </MDBRow>

            <MDBRow>
                <HobbyCard 
                    title="Guitar"
                    icon={"guitar"}
                    desc={[
                        "I've been playing the guitar since my university days. My dad is also a musician, and I initially learned from him. I own 3 guitars - A ",
                        <a href="https://www.musicradar.com/reviews/guitars/fender-highway-one-telecaster-25977">Fender Highway One Telecaster</a>,
                        " (as seen in the photo), a ",
                        <a href="https://www.musiciansfriend.com/guitars/open-box-yamaha-fg720s-acoustic-guitar">Yamaha FG720S acoustic</a> , 
                        " and a ", 
                        <a href= "https://www.musicworks.co.nz/electric-guitars/pac112jbl-yamaha-pac112-pacifica-112-electric-guitar-black/">Yamaha Pacifica</a>,
                        " electric (broken). I used to copy Bob Dylan's songs when I was young. Some of my favourite bands include ",
                        <a href= "http://pillows.jp/english/">the pillows</a>,
                        ", ",
                        <a href= "https://www.universal-music.co.jp/tmge/"> Thee Michelle Gun Elephant</a>,
                        " and ",
                        <a href= "http://spartalocals.net/"> Sparta Locals</a>,
                        "."

                    ]}
                    image={"./images/hobby_img/guitar/5.jpg"}
                />
            </MDBRow>

            <MDBRow>
                <HobbyCard 
                    title="Kendo"
                    icon={"fist-raised"}
                    desc={[
                        "I hold a 1st dan grade in ", 
                        <a href="https://en.wikipedia.org/wiki/Kendo">kendo</a>, 
                        ", a Japanese martial art involving bamboo swords. I started practicing it in high school. I train at ", 
                        <a href="http://www.rembudenkendo.co.nz/">Rembuden Kendo Club</a>, 
                        " based at Victoria University of Wellington. The photo shows me fighting during a small local competition where I won silver. I'm the one with the red ribbon."]}
                    image={"./images/hobby_img/kendo/3.jpg"}
                />
            </MDBRow>

        </MDBContainer>
    );
}
export default Hobbies;