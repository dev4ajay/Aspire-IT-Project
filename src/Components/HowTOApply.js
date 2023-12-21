import React from 'react'
import { HiBuildingOffice2 } from "react-icons/hi2";
import { TfiMobile } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { HiUsers } from "react-icons/hi";
import { BsGlobe } from "react-icons/bs";
import {FaUserFriends  } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { TbBuildingStore } from "react-icons/tb";
import { ImagePath } from "../JsonData/Image";
import { FaRocket, FaStar, FaBuffer, FaTrophy, FaVideo } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { navTopLink } from "../JsonData/data";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";

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
function HowToApply() {
  return (
  <>
  <section
      className="topNav"
      style={{
        background:
          "linear-gradient(to right, #17d0cf 0%, #01a6fd 51%, #17d0cf 100%)",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="d-flex gap-17">
            <div>
              <ul className="d-flex list-unstyled navtop_ul text-white">
                <li>{navTopLink.about}</li>
                <li>
                  <FaPhoneAlt />
                  {navTopLink.contactNo}
                </li>
                <li>
                  <GoMail />
                  {navTopLink.mail}
                </li>
              </ul>
            </div>
            <div>
              <ul className="d-flex list-unstyled navtop_ul navtop_ul2 text-white ">
                <li>{navTopLink.boh}</li>
                <li>{navTopLink.super20}</li>
                <li>SSB-11<sup>th</sup>,12<sup>th</sup></li>
                <li>Winter Batch 7th ,10th</li>
                {/* <li>
                  <FaFacebook />
                </li>
                <li>
                  <FaInstagramSquare />
                </li>
                <li>
                  <FaYoutube />
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

<div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container d-flex main_header">
          <div className="navbar_m"> 
            <a class="navbar-brand" href="#">
              <img src={ImagePath.logo}></img>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <FaRocket />
                  ABOUT US
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link class="dropdown-item" to="/Clc">
                  clc
             

                  </Link>
                  <Link class="dropdown-item" to="/Message">
                  Message
               
                  </Link>

                  <Link class="dropdown-item" to="/SystemAdministration">
                  System and Administration
                  </Link>
                  <Link class="dropdown-item" to="/ClcHistory">
                  CLC History
                  </Link>
                  <Link class="dropdown-item" href="/  Blogs">
                  Blogs
                  </Link>
               
                </div>
              </li>
              <li class="nav-item active dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <FaStar />
                  COURSES
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link class="dropdown-item" to="/NEET ">
                  NEET (UG)
                  </Link>
                  <Link class="dropdown-item" to="/JEE">
                  JEE (Main & Advanced)
                  </Link>

                  <Link class="dropdown-item" to="/Pre-Foundation">
                  Pre-Foundation
                  </Link>
                  <Link class="dropdown-item" to="/Distance-Learning-Programme">
                  Distance Learning Programme
                  </Link>
                </div>
              </li>

              <li class="nav-item active dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expande="false"
                >
                  <FaBuffer />
                  ADDMISSIONS
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link class="dropdown-item" to="/HowToApply">
                  How to Apply
                  </Link>
                  <Link class="dropdown-item" to="Fees">
                  Fees
                  </Link>

                  <Link class="dropdown-item" to="Scholarship">
                  Scholarship
                  </Link>
                  <Link class="dropdown-item" to="FAQS">
                  FAQ’S
                  </Link>
                  <Link class="dropdown-item" href="Terms-Condition">
                  Terms and Conditions
                  </Link>
                </div>
              </li>
              <li class="nav-item active dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expande="false"
                >
                  <FaTrophy />
                  Achievements
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">

                  <Link class="dropdown-item" to="/First-Rank-Achievements">
                  1 <sup>st</sup> Rank Achievements
                  </Link>
                  <Link class="dropdown-item" to="/CLCians-Colleges-Intake">
                  CLCians Colleges Intake
                  </Link>


                </div>
              </li>
              {/* <li class="nav-item active dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expande="false"
                >
                  <FaTrophy />
                  RESULTS
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">
                    Engineering
                  </a>
                  <a class="dropdown-item" href="#">
                    Medical
                  </a>

                  <a class="dropdown-item" href="#">
                    Foundation
                  </a>
                  <a class="dropdown-item" href="#">
                    KVPY
                  </a>
                  <a class="dropdown-item" href="#">
                    NTSE
                  </a>
                </div>
              </li> */}
              <li class="nav-item active dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expande="false"
                >
                  <FaVideo />
                  GALLERY
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link class="dropdown-item" to="/Photo">
                    Photo
                  </Link>
                  <Link class="dropdown-item" to="/Video">
                    Video
                  </Link>
                </div>
              </li>

              <li class="nav-item active dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expande="false"
                >
                  <HiUsers /> STUDENT ZONE
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">
                    STUDENT Report
                  </a>
                  <a class="dropdown-item" href="#">
                    Discipline
                  </a>
                </div>
              </li>
             
              <li class="nav-item active dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expande="false"
                >
                  <IoCallSharp /> Contact Us
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link class="dropdown-item" to="/ClcLocations">
                  CLC Locations
                  </Link>
                  <Link class="dropdown-item" to="/GeneralEnquiry">
                  General Enquiry
                  </Link>
                  <Link class="dropdown-item" to="/Career">
                  Career
                  </Link>
                  <Link class="dropdown-item" to="/StudentsHelp">
                  Student Help Desk
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    

  <div class="container  How_apply" >
<div class="row">
<h2><b>How to Apply</b></h2>
</div>

    <div class="skyblue1"></div>

    <div class="Admission">
        <h3> Admission Procedure for Offline Classroom Contact Programme</h3>
        </div>
        
            <div class="skyblue"></div>
   <div class="para terms_mains">

   <div className='d-flex gap-1' >
    <img src={require("../Assets/image/downloding.jpeg")} alt="" className='apply_img' />
    <p style={{color:'#737E86' ,fontSize:'16px'}}>You can collect admission form from our study centers. (SIKAR, ALWAR & JAIPUR) </p>  
    </div>
       <div class="black"></div>
       <div className='d-flex gap-1'>
       <img src={require("../Assets/image/downloding.jpeg")}  alt="" className='apply_img'/>
       <p style={{color:'#737E86' ,fontSize:'16px'}}>Fill the application form carefully, attach colored size photograph and Self-attested photocopy of mark-sheet of last School/ Board Exam and Aadhar Card.</p>
       </div>

<div class="black"></div>
<div className='d-flex gap-1'>
<img src={require("../Assets/image/downloding.jpeg")}  alt=""  className='apply_img'/>
  <p style={{color:'#737E86' ,fontSize:'16px'}}>Deposit application form at any of CLC center where you wants to take admission.</p>
</div>
<div class="black"></div>
<div className='d-flex gap-1'>
<img src={require("../Assets/image/downloding.jpeg")}  alt=""  className='apply_img'/>
<p style={{color:'#737E86' ,fontSize:'16px'}}>Please Confirm your age, Eligibility & Domicile for next coming NEET/JEE Exam. CLC Will not be responsible for any matter regarding age, eligibility & domicile.</p>
  </div>
<div class="black"></div>



   <div class="object">
    <h3> Object of Offline Classroom Contact Programme</h3>
    </div>
    
        <div class="skyblue"></div>
<div class="para terms_mains">
<div className='d-flex gap-1'>
  <img src={require("../Assets/image/downloding.jpeg")}  alt="" className='apply_img'/>
    <p  style={{color:'#737E86' ,fontSize:'16px'}}>BEAT the NEET,JEE & OLYMPIADS under the guidance of CLC. </p>  
    </div>
       <div class="black"></div>
       <div className='d-flex gap-1'>
       <img src={require("../Assets/image/downloding.jpeg")} alt=""  className='apply_img'/>
    <p style={{color:'#737E86' ,fontSize:'16px'}}>Daily (6 day in a week) Face to face Classroom session by the CONFIDENT ,experienced and qualified faculties of CLC under the prescribed schedule.
    </p>  
    </div>
       <div class="black"></div>
       <div className='d-flex gap-1'>
       <img src={require("../Assets/image/downloding.jpeg")} alt=""  className='apply_img'/>
    <p style={{color:'#737E86' ,fontSize:'16px'}}>COMPETENT Regular problem solving sessions with individual attention and caring of the student through problem solving counters for each subject.
    </p>
    </div>
       <div class="black"></div>
       <div className='d-flex gap-1'>
       <img src={require("../Assets/image/downloding.jpeg")} alt=""   className='apply_img'/>
    <p style={{color:'#737E86' ,fontSize:'16px'}}>To provide competitive environment among students through periodic test after each 21 days.
    </p>  
    </div>
       <div class="black"></div>
       <div className='d-flex gap-1'>
       <img src={require("../Assets/image/downloding.jpeg")} alt="" className='apply_img'/>
    <p style={{color:'#737E86' ,fontSize:'16px'}}>Mental boost up through Seminar & performance enhancement progrmme, creating healthy competitive spirit among student .
    </p>  
    </div>
       <div class="black"></div>



       <div class="column mcb-column mcb-item-a55db3d12 one laptop-one tablet-one-second mobile-one column_column">
        <div class="mcb-column-inner mfn-module-wrapper mcb-column-inner-a55db3d12 mcb-item-column-inner">
          <div class="column_attr mfn-inline-editor clearfix" >
            <div class="application-form-box">
<div class="heading">
<h4>Admission Enquiry </h4>
</div>
<div class="button-box">
  <a class="button  has-icon button_right button_size_2" href="https://clcworld.in/mobile-verification" target="_blank" title="">
    <span class="button_icon">
      <i class="icon-download" aria-hidden="true"></i>
      </span><span class="button_label" style={{fontSize:'17px'}}>Apply Now!</span></a>
</div>
</div></div></div></div>
</div>
</div>
</div>


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

  </>
  )
}

export default HowToApply;