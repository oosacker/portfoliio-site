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
                    title="Signify Time"
                    desc="A web app that displays New Zealand's time and date as measured by an atomic clock using NTP."
                    image="./images/project_img/small/time.jpg"
                    ModalHeader="Signify Time"
                    ModalBody={["A single-page web app based on Express.js and React that displays New Zealand's time as measured by an atomic clock, built during my internship at Signify Limited.Data from the time server at the Measurement Standards Laboratory of New Zealand (MSL) was used as the source of time. It displays the time according to MSL's time server, Signify's web server and the user's browser, as well as measured time differences between them.",<br/>,<br/>,"The Network Time Protocol (NTP) is used to correct for network delays and accurately display the time. The backend system was built in Express.js by a senior develoepr at Signify, and I was in charge of the frontend. The design was made to look similar to Signify's homepage for promotional purposes. As this is not a personal project, no link or source code is available."]}
                    ModalURL=""
                    ModalImage="./images/project_img/large/time.png"
                    ModalGitHub={""}
                />

                <ProjectCard 
                    title="Signify Scheduler"
                    desc="A simple web app based on Silverstripe for displaying staff schedules during standups built during my internship at Signify."
                    image="./images/project_img/small/scheduler.jpg"
                    ModalHeader="Signify Scheduler"
                    ModalBody={["One of the first projects I worked on during my internship at Signify Limited. Due to the Covid-19 lockdown between March and April 2020, Signify staff began working from home. This also meant daily standups on Zoom. To aid this, a simple web app was built using the Silverstripe CMS to display staff schedules for the work week. The user interface was built using a Silverstripe theme based on Bootstrap.",<br/>,<br/>,"This app became a favourite at Signify, and it is still being used at the company during their (now) in-person standups. As this is not a personal project, no link or source code is available."]}
                    ModalURL=""
                    ModalImage="./images/project_img/large/scheduler.png"
                    ModalGitHub={""}
                />

                <ProjectCard 
                    title="WeatherChecker"
                    desc="A simple web app that allows you to check the weather in selected city using the OpenWeatherMap API."
                    image="./images/project_img/small/weather-checker.jpg"
                    ModalHeader="WeatherChecker"
                    ModalBody={["A simple full-stack web app I built with Express.js and React so that I could learn how to connect Node.js to React and expose/consume APIs. It allows you to check the weather in the selected city using the OpenWeatherMap public API.",<br/>,<br/>,"The Express.js server first reads the list of countries from a JSON file and exposes an API to the React frontend, so the country selection box can be populated. The selected country is then sent back to the server, and a JSON file of all known cities is read and filtered by the selected country. This city is then used to fetch the desired data from OpenWeatherMap. The list of cities had to be filtered in this way because it was far too large, causing the web app to crash."]}
                    ModalURL="https://weather-checker-v2.herokuapp.com/"
                    ModalImage="./images/project_img/large/weather-checker.png"
                    ModalGitHub={"https://github.com/oosacker/Weather-Checker"}
                />

                <ProjectCard 
                    title="TypingTester"
                    desc="An online typing game based on Python (with the Flask web framework) and vanilla JavaScript."
                    image="./images/project_img/small/type.jpg"
                    ModalHeader="TypingTester"
                    ModalBody={["An online typing game I made for the course SWEN503. The project was to create some software to impress the lecturers in just 3 days individually. I decided to make a full-stack web app with its backend in Python (using the Flask web framework) and JavaScript.",<br/>,<br/>,"The backend is used to read the list of words (a CSV file) and save/load the high scores. The scores are also saved in a CSV file on the web server's file system (instead of a database), so on Heroku they aren't permanent, as the filesystem of Heroku's Dyno (a type of virtualised Linux container) is wiped every ~24 hours. This was a compromise I had to make, considering the time limit. Bootstrap was used to create the user interface. I got an A for this project."]}
                    ModalURL="https://typingtester.herokuapp.com/"
                    ModalImage="./images/project_img/large/type.png"
                    ModalGitHub={"https://github.com/oosacker/TypingTester"}
                />

                <ProjectCard 
                    title="Tic-Tac-Toe"
                    desc="My first web app. A tic-tac-toe game based on JavaScript with the ability to play against the CPU."
                    image="./images/project_img/small/tictac.jpg"
                    ModalHeader="Tic-Tac-Toe"
                    ModalBody={["This was the first web app I ever made. During the course SWEN502, we learnt HTML, CSS, JavaScript and PHP all within 2 weeks (very tough!!!), and were asked to make a website using all of them.",<br/>,<br/>,"I investigated CSS grids and realised they could be used to create a simple game, and this was how this app came to be. I was pretty good with OOP/arrays in Java, so writing a game in JavaScript was not too hard. PHP was used for uploading the background images and sending emails. I got an A+, the lecturer was very impressed with my JavaScript skills."]}
                    ModalURL="https://tic-tac-toe-nat.herokuapp.com/"
                    ModalImage="./images/project_img/large/tictac.png"
                    ModalGitHub={"https://github.com/oosacker/Tic-Tac-Toe"}
                />

                <ProjectCard 
                    title="StyleFit"
                    desc="A full-stack Python/JavaScript web application prototype for an industrial client (The Story Mint)."
                    image="./images/project_img/small/stylefit.jpg"
                    ModalHeader="StyleFit"
                    ModalBody={["This was an industrial group project for SWEN503. The project involved working with UX design students from the Wellington ICT Graduate School, and our client was The Story Mint. The task was to port a proprietary Python-based text analysis API (Developed by Callaghan Innovation) onto a web app.",<br/>,<br/>,"This involved learning Python and a web framework (Flask), setting up a SQL database server (for user login and registration as well as storing test data), creating the user interface to match the UX design and displaying the analysis results. Note that the project is under NDA, so the code and web app cannot be shown.",<br/>,<br/>,"One of the major difficultites of the project was communicating with the UX design students, as they would keep to their own schedule. We however managed to get an A+."]}
                    ModalURL=""
                    ModalImage="./images/project_img/large/stylefit.png"
                    ModalGitHub={""}
                />

                <ProjectCard 
                    title="MakeRipples"
                    desc="A full-stack Python/JavaScript web application prototype for an industrial client (MakeRipples)."
                    image="./images/project_img/small/makeripples.jpg"
                    ModalHeader="MakeRipples"
                    ModalBody={["This was the second industrial group project for SWEN503. The client was MakeRipples. We worked in a group to implement a web app which implemented the Add Ripple feature, allowing organisers to create events for their own user group.",<br/>,<br/>,"Python was used for the backend and JavaScript/Bootstrap for the frontend. I mostly worked on the frontend forms and navigation menus. Google FireStore (a type of No-SQL database) was used for data storage. No online link is available. We got an A."]}
                    ModalURL=""
                    ModalImage="./images/project_img/large/makeripples.png"
                    ModalGitHub={"https://github.com/oosacker/MakeRipples"}
                />

                <ProjectCard 
                    title="Pizzeria Napoli"
                    desc="A JavaFX desktop application connecting to a MySQL database for tracking pizza orders at a fictional restaurant."
                    image="./images/project_img/small/pizza.jpg"
                    ModalHeader="Pizzeria Napoli"
                    ModalBody={["This was a group project for the course SWEN502. The requirement was to create a web app for customers to design their own customised pizza for a pizza restaurant, as well as an in-store desktop app for tracking the orders.",<br/>,<br/>,"I was in charge of designing the SQL database and the backend for the desktop app in Java, as well as improving the JavaFX user interface. No online link is available. We got an A overall."]}
                    ModalURL=""
                    ModalImage="./images/project_img/large/pizza.png"
                    ModalGitHub={"https://github.com/oosacker/MakeRipples"}
                />

                <ProjectCard 
                    title="NatBrowserPro"
                    desc="A fully-functional Java-based web browser app for the Android OS built in under one week."
                    image="./images/project_img/small/browser.jpg"
                    ModalHeader="NatBrowserPro"
                    ModalBody={["During SWEN502 we spend one week learning Android development. The final assignment was to create a fully working web browser. My browser has go forward/backward buttons, as well as bookmarking and history functions.",<br/>,<br/>,"This was one of the most difficult assignments of the whole MSWDev course, as we were asked to implement functions we had not learnt in class, with a very tight deadline. ",<br/>,<br/>,"Also, there were some issues about compatibility, and their app wouldn't work on the lecturer's device. Many students were upset with their grade, some of them asking for a revision. Mine was fine, as I knew I had to keep the Android API level low in Android Studio. I was happy to have got an A+ grade for my project."]}
                    ModalURL=""
                    ModalImage="./images/project_img/large/browser.png"
                    ModalGitHub={"https://github.com/oosacker/AndroidWebBrowser"}
                />

            </MDBRow>
            
        </MDBContainer>
    );
}
export default Projects;