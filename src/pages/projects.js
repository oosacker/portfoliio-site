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

            <MDBRow >

                <ProjectCard 
                    title="WeatherChecker"
                    desc="A simple web app that allows you to check the weather in selected city using the OpenWeatherMap API."
                    image="./images/small/weather-checker.jpg"
                    ModalHeader="WeatherChecker"
                    ModalBody={["A simple full-stack web app I built with Express.js and React so that I could learn how to connect Node.js to React and expose/consume APIs. It allows you to check the weather in the selected city using the OpenWeatherMap public API.",<br/>,<br/>,"The Express.js server first reads the list of countries from a JSON file and exposes an API to the React frontend, so the country selection box can be populated. The selected country is then sent back to the server, and a JSON file of all known cities is read and filtered by the selected country. This city is then used to fetch the desired data from OpenWeatherMap. The list of cities had to be filtered like this because it was far too large and caused errors."]}
                    ModalURL="https://weather-checker-v2.herokuapp.com/"
                    ModalImage="./images/large/weather-checker.png"
                    ModalGitHub={"https://github.com/oosacker/Weather-Checker"}
                />

                <ProjectCard 
                    title="TypingTester"
                    desc="An online typing game based on Python (with the Flask web framework) and vanilla JavaScript."
                    image="./images/small/type.jpg"
                    ModalHeader="TypingTester"
                    ModalBody={["An online typing game I made for the course SWEN503. The project was to create some software to impress the lecturers in just 3 days. I decided to make a full-stack web app with its backend in Python (using the Flask web framework) and JavaScript.",<br/>,<br/>,"The backend is used to read the word list (a CSV file) and save/load the scores. The scores are also saved in a CSV file on the web server's file system (not a database), so on Heroku they aren't permanent. Bootstrap was used to create the user interface. I got an A for this project."]}
                    ModalURL="https://typingtester.herokuapp.com/"
                    ModalImage="./images/large/type.png"
                    ModalGitHub={"https://github.com/oosacker/TypingTester"}
                />

                <ProjectCard 
                    title="Tic-Tac-Toe"
                    desc="My first web app. A tic-tac-toe game based on JavaScript with the ability to play against the CPU."
                    image="./images/small/tictac.jpg"
                    ModalHeader="Tic-Tac-Toe"
                    ModalBody={["This was the first web app I ever made. During the course SWEN502, we learnt HTML, CSS, JavaScript and PHP all within 2 weeks (very tough!!!), and were asked to make a website using all of them.",<br/>,<br/>,"I investigated CSS grids and realised they could be used to create a simple game, and this was how this app came to be. I was pretty good with OOP/arrays in Java, so writing a game in JavaScript was not too hard. PHP was used for uploading the background images and sending emails. I got an A+."]}
                    ModalURL="https://tic-tac-toe-nat.herokuapp.com/"
                    ModalImage="./images/large/tictac.png"
                    ModalGitHub={"https://github.com/oosacker/Tic-Tac-Toe"}
                />

                <ProjectCard 
                    title="StyleFit"
                    desc="A full-stack Python/JavaScript web application prototype for an industrial client (The Story Mint)."
                    image="./images/small/stylefit.jpg"
                    ModalHeader="StyleFit"
                    ModalBody={["This was a industrial group project for SWEN503. The project involved working with UX design students from the Wellington ICT Graduate School, and our client was The Story Mint. The task was to implement a proprietary Python-based text analysis API onto a web app.",<br/>,<br/>,"This involved learning Python and a web framework (Flask), setting up a SQL database server, creating the user interface to match the UX design and displaying the analysis results. Note that the project is under NDA, so the code and web app cannot be shown.",<br/>,<br/>,"One of the major difficultites of the project was communicating with the UX design students, as they would keep to their own schedule. We however managed to get an A+."]}
                    ModalURL=""
                    ModalImage="./images/large/stylefit.png"
                    ModalGitHub={""}
                />

                <ProjectCard 
                    title="MakeRipples"
                    desc="A full-stack Python/JavaScript web application prototype for an industrial client (MakeRipples)."
                    image="./images/small/makeripples.jpg"
                    ModalHeader="MakeRipples"
                    ModalBody={["This was the second industrial group project for SWEN503. The client was MakeRipples. We worked in a group to implement a web app which implemented the Add Ripple feature which would allow organisers to make events for their group.",<br/>,<br/>,"Python was used for the backend and JavaScript/Bootstrap for the frontend. I mostly worked on the frontend forms and navigation system. No online link is available. We got an A."]}
                    ModalURL=""
                    ModalImage="./images/large/makeripples.png"
                    ModalGitHub={"https://github.com/oosacker/MakeRipples"}
                />

                <ProjectCard 
                    title="Pizzeria Napoli"
                    desc="A JavaFX desktop application connecting to a MySQL database for tracking pizza orders at a fictional restaurant."
                    image="./images/small/pizza.jpg"
                    ModalHeader="Pizzeria Napoli"
                    ModalBody={["This was a group project for the course SWEN502. The requirement was to create a web app for customers to design their own customised pizza for a pizza restaurant, as well as an in-store desktop app for tracking the orders.",<br/>,<br/>,"I was in charge of designing the SQL database and the backend for the desktop app in Java, as well as improving the JavaFX user interface. No online link is available. We got an A."]}
                    ModalURL=""
                    ModalImage="./images/large/pizza.png"
                    ModalGitHub={"https://github.com/oosacker/MakeRipples"}
                />

                <ProjectCard 
                    title="NatBrowserPro"
                    desc="A fully-functional Java-based web browser app for the Android OS built in under one week."
                    image="./images/small/browser.jpg"
                    ModalHeader="NatBrowserPro"
                    ModalBody={["During SWEN502 we learned Android development for one week. The final assignment was to create a fully working web browser. The browser has go forward/backward buttons, as well as bookmarking and history functions.",<br/>,<br/>,"This was one of the most difficult assignments of the course, as we were asked to implement functions we had not learnt in class. Also, there were some issues about compatibility. Many students were upset with their grade. Mine was fine, as I knew I had to keep the Android API level low in Android Studio. I got an A+."]}
                    ModalURL=""
                    ModalImage="./images/large/browser.png"
                    ModalGitHub={"https://github.com/oosacker/AndroidWebBrowser"}
                />

            </MDBRow>
            
        </MDBContainer>
    );
}
export default Projects;