import React from "react";
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
function SystemandAdministration() {
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
      <div class="container Chairman">
        <div class="row">
          <div class="col-lg-9">
            <h2>
              <span>System and</span>Administration
            </h2>
            <div class="skyBlue_line"></div>
          </div>
        </div>
      </div>

      <div class="container mt-4 System">
        <div class="row">
          <div class="col-lg-3">
            <img
              src={require("../Assets/image/meee.jpg")}
              alt=""
              class="pb-2"
            />
          </div>

          <div class="col-lg-3">
            <img
              src={require("../Assets/image/System-and-Administration-10.jpg")}
              alt=""
              class="pb-2"
            />
          </div>

          <div class="col-lg-3">
            <img
              src={require("../Assets/image/System-and-Administration-5.jpg")}
              alt=""
              class="pb-2"
            />
          </div>

          <div class="col-lg-3">
            <img
              src={require("../Assets/image/images7.jpg")}
              alt=""
              class="pb-2"
            />
          </div>
        </div>

        <h3 className="mt-5">
          Scientifically modified Infastructure with following basic amenities:
        </h3>
        <div class="skyBlue_line"></div>

        <ul class="list_mixed mt-5">
          <li class="list_check  mt-4">
            {" "}
            <i
              class="fa-solid fa-check fa-lg  "
              style={{ marginRight: "25px" }}
            ></i>
            <b className="main_mark">All Purpose Counters:</b> These APCs provide first-hand
            information, when students and parents visit institute to collect
            their schedule, syllabus,
          </li>
          <li class="list_check mt-4">
            <i
              class="fa-solid fa-check fa-lg"
              style={{ marginRight: "25px" }}
            ></i>{" "}
            <b className="main_mark">All Purpose Counters:</b> These APCs provide first-hand
            information, when students and parents visit institute to collect
            their schedule, syllabus,
          </li>
          <li class="list_check mt-4">
            <i
              class="fa-solid fa-check fa-lg"
              style={{ marginRight: "25px" }}
            ></i>{" "}
            <b className="main_mark">All Purpose Counters:</b> These APCs provide first-hand
            information, when students and parents visit institute to collect
            their schedule, syllabus,
          </li>
          <li class="list_check mt-4">
            <i
              class="fa-solid fa-check fa-lg"
              style={{ marginRight: "25px" }}
            ></i>{" "}
            <b className="main_mark">All Purpose Counters:</b> These APCs provide first-hand
            information, when students and parents visit institute to collect
            their s  chedule, syllabus,
          </li>
          <li class="list_check mt-4">
            <i
              class="fa-solid fa-check fa-lg"
              style={{ marginRight: "25px" }}
            ></i>{" "}
            <b className="main_mark">All Purpose Counters:</b> These APCs provide first-hand
            information, when students and parents visit institute to collect
            their schedule, syllabus,
          </li>
          <li class="list_check mt-4">
            <i
              class="fa-solid fa-check fa-lg"
              style={{ marginRight: "25px" }}
            ></i>{" "}
            <b className="main_mark">All Purpose Counters:</b> These APCs provide first-hand
            information, when students and parents visit institute to collect
            their schedule, syllabus,
          </li>
          <li class="list_check mt-4">
            <i
              class="fa-solid fa-check fa-lg"
              style={{ marginRight: "25px" }}
            ></i>{" "}
            <b className="main_mark">All Purpose Counters:</b> These APCs provide first-hand
            information, when students and parents visit institute to collect
            their schedule, syllabus,
          </li>
          <li class="list_check  mt-4">
            <i
              class="fa-solid fa-check fa-lg"
              style={{ marginRight: "25px" }}
            ></i>{" "}
            <b className="main_mark">All Purpose Counters:</b> These APCs provide first-hand
            information, when students and parents visit institute to collect
            their schedule, syllabus,
          </li>
          <li class="list_check mt-4">
            <i
              class="fa-solid fa-check fa-lg"
              style={{ marginRight: "25px" }}
            ></i>{" "}
            <b className="main_mark">All Purpose Counters:</b> These APCs provide first-hand
            information, when students and parents visit institute to collect
            their schedule, syllabus,
          </li>
          <li class="list_check  mt-4">
            <i
              class="fa-solid fa-check fa-lg"
              style={{ marginRight: "25px" }}
            ></i>{" "}
            <b className="main_mark">All Purpose Counters:</b> These APCs provide first-hand
            information, when students and parents visit institute to collect
            their schedule, syllabus,
          </li>
          <li class="list_check  mt-4">
            <i
              class="fa-solid fa-check fa-lg"
              style={{ marginRight: "25px" }}
            ></i>{" "}
            <b className="main_mark">All Purpose Counters:</b> These APCs provide first-hand
            information, when students and parents visit institute to collect
            their schedule, syllabus,
          </li>
          <li class="list_check  mt-4">
            <i
              class="fa-solid fa-check fa-lg"
              style={{ marginRight: "25px"}}
            ></i>{" "}
            <b className="main_mark">All Purpose Counters:</b> These APCs provide first-hand
            information, when students and parents visit institute to collect
            their schedule, syllabus,
          </li>
        </ul>
      </div>

      <div class="images_group">
        <div class="container pt-5 pb-5">
          <div class="row mt-4">
            <div class="col-lg-3">
              <img src={require("../Assets/image/utsah.jpg")} alt="" />
            </div>
            <div class="col-lg-3">
              <img
                src={require("../Assets/image/System-and-Administration-5 (1).jpg")}
                alt=""
              />
            </div>
            <div class="col-lg-3">
              <img
                src={require("../Assets/image/System-and-Administration-6.jpg")}
                alt=""
              />
            </div>
            <div class="col-lg-3">
              <img
                src={require("../Assets/image/System-and-Administration-8.jpg")}
                alt=""
              />
            </div>
          </div>

          <div class="row mt-4">
            <div class="col-lg-3">
              <img src={require("../Assets/image/utsah.jpg")} alt="" />
            </div>
            <div class="col-lg-3">
              <img
                src={require("../Assets/image/System-and-Administration-5 (1).jpg")}
                alt=""
              />
            </div>
            <div class="col-lg-3">
              <img
                src={require("../Assets/image/System-and-Administration-6.jpg")}
                alt=""
              />
            </div>
            <div class="col-lg-3">
              <img
                src={require("../Assets/image/System-and-Administration-8.jpg")}
                alt=""
              />
            </div>
          </div>

          <div class="row mt-4 mb-4">
            <div class="col-lg-3">
              <img src={require("../Assets/image/utsah.jpg")} alt="" />
            </div>
            <div class="col-lg-3">
              <img
                src={require("../Assets/image/System-and-Administration-5 (1).jpg")}
                alt=""
              />
            </div>
            <div class="col-lg-3">
              <img
                src={require("../Assets/image/System-and-Administration-6.jpg")}
                alt=""
              />
            </div>
            <div class="col-lg-3">
              <img
                src={require("../Assets/image/System-and-Administration-8.jpg")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div class="container my-5 Regular_classes ">
        <h3 className="text_series ">Regular classes by experienced faculties:</h3>
        <div class="skyBlue_line"></div>

        <p className="mt-4">
          Regular classes are the Back Bone of total academic system. Success
          needs regularity. Effective regular learning is the key of success.
        </p>
        <p>
          CLC has highly qualified, experienced & topic specialist faculty
          members for each subject. The teachers do not restrict their teaching
          to classroom only but extend their full guidance to the students
          outside the classroom.{" "}
        </p>

        <h3 className="text_series mt-4">Problem Solving Counter</h3>
        <div class="skyBlue_line"></div>

        <p className="mt-5">
          Regular classes are the Back Bone of total academic system. Success
          needs regularity. Effective regular learning is the key of success.
        </p>
        <p>
          CLC has highly qualified, experienced & topic specialist faculty
          members for each subject. The teachers do not restrict their teaching
          to classroom only but extend their full guidance to the students
          outside the classroom.{" "}
        </p>

        <h3 className="text_series mt-4">Study Material</h3>
        <div class="skyBlue_line"></div>

        <p className="mt-5">
          <strong>Unit wise Modules (for NEET) and Worksheet (for JEE):</strong>
        </p>
        <p>
          We provide result oriented study material as a unitwise Modules or
          Worksheet of each subject which is efficient & Completely dedicated to
          Crack the NEET and JEE entrance exams. Our unit wise Modules or
          Worksheet are prepared by a team of renowned academicians and experts
          who have an experience of a decade. Our unitwise Modules or Worksheet
          comprise of a systematized study material on each subject, a self
          monitoring stage by stage system helping students to analyze their own
          success.There are topic wise theory notes on each subject written in
          an interactive manner. Theory notes explain the basic concept to a
          student in a classroom coaching manner. After topic wise theory notes,
          there are certain illustrations which are termed as examples these are
          based on the same topic with which they are attached. Succeeding this
          there are some exercise sheets. The exercise sheets are designed after
          thorough research & analysis of latest examination pattern and last
          exercise sheet contains the questions asked in previous years NEET and
          JEE Papers.
        </p>

        <h3 className="text_series mt-5">Test Series (TS)</h3>
        <div class="skyBlue_line"></div>

        <p className="mt-5">
          Test Series is a biggest part to evaluate & monitoring the study of a
          student.
        </p>
        <p>
          Carefully designed test series are a specialty at CLC. At CLC we take
          special initiative to devise a testing system where the students are
          constantly made aware of their progress level. This ensures that the
          students make the best use of our teaching methodology that goes
          beyond formal class room lectures
        </p>

        <p>
          <strong>All tests are based on latest examination pattern.</strong>
        </p>

        <p>
          <strong>(A) Periodic Minor Test :</strong>We provide a regular topic
          wise & module wise periodic minor test series. These tests aim at
          tracing the awareness of a student towards his/her aim during last 21
          days and to evaluate the student’s overall performance. We provide a
          regular topic wise & module wise periodic minor test series. Schedule
          of Test for Each Batch is provided to students at the admission time.
        </p>
        <p>
          <strong>(B) Review Test :</strong> To revise the earlier topics we
          conduct review test of each subject randomly.
        </p>

        <p>
          <strong>(A) Periodic Minor Test :</strong>We provide a regular topic
          wise & module wise periodic minor test series. These tests aim at
          tracing the awareness of a student towards his/her aim during last 21
          days and to evaluate the student’s overall performance. We provide a
          regular topic wise & module wise periodic minor test series. Schedule
          of Test for Each Batch is provided to students at the admission time.
        </p>
        <p>
          <strong>(B) Review Test :</strong> To revise the earlier topics we
          conduct review test of each subject randomly.
        </p>

        <p>
          <strong>(A) Periodic Minor Test :</strong>We provide a regular topic
          wise & module wise periodic minor test series. These tests aim at
          tracing the awareness of a student towards his/her aim during last 21
          days and to evaluate the student’s overall performance. We provide a
          regular topic wise & module wise periodic minor test series. Schedule
          of Test for Each Batch is provided to students at the admission time.
        </p>
        <p>
          <strong>(B) Review Test :</strong> To revise the earlier topics we
          conduct review test of each subject randomly.
        </p>

        <p>
          <strong>(A) Periodic Minor Test :</strong>We provide a regular topic
          wise & module wise periodic minor test series. These tests aim at
          tracing the awareness of a student towards his/her aim during last 21
          days and to evaluate the student’s overall performance. We provide a
          regular topic wise & module wise periodic minor test series. Schedule
          of Test for Each Batch is provided to students at the admission time.
        </p>
        <p>
          <strong>(B) Review Test :</strong> To revise the earlier topics we
          conduct review test of each subject randomly.
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
  );
}

export default SystemandAdministration;
