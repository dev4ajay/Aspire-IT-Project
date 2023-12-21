import React from 'react'
import { useState } from 'react';
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
function Scholarship() {
    const [isActive, setIsActive] = useState(false);
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
<div className='container'>
  <div>
<div class="line">
  
  <h2 style={{fontWeight: 'bold' , color: '#000' }}>Scholarship for Classroom Programme : 2023-24</h2>
<div class="skyblue"></div>

<br/>

</div>
<div ><section>
      <div className="container">
        {" "}
        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => setIsActive(!isActive)}
          >
            <div>{isActive ? "-" : "+"}</div>
            <div className='mt-3'>Based on X / XII Board Percentage Chart ?</div>
          </div>
          {isActive && (
          <div className="accordion-content">
          <div class="section-content">
            <div class="row">    
  <table>
     
  <thead>
  <tr>
    <th><em><strong>Criteria&nbsp;(X/XII Percentage)</strong></em></th>
    <th>Fee off on % Basis</th>
    <th>Net Payable Amount</th>
    <th>1st Installment</th>
    <th>2nd Installment</th>
    <th>3rd Installment</th>
  </tr>
</thead>
  
  <tbody>
  <tr>
    <td>≥98%</td>
    <td>Rs. 75,000/-</td>
    <td>Rs. 30,000/-</td>
    <td>Rs. 30,000/-</td>
    <td>NIL</td>
    <td>NIL</td>
  </tr>
  <tr>
    <td>≥97%</td>
    <td>Rs. 70,000/-</td>
    <td>Rs. 35,000/-</td>
    <td>Rs. 35,000/-</td>
    <td>NIL</td>
    <td>NIL</td>
  </tr>
  <tr>
    <td>≥96%</td>
    <td>Rs. 65,000/-</td>
    <td>Rs. 40,000/-</td>
    <td>Rs. 40,000/-</td>
    <td>NIL</td>
    <td>NIL</td>
  </tr>
  <tr>
    <td>≥95%</td>
    <td>Rs. 60,000/-</td>
    <td>Rs. 45,000/-</td>
    <td>Rs. 45,000/-</td>
    <td>NIL</td>
    <td>NIL</td>
  </tr>
  <tr>
    <td>≥94%</td>
    <td>Rs. 50,000/-</td>
    <td>Rs. 55,000/-</td>
    <td>Rs. 45,000/-</td>
    <td>Rs. 10,000/-</td>
    <td>NIL</td>
  </tr>
  <tr>
    <td>≥93%</td>
    <td>Rs. 45,000/-</td>
    <td>Rs. 60,000/-</td>
    <td>Rs. 45,000/-</td>
    <td>Rs. 15,000/-</td>
    <td>NIL</td>
  </tr>
  <tr>
    <td>≥92%</td>
    <td>Rs. 40,000/-</td>
    <td>Rs. 65,000/-</td>
    <td>Rs. 45,000/-</td>
    <td>Rs. 20,000/-</td>
    <td>NIL</td>
  </tr>
  <tr>
    <td>≥91%</td>
    <td>Rs. 35,000/-</td>
    <td>Rs. 70,000/-</td>
    <td>Rs. 45,000/-</td>
    <td>Rs. 25,000/-</td>
    <td>NIL</td>
  </tr>
  <tr>
    <td>≥90%</td>
    <td>Rs. 30,000/-</td>
    <td>Rs. 75,000/-</td>
    <td>Rs. 45,000/-</td>
    <td>Rs. 30,000/-</td>
    <td>NIL</td>
  </tr>
  <tr>
    <td>≥88%</td>
    <td>Rs. 25,000/-</td>
    <td>Rs. 80,000/-</td>
    <td>Rs. 45,000/-</td>
    <td>Rs. 35,000/-</td>
    <td>NIL</td>
  </tr>
  <tr>
    <td>≥86%</td>
    <td>Rs. 20,000/-</td>
    <td>Rs. 85,000/-</td>
    <td>Rs. 45,000/-</td>
    <td>Rs. 40,000/-</td>
    <td>NIL</td>
  </tr>
  <tr>
    <td>≥84%</td>
    <td>Rs. 15,000/-</td>
    <td>Rs. 90,000/-</td>
    <td>Rs. 45,000/-</td>
    <td>Rs. 35,000/-</td>
    <td>Rs. 10,000/-</td>
  </tr>
  <tr>
    <td>≥82%</td>
    <td>Rs. 10,000/-</td>
    <td>Rs. 95,000/-</td>
    <td>Rs. 45,000/-</td>
    <td>Rs. 35,000/-</td>
    <td>Rs. 15,000/-</td>
  </tr>
  <tr>
    <td>≥80%</td>
    <td>Rs. 5,000/-</td>
    <td>Rs. 1,00,000/-</td>
    <td>Rs. 45,000/-</td>
    <td>Rs. 35,000/-</td>
    <td>Rs. 20,000/-</td>
  </tr>
</tbody>
</table>
</div>
</div>
</div>

          )}
        </div>
      </div>
    </section>
    </div>


<br/>
<div>
    <section>
      <div className="container">
        {" "}
        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => setIsActive(!isActive)}
          >
            <div>{isActive ? "-" : "+"}</div>
            <div className='mt-3'>Based on X / XII Board Percentage Chart ?</div>
          </div>
          {isActive && (
          <div className="accordion-content">
          <div class="section-content">
            <div class="row">    
  <table>
     
  <thead>
  <tr>
    <th><em>Class</em></th>
    <th>FEE(Including GST)</th>
  
  </tr>
</thead>
  
  <tbody>
  <tr>
    <td>6th</td>
    <td>Rs. 35,000/-</td>
 
  </tr>
  <tr>
    <td>7th</td>
    <td>Rs. 35,000/-</td>

  </tr>
  <tr>
    <td>8th</td>
    <td>Rs. 35,000/-</td>
  
  </tr>
  <tr>
    <td>9th</td>
    <td>Rs. 45,000/-</td>

  </tr>
  <tr>
    <td>10th</td>
    <td>Rs. 45,000/-</td>

  </tr>


</tbody>
</table>
</div>
</div>
</div>

          )}
        </div>
      </div>
    </section>

    </div>

<br/>
<div>
<section>
      <div className="container">
        {" "}
        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => setIsActive(!isActive)}
          >
            <div>{isActive ? "-" : "+"}</div>
            <div className='mt-3'>Based on X / XII Board Percentage Chart ?</div>
          </div>
          {isActive && (
          <div className="accordion-content">
          <div class="section-content">
            <div class="row">    
  <table>
     
  <thead>
  <tr>
    <th><em>Class</em></th>
    <th>FEE(Including GST)</th>
  
  </tr>
</thead>
  
  <tbody>
  <tr>
    <td>6th</td>
    <td>Rs. 35,000/-</td>
 
  </tr>
  <tr>
    <td>7th</td>
    <td>Rs. 35,000/-</td>

  </tr>
  <tr>
    <td>8th</td>
    <td>Rs. 35,000/-</td>
  
  </tr>
  <tr>
    <td>9th</td>
    <td>Rs. 45,000/-</td>

  </tr>
  <tr>
    <td>10th</td>
    <td>Rs. 45,000/-</td>

  </tr>


</tbody>
</table>
</div>
</div>
</div>

          )}
        </div>
      </div>
    </section>
    </div>


<br/>
<div className='container'>
<h2 style={{fontWeight: 'bold ', color: '#000'}}>Additional Scholarship</h2>

<div class="skyblue"></div><br/>
</div>
{/* <div class="black"></div> */}
<div className='container terms_mains'>
     <p className='mt-3'><img src={require("../Assets/image/downloding.jpeg")} alt="" style={{width: '20px' , height: '20px'}}/> 
     CLC’s own students of Foundation Course or student of CLC’s own school for One year taking admission in Target / XI Foundation Course will get Rs. 5,000 & for Two or more years will get Rs. 10,000 additional scholarship.
   <div class="black"></div>
</p>


     <p className='mt-3'><img src={require("../Assets/image/downloding.jpeg")} alt="" style={{width: '20px' , height: '20px'}}/> 
      Rs. 10000 additional off on payable amount after X/XII Board percentage scholarship will be given to siblings (Real brother / sister) of selected CLCians in IITs, NITs & Govt. Medical Colleges.
</p>
      <div class="black"></div>
     <p className='mt-3'><img src={require("../Assets/image/downloding.jpeg")} alt=""  style={{width: '20px' , height: '20px'}}/>
    
Rs. 3000 additional off on payable amount after X/XII Board percentage scholarship will be given to ward of Gaurav Parivar (Brother / sister of selected CLCians in IITs, NITs & Govt. Medical Colleges.)
</p>
      <div class="black"></div>
     <p className='mt-3'><img src={require("../Assets/image/downloding.jpeg")} alt=""  style={{width: '20px' , height: '20px'}}/>
    
Brother/sister of Ex. CLCians will get Rs. 2000 additional scholarship.
      </p>
      <div class="black"></div>
     <p className='mt-3'><img src={require("../Assets/image/downloding.jpeg")} alt=""  style={{width: '20px' , height: '20px'}}/>
    
Brother/sister of Ex. CLCians will get Rs. 2000 additional scholarship.
</p>
      <div class="black"></div>
     <p className='mt-3'><img src={require("../Assets/image/downloding.jpeg")} alt=""  style={{width: '20px' , height: '20px'}}/>
    
XI to XII Moving Students will continue for class XII (Session : 2023-24) on the same fee as in XI Class, if next session fee is deposited last by 15 Feb. 2023 otherwise fee will be decided according to new session admission norms.
</p>
      <div class="black"></div>
     <p className='mt-3'><img src={require("../Assets/image/downloding.jpeg")} alt=""  style={{width: '20px' , height: '20px'}}/>
    
All the disputes are subjected to Sikar Jurisdiction only.
</p>

    </div>
</div>

</div>

<div className='container mt-5 terms_mains'>
Note : A Student can Avail any one of the Two types of Scholarships :-<br/>
        (A) Based on XII % + Additional Scholarship (if eligible for any) or<br/>
       (B) Based on performance in CLC Tecno'23 + Additional Scholarship (if eligible for any)<br/>



</div>


<div className='container mt-5 terms_mains'>

<h2 style={{fontWeight: 'bold' , color: '#000'}}> Documents Required for Scholarship</h2>
      <div class="skyblue"></div>
    <br/>
        <p className='mt-3'><img src={require("../Assets/image/downloding.jpeg")}  alt="" style={{width: '20px' , height: '20px'}}/> 
Original Marksheet of 10th/12th.
</p>
<div class="black"></div>
           <p className='mt-3'><img src={require("../Assets/image/downloding.jpeg")} alt="" style={{width: '20px' , height: '20px'}}
           /> 
Original Aadhar Card along with 1 copy of xerox.

    </p>
            <div class="black"></div>
           <p className='mt-3'><img src={require("../Assets/image/downloding.jpeg")} alt="" style={{width: '20px' , height: '20px'}}
           /> 
Proof of being CLC’s old student.
    </p>
            <div class="black"></div>
           <p className='mt-3'><img src={require("../Assets/image/downloding.jpeg")} alt="" style={{width: '20px' , height: '20px'}}
           /> 
Proof of selected student’s sibling of CLC to availing Special Scholarship.
</p>
 
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

export default Scholarship