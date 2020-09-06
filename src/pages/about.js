import React from "react";
import { MDBContainer } from "mdbreact";

const About = () => {
    return (
        <MDBContainer>
              <p>This website was created from scratch with React (create-react-app). It is hosted on <a href="http://heroku.com">Heroku</a> and is copyrighted to Natsuki Hasegawa, 2020.</p>
              <p>Some info:</p>
              <ul>
                  <li><a href="https://mdbootstrap.com/">Material Design for Bootstrap UI library</a> (React version) was used for the user interface.</li>
                  <li>I always use modern functional components with hooks in React, instead of classes - this web app is no exception.</li>
                  <li>Each page of this web app is a separate React component. For the Projects page, each card is a separate component, with a lot of props (pieces of data) being sent from parent component down to the child.</li>
                  <li>The <a href="https://reactjs.org/docs/hooks-reference.html#usecontext">useContext hook</a> is used to share data between components - this is needed for the modals (the overlay when you click on the cards on the Projects page) when displaying the detailed information.</li>
                  <li><a href="https://reactrouter.com/">React-Router</a> is used for the navbar - notice how the URL changes when you click on the different links, despite being a single page web app.</li>
                  <li><a href="https://github.com/mars/create-react-app-buildpack">Heroku Buildpack for create-react-app</a> was used to deploy this web app to Heroku.</li>
              </ul>
        </MDBContainer>
    );
}
export default About;