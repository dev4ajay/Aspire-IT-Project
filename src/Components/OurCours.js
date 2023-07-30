import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
const OurCours = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <section id="blog" className="bg-lighter mt-5 mb-5">
      <div className="motivation_head text-center  pt-5">
        <p>
          <span
            class="subtitle text-uppercase Leran_text"
            style={{ color: "Darkgray", letterSpacing: "1px" }}
          >
            LEARN NEW SKILLS
          </span>
        </p>
        <h2 className="main_ours" style={{ color: "black", fontWeight: "300" }}>
          <span style={{ color: "black", fontWeight: "600" }}>Classroom</span>{" "}
          <span>Courses</span>
        </h2>
      </div>

      <div className="container">
        <div className="section-title mt-4 mb-4">
          <div className="row">
            <div className="col-md-12 col-md-offset-2">
              {/* <h2
                className="text-uppercase mt-0 line-height-1 h4_our"
                style={{ fontWeight: "bold" }}
              >
                Our Courses
              </h2> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-4 group_col">
            <article className="post clearfix mb-30 bg-lighter">
              <div className="entry-header">
                <div className="post-thumb thumb">
                  <img
                    src={require("../Assets/image/our Corses-engineering.jpg")}
                    alt="Aspire IIT &amp; Medical"
                    className="img-responsive img-fullwidth"
                    width="357px"
                  />{" "}
                </div>
              </div>
              <div className="entry-content  mt-3">
                <div className="entry-meta no-bg no-border">
                  <h4 className="main_Jee" style={{ color: "#444444" }}>
                    ENGINEERING
                  </h4>
                  {/* <p>
                    Experienced, energetic team with updated study Material.
                  </p> */}
                </div>
                <div className="mk_enginerring">
                  <div>
                    <ul className=" p-0  our_ul">
                      <li className="our_classroom">
                        <a href="/" className="text-decoration-none  ">
                          IIT JEE Target
                        </a>
                      </li>
                      <li className="our_classroom">
                        <a href="/" className="text-decoration-none ">
                          IIT JEE Crash Courses
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="Jee_head" style={{ letterSpacing: "1px" }}>
                    <ul className=" p-0  our_ul">
                      <li className="our_classroom">
                        |{" "}
                        <a href="/" className="text-decoration-none ">
                          IIT JEE Test Series
                        </a>
                      </li>
                      <li className="our_classroom">
                        |{" "}
                        <a href="/" className="text-decoration-none ">
                          KVPY
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div className="col-sm-6 col-md-4 group_col">
            <article className="post clearfix mb-30 bg-lighter">
              <div className="entry-header">
                <div className="post-thumb thumb">
                  <img
                    src={require("../Assets/image/Aspire IIT & Medical122.jpeg")}
                    alt="Aspire IIT &amp; Medical"
                    className="img-responsive img-fullwidth"
                    width="357px"
                  />{" "}
                </div>
              </div>
              <div className="entry-content pr-10 mt-3">
                <div className="entry-meta no-bg no-border">
                  <h4 className="main_Jee" style={{ color: "#444444" }}>
                    Medical
                  </h4>
                  {/* <p>
                    Leading name with the historic achievement of 35 first
                    Ranks.
                  </p> */}
                </div>
                <div className="mk_enginerring">
                  <div>
                    <ul className=" p-0 our_ul">
                      <li className="our_classroom">
                        <a href="/" className="text-decoration-none ">
                          NEET Target Courses
                        </a>
                      </li>
                      <li className="our_classroom">
                        <a href="/" className="text-decoration-none ">
                          NEET Crash Courses
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div style={{ letterSpacing: "1px" }}>
                    <ul className=" p-0  our_ul">
                      <li className="our_classroom">
                        |{" "}
                        <a href="/" className="text-decoration-none ">
                          NEET Test Series
                        </a>
                      </li>
                      <li className="our_classroom">
                        |{" "}
                        <a href="/" className="text-decoration-none ">
                          KVPY
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  {/* <ul className="pt-2 p-0 ps-4" style={{ listStyle: "disc" }}>
                  <li className="our_classroom">
                    <a href="/" className="text-decoration-none " >
                      
                      NEET Target Courses
                    </a>
                  </li>
                  <li className="our_classroom">
                    <a href="/" className="text-decoration-none ">
                      NEET Crash Courses
                    </a>
                  </li>
                  <li className="our_classroom">
                    <a href="/" className="text-decoration-none ">
                      NEET Test Series
                    </a>
                  </li>
                  <li className="our_classroom">
                    <Link to="/KVPY" className="text-decoration-none ">
                      KVPY
                    </Link>
                  </li>
                </ul> */}
                  {/* <Link to="/" className="nav-link text-danger">
                    MORE DETAIL <BsArrowRightShort />
                  </Link> */}
                </div>
              </div>
            </article>
          </div>
          <div className="col-sm-6 col-md-4 group_col">
            <article className="post clearfix mb-30 bg-lighter">
              <div className="entry-header">
                <div className="post-thumb thumb">
                  <img
                    src={require("../Assets/image/our courses- Foundation.jpg")}
                    alt="Aspire IIT &amp; Medical"
                    className="img-responsive img-fullwidth"
                    width="357px"
                  />{" "}
                </div>
              </div>
              <div className="entry-content pr-10 mt-3">
                <div className="entry-meta no-bg no-border">
                  <h4 className="main_Jee" style={{ color: "#444444" }}>
                    FOUNDATION{" "}
                  </h4>
                  {/* <p>One among the best for excellent performance with XII.</p> */}
                </div>

                <div className="mk_enginerring">
                  <div>
                    <ul className=" p-0  our_ul">
                      <li className="our_classroom">
                        <a href="/" className="text-decoration-none  ">
                          For Class VI
                        </a>
                      </li>
                      <li className="our_classroom">
                        <a href="/" className="text-decoration-none ">
                          For Class VII
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div style={{ letterSpacing: "1px" }}>
                    <ul className=" p-0  our_ul">
                      <li className="our_classroom">
                        |{" "}
                        <a href="/" className="text-decoration-none ">
                          For Class VIII
                        </a>
                      </li>
                      <li className="our_classroom">
                        |{" "}
                        <a href="/" className="text-decoration-none ">
                          For Class IX and X
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  {/* <ul className="pt-2 p-0 ps-4" style={{ listStyle: "disc" }}>
                  <li className="our_classroom">
                    <a href="/" className="text-decoration-none ">
                      For Class VI
                    </a>
                  </li>
                  <li className="our_classroom">
                    <a href="/" className="text-decoration-none ">
                      For Class VII
                    </a>
                  </li>
                  <li className="our_classroom">
                    <a href="/" className="text-decoration-none ">
                      For Class VIII
                    </a>
                  </li>
                  <li className="our_classroom">
                    <a href="/" className="text-decoration-none ">
                      For Class IX and X
                    </a>
                  </li>
                </ul> */}

                  {/* <Link to="/" className="nav-link text-danger">
                    MORE DETAIL
                    <BsArrowRightShort />
                  </Link> */}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCours;
