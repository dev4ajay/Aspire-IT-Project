import React from "react";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { TfiMobile } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { HiUsers } from "react-icons/hi";
import { BsGlobe } from "react-icons/bs";
import {FaUserFriends  } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { TbBuildingStore } from "react-icons/tb";


import {
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaRssSquare,
  FaPinterest,
} from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { GoMail } from "react-icons/go";
const Footer = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <section className="footer_hh">
      <div className="footer_bg">
        <div className="Footer_header  mt-5">
          <footer
            id="footer"
            className="footer footer-section pb-0 "
            data-bg-img="images/footer-bg.png"
            data-bg-color="#25272e"
          >
            <div className="container pt-5">
              <div className="row">
                <div className="col-sm-6 col-md-3">
                  <div className="widget dark">
                    <p className="text-white heading_nf">
                      {" "}
                      <b>About Us</b>
                    </p>
                    <ul
                      className="f_links"
                      style={{ fontSize: "13px", listStyle: "disc" }}
                    >
                      <li>
                        <Link to="/introduction">
                          {" "}
                          <BsGlobe className="icon_footers"/>    Introduction
                        </Link>
                      </li>
                      <li>
                        <Link to="/directorMessage">
                  {" "}
                  <FaUserFriends className="icon_footers"/>      Director Message
                        </Link>
                      </li>
                      <li>
                        <Link to="/why-choose-Aspire">
             <FaUserFriends className="icon_footers"/> Why Choose Aspire
                          {" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="/Teaching-Methodology">
          <FaUserFriends className="icon_footers"/>    Teaching Mythology
                          {" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="/Reviews">
                {" "}
                    <TbBuildingStore className="icon_footers"/> Reviews
                        </Link>
                      </li>
                      <li>
                        <Link to="/  Suggestion & Feedback">
          {" "}
          <TbBuildingStore className="icon_footers"/>      Suggestion & Feedback
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

              
                <div className="col-sm-6 col-md-2">
                  <div className="widget dark">
                    <p className="text-white heading_nf">
                      <b>Results</b>
                    </p>
                    <ul
                      className="f_links"
                      style={{ fontSize: "13px", listStyle: "disc" }}
                    >
                      {/* <li>Admission</li> */}
                      {/* <li>Admission Rule</li> */}
                      {/* <li>Online Admission</li> */}
                      {/* <li>Offline Admission</li> */}
                      {/* <li>Fee Deposit Mode</li> */}
                      {/* <li>Fee Structure</li> */}
                      <li>
                        <Link to="/Engineering">
                       <BsGlobe className="icon_footers"/> Engineering
                        </Link>
                      </li>
                      <li>
                        <Link to="/Medical">
                          {" "}
                       <BsGlobe className="icon_footers"/> Medical
                        </Link>{" "}
                      </li>
                      <li>
                        <Link to="/Foundation">
                          {" "}
                       <   BsGlobe className="icon_footers"/>   Foundation
                        </Link>{" "}
                      </li>
                      <li>
                        <Link to="/KVPY">
                          {" "}
                 <BsGlobe className="icon_footers"/>   KVPY
                        </Link>{" "}
                      </li>
                      <li>
                        <Link to="/NTSE">
                          {" "}
                        <BsGlobe className="icon_footers"/>  NTSE
                        </Link>{" "}
                      </li>
                      {/* <li>Boards</li> */}
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 col-md-2">
                  <div className="widget dark">
                    <p className="text-white heading_nf">
                      <b>Courses</b>{" "}
                    </p>
                    <ul
                      className="f_links"
                      style={{ fontSize: "13px", listStyle: "disc" }}
                    >
                      <li>
                        <Link to="/Engineering">
                          {" "}
                        <AiOutlineArrowRight className="icon_footers"/>  Engineering
                        </Link>
                      </li>
                      <li>
                        <Link to="/Medical">
                          {" "}
                     <AiOutlineArrowRight className="icon_footers"/>     Medical
                        </Link>{" "}
                      </li>
                      <li>
                        <Link to="/Foundation">
                          {" "}
                          {" "}
                      <AiOutlineArrowRight className="icon_footers"/>    Foundation
                        </Link>
                      </li>
                   

                    </ul>
                  </div>
                </div>

                <div className="col-sm-6 col-md-2">
                  <div className="widget dark">
                    <p className="text-white heading_nf">
                      <b>Student Zone</b>{" "}
                    </p>
                    <ul
                      className="f_links"
                      style={{ fontSize: "13px", listStyle: "disc" }}
                    >
                      <li>
                        <Link to="/Student Report">
                          {/* {" "} */}
                          <HiUsers className="icon_footers"/>  Student Report
                        </Link>
                      </li>
                      <li>
                        <Link to="/Discipline">
                          {/* {" "} */}
                          <HiUsers  className="icon_footers"/>   Discipline
                        </Link>{" "}
                      </li>

                   

                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="widget dark">
                    <p className="text-white heading_nf">
                      <b>Connect With Us</b>
                    </p>
                    <div className="copyright-section">
                      <div className="container">
                        <div className="row">
                          <div class="container pb-0">
                            <section class=" footer_link">
                              <a
                                class="btn text-white btn-floating m-1"
                                style={{ backgroundColor: "#3b5998" }}
                                href="https://www.facebook.com/BrainofHimachal/?fref=ts"
                                role="button"
                              >
                                <i class="fab fa-facebook-f"></i>
                              </a>



                              <a
                                class="btn text-white btn-floating m-1"
                                style={{ backgroundColor: "#ac2bac" }}
                                href="https://www.instagram.com/aspireiit_medical/"
                                role="button"
                              >
                                <i class="fab fa-instagram"></i>
                              </a>

                            
                              <a
                                class="btn text-white btn-floating m-1"
                                style={{ backgroundColor: "#333333" }}
                                href="https://www.youtube.com/channel/UCJkqHF3qDCgHebqGJuhHLLg"
                                role="button"
                              >
                                <i class="fab fa-youtube"></i>
                              </a>
                            </section>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {" "}
              
                <div className="row">

                  <div className="col-md-12">
                  <hr style={{ color: "white" }} />
                    <div className="horizontal-contact-widget mt-30 pt-30 text-center Logo_footer">
            
                      <div 
                        className="col-md-3 mt-4"
                        style={{ textAlign: "left", padding: "0" }}
                      >
                        <div className="footer_logo">
                          <img
                            src={require("../Assets/image/logo Footer.png")}
                          ></img>
                        </div>
                      </div>
                      <div className="col-md-3 d-flex mt-4">
                        <div>
                          <HiBuildingOffice2
                            style={{
                              fontSize: "70px",
                              color: "white",
                              marginRight: "1rem",
                            }}
                          />
                        </div>
                        <div className="text-start footer_contact">
                          <span>VISIT OUR LOCATION</span>
                          <p>
                            Aspire Academy, Near HDFC Bank Phase-III BCS New
                            Shimla-171009 Himachal Pradesh
                          </p>
                        </div>
                      </div>
                      <div className="col-md-3 d-flex mt-4">
                        <div>
                          <TfiMobile
                            style={{
                              fontSize: "70px",
                              color: "white",
                              marginRight: "1rem",
                            }}
                          />
                        </div>
                        <div className="text-start footer_contact">
                          <span> GIVE US A Call</span>
                          <p>+91-9816623676 , </p>
                          <div>
                            <p>+91-177-2673990</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 d-flex mt-4">
                        <div>
                          <GoMail
                            style={{
                              fontSize: "70px",
                              color: "white",
                              marginRight: "1rem",
                            }}
                          />
                        </div>
                        <div className="text-start footer_contact">
                          <span>SEND US A Message</span>
                          <p>manager@aspireiit.in</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         
            <div className="container">
              <div className="row copy_footer">
              <hr style={{ color: "white" ,margin:" 6px 4px 13px -10px"}} />
                <div className="col-md-6">  

                  <p className="copy_footer text-white ">
                    {" "}
                    ©Copyright All Rights Reserved <b className="footer_b">
                      Aspire IIT & Medical
                    </b>{" "}
                  </p>
                </div>

                <div className="col-md-6">

                  <p className=" text-white ">
                    {" "}
                    {" "}
               <AiOutlineArrowRight/>     Privacy Policy{" "}
            
            <AiOutlineArrowRight/>        <b className="footer_b">Terms & Conditions</b>
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Footer;
