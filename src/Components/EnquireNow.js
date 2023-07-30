import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";

const EnquireNow = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {" "}
      <button className="btn-enquire" onClick={handleShow}>
        ENQUIRE NOW
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title
            className="main_form"
            style={{
              color: "tomato",
            }}
          >
            Enquire Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="form-group label-floating reg_name_div has-error">
            <div class="input text">
              <input
                type="text"
                name="name"
                id="Name"
                autocomplete="off"
                class="form-control widget_input"
                maxlength="255"
                minlength="1"
                placeholder="Enter Name *"
                value=""
              />
            </div>
          </div>
          <div class="form-group label-floating Email_email">
            <div class="input text">
              <input
                type="text"
                name="Email"
                id="Email"
                autocomplete="off"
                maxlength="50"
                class="form-control widget_input"
                data-type="text"
                placeholder="Enter Email Address *"
                value=""
              />
            </div>
          </div>
          <div class="form-grop">
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">+91</div>
              </div>
              <input
                type="number"
                class="form-control"
                id="inlineFormInputGroup"
                placeholder="Enter Mobile Number"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-12  mt-2">
              <input
                type="text"
                class="form-control"
                id="validationCustom03"
                placeholder=" District *"
                required
              />
            </div>
            {/* <div class="col-md-6  mt-2">
              <div class="form-group">
                <select name="course" class="form-control">
                  <option value="">Select State</option>
                  <option value="AN">Andaman and Nicobar Islands</option>
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
            </div> */}
            
          </div>

          <div class="form-row">
            <div class="col-md-12 mt-3">
              <div class="form-group">
                <select name="course" class="form-control">
                  <option>Select Course</option>
                  <option value="IIT JEE Two Years">IIT JEE Two Years</option>
                  <option value="IIT JEE One Year">IIT JEE One Year</option>
                  <option value="IIT JEE Target">IIT JEE Target</option>
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
                  <option value="NEET Crash Courses">NEET Crash Courses</option>
                  <option value="NEET Test Series">NEET Test Series</option>
                  <option value="KVPY Medical">KVPY Medical</option>
                  <option value="For Class VI">For Class VI</option>
                  <option value="For Class VII">For Class VII</option>
                  <option value="For Class VIII">For Class VIII</option>
                  <option value="For Class IX and X">For Class IX and X</option>
                  <option value="For Class X">For Class X</option>
                </select>
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-12 mb-3">
              <input
                type="text"
                class="form-control"
                id="validationTooltip01"
                placeholder="Enter Text as Shown"
                value=""
                required
              />{" "}
            </div>
          </div>

          <div class="form-group">
            <div class="form-check">
              <input
                class="form-check-input "
                type="checkbox"
                value=""
                id="invalidCheck3"
                required
              />
              <label class="form-check-label">
                I agree to receive information reqarding my submitted enquiry on
                Careerline Coaching institute.*
              </label>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="submit_btn">
            <button
              class="btn btn-primary "
              onClick={handleClose}
              type="submit"
            >
              SUBMIT
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EnquireNow;
