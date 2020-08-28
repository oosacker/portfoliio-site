import React, {    
    useState, 
    useEffect,
    useContext,
    createContext
} from "react";

import { 
    MDBContainer, 
    MDBBtn, 
    MDBCol, 
    MDBRow, 
} from "mdbreact";

import Modal from '../modal';
import ProjectCard from '../projectCard';

export const ModalContext = createContext(false);

const Projects = () => {

    const[modalState, setModalState] = useState(false);

    const btnHandler = () => {
        setModalState(!modalState);
    }

    return (
        <MDBContainer>

            <ModalContext.Provider value={[modalState, setModalState]}>
                <Modal
                    header={'header'}
                    body={'body'}
                    footer={'footer'}
                />
            </ModalContext.Provider>

            <MDBRow>
                <MDBCol>
                    <h3>Software Development Projects</h3>
                    <p>This page shows off some of my software development projects that I have worked on at university and at home. Some were group projects, while others were individual ones.</p>
                </MDBCol>
            </MDBRow>

            <MDBRow center>

                <ProjectCard 
                    title="TypingTester"
                    desc="An online typing game based on Python (with the Flask web framework) and vanilla JavaScript."
                    image="./images/small/type.jpg"
                    buttonHandler={btnHandler}
                />

                <ProjectCard 
                    title="WeatherChecker"
                    desc="A simple web app that allows you to check the weather in selected city using the OpenWeatherMap API."
                    image="./images/small/weather-checker.jpg"
                    buttonHandler={btnHandler}
                />

                <ProjectCard 
                    title="Tic-Tac-Toe"
                    desc="My first web app. A tic-tac-toe game based on JavaScript with the ability to play against the CPU."
                    image="./images/small/tictac.jpg"
                    buttonHandler={btnHandler}
                />

                <ProjectCard 
                    title="StyleFit"
                    desc="A full-stack web application prototype for an industrial client (The Story Mint)."
                    image="./images/small/stylefit.jpg"
                    buttonHandler={btnHandler}
                />

                <ProjectCard 
                    title="MakeRipples"
                    desc="A full-stack web application prototype for an industrial client (MakeRipples)."
                    image="./images/small/makeripples.jpg"
                    buttonHandler={btnHandler}
                />

                <ProjectCard 
                    title="Customised Pizzas"
                    desc="A JavaFX desktop application for tracking pizza orders at a fictional restaurant."
                    image="./images/small/pizza.jpg"
                    buttonHandler={btnHandler}
                />

                <ProjectCard 
                    title="Android Web Browser"
                    desc="A fully-functional web browser app for Android phones built in under one week."
                    image="./images/small/browser.jpg"
                    buttonHandler={btnHandler}
                />

            </MDBRow>

            
        </MDBContainer>
    );
}
export default Projects;