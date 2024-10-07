import React, { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import fleetBanner from "../assets/images/contact_banner.jpg";
import 'font-awesome/css/font-awesome.min.css';

export default function Contact() {
  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive);
  };
  return (
    <div>
      <Header />
      <section
        className="fleet_banner d-block"
        style={{ backgroundImage: `url(${fleetBanner})` }}
      >
        <div className="container-xxl h-100">
          <div className="d-flex flex-column gap-1 justify-content-center h-100 align-items-start position-relative z-3">
            <h1 className="text-start">
              Get in touch
            </h1>
            <p>We’re always open to talk to good people</p>
          </div>
        </div>
      </section>
      <section className="contact_main d-block py-5">
        <div className="container-xxl">
          <div className="row gy-5">
            <div className="col-12">
              <div className="row gy-4">
                <div className="col-md-3">
                  <div className="d-flex align-items-center gap-3 contact_call">
                    <div className="contact_icon">
                      <svg xmlns="http://www.w3.org/2000/svg" height={'30'} viewBox="0 0 512 512"><path d="M497.4 361.8l-112-48a24 24 0 0 0 -28 6.9l-49.6 60.6A370.7 370.7 0 0 1 130.6 204.1l60.6-49.6a23.9 23.9 0 0 0 6.9-28l-48-112A24.2 24.2 0 0 0 122.6 .6l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.3 24.3 0 0 0 -14-27.6z" /></svg>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <h4>Call Us</h4>
                      <Link to="tel:+61894375388">+61 8 9437 5388</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="d-flex align-items-center gap-3 contact_call">
                    <div className="contact_icon">
                      <svg xmlns="http://www.w3.org/2000/svg" height={'30'} viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <h4>Email</h4>
                      <Link to="MailTo:sales@hssptyltd.com.au">sales@hssptyltd.com.au
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="d-flex align-items-center gap-3 contact_call">
                    <div className="contact_icon">
                      <svg xmlns="http://www.w3.org/2000/svg" height={'30'} viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <h4>Location</h4>
                      <Link to="/">8 Sparks Road
                        Henderson WA 6166
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="d-flex align-items-center gap-3 contact_call">
                    <div className="contact_icon">
                      <svg xmlns="http://www.w3.org/2000/svg" height={'30'} viewBox="0 0 512 512"><path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9L0 168c0 13.3 10.7 24 24 24l110.1 0c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24l0 104c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65 0-94.1c0-13.3-10.7-24-24-24z" /></svg>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <h4>Time</h4>
                      <Link to="/">Monday to Friday 7:30 AM to 5:00 PM
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-12">
              <form>
                <div className="d-flex flex-column gap-4">
                  <div className="d-flex flex-md-row flex-column align-items-center gap-4">
                    <div className="d-flex flex-column gap-1 w-100">
                      <label>Name</label>
                      <input type="text" placeholder="Enter Your Name" />
                    </div>
                    <div className="d-flex flex-column gap-1 w-100">
                      <label>Phone Number</label>
                      <input type="text" placeholder="Enter Your Phone Number" />
                    </div>
                    <div className="d-flex flex-column gap-1 w-100">
                      <label>Email</label>
                      <input type="email" placeholder="Enter Your Email" />
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-1">
                    <label>Message</label>
                    <textarea col={5} rows={5} placeholder="Enter Message"></textarea>
                  </div>
                  <div className="d-flex flex-md-row flex-column align-items-center gap-5 justify-content-between">
                    <span>All the fields are required</span>
                    <button className="sub_message">Submit Message</button>
                  </div>
                </div>
              </form>
            </div> */}
          </div>
        </div>
      </section>
      {/* <section className="contact_main d-block py-5">
        <div className="container-xxl d-flex justify-content-center align-items-center h-100">
          <div className="row gy-4">
            <div className="col-md-6">
              <div className="contact_left">
                <div className="d-block bg_image">
                  <svg
                    viewBox="0 0 564 517"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_f_417_19)">
                      <ellipse
                        cx="282"
                        cy="258.5"
                        rx="278"
                        ry="254.5"
                        fill="url(#paint0_linear_417_19)"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_417_19"
                        x="0"
                        y="0"
                        width="564"
                        height="517"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="2"
                          result="effect1_foregroundBlur_417_19"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_417_19"
                        x1="81.7303"
                        y1="42.5"
                        x2="470.327"
                        y2="449.023"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.0452717" stop-color="white" />
                        <stop
                          offset="1"
                          stop-color="#205AEF"
                          stop-opacity="0.55"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="d-flex flex-column gap-2 bg_image_text">
                    <div className="d-flex align-items-center gap-2">
                      <h3>SELL</h3>
                      <h5>YEAH</h5>
                    </div>
                    <h4> OPPORTUNITY IS <span className="coming"> COMING </span> <span className="calling">
                      CALLING
                    </span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-block contact_right m-auto">
                <img
                  className="w-100 h-100"
                  src={require("../assets/images/contact_main.png")}
                  alt="img"
                />
              </div>

            </div>

            <div className="col-12">
              <div className="contact_bot d-flex flex-column justify-content-center align-items-center gap-4">
                <h5>Contact us Now </h5>
                <ul className="d-flex flex-column gap-3">
                  <li>
                    <Link
                      className="d-flex align-items-center gap-3"
                      to="tel:+61 894 37 53 88"
                    >
                      <div className="d-block contact_icon">
                        <img
                          className="w-100 h-100"
                          src={require("../assets/images/contact_call.png")}
                          alt="img"
                        />
                      </div>
                      <span>+61 894 37 53 88</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="d-flex align-items-center gap-3"
                      to="mailTo:hssptyltd.com.au"
                    >
                      <div className="d-block contact_icon">
                        <img
                          className="w-100 h-100"
                          src={require("../assets/images/contact_sms.png")}
                          alt="img"
                        />
                      </div>
                      <span>hssptyltd.com.au</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="d-flex align-items-center gap-3" to="/">
                      <div className="d-block contact_icon">
                        <img
                          className="w-100 h-100"
                          src={require("../assets/images/contact_location.png")}
                          alt="img"
                        />
                      </div>
                      <span>8 Sparks rd Henderson Western Australia 6166</span>
                    </Link>
                  </li>
                  <li>
                    <div className="d-flex align-items-center gap-3">
                      <div className="d-block contact_icon">
                        <img
                          className="w-100 h-100"
                          src={require("../assets/images/contact_time.png")}
                          alt="img"
                        />
                      </div>
                      <span>Monday to Friday 7:30 AM to 5:00 PM</span>
                    </div>
                  </li>
                </ul>
                <div className="text-center">
                  <h6>
                    Want to Enquire by filling form?{" "}
                    <button onClick={ToggleClass}>click here</button>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className={isActive ? "d-none" : "d-block"} id="contact_pop">
        <div className="container-xxl">
          <form>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex flex-column gap-2">
                <label for="name">Name</label>
                <input id="name" type="text" placeholder="" />
              </div>
              <div className="d-flex flex-column gap-2">
                <label for="email">Email Id</label>
                <input id="email" type="email" placeholder="" />
              </div>
              <div className="d-flex flex-column gap-2">
                <label for="name">Phone number</label>
                <input id="name" type="text" placeholder="" />
              </div>
              <div className="d-flex flex-column gap-2">
                <label for="name">Comments</label>
                <textarea rows="3"></textarea>
              </div>
              <div className="d-flex justify-content-center align-items-center ">
                <button type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <footer className="py-3 footer_contact">
        <div className="container-xxl">
          <div className="d-flex flex-md-row flex-column align-items-md-center gap-3 justify-content-between ft-bottom">
            <p>Website By Victortainment</p>
            <p>
              ©Hydraulic Solutions and Sales 2024 - Leanders in Hydraulic
              Excellence!
            </p>
            <div className="d-flex align-items-center gap-3">
              <ul className="d-flex flex-column gap-2">
                <li>
                  <Link to="/">Capability Statement</Link>
                </li>
                <li>
                  <Link to="/">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/">Credit Application</Link>
                </li>
              </ul>
              <div className="d-block ft-logo">
                <img
                  className="w-100 h-100"
                  src={require("../assets/images/ft-logo.png")}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
