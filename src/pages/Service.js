import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Productive from "../components/Productive";
import ViewMore from "../components/ViewMore";

export default function Service() {
  return (
    <div>
      <Header />
      <section className="d-block service_banner py-5">
        <div className="container-xxl">
          <div className="row gy-5 h-100 position-relative">
            <div className="col-md-12">
              <div className="service_info_head flex-column d-flex justify-content-center align-items-center gap-3">
                <h1>Our Services</h1>
                <div className="d-flex flex-column gap-2">
                  <p>
                    At Hydraulic Solutions and Sales, we offer many services
                    from hydraulic repairs and sales to troubleshooting{" "}
                    <Link to="/"> hydraulic systems </Link> and custom design of
                    power units and cylinders. We can assist with hydraulic
                    system maintenance, reconditioning and hydraulic repairs
                    Australia wide.
                  </p>
                  <p>
                    For more information about our hydraulic repairs and field
                    services, get in touch with the team at Hydraulic Solutions
                    and Sales today.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row align-items-center justify-content-start gy-4">
                <div className="col-lg-4 col-md-6">
                  <Link className="text_h3" to="/service-info/Power-Unit-Hydraulic-Cylinder-and-Manifold-Design-&-Supply">
                    <div className="service_icon">
                      <img
                        className="w-100 h-100"
                        src={require("../assets/images/supply-chain.png")}
                        alt="img"
                      />
                    </div>
                    <h3>
                      Power Unit, Hydraulic Cylinder and Manifold Design & Supply
                    </h3>
                    <ViewMore />
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6">
                  <Link className="text_h3" to="/service-info/Hydraulic-Application-Engineering">
                    <div className="service_icon">
                      <img
                        className="w-100 h-100"
                        src={require("../assets/images/hydraulic-energy.png")}
                        alt="img"
                      />
                    </div>
                    <h3>
                      Hydraulic Application Engineering
                    </h3>
                    <ViewMore />
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6">
                  <Link className="text_h3" to="/service-info/Reconditioning-servicing-and-testing">
                    <div className="service_icon">
                      <img
                        className="w-100 h-100"
                        src={require("../assets/images/mechanic.png")}
                        alt="img"
                      />
                    </div>
                    <h3>
                      Reconditioning, servicing, and testing
                    </h3>
                    <ViewMore />
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6">
                  <Link className="text_h3" to="/service-info/On-site-fluid-contamination-analysis">
                    <div className="service_icon">
                      <img
                        className="w-100 h-100"
                        src={require("../assets/images/maintenance.png")}
                        alt="img"
                      />
                    </div>
                    <h3>
                      On-site fluid contamination analysis, hydraulic system maintenance, and scheduled hydraulic servicing
                    </h3>
                    <ViewMore />
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6">
                  <Link className="text_h3" to="/service-info/On-site-installations">
                    <div className="service_icon">
                      <img
                        className="w-100 h-100"
                        src={require("../assets/images/trub.png")}
                        alt="img"
                      />
                    </div>
                    <h3>
                      On-site installations, commissioning, troubleshooting, and break-down repairs
                    </h3>
                    <ViewMore />
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6">
                  <Link className="text_h3" to="/service-info/Standard-or-exotic-hose-assembly-supply">
                    <div className="service_icon">
                      <img
                        className="w-100 h-100"
                        src={require("../assets/images/inspection.png")}
                        alt="img"
                      />
                    </div>
                    <h3>
                      Standard or exotic hose assembly supply, testing, inspections and certification
                    </h3>
                    <ViewMore />
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6">
                  <Link className="text_h3" to="/service-info/Hydraulic-Training">
                    <div className="service_icon">
                      <img
                        className="w-100 h-100"
                        src={require("../assets/images/water.png")}
                        alt="img"
                      />
                    </div>
                    <h3>
                      Hydraulic Training
                    </h3>
                    <ViewMore />
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6">
                  <Link className="text_h3" to="/service-info/Fully-equipped-Hydraulic-Workshop-facilities">
                    <div className="service_icon">
                      <img
                        className="w-100 h-100"
                        src={require("../assets/images/workshop.png")}
                        alt="img"
                      />
                    </div>
                    <h3>
                      Fully equipped Hydraulic Workshop facilities
                    </h3>
                    <ViewMore />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="d-block service_banner py-5">
        <div className="container-xxl h-100">
          <div className="row h-100 position-relative">
            <div className="col-xl-6 mx-auto h-100">
              <div className="service_text flex-column d-flex justify-content-center align-items-center gap-3">
                <h1>Our Services</h1>
                <div className="d-flex flex-column gap-2">
                  <p>
                    At Hydraulic Solutions and Sales, we offer many services
                    from hydraulic repairs and sales to troubleshooting{" "}
                    <Link to="/"> hydraulic systems </Link> and custom design of
                    power units and cylinders. We can assist with hydraulic
                    system maintenance, reconditioning and hydraulic repairs
                    Australia wide.
                  </p>
                  <p>
                    For more information about our hydraulic repairs and field
                    services, get in touch with the team at Hydraulic Solutions
                    and Sales today.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex flex-wrap align-items-center justify-content-center gap-3">
                <Link className="text_box1 text_h3" to="/service-info">
                  <svg
                    width="341"
                    height="349"
                    viewBox="0 0 316 314"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="158"
                      cy="157"
                      rx="158"
                      ry="157"
                      fill="#2A2979"
                    />
                  </svg>
                  <h3>
                    Power Unit, Hydraulic Cylinder and Manifold Design & Supply
                  </h3>
                </Link>
                <Link className="text_box2 text_h3" to="/service-info">
                  <svg
                    width="266"
                    height="267"
                    viewBox="0 0 316 314"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="158"
                      cy="157"
                      rx="158"
                      ry="157"
                      fill="#2A2979"
                    />
                  </svg>
                  <h3>On-site Fluid Contamination Analysis</h3>
                </Link>
                <Link className="text_box3 text_h3" to="/service-info">
                  <svg
                    width="316"
                    height="314"
                    viewBox="0 0 316 314"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="158"
                      cy="157"
                      rx="158"
                      ry="157"
                      fill="#2A2979"
                    />
                  </svg>
                  <h3>On-site Fluid Contamination Analysis</h3>
                </Link>
                <Link className="text_box4 text_h3" to="/service-info">
                  <svg
                    width="270"
                    height="271"
                    viewBox="0 0 316 314"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="158"
                      cy="157"
                      rx="158"
                      ry="157"
                      fill="#2A2979"
                    />
                  </svg>
                  <h3>On-site Fluid Contamination Analysis</h3>
                </Link>
                <Link className="text_box5 text_h3" to="/service-info">
                  <svg
                    width="221"
                    height="221"
                    viewBox="0 0 316 314"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="158"
                      cy="157"
                      rx="158"
                      ry="157"
                      fill="#2A2979"
                    />
                  </svg>
                  <h3>On-site Fluid Contamination Analysis</h3>
                </Link>
                <Link className="text_box6 text_h3" to="/service-info">
                  <svg
                    width="341"
                    height="341"
                    viewBox="0 0 316 314"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="158"
                      cy="157"
                      rx="158"
                      ry="157"
                      fill="#2A2979"
                    />
                  </svg>
                  <h3>Reconditioning, Servicing, Testing </h3>
                </Link>
                <Link className="text_box7 text_h3" to="/service-info">
                  <svg
                    width="340"
                    height="340"
                    viewBox="0 0 316 314"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="158"
                      cy="157"
                      rx="158"
                      ry="157"
                      fill="#2A2979"
                    />
                  </svg>
                  <h3>On-site Fluid Contamination Analysis</h3>
                </Link>
                <Link className="text_box8 text_h3" to="/service-info">
                  <svg
                    width="266"
                    height="266"
                    viewBox="0 0 316 314"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="158"
                      cy="157"
                      rx="158"
                      ry="157"
                      fill="#2A2979"
                    />
                  </svg>
                  <h3>Hydraulic Application Engineering</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Productive />
      <Footer />
    </div>
  );
}
