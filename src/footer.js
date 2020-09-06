import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
      
    <MDBFooter color="indigo" className="font-small py-2 fixed-bottom">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Natsuki Hasegawa
        </MDBContainer>
    </MDBFooter>
  );
}

export default Footer;