import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Productive from "../components/Productive";
import aboutBanner from "../assets/images/about_banner.jpg";
import aboutVideo from "../assets/images/about_video.mp4";

export default function About() {
  return (
    <div>
      <Header />
      <section
        className="common_banner d-block"
        style={{ backgroundImage: `url(${aboutBanner})` }}
      >
        <div className="container-xxl h-100">
          <div className="d-flex justify-content-start h-100 align-items-center position-relative z-3">
            <h1>
              Hydraulic Experts with a Vision: Driving Efficiency, Powering
              Progress
            </h1>
          </div>
        </div>
      </section>
      <section className="about_info d-block p-md-5 py-5">
        <div className="container-xxl">
          <div className="d-flex flex-column gap-4">
            <p>
              We are proud to partner with clients across a diverse array of
              industries, including marine, mining, waste management,
              engineering, manufacturing, agriculture, shipbuilding, underwater
              mining, and many more. Our extensive experience allows us to
              deliver tailored solutions that meet the unique challenges of each
              sector, ensuring success and satisfaction for every project we
              undertake."
            </p>
            <p>
              We are proud to partner with clients across a diverse array of
              industries, including marine, mining, waste management,
              engineering, manufacturing, agriculture, shipbuilding, underwater
              mining, and many more. Our extensive experience allows us to
              deliver tailored solutions that meet the unique challenges of each
              sector, ensuring success and satisfaction for every project we
              undertake."
            </p>
            <p>
              We are proud to partner with clients across a diverse array of
              industries, including marine, mining, waste management,
              engineering, manufacturing, agriculture, shipbuilding, underwater
              mining, and many more. Our extensive experience allows us to
              deliver tailored solutions that meet the unique challenges of each
              sector, ensuring success and satisfaction for every project we
              undertake."
            </p>
          </div>
        </div>
      </section>
      <section className="d-block meet_team pb-5">
        <div className="container-xxl">
          <div className="d-flex flex-column align-items-center justify-content-center gap-0">
            <h2>Meet The Team </h2>
            <h3>Different Strengths, One Mission</h3>
          </div>
          <div className="row pt-5 gy-4">
            <div className="col-md-3 col-sm-6">
              <div className="d-flex flex-column gap-3 team-Info">
                <div className="d-block team_image">
                  <img
                    className="w-100 h-100"
                    src={require("../assets/images/img12.png")}
                    alt="img"
                  />
                </div>
                <div className="d-flex flex-column gap-2 px-2">
                  <h5>Lorem Ipsum</h5>
                  <p>CEO & Co-Founder</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="d-flex flex-column gap-3 team-Info">
                <div className="d-block team_image">
                  <img
                    className="w-100 h-100"
                    src={require("../assets/images/img12.png")}
                    alt="img"
                  />
                </div>
                <div className="d-flex flex-column gap-2 px-2">
                  <h5>Lorem Ipsum</h5>
                  <p>CEO & Co-Founder</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="d-flex flex-column gap-3 team-Info">
                <div className="d-block team_image">
                  <img
                    className="w-100 h-100"
                    src={require("../assets/images/img12.png")}
                    alt="img"
                  />
                </div>
                <div className="d-flex flex-column gap-2 px-2">
                  <h5>Lorem Ipsum</h5>
                  <p>CEO & Co-Founder</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="d-flex flex-column gap-3 team-Info">
                <div className="d-block team_image">
                  <img
                    className="w-100 h-100"
                    src={require("../assets/images/img12.png")}
                    alt="img"
                  />
                </div>
                <div className="d-flex flex-column gap-2 px-2">
                  <h5>Lorem Ipsum</h5>
                  <p>CEO & Co-Founder</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="d-flex flex-column gap-3 team-Info">
                <div className="d-block team_image">
                  <img
                    className="w-100 h-100"
                    src={require("../assets/images/img12.png")}
                    alt="img"
                  />
                </div>
                <div className="d-flex flex-column gap-2 px-2">
                  <h5>Lorem Ipsum</h5>
                  <p>CEO & Co-Founder</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="d-flex flex-column gap-3 team-Info">
                <div className="d-block team_image">
                  <img
                    className="w-100 h-100"
                    src={require("../assets/images/img12.png")}
                    alt="img"
                  />
                </div>
                <div className="d-flex flex-column gap-2 px-2">
                  <h5>Lorem Ipsum</h5>
                  <p>CEO & Co-Founder</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="d-flex flex-column gap-3 team-Info">
                <div className="d-block team_image">
                  <img
                    className="w-100 h-100"
                    src={require("../assets/images/img12.png")}
                    alt="img"
                  />
                </div>
                <div className="d-flex flex-column gap-2 px-2">
                  <h5>Lorem Ipsum</h5>
                  <p>CEO & Co-Founder</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="d-flex flex-column gap-3 team-Info">
                <div className="d-block team_image">
                  <img
                    className="w-100 h-100"
                    src={require("../assets/images/img12.png")}
                    alt="img"
                  />
                </div>
                <div className="d-flex flex-column gap-2 px-2">
                  <h5>Lorem Ipsum</h5>
                  <p>CEO & Co-Founder</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="d-flex flex-column gap-3 team-Info">
                <div className="d-block team_image">
                  <img
                    className="w-100 h-100"
                    src={require("../assets/images/img12.png")}
                    alt="img"
                  />
                </div>
                <div className="d-flex flex-column gap-2 px-2">
                  <h5>Lorem Ipsum</h5>
                  <p>CEO & Co-Founder</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="d-flex flex-column gap-3 team-Info">
                <div className="d-block team_image">
                  <img
                    className="w-100 h-100"
                    src={require("../assets/images/img12.png")}
                    alt="img"
                  />
                </div>
                <div className="d-flex flex-column gap-2 px-2">
                  <h5>Lorem Ipsum</h5>
                  <p>CEO & Co-Founder</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="d-flex flex-column gap-3 team-Info">
                <div className="d-block team_image">
                  <img
                    className="w-100 h-100"
                    src={require("../assets/images/img12.png")}
                    alt="img"
                  />
                </div>
                <div className="d-flex flex-column gap-2 px-2">
                  <h5>Lorem Ipsum</h5>
                  <p>CEO & Co-Founder</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="d-flex flex-column gap-3 team-Info">
                <div className="d-block team_image">
                  <img
                    className="w-100 h-100"
                    src={require("../assets/images/img12.png")}
                    alt="img"
                  />
                </div>
                <div className="d-flex flex-column gap-2 px-2">
                  <h5>Lorem Ipsum</h5>
                  <p>CEO & Co-Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="d-block vision_mission pb-5">
        <div className="container-xxl">
          <div className="row gy-3">
            <div className="col-lg-4">
              <div class="Vis_mis card">
                <div class="card-inner">
                  <div class="card-front">
                    <h5>Our Vision </h5>
                  </div>
                  <div class="card-back">
                    <h5>Our Vision </h5>
                    <p>
                      To deliver top-quality hydraulic solutions and exceptional
                      service, leveraging our expertise and commitment to
                      innovation. We aim to support our clients by providing
                      reliable, efficient, and tailored equipment and services
                      that drive their success and meet their unique needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex justify-content-between h-100 align-items-center">
                <div className="r-right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 203 483"
                    fill="none"
                  >
                    <path
                      d="M0 0H203L84.2812 483H0V0Z"
                      fill="url(#paint0_linear_178_109)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_178_109"
                        x1="101.5"
                        y1="0"
                        x2="101.5"
                        y2="483"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#2A2979" />
                        <stop offset="1" stop-color="#4D4CDF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <button className="contact_btn">Contact us Today</button>
                </div>
                <div className="r-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 190 483"
                    fill="none"
                  >
                    <path
                      d="M190 0H105.231L0 483H190V0Z"
                      fill="url(#paint0_linear_178_110)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_178_110"
                        x1="95"
                        y1="0"
                        x2="95"
                        y2="483"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#2A2979" />
                        <stop offset="1" stop-color="#4D4CDF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
            <div class="Vis_mis card">
                <div class="card-inner">
                  <div class="card-front">
                    <h5>Our Mission </h5>
                  </div>
                  <div class="card-back">
                    <h5>Our Mission </h5>
                    <p>
                    To be the leading provider of hydraulic solutions, recognized for our innovation, reliability, and customer-centric approach. We envision a future where our expertise and advanced technology set new industry standards, driving progress and efficiency across all sectors we serve.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="d-block about_video">
      <video
          className="h-100"
          autoPlay
          muted
          loop
          playsInline
          id="myVideo"
        >
          <source
            className="d-block w-100 h-100 object-fit-cover"
            src={aboutVideo}
            type="video/mp4"
          />
        </video>
      </section>
      <Productive/>
      <Footer />
    </div>
  );
}
