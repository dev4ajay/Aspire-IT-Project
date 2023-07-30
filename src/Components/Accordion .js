import React, { useState } from "react";

const Accordion = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section>
      <div className="container">
        {" "}
        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => setIsActive(!isActive)}
          >
            <div>{isActive ? "-" : "+"}</div>
            <div>Have A Questions ?</div>
          </div>
          {isActive && (
            <div className="accordion-content">
              <div class="section-content">
                <div class="row">
                  <div class="col-md-12">
                    <form method="post">
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="form-group">
                            <input
                              name="name"
                              class="form-control"
                              placeholder="Enter Name"
                            />
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <input
                              name="email"
                              class="form-control"
                              placeholder="Enter Email"
                            />
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <input
                              name="mobile"
                              class="form-control"
                              placeholder="Enter Mobile"
                            />
                          </div>
                        </div>
                         {/* <div class="col-sm-6">
                          <div class="form-group">
                            <select name="course" class="form-control">
                              <option value="">--Select state--</option>
                              <option value="AN">
                                Andaman and Nicobar Islands
                              </option>
                              <option value="AP">Andhra Pradesh</option>
                              <option value="AR">Arunachal Pradesh</option>
                              <option value="AS">Assam</option>
                              <option value="BR">Bihar</option>
                              <option value="CH">Chandigarh</option>
                              <option value="CT">Chhattisgarh</option>
                              <option value="DN">Dadra and Nagar Haveli</option>
                              <option value="DD">Daman and Diu</option>
                              <option value="DL">Delhi</option>
                              <option value="GA">Goa</option>
                              <option value="GJ">Gujarat</option>
                              <option value="HR">Haryana</option>
                              <option value="HP">Himachal Pradesh</option>
                              <option value="JK">Jammu and Kashmir</option>
                              <option value="JH">Jharkhand</option>
                              <option value="KA">Karnataka</option>
                              <option value="KL">Kerala</option>
                              <option value="LA">Ladakh</option>
                              <option value="LD">Lakshadweep</option>
                              <option value="MP">Madhya Pradesh</option>
                              <option value="MH">Maharashtra</option>
                              <option value="MN">Manipur</option>
                              <option value="ML">Meghalaya</option>
                              <option value="MZ">Mizoram</option>
                              <option value="NL">Nagaland</option>
                              <option value="OR">Odisha</option>
                              <option value="PY">Puducherry</option>
                              <option value="PB">Punjab</option>
                              <option value="RJ">Rajasthan</option>
                              <option value="SK">Sikkim</option>
                              <option value="TN">Tamil Nadu</option>
                              <option value="TG">Telangana</option>
                              <option value="TR">Tripura</option>
                              <option value="UP">Uttar Pradesh</option>
                              <option value="UT">Uttarakhand</option>
                              <option value="WB">West Bengal</option>
                            </select>
                          </div>
                         </div>  */}
                        <div class="col-sm-6">
                          <div class="form-group">
                            <input
                              name="cname"
                              class="form-control"
                              placeholder=" District"
                            />
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <select name="course" class="form-control">
                              <option>--Select Course--</option>
                              <option value="IIT JEE Two Years">
                                IIT JEE Two Years
                              </option>
                              <option value="IIT JEE One Year">
                                IIT JEE One Year
                              </option>
                              <option value="IIT JEE Target">
                                IIT JEE Target
                              </option>
                              <option value="IIT JEE Crash Courses">
                                IIT JEE Crash Courses
                              </option>
                              <option value="IIT JEE Test Series">
                                IIT JEE Test Series
                              </option>
                              <option value="KVPY">KVPY</option>
                              <option value="NEET Two Year Courses">
                                NEET Two Year Courses
                              </option>
                              <option value="NEET One Year Courses">
                                NEET One Year Courses
                              </option>
                              <option value="NEET Target Courses">
                                NEET Target Courses
                              </option>
                              <option value="NEET Crash Courses">
                                NEET Crash Courses
                              </option>
                              <option value="NEET Test Series">
                                NEET Test Series
                              </option>
                              <option value="KVPY Medical">KVPY Medical</option>
                              <option value="For Class VI">For Class VI</option>
                              <option value="For Class VII">
                                For Class VII
                              </option>
                              <option value="For Class VIII">
                                For Class VIII
                              </option>
                              <option value="For Class IX and X">
                                For Class IX and X
                              </option>
                              <option value="For Class X">For Class X</option>
                            </select>
                          </div>
                        </div>
                        {/* <div class="col-sm-6">
                          <div class="form-group">
                            <select name="centre" class="form-control">
                              <option value="">--Select Centre--</option>
                              <option value="Shimla">Shimla</option>
                              <option value="Solan">Solan</option>
                            </select>
                          </div>
                        </div> */}
                      </div>
                      <div className="col-sm-7 d-flex align-items-baseline gap-3">
                        <input type="checkbox"></input>

                        <p>
                          I agree to receive information regarding my submitted
                          enquiry on Careerline Coaching Institute.*
                        </p>
                      </div>
                      <div class="form-group text-center mb-0">
                        <input
                          id="form_botcheck"
                          class="form-control"
                          type="hidden"
                          value=""
                        />
                        <button
                          data-loading-text="Please wait..."
                          class="btn btn-colored btn-rounded btn-theme-colored pl-30 pr-30"
                          type="submit"
                        >
                          Submit{" "}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Accordion;
