import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const Home = () => {
    return (
        <MDBContainer>

            <MDBRow>

                <MDBCol className='image-container' xl='4' lg='12' top>
                    <div className='image-container-text z-depth-1-half '>
                        <img src='/images/photo.png' className='profile-pic ' alt='profile'/>
                    </div>
                </MDBCol>

                <MDBCol className='profile-container' xl='8' lg='12' top>
                    <div className='profile-container-text z-depth-1-half zoom'>
                        <h3>Profile</h3>
                        
                        <p>I'm Natsuki Hasegawa, a New Zealand-born Japanese male from Wellington. I've just completed my studies toward a Master of Software Development (MSwDev) degree at the Wellington ICT Graduate School. I also hold a Master of Science (MSc) in Electronics and Computer Systems Engineering, and before making the switch to software, I was an electronics engineer for over 6 years. </p>
                    </div>
                </MDBCol>

            </MDBRow>

            <MDBRow>
                <MDBCol className='skills-container'>
                    <div className='skills-container-text z-depth-1-half zoom'>

                        <h3>Skills Summary</h3>

                        <MDBRow>
                            <MDBCol xl='4' lg='12'className='skill-col1'>
                                <h5>Software</h5>
                                <ul>
                                    <li>Java</li>
                                    <li>Python (Flask framework)</li>
                                    <li>JavaScript (React, Node.js, Express.js)</li>
                                    <li>PHP (Silverstripe CMS)</li>
                                    <li>CSS (Sass, Bootstrap)</li>
                                    <li>Delphi</li>
                                    <li>C#</li>
                                    <li>Databases (SQL, MongoDB)</li>
                                    <li>Microcontroller firmware (ANSI-C, Assembler)</li>
                                </ul>
                            </MDBCol>
                        
                            <MDBCol xl='4' lg='12' className='skill-col2'>
                                <h5>Hardware</h5>
                                <ul>
                                    <li>PCB design (Altium Designer)</li>
                                    <li>PCB manufacture (milling machines)</li>
                                    <li>PCB assembly (manual and reflow soldering)</li>
                                    <li>Linear power supplies</li>
                                    <li>Rechargable battery systems (Ni-MH and Ni-Polymer)</li>
                                    <li>Microcontroller systems</li>
                                    <li>Metalworking (basic)</li>
                                </ul>
                            </MDBCol>

                            <MDBCol xl='4' lg='12' className='skill-col3'>
                                <h5>Others</h5>
                                <ul>
                                    <li>Public speaking</li>
                                    <li>Full New Zealand Driver Licence</li>
                                    <li>Translating between Japanese-English languages</li>
                                </ul>
                            </MDBCol>

                        </MDBRow>
                    </div>

                    
                </MDBCol>
            </MDBRow>

            <MDBRow>
                <MDBCol className='history-container'>
                    <div className='history-container-text z-depth-1-half zoom'>

                        <h3>Employment History</h3>

                        <MDBTable hover responsive>

                            <caption><small>You can scroll this table horizontally on mobile.</small></caption>

                            <MDBTableHead>
                                <tr>
                                    <th>Period</th>
                                    <th>Company</th>
                                    <th>Position</th>
                                    <th>Summary</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <tr>
                                    <td>March 2020 – July 2020</td>
                                    <td>Signify Limited</td>
                                    <td>Web Developer Intern</td>
                                    <td>
                                        Employed full time for 3 months as  final part of my MSwDev degree. Worked on production web development projects, including coding, bug fixing and testing. 
                                    </td>
                                </tr>
                                <tr>
                                    <td>September 2009 – July 2015</td>
                                    <td>Spark Dental Technology Limited</td>
                                    <td>Hardware Development Engineer</td>
                                    <td>
                                        Worked remotely as the sole full time electronics engineer for a dental software company. Based at the site of Callaghan Innovation (formerly Industrial Research Limited). Worked on ultrasonic imaging systems and portable microcontroller-based electronics. 
                                    </td>
                                </tr>
                                <tr>
                                    <td>March 2009 – August 2009</td>
                                    <td>Industrial Research Limited</td>
                                    <td>Research Engineer</td>
                                    <td>
                                        6-month fixed-term contract after graduating from my MSc. Assisted their ultrasonic imaging programme by designing/assembling printed circuit boards, testing ultrasonic sensors, writing software and doing manual mechanical work.
                                    </td>
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

                            <caption><small>You can scroll this table horizontally on mobile.</small></caption>

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