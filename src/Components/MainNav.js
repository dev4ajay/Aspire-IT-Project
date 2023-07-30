import React from "react";
import { ImagePath } from "../JsonData/Image";
import { FaRocket, FaStar, FaBuffer, FaTrophy, FaVideo } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { IoCallSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const MainNav = () => {
  return (
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
                  <Link class="dropdown-item" to="Terms-Condition">
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
                  <HiUsers /> Student Room
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link class="dropdown-item" to="Student-Report">
                  Student Report
                  </Link>
                  <Link class="dropdown-item" to="Offline-Minor">
                  Offline Minor Solutions
                  </Link>
                  <Link class="dropdown-item" to="Online-Test">
                  Online Test
                  </Link>

                  <Link class="dropdown-item" to="Exam-Solutions">
                  Exam Solutions
                  </Link>

                  <Link class="dropdown-item" to="Useful-Links">
                  Useful Links
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
  );
};

export default MainNav;
