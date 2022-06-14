import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


function Footer(){

return (
    <MDBFooter color="stylish-color-dark" className="page-footer font-small pt-4 ">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 style={{color:'white'}} className="text-uppercase mb-4 mt-3 font-weight-bold">
              Footer Content
            </h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 style={{color:'white'}} className="text-uppercase mb-4 mt-3 font-weight-bold">
              Quick Links
            </h5>
            <ul className="list-unstyled">
              <li style={{ padding:'10px'}}>
                <a href="#!">Contact us</a>
              </li>
              <li style={{ padding:'10px'}}>
                <a href="#!">Anti Ragging rules</a>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 style={{color:'white'}} className="text-uppercase mb-4 mt-3 font-weight-bold">
              College Address
            </h5>
            <ul className="list-unstyled">
              <li>
                <div>College of Engineering & Management, Kolaghat</div>
              </li>
              <li>
                <div >P.O. KTPP Township, Purba Medinipur</div>
                <p>Phone: (03228) 2500600, 2494443</p>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 style={{color:'white'}} className="text-uppercase mb-4 mt-3 font-weight-bold">
              Connect With Us
            </h5>
            <ul className="list-unstyled">
              <li style={{ padding:'10px'}}>
                <a href="https://www.youtube.com/c/OfficialCEMK">Youtube</a>
              </li>
              <li style={{ padding:'10px'}}>
                <a href="https://www.instagram.com/accounts/login/?next=/cemkfest_2k22/">Instagram</a>
              </li>
              <li style={{ padding:'10px'}}>
                <a href="https://www.linkedin.com/school/official-cemk/">Linkedin</a>
              </li>
              <li style={{ padding:'10px'}}>
                <a href="https://www.facebook.com/OfficialCEMK">Facebook</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <hr />
      <div className="text-center py-3">
        <ul className="list-unstyled list-inline mb-0">
          <li className="list-inline-item">
            <h5 style={{color:'white'}} className="mb-1">Register With College Email</h5>
          </li>
          <li className="list-inline-item">
            <a href="/signup" className="btn btn-danger btn-rounded">
              Sign up!
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <div className="text-center">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a className="btn-floating btn-lg btn-fb mx-1" href="#facebook">
              <i className="fab fa-facebook-f"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-lg btn-tw mx-1" href="#twitter">
              <i className="fab fa-twitter"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-lg btn-gplus mx-1" href="#google">
              <i className="fab fa-google-plus"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-lg btn-li mx-1" href="#linkedin">
              <i className="fab fa-linkedin-in"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-lg btn-dribbble mx-1" href="#dribble">
              <i className="fab fa-dribbble"> </i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} OurWebsite:<a href="#link">--------</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );


} 

export default Footer;