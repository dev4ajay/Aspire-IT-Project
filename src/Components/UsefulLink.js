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
function UsefulLink() {


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
<div class="section-title mt-5">
                <span class="subtitle">CLC INSTITUTE</span>
                <h2><span> Useful</span>  Links</h2>
            </div>
<div class="title">


           
      

<div class="container mt-5">
  <table>
    <tbody>
    <tr>
    <td colspan="6" align="center">
    <h3>NEET</h3>
    </td>
    </tr>
    <tr>
    <td align="center" width="16%"><strong>Sr. No.</strong></td>
    <td align="center" width="32%"><strong>College</strong></td>
    <td colspan="4" align="center" width="52%"><strong>Website</strong></td>
    </tr>
    <tr>
    <td align="center">01</td>
    <td align="center">NTA</td>
    <td colspan="4">&nbsp; <a href="https://www.nta.ac.in/" target="blank">https://www.nta.ac.in/</a></td>
    </tr>
    <tr><td align="center">02</td>
    <td align="center">NEET</td>
    <td colspan="4">&nbsp; <a href="https://ntaneet.nic.in" target="blank">https://ntaneet.nic.in</a></td>
    </tr>
    
    <tr><td align="center">03</td>
    <td align="center">JEE</td>
    <td colspan="4">&nbsp; <a href="https://jeemain.nic.in" target="blank">https://jeemain.nic.in</a></td>
    </tr>
    <tr>
    <td align="center">04</td>
    <td align="center">UG NEET Counseling</td>
    <td colspan="4">&nbsp;&nbsp; <a href="http://mcc.nic.in/" target="blank">http://mcc.nic.in/</a></td>
    </tr>
    <tr>
    <td align="center">05</td>
    <td align="center">UG NEET Raj Counseling</td>
    <td colspan="4">&nbsp; <a href="http://ruhsraj.org/" target="blank">http://hteapp.hte.rajasthan.gov.in/neet_ug_admission//</a></td>
    </tr>
    <tr>
    <td colspan="6" align="center">
    <h3>JEE</h3>
    </td>
    </tr>
    <tr>
    <td align="center" width="16%"><strong>Sr. No.</strong></td>
    <td align="center" width="32%"><strong>College</strong></td>
    <td colspan="4" align="center"><strong>Website</strong></td>
    </tr>
    <tr>
    <td align="center">01</td>
    <td align="center">IIT Bombay</td>
    <td colspan="4">&nbsp;&nbsp;<a href="http://www.jee.iitb.ac.in" target="blank">http://www.jee.iitb.ac.in</a></td>
    </tr>
    <tr>
    <td align="center">02</td>
    <td align="center">IIT Delhi</td>
    <td colspan="4">&nbsp;&nbsp;<a href="http://www.jee.iitd.ac.in" target="blank">http://www.jee.iitd.ac.in</a></td>
    </tr>
    <tr>
    <td align="center">03</td>
    <td align="center">IIT Guwahati</td>
    <td colspan="4">&nbsp;&nbsp;<a href="http://www.iitg.ac.in/jee" target="blank">http://www.iitg.ac.in/jee</a></td>
    </tr>
    <tr>
    <td align="center">04</td>
    <td align="center">IIT Kanpur</td>
    <td colspan="4">&nbsp;&nbsp;<a href="http://www.iitk.ac.in/jee" target="blank">http://www.iitk.ac.in/jee</a></td>
    </tr>
    <tr>
    <td align="center">05</td>
    <td align="center">IIT Kharagpur</td>
    <td colspan="4">&nbsp;&nbsp;<a href="http://www.iitkgp.ac.in/" target="blank">http://www.iitkgp.ernet.in/jee</a></td>
    </tr>
    <tr>
    <td align="center">06</td>
    <td align="center">IIT Madras</td>
    <td colspan="4">&nbsp;&nbsp;<a href="https://www.iitm.ac.in/" target="blank">http://jee.iitm.ac.in</a></td>
    </tr>
    <tr>
    <td align="center">07</td>
    <td align="center">IIT Roorkee</td>
    <td colspan="4">&nbsp;&nbsp;<a href="http://www.iitr.ac.in/" target="blank">http://www.iitr.ac.in/jee</a></td>
    </tr>
    <tr>
    <td align="center">08</td>
    <td align="center">IT-BHU, Varanasi</td>
    <td colspan="4">&nbsp;&nbsp;<a href="http://www.iitbhu.ac.in/" target="blank">http://www.itbhu.ac.in</a></td>
    </tr>
    <tr>
    <td align="center">09</td>
    <td align="center">ISMU, Dhanbad</td>
    <td colspan="4">&nbsp; <a href="http://www.ismdhanbad.ac.in" target="blank">http://www.ismdhanbad.ac.in</a></td>
    </tr>
    <tr>
    <td align="center">10</td>
    <td align="center">Karnataka CET</td>
    <td colspan="4">&nbsp; <a href="http://www.kea.kar.nic.in/" target="blank">www.kea.kar.nic.in</a></td>
    </tr>
    <tr>
    <td align="center">11</td>
    <td align="center">Amrita Engineering</td>
    <td colspan="4">&nbsp; <a href="http://www.engineering.amrita.edu/" target="blank">www.engineering.amrita.edu</a></td>
    </tr>
    <tr>
    <td align="center">12</td>
    <td align="center">VITEEE</td>
    <td colspan="4">&nbsp; <a href="http://www.vit.ac.in/" target="blank">www.vit.ac.in</a></td>
    </tr>
    <tr>
    <td align="center">13</td>
    <td align="center">BITSAT</td>
    <td colspan="4">&nbsp; <a href="http://www.bitsadmission.com/" target="blank">www.bitsadmission.com</a></td>
    </tr>
    <tr>
    <td align="center">14</td>
    <td align="center">Orissa JEE</td>
    <td colspan="4">&nbsp; <a href="http://www.odishajee.com/" target="blank">www.jeeorissa.com</a></td>
    </tr>
    <tr>
    <td align="center">15</td>
    <td align="center">GITAM University</td>
    <td colspan="4">&nbsp; <a href="http://www.gitam.edu/" target="blank">www.gitam.edu</a></td>
    </tr>
    <tr>
    <td align="center">16</td>
    <td align="center">KIITJEE</td>
    <td colspan="4">&nbsp; <a href="http://www.kiit.ac.in/" target="blank">www.kiit.ac.in</a></td>
    </tr>
    <tr>
    <td align="center">17</td>
    <td align="center">BSAUEEE</td>
    <td colspan="4">&nbsp; <a href="http://www.bsauniv.ac.in/" target="blank">www.bsauniv.ac.in</a></td>
    </tr>
    <tr>
    <td align="center">18</td>
    <td align="center">SRMEEE</td>
    <td colspan="4">&nbsp; <a href="http://www.srmuniv.ac.in/" target="blank">www.srmuniv.ac.in</a></td>
    </tr>
    <tr>
    <td align="center">19</td>
    <td align="center">BVP Pune</td>
    <td colspan="4">&nbsp; <a href="http://www.bharatividyapeeth.edu/" target="blank">www.bharatividyapeeth.edu</a></td>
    </tr>
    <tr>
    <td align="center">20</td>
    <td align="center">Maharastra CET</td>
    <td colspan="4">&nbsp; <a href="http://www.dmer.org/" target="blank">www.dmer.org</a></td>
    </tr>
    <tr>
    <td align="center">21</td>
    <td align="center">Avinashilingam Engineering Entrance Exam</td>
    <td colspan="4">&nbsp; <a href="http://www.avinuty.ac.in/" target="blank">www.auengg.com</a></td>
    </tr>
    <tr>
    <td align="center">22</td>
    <td align="center">BHU</td>
    <td colspan="4">&nbsp; <a href="http://www.bhu.ac.in/" target="blank">www.bhu.ac.in</a></td>
    </tr>
    <tr>
    <td align="center">23</td>
    <td align="center">SLIET</td>
    <td colspan="4">&nbsp; <a href="http://www.sliet.ac.in/" target="blank">www.sliet.ac.in</a></td>
    </tr>
    <tr>
    <td align="center">24</td>
    <td align="center">COMEDK</td>
    <td colspan="4">&nbsp; <a href="http://www.comedk.org/" target="blank">www.comedk.org</a></td>
    </tr>
    <tr>
    <td align="center">25</td>
    <td align="center">MP PET</td>
    <td colspan="4">&nbsp; <a href="http://www.vyapam.nic.in/" target="blank">www.vyapam.nic.in</a></td>
    </tr>
    <tr>
    <td align="center">26</td>
    <td align="center">MP PET</td>
    <td colspan="4">&nbsp; <a href="http://www.mponline.gov.in/" target="blank">www.mponline.gov.in</a></td>
    </tr>
    <tr>
    <td align="center">27</td>
    <td align="center">Punjab Technical University</td>
    <td colspan="4">&nbsp; <a href="http://www.ptu.ac.in/" target="blank">www.ptu.ac.in</a></td>
    </tr>
    <tr>
    <td align="center">28</td>
    <td align="center">Dhiru Bhai Ambani</td>
    <td colspan="4">&nbsp; <a href="http://www.daiict.ac.in/" target="blank">www.daiict.ac.in</a></td>
    </tr>
    <tr>
    <td align="center">29</td>
    <td align="center">DCE</td>
    <td colspan="4">&nbsp; <a href="http://dtu.ac.in/" target="blank">www.dce.edu</a></td>
    </tr>
    <tr>
    <td align="center">30</td>
    <td align="center">IAPT</td>
    <td colspan="4">&nbsp; <a href="http://iapt.org.in/" target="blank">www.iapt.org.in</a></td>
    </tr>
    <tr>
    <td align="center">31</td>
    <td align="center">Olympiad</td>
    <td colspan="4">&nbsp; <a href="http://sofworld.org/" target="blank">www.sofworld.org</a></td>
    </tr>
    <tr>
    <td align="center">32</td>
    <td align="center">NTSE</td>
    <td colspan="4">&nbsp; <a href="http://ncert.nic.in/" target="blank">www.ncert.nic.in</a></td>
    </tr>
    </tbody>
    </table>
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

export default UsefulLink