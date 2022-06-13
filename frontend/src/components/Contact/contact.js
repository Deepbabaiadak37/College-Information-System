import React from 'react';
import {CardGroup,Card,Button} from 'react-bootstrap';
import './contact.css';

function Contact()
{
	return(

  <>
    <h1 id="cc" style={{color:'#00b4db',fontSize:'55px'}} className="text-center">Contact</h1>
    <center>
      <hr className="text-center" style={{ width:'50%'}}/>
    </center>
    
      <div className="container">
       
        <div style={{ background:'linear-gradient(to right, #b993d6, #8ca6db)'}} className="row justify-content-center">
          <div className="col-md-10">
            <div className="wrapper">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <div className="contact-wrap w-100 p-lg-5 p-4">
                    <h2 className="mb-4" style={{ color:'white'}}>Send us a message</h2>
                    <form
                      id="contactForm"
                      className="contactForm"
                      >

                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              placeholder="Name"
                              
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="Email"
                              
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="subject"
                              placeholder="Subject"
                              
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea
                              type="text"
                              className="form-control"
                              name="message"
                              placeholder="Message"
                              cols="30"
                              rows="6"
                             
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="submit"
                              value="Send Message"
                              className="btn btn-primary"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="info-wrap w-100 p-lg-5 p-4 img">
                   
                    <p className="mb-4">
                      We're open for any suggestion or just to have a chat
                    </p>


                    <div className="dbox w-100 d-flex align-items-start">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-map-marker"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Address:</span>&nbsp;&nbsp; P.O. KTPP Township
                         
                        </p>
                      </div>
                    </div>

                    <div className="dbox w-100 d-flex align-items-start">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-map-pin"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Pin:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 721171
                         
                        </p>
                      </div>
                    </div>

                    <div className="dbox w-100 d-flex align-items-start">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-fax"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Fax:</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;250880
                         
                        </p>
                      </div>
                    </div>

                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-phone"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Phone:</span>&nbsp;&nbsp;
                          <a href="tel://+91 98303 19129" style={{ color:'white'}}>+91 98303 19129</a>
                        </p>
                      </div>
                    </div>


                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-paper-plane"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Email 1:</span>
                          <a href="mailto:..." style={{ color:'#FFEFBA'}}>&nbsp;&nbsp;
                            webmaster@cemk.ac.in 

                          </a>
                        </p>
                      </div>
                    </div>


                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-paper-plane"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Email 2:</span>
                          <a href="mailto:..." style={{ color:'#FFEFBA'}}>&nbsp;&nbsp;
                            director@cemk.ac.in
                          </a>
                        </p>
                      </div>
                    </div>


                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-paper-plane"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Email 3:</span>
                          <a href="mailto:..." style={{ color:'#FFEFBA'}}>&nbsp;&nbsp;
                            registrar@cemk.ac.in
                          </a>
                        </p>
                      </div>
                    </div>


                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-paper-plane"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Email 4:</span>
                          <a href="mailto:..." style={{ color:'#FFEFBA'}}>&nbsp;&nbsp;
                            tpo@cemk.ac.in 
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-building"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>City Office:</span>
                          &nbsp;&nbsp;
                           IA- 209, Sector-III Salt Lake City Kolkata – 700097
                        </p>
                      </div>
                    </div>


                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-location-arrow"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Location:</span>
                          &nbsp;&nbsp;
                          Junction of NH-41 and NH-6, within the campus of KTPS
                        </p>
                      </div>
                    </div>


                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-globe"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Website:</span>&nbsp;&nbsp;
                          <a href="www.cemkolaghat.org">www.cemkolaghat.org</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  </>

		);
}

export default Contact;