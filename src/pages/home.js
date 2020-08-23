import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const Home = () => {
    return (
        <MDBContainer>

            <MDBRow>

                <MDBCol className='image-container' xl='4' lg='12' top>
                    <img src='/images/photo.png' className='profile-pic z-depth-1-half zoom' alt='profile'/>
                </MDBCol>

                <MDBCol className='profile-container' xl='8' lg='12' top>
                    <div className='profile-container-text z-depth-1-half zoom'>
                        <h3>Profile</h3>
                        <p>I'm Natsuki Hasegawa, and I've just completed my studies toward a Master of Software Development (MSwDev)degree at the Wellington ICT Graduate School. I also hold a Master of Science (MSc) in Electronics and Computer Systems Engineering, and before making the switch to software, I was an electronics engineer for over 6 years.</p>
                    </div>
                </MDBCol>

            </MDBRow>

            <MDBRow>
                <MDBCol className='skills-container'>
                    <div className='skills-container-text z-depth-1-half zoom'>
                        <h3>Skills Summary</h3>
                        <h5>Software Development</h5>
                        <ul>
                            <li>Java, Python, JavaSCript, PHP, </li>
                        </ul>
                    </div>
                </MDBCol>
            </MDBRow>

            <MDBRow>
                <MDBCol className='history-container'>
                    <div className='history-container-text z-depth-1-half zoom'>
                        <h3>Employment History</h3>
                        <MDBTable hover responsive>
                            <MDBTableHead>
                                <tr>
                                    <th>Period</th>
                                    <th>Company</th>
                                    <th>Position</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <tr>
                                    <td>March 2020 – July 2020</td>
                                    <td>Signify Limited</td>
                                    <td>Web Developer Intern</td>
                                </tr>
                                <tr>
                                    <td>September 2009 – July 2015</td>
                                    <td>Spark Dental Technology Limited (now Titanium Solutions)</td>
                                    <td>Hardware Development Engineer</td>
                                </tr>
                                <tr>
                                    <td>March 2009 – August 2009</td>
                                    <td>Industrial Research Limited (now Callaghan Innovation)</td>
                                    <td>Research Engineer (fixed-term)</td>
                                </tr>
                            </MDBTableBody>
                        </MDBTable>
                    </div>
                </MDBCol>
            </MDBRow>

            <MDBRow>
                <MDBCol className='education-container'>
                    <div className='education-container-text z-depth-1-half zoom'>
                        <h3>Education</h3>
                        <MDBTable hover responsive>
                            <MDBTableHead>
                                <tr>
                                    <th>Period</th>
                                    <th>School</th>
                                    <th>Qualification</th>
                                    <th>Subject</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <tr>
                                    <td>May 2019 – July 2020 </td>
                                    <td>Victoria University of Wellington</td>
                                    <td>Master of Software Development (MSwDev)</td>
                                    <td>Software Engineering</td>
                                </tr>
                                <tr>
                                    <td>April 2007 – September 2008</td>
                                    <td>Victoria University of Wellington</td>
                                    <td>Master of Science (MSc)</td>
                                    <td>Electronic and Computer Systems Engineering</td>
                                </tr>
                                <tr>
                                    <td>March 2003 – December 2006</td>
                                    <td>Victoria University of Wellington</td>
                                    <td>Bachelor of Science and Technology (BScTech)</td>
                                    <td>Electronics and Instrumentation</td>
                                </tr>
                            </MDBTableBody>
                        </MDBTable>
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
export default Home;