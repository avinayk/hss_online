import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth", 
        });
      };
  return (
    <div>
      <footer className="d-block py-5">
        <div className="container-xxl">
          <button onClick={scrollToTop}
            className="d-flex flex-column gap-2 justify-content-center align-items-center top_btn"
            to="/"
          >
            <div className="d-block">
              <img
                className="w-100 h-100"
                src={require("../assets/images/top-btn.png")}
                alt="img"
              />
            </div>
            <p>Back to top</p>
          </button>
          <div className="row gy-4">
            <div className="col-md-6">
              <ul>
                <li>
                  <Link to="https://maps.app.goo.gl/Qyj1KL9LszoxF7py7">
                    <div className="d-flex align-items-center gap-3">
                      <div className="d-block icon_fit">
                        <img
                          className="w-100 h-100"
                          src={require("../assets/images/location.png")}
                          alt="img"
                        />
                      </div>
                      <p>Address : 8 Sparks Road Henderson Western Australia, Perth 6166</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="tel:61894375388">
                    <div className="d-flex align-items-center gap-3">
                      <div className="d-block icon_fit">
                        <img
                          className="w-100 h-100"
                          src={require("../assets/images/call.png")}
                          alt="img"
                        />
                      </div>
                      <p>Phone no : +61 894 37 53 88</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="mailTo:sales@hssptyltd.com.au">
                    <div className="d-flex align-items-center gap-3">
                      <div className="d-block icon_fit">
                        <img
                          className="w-100 h-100"
                          src={require("../assets/images/sms.png")}
                          alt="img"
                        />
                      </div>
                      <p>Email : sales@hssptyltd.com.au</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="mailTo:Sales@hssptyldt.com.au">
                    <div className="d-flex align-items-start gap-3">
                      <div className="d-block icon_fit">
                        <img
                          className="w-100 h-100"
                          src={require("../assets/images/time.png")}
                          alt="img"
                        />
                      </div>
                      <div className="d-flex flex-column gap-1">
                        <p>Opening and Closing Hours</p>
                        <div className="d-flex flex-column gap-0">
                          <p>
                            <span>7:00am to 5:00pm</span>
                          </p>
                          <p>
                            <span>Monday to Friday</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-column gap-5 justify-content-center align-items-md-center">
                <ul className="nav_links">
                  <li>
                    <Link to="/about">About us</Link>
                  </li>
                  <li>
                    <Link to="/product">Products</Link>
                  </li>
                  <li>
                    <Link to="/">Fleet Hire</Link>
                  </li>
                  <li>
                    <Link to="/service">Services</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog/ News</Link>
                  </li>
                  <li>
                    <Link to="/blog">Induction</Link>
                  </li>
                </ul>
                <form className="email_input">
                  <div className="d-flex flex-column gap-1">
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="Please enter your Email Id"
                    />
                  </div>
                  <button type="submit">Subscribe Newsletter</button>
                </form>
              </div>
            </div>
            <div className="col-12">
              <h4>Hydraulic Solutions And Sales</h4>
              <div className="d-flex flex-md-row flex-column align-items-md-center gap-3 justify-content-between ft-bottom">
                <Link target="_blank" to="http://victortainment.com.au/" >Website By Victortainment</Link>
                <p>
                  ©Hydraulic Solutions and Sales 2024 - Leaders  in Hydraulic
                  Excellence!
                </p>
                <div className="d-flex align-items-center gap-3">
                  <ul className="d-flex flex-column gap-2">
                    <li>
                      <Link to="/pdf/hss-brochure-compressed-min.pdf" target="_blank" view>Capability Statement
                      </Link>
                    </li>
                    <li>
                      <Link to="/pdf/terms-and-conditions.pdf" target="_blank" view>Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link to="/pdf/Credit-Application-Q1007-F-1I-1.pdf" target="_blank" view>Credit Application</Link>
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
          </div>
        </div>
      </footer>
    </div>
  );
}


 