import React from "react";

function LatestNews() {
  return (
    <section className="Latest">
      <div className="container Youtube_video">
        <div className="col-md-4 ">
          <h2 className="Latest-h pt-3">Latest Videos</h2>

          <iframe
            width="360"
            height="202"
            src="https://www.youtube.com/embed/k7YRdzirDKE"
            title="अभिवावको का अटूट  विश्वास,  बनाता है CLC को सबसे अलग , सबसे  खास..."
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="col-md-4">
          <iframe
            width="360"
            height="202"
            src="https://www.youtube.com/embed/nJNSHVQrU3I"
            title="सफल CLCians की दास्तां...सुजल ने किया अपने माता पिता  के सपने को साकार...."
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <div>
          <div
            class="elementor-element elementor-element-3f41c4a elementor-widget elementor-widget-elementskit-button"
            data-id="3f41c4a"
            data-element_type="widget"
            data-widget_type="elementskit-button.default"
          >
            <div class="elementor-widget-container btn-Latest">
              <button type="button" class="btn btn-primary btn-lg ">
                <a
                  href="#"
                  target="_blank"
                  class="elementskit-btn  whitespace--normal"
                >
                  <i aria-hidden="true" class="fas fa-file-video "></i>
                  View All Videos
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container Youtube_video">
        <div className="col-md-4 ">
          <h2 className="Latest-h pt-3">Latest Events</h2>

          <iframe
            width="360"
            height="202"
            src="https://www.youtube.com/embed/y5wV3OFiPis"
            title="CLC SIKAR........POWER OF MEDITATION AND GOOD ENVIRNMENT.."
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="col-md-4">
          <iframe
            width="360"
            height="202"
            src="https://www.youtube.com/embed/DQbwNXayOfg"
            title="LIVE : 583 परिणामों की प्रत्यक्षता... गुणवत्ता का सत्यापन...Celebration STSE Result-2022"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <div>
          <div
            class="elementor-element elementor-element-3f41c4a elementor-widget elementor-widget-elementskit-button"
            data-id="3f41c4a"
            data-element_type="widget"
            data-widget_type="elementskit-button.default"
          >
            <div class="elementor-widget-container btn-Latest">
              <button type="button" class="btn btn-primary btn-lg  ">
                <a
                  href="#"
                  target="_blank"
                  class="elementskit-btn  whitespace--normal"
                >
                  <i aria-hidden="true" class="fas fa-file-video "></i>
                  View All Events{" "}
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container Youtube_video mt-3">
        <div className="col-md-4  ">
          <div
            class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-ef68730"
            data-id="ef68730"
            data-element_type="column"
          >
            <div class="elementor-widget-wrap elementor-element-populated">
              <div
                class="elementor-element elementor-element-7dd6086 elementor-widget elementor-widget-heading"
                data-id="7dd6086"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div class="elementor-widget-container">
                  <h2 class="elementor-heading-title elementor-size-default social_h2">
                    Social Buzz
                  </h2>{" "}
                </div>
              </div>
              <div
                class="elementor-element elementor-element-31c3875 elementor-widget elementor-widget-text-editor"
                data-id="31c3875"
                data-element_type="widget"
                data-widget_type="text-editor.default"
              >
                <div class="elementor-widget-container">
                  <p>
                    <iframe
                      loading="lazy"
                      style={{ border: "none", overflow: "hidden" }}
                      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fclcsikar%2F&amp;tabs=timeline&amp;width=340&amp;height=450&amp;small_header=true&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId"
                      width="340"
                      height="415"
                      frameborder="0"
                      scrolling="no"
                      allowfullscreen="allowfullscreen"
                    ></iframe>
                  </p>{" "}
                </div>
              </div>
              <div
                class="elementor-element elementor-element-87e7120 elementor-widget elementor-widget-elementskit-button"
                data-id="87e7120"
                data-element_type="widget"
                data-widget_type="elementskit-button.default"
              >
                <div class="elementor-widget-container  Latest_btn ">
                  <button type="button" class="btn btn-primary btn-lg ">
                    <a
                      href="#"
                      target="_blank"
                      class="elementskit-btn  whitespace--normal"
                    >
                      <i aria-hidden="true" class="fab fa-facebook-square"></i>
                      View Social Profile
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </section>
  );
}

export default LatestNews;
