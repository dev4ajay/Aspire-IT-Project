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
function DistanceLearningProgramme() {
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

<section className="slider_main">
    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active btn_border" aria-current="true"  aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" className="btn_border" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" className="btn_border" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" className="btn_border" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" className="btn_border" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" className="btn_border" aria-label="Slide 6"></button>
  </div>
<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={require("../Assets/image/slider-1 new.jpg")} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={require("../Assets/image/slider-2 new.jpg")} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={require("../Assets/image/slider-3 new.jpg")} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={require("../Assets/image/slider-4 new.jpg")} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={require("../Assets/image/slider-5 new.jpg")} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={require("../Assets/image/slider-6 new.jpg")} class="d-block w-100" alt="..."/>
    </div>

  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span   aria-hidden="true"><img src={require("../Assets/image/download arrow right-PhotoRoom.png-PhotoRoom.png")} style={{width:'40px' }} className="arrow_btn"/></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span  aria-hidden="true"><img src={require("../Assets/image/download arrow left-PhotoRoom.png-PhotoRoom.png")} style={{width:'72px'}} className="arrow_btn"/></span>
    <span class="visually-hidden">Next</span>

  </button>
 
</div>
</div>
</section>
      <div class="first_sec">
          <div class="container mt-5">
            <div class="row">
              <div class="col-lg-12">
                <div class="first_heading">
                  <h1 style={{fontWeight: '100'}}>
                    <span style={{fontWeight: '700'}}> Distance Learning</span>
                    Programme
                  </h1>
                  <div class="blue-line"></div>
                  <p>
                    Distance Learning Programme is also available for the
                    students who are unable to join our regular classroom
                    courses and wish to -cark academics advantage and quality of
                    study material & Test series of CLC. We provide topicwise
                    mudules (for NEET) & Worksheets (for JEE) distance
                    learners…. Our Test Series with the highest no of test in
                    India is also available for distance learners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

  
        <div class="study">
          <div class="container">
            <div class="row">
              <div class="col-lg-5">
                <div class="study_heading mt-5">
                  <h3>Study Material Includes</h3>
                  <div class="blue-line"></div>
                  <div class="right_tick mt-5 ">
                     <div class="d-flex">
                      <div class="">
                        <i class="fa-solid fa-check me-3"></i>
                      </div>
                      <div class="">
                        <p>
                        <span style={{fontWeight: '700'}}
                            >Success Achiever for NEET 6 Book Set</span>
                          
                          - Biology, Chemistry, Physics , Previous Year Paper
                        </p>
                      </div>
                     </div>
                     <div class="simple_line"></div>
                     <div class="d-flex">
                      <div class="">
                        <i class="fa-solid fa-check me-3"></i>
                      </div>
                      <div class="">
                        <p>
                        <span style={{fontWeight: '700'}}
                            >Success Achiever for NEET 6 Book Set</span>
                          
                          - Biology, Chemistry, Physics , Previous Year Paper
                        </p>
                      </div>
                     </div>
                     <div class="simple_line"></div>
                     <div class="d-flex">
                      <div class="">
                        <i class="fa-solid fa-check me-3"></i>
                      </div>
                      <div class="">
                        <p>
                        <span style={{fontWeight: '700'}}
                            >Success Achiever for NEET 6 Book Set</span>
                          
                          - Biology, Chemistry, Physics , Previous Year Paper
                        </p>
                      </div>
                     </div>
                     <div class="simple_line"></div>
                     <div class="d-flex">
                      <div class="">
                        <i class="fa-solid fa-check me-3"></i>
                      </div>
                      <div class="">
                        <p>
                        <span style={{fontWeight: '700'}}
                            >Success Achiever for NEET 6 Book Set</span>
                          
                          - Biology, Chemistry, Physics , Previous Year Paper
                        </p>
                      </div>
                     </div>
                     <div class="simple_line"></div>
                     <div class="d-flex">
                      <div class="">
                        <i class="fa-solid fa-check me-3"></i>
                      </div>
                      <div class="">
                        <p>
                          <span style={{fontWeight: '700'}}
                            >Success Achiever for NEET 6 Book Set</span>
                          
                          - Biology, Chemistry, Physics , Previous Year Paper
                        </p>
                      </div>
                     </div>
                     <div class="simple_line"></div>
                         <div class="d-flex">
                      <div class="">
                  
                      </div>
                      <div class="">
                        <p>
                          <span style={{marginLeft:'30px', fontWeight: '700' }}>
                            Success Achiever for NEET 6 Book Set</span>
                          
                      
                        </p>
                      </div>
                     </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="study_material mt-5">
                  <h3>Study Material</h3>
                </div>
                <div class="blue-line"></div>
                <div class="study-table mt-5">
                  <table cellspacing="0" cellpadding="0" >
                    <tbody class="study-inner">
                      <tr>
                        <th style={{width: '70%'}}>
                          SUCCESS Achiever for NEET (6 Books Set)
                        </th>
                        <td style={{width: '30%'}}>888/-</td>
                      </tr>
                      <tr>
                        <th style={{width: '70%'}}>NEET/JEE (18 Books Set)</th>
                        <td style={{width: '30%'}}>12,000/-</td>
                      </tr>
                      <tr>
                        <th style={{width: '70%'}}>Offline Test Series</th>
                        <td style={{width: '30%'}}>10000/-</td>
                      </tr>
                      <tr>
                        <th style={{width: '70%'}}>Online Test Series</th>
                        <td style={{width: '30%'}}>5000/-</td>
                      </tr>
                    </tbody>
                  </table>
                  <ul>
                    <li>
                      <strong> *GST & Registration Included </strong>
                    </li>
                    <li>Fee Non-Refundable | One Time Payment Mode</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container mt-5">

            <div class="row">
                <div class="col-lg-12">
                   <div class="test_center">
                      <h3>
                        Offline Test Centers
                      </h3>
                      <div class="blue-line"></div>
                   </div>
                   <div class="center_colunm">
                   <ul>
                    <li>
                        <i class="fa-solid fa-check me-3"></i>
                        SIKAR
                    </li>
                </ul>
                <ul>
                    <li>
                        <i class="fa-solid fa-check me-3"></i>
                        ALWAR
                    </li>
                </ul>
                <ul>
                    <li>
                        <i class="fa-solid fa-check me-3"></i>
                        JAIPUR
                    </li>
                </ul>
                <ul>
                    <li>
                        <i class="fa-solid fa-check me-3"></i>
                        KOTA
                    </li>
                </ul>
            </div>
                </div>
                <div class="col-lg-12">
                    <div class="center_colunm">
                        <ul>
                         <li>
                             <i class="fa-solid fa-check me-3"></i>
                             BIKANER
                         </li>
                     </ul>
                     <ul>
                         <li>
                             <i class="fa-solid fa-check me-3"></i>
                             JODHPUR
                         </li>
                     </ul>
                     <ul>
                         <li>
                             <i class="fa-solid fa-check me-3"></i>
                             HISAR
                         </li>
                     </ul>
                     <ul>
                         <li>
                             <i class="fa-solid fa-check me-3"></i>
                             DELHI
                         </li>
                     </ul>
                 </div>
                </div>
            </div>
        </div>

        <div class="container pb-5">
                <div class="row">
                    <div class="col-lg-6 mt-5">
                        <div class="application-form-box">
                            <div class="heading">
                                <h4>
                                    Test Schedule
                                </h4>
                            </div>
                            <div class="button-box">
                                <a class="button" href="https://drive.google.com/file/d/1J3eXad-pito_pXO9QB6g93uXppaxURxE/view" target="_blank"></a>
                                <i class="fa-solid fa-download"></i>
                                <span class="button_label">Download Now! </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 mt-5">
                        <div class="application-form-box">
                            <div class="heading">
                                <h4>
                                    Test Schedule
                                </h4>
                            </div>
                            <div class="button-box">
                                <a class="button" href="https://drive.google.com/file/d/1J3eXad-pito_pXO9QB6g93uXppaxURxE/view" target="_blank"></a>
                                <i class="fa-solid fa-download"></i>
                                <span class="button_label">Download Now! </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mt-5">
       
         
              <h1>CLC <span style={{fontWeight:'700 '}}>Best Study Material</span></h1>
              <div class="cs-line"></div>
              <div class="row">
          
            <div class="col-lg-4 mt-5">
              <div class="bg-color">
                <div class="add-cart text-center"> &nbsp;</div>
              <img src={require("../Assets/image/book 1.png")} alt=" book-1"/>
              <p class="mt-2" style={{fontWeight:'800 '}}>Success Achiever for NEET</p>
               <p style={{fontWeight:'500 '}}>6 Book Set</p>
                <p style={{fontWeight:'900 '}}>₹ 888</p>
              </div>
            
            </div>
            <div class="col-lg-4 mt-5"> 
              <div class="bg-color">
                <div class="add-cart text-center"> &nbsp;</div>
              <img src={require("../Assets/image/book 2.png")} alt=" book-2"/>
              <p   class="mt-2" style={{fontWeight:'800 '}}>Success Achiever for NEET</p>
              <p style={{fontWeight:'500 '}}>6 Book Set</p>
              <p style={{fontWeight:'900 '}}>₹ 12000</p>
     
              </div>
            </div>
            <div class="col-lg-4 mt-5"> 
              <div class="bg-color">
                <div class="add-cart text-center"> &nbsp;</div>
              <img src={require("../Assets/image/book 3.png")} alt=" book-3"/>
              <p class="mt-2" style={{fontWeight:'800 '}}>Success Achiever for NEET</p>
              <p style={{fontWeight:'500 '}}>6 Book Set</p>
              <p style={{fontWeight:'900 '}}>₹ 12000</p>
              </div>
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

export default DistanceLearningProgramme