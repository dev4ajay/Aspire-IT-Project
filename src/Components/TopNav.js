import React from "react";
import { navTopLink } from "../JsonData/data";
import { FaPhoneAlt } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { FaFacebook, FaInstagramSquare, FaYoutube } from "react-icons/fa";
const TopNav = () => {
  return (
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
  );
};

export default TopNav;
