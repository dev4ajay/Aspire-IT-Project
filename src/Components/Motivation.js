import React from "react";

function Motivation() {
  return (
    <section className="main_motivation  mt-5 mb-5">
      <div className="container ">
        <div className="motivation_head text-center text-white pt-5">
          <p>
            <span class="subtitle text-uppercase" style={{ color: "white" }}>
              KEY OF SUCCESS
            </span>
          </p>
          <h2>Motivation , Inspiration & Celebration</h2>
        </div>

        <div className="row pt-5 ">
          <div className="col-md-3  ">
            <img src={require("../Assets/image/1-MEET THE NEET 2021.jpg")} className="Motivation_img" />
            <div class="elementor-widget-container2 ">
              <h2 class="elementor-heading heading2 pb-0">
                <a href="#" target="_blank">
                MEET THE NEET<br></br> 2021
                </a>
              </h2>
            </div>
          </div>

          <div className="col-md-3 ">
            <img src={require("../Assets/image/2-HIMACHAL ACHIEVERS AWARD -2021.jpg")} className="Motivation_img" />
            <div class="elementor-widget-container2 ">
              <h2 class="elementor-heading  heading2 pb-0">
                <a href="https://flic.kr/s/aHsmXdK7GB" target="_blank">
                HIMACHAL ACHIEVERS<br></br> AWARD -2021
                </a>
              </h2>
            </div>
          </div>
          <div className="col-md-3 ">
            <img src={require("../Assets/image/3-MEET THE NEET -2022.jpg")}  className="Motivation_img"/>
            <div class="elementor-widget-container2 ">
              <h2 class="elementor-heading heading2  pb-0">
                <a href="https://flic.kr/s/aHsmXe3Cjy" target="_blank">
                MEET THE NEET <br></br> 
                2022
                </a>
              </h2>
            </div>
          </div>
          <div className="col-md-3 ">
            <img src={require("../Assets/image/4-MEET THE ASPIRE BOH -2022.jpg")}  className="Motivation_img"/>
            <div class="elementor-widget-container2   mb-5">
            <h2 class="elementor-heading heading2  pb-0">
                <a href="https://flic.kr/s/aHsmLbwh75" target="_blank">
                MEET THE ASPIRE<br></br>
                 BOH -2022
                </a>
              </h2>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default Motivation;
