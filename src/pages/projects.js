import React from "react";

import { 
    MDBContainer, 
    MDBCol, 
    MDBRow, 
} from "mdbreact";

import ProjectCard from '../projectCard';


const Projects = () => {

    return (
        <MDBContainer>

            <MDBRow>
                <MDBCol>
                    <h3>Software Development Projects</h3>
                    <p>This page shows off some of my software development projects that I have worked on at university and at home. Some were group projects, while others were individual ones.</p>
                </MDBCol>
            </MDBRow>

            <MDBRow left >

                <ProjectCard 
                    title="WeatherChecker"
                    desc="A simple web app that allows you to check the weather in selected city using the OpenWeatherMap API."
                    image="./images/small/weather-checker.jpg"
                    ModalHeader="WeatherChecker"
                    ModalBody="A simple web app that allows you to check the weather in selected city using the OpenWeatherMap API."
                    ModalFooter="https://weather-checker-v2.herokuapp.com/"
                    ModalImage="./images/weather-checker.png"
                />

                <ProjectCard 
                    title="TypingTester"
                    desc="An online typing game based on Python (with the Flask web framework) and vanilla JavaScript."
                    image="./images/small/type.jpg"
                    ModalHeader="TypingTester"
                    ModalBody="An online typing game based on Python (with the Flask web framework) and vanilla JavaScript."
                    ModalFooter="https://typingtester.herokuapp.com/"
                />

                <ProjectCard 
                    title="Tic-Tac-Toe"
                    desc="My first web app. A tic-tac-toe game based on JavaScript with the ability to play against the CPU."
                    image="./images/small/tictac.jpg"
                    ModalHeader="Tic-Tac-Toe"
                    ModalBody="My first web app. A tic-tac-toe game based on JavaScript with the ability to play against the CPU."
                    ModalFooter="https://tic-tac-toe-nat.herokuapp.com/"
                />

                <ProjectCard 
                    title="StyleFit"
                    desc="A full-stack web application prototype for an industrial client (The Story Mint)."
                    image="./images/small/stylefit.jpg"
                    ModalHeader="StyleFit"
                    ModalBody="A full-stack web application prototype for an industrial client (The Story Mint)."
                    ModalFooter="#"
                />

                <ProjectCard 
                    title="MakeRipples"
                    desc="A full-stack web application prototype for an industrial client (MakeRipples)."
                    image="./images/small/makeripples.jpg"
                    ModalHeader="MakeRipples"
                    ModalBody="A full-stack web application prototype for an industrial client (MakeRipples)."
                    ModalFooter="#"
                />

                <ProjectCard 
                    title="Pizzeria Napoli"
                    desc="A JavaFX desktop application for tracking pizza orders at a fictional restaurant."
                    image="./images/small/pizza.jpg"
                    ModalHeader="Pizzeria Napoli"
                    ModalBody="A JavaFX desktop application for tracking pizza orders at a fictional restaurant."
                    ModalFooter="#"
                />

                <ProjectCard 
                    title="Android Web Browser"
                    desc="A fully-functional web browser app for Android phones built in under one week."
                    image="./images/small/browser.jpg"
                    ModalHeader="Android Web Browser"
                    ModalBody="A fully-functional web browser app for Android phones built in under one week."
                    ModalFooter="#"
                />

            </MDBRow>
            
        </MDBContainer>
    );
}
export default Projects;