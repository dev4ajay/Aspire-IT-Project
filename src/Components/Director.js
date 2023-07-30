import React from "react";
import DirctorSir from "../Assets/image/Director-massage.jpg";

const Director = () => {
  return (
    <>
      <section className="mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="video-popup">
                <a href="director-message.html" data-lightbox-gallery="">
                  <img
                    alt="Aspire IIT &amp; Medical"
                    src={DirctorSir}
                    width="550px"
                    className="img-responsive img-fullwidth"
                  />
                </a>
              </div>
            </div>
            <div className="col-md-6 group_col">
              <h2 
                className="letter-space-4 text-black text-uppercase mt-0 mb-3 h4_our"
                style={{ fontWeight: "bold" }}
              >
                {" "}
                Aspire IIT &amp; Medical
              </h2>
              <h4 className="text-uppercase font-weight-600 mt-0 font-22 line-bottom">
                Director Message
              </h4>
              <h4 className="text-theme-colored">
                <font color="black">Er. Yogendra Kumar Meena (MD)</font>{" "}
              </h4>
              <p className="text-justify mnmn">
                You have entered the most crucial part of your life. The next
                few years will be pivotal in shaping your future. Every parent
                loves his child and wishes to provide the best quality education
                to enable him reach his full potential. We at ASPIRE IIT &amp;
                MEDICAL believe in providing uncompromised quality of education
                to the students and helping them realize their dreams.
              </p>
              <a
                className="btn btn-theme-colored btn-flat mt-10 mb-sm-30"
                href="/directorMessage"
              >
                READ MORE
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Director;
