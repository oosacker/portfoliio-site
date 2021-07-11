import React from "react";

import { 
    MDBContainer, 
    MDBRow, 
    MDBCol, 
    MDBTable, 
    MDBTableBody, 
    MDBTableHead
} from "mdbreact";

const Home = () => {
    return (
        <MDBContainer className="home-container">

            <MDBRow className="mb-3 mx-1 p-3 z-depth-1 round-corner">

                <MDBCol xl="4" lg="12" top className="right-border mb-2 profile-pic-container">
                    <img src="/images/photo.png" className="img-fluid z-depth-1 rounded" alt="profile"/>
                </MDBCol>

                <MDBCol xl="8" lg="12" top>
                    <h3>Natsuki Hasegawa</h3>
                    <p>I am a New Zealand-born Japanese male from <a href="https://www.wellingtonnz.com/">Wellington</a>, New Zealand, and I just completed my studies toward a Master of Software Development (MSwDev) degree at the <a href="https://wellingtonict.ac.nz/">Wellington ICT Graduate School</a> (courses were taught by <a href="https://www.wgtn.ac.nz/">Victoria University of Wellington</a>).</p> 
                    <p>I also hold a Master of Science (MSc) in Electronics and Computer Systems Engineering, and before making the switch to software, I was a professional electronics engineer for over 6 years.</p> 
                    <p>I am passionate about learning how things work and creating things which are both aestheically pleasing and functional. This website shows you my previous projects and interests.</p>
                </MDBCol>

            </MDBRow>


            <MDBRow className="mb-3 mx-1 p-3 z-depth-1 round-corner">

                <MDBCol xl="4" lg="12" className="right-border">
                    <h3>Software Skills</h3>
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

                <MDBCol xl="4" lg="12" className="right-border">
                    <h3>Hardware Skills</h3>
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

                <MDBCol xl="4" lg="12">
                    <h3>Other Skills</h3>
                    <ul>
                        <li>Public speaking</li>
                        <li>Full New Zealand Driver Licence</li>
                        <li>Translating between Japanese and English languages</li>
                    </ul>
                </MDBCol>

            </MDBRow>


            <MDBRow className="mb-3 mx-1 p-3 z-depth-1 round-corner">
                <MDBCol>
                    <h3>Employment History</h3>

                    <MDBTable hover responsive>

                        <caption>
                            <small>You can scroll this table horizontally on mobile.</small>
                        </caption>

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
                                <td>May 2020 – Present</td>
                                <td>Somar Digital</td>
                                <td>Junior Developer</td>
                                <td>
                                    Working as a full-time web developer on the Help Desk team. Assisting clients with issues, implementing new features and fixing bugs on production websites.
                                </td>
                            </tr>
                            <tr>
                                <td>September 2020 – April 2021</td>
                                <td>Sunny Side Up Web Development</td>
                                <td>Team Member</td>
                                <td>
                                    Working part time as a web developer for a small local web development company.
                                </td>
                            </tr>
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
                </MDBCol>
            </MDBRow>

            
 
            <MDBRow className="mb-3 mx-1 p-3 z-depth-1 round-corner">

                <MDBCol>
                    <h3>Education</h3>

                    <MDBTable hover responsive>

                        <caption>
                            <small>You can scroll this table horizontally on mobile.</small>
                        </caption>

                        <MDBTableHead>
                            <tr>
                                <th>Period</th>
                                <th>School</th>
                                <th>Qualification</th>
                                <th>Subject</th>
                                <th>Honours</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            <tr>
                                <td>May 2019 – July 2020 </td>
                                <td>Victoria University of Wellington</td>
                                <td>Master of Software Development (MSwDev)</td>
                                <td>Software Development</td>
                                <td>Distinction</td>
                            </tr>
                            <tr>
                                <td>April 2007 – September 2008</td>
                                <td>Victoria University of Wellington</td>
                                <td>Master of Science (MSc)</td>
                                <td>Electronic and Computer Systems Engineering</td>
                                <td>Merit</td>
                            </tr>
                            <tr>
                                <td>March 2003 – December 2006</td>
                                <td>Victoria University of Wellington</td>
                                <td>Bachelor of Science and Technology (BScTech)</td>
                                <td>Electronics and Instrumentation</td>
                                <td>Honours 2nd Class, 1st Division</td>
                            </tr>
                        </MDBTableBody>
                    </MDBTable>
                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}
export default Home;