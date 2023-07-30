import React from "react";

function Main() {
  return (
    <section className="main">
      <div className="container main_grup mt-5">
        <div className="row">
          <div className="col-md-3">
            <div className="grop-head">
              <div>
                <i class="fa-regular fa-bookmark main_icon"></i>
              </div>
              <div>
                <h5 className="grop_h">Well-Scheduled Classes</h5>
                <p>
                  Syllabus is completed well in time without any burden of extra
                  classes.
                </p>
              </div>
            </div>
            <div className="grop-head">
              <div>
                {" "}
                <i class="fa-regular fa-bookmark main_icon"></i>
              </div>
              <div>
                <h5 className="grop_h">Errorless Test Series</h5>
                <p>
                  More than 100 tests, thousands of questions and above all
                  errorless papers.
                </p>
              </div>
            </div>
            <div className="grop-head">
              <div>
                {" "}
                <i class="fa-solid fa-user main_icon"></i>
              </div>
              <div>
                <h5 className="grop_h">Boost up for student</h5>
                <p>
                  Three individual meeting of every student with Director two
                  parents meet and timely motivation and medal ceremonies.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img src={require("../Assets/image/above-motivation.png")} />
          </div>

          <div className="col-md-3 group_col">
            <div>
              <div className="grop-head">
                <div>
                  {" "}
                  <i class="fa-solid fa-graduation-cap main_icon"></i>
                </div>
                <div>
                  <h5 className="grop_h">Home-like Atmosphere</h5>
                  <p className="grop_h">
                    Round the clock parental care keeps the students stress
                    free, the need of the day.
                  </p>
                </div>
              </div>
              <div className="grop-head">
                <div>
                  {" "}
                  <i class="fa-regular fa-lightbulb main_icon"></i>
                </div>
                <div>
                  <h5>Generator of New Ideas</h5>
                  <p>
                    More than 100 tests, thousands of questions and above all
                    errorless papers.
                  </p>
                </div>
              </div>

              <div className="grop-head">
                <div>
                  <i class="fa-regular fa-newspaper main_icon"></i>
                </div>
                <div>
                  <h5 className="grop_h">Outstanding Results</h5>
                  <p>
                    The excellence of CLC is proved every year whether it is the
                    matter of success ratio, number of selections or top ranks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
