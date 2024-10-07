import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Productive from "../components/Productive";
import Blogbanner from "../assets/images/blog_banner.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

export default function BlogSinglepage() {
  return (
    <div>
      <Header />
      <section
        className="common_banner d-block"
        style={{ backgroundImage: `url(${Blogbanner})` }}
      >
        <div className="container-xxl h-100">
          <div className="d-flex justify-content-start h-100 align-items-center position-relative z-3">
            <h1 className="text-center w-100">
            High-Quality Hydraulic Products
            </h1>
          </div>
          <div className="back_btn">
            <Link to="/blog"><FontAwesomeIcon icon={faArrowLeftLong} />  Back </Link>
          </div>
        </div>
      </section>
      <section className="d-block py-5 blogsingleinfo">
        <div className="container-xxl">
          <div className="d-flex flex-column gap-3">
            <h6>
              rom pumps to valves and hoses, we offer a comprehensive selection
              of hydraulic equipment to meet all your needs.
            </h6>
            <ul>
              <li>
                <p>
                  <span> Hydraulic Solutions and Sales</span> distribute the
                  Hydac range of hydraulic{" "}
                  <Link to="/">  accumulators (PDF) </Link>and accessories.
                  Additionally, if you require accumulators for offshore
                  applications with special coatings or constructed from
                  stainless steel up to 690 bar, we can accommodate. Please do
                  not hesitate to contact us with any enquiries.
                </p>
              </li>
              <li>
                <p>
                  <span> Hydraulic Solutions and Sales</span> distribute the
                  Hydac range of hydraulic{" "}
                  <Link to="/">  accumulators (PDF) </Link>and accessories.
                  Additionally, if you require accumulators for offshore
                  applications with special coatings or constructed from
                  stainless steel up to 690 bar, we can accommodate. Please do
                  not hesitate to contact us with any enquiries.
                </p>
              </li>
              <li>
                <p>
                  <span> Hydraulic Solutions and Sales</span> distribute the
                  Hydac range of hydraulic{" "}
                  <Link to="/">  accumulators (PDF) </Link>and accessories.
                  Additionally, if you require accumulators for offshore
                  applications with special coatings or constructed from
                  stainless steel up to 690 bar, we can accommodate. Please do
                  not hesitate to contact us with any enquiries.
                </p>
              </li>
              <li>
                <p>
                  <span> Hydraulic Solutions and Sales</span> distribute the
                  Hydac range of hydraulic{" "}
                  <Link to="/">  accumulators (PDF) </Link>and accessories.
                  Additionally, if you require accumulators for offshore
                  applications with special coatings or constructed from
                  stainless steel up to 690 bar, we can accommodate. Please do
                  not hesitate to contact us with any enquiries.
                </p>
              </li>
              <li>
                <p>
                  <span> Hydraulic Solutions and Sales</span> distribute the
                  Hydac range of hydraulic{" "}
                  <Link to="/">  accumulators (PDF) </Link>and accessories.
                  Additionally, if you require accumulators for offshore
                  applications with special coatings or constructed from
                  stainless steel up to 690 bar, we can accommodate. Please do
                  not hesitate to contact us with any enquiries.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="articles pb-5">
        <div className="container-xxl">
          <div className="slider-container pt-5">
            <div className="blog_slider ">
              <Link to="/blogsinglepage" className="blog_box gap-3">
                <div className="d-block blog_box_img">
                  <img
                    className="w-100 h-100"
                    src={require("../assets/images/s1.jfif")}
                    alt="img"
                  />
                </div>
                <div className="d-flex flex-column gap-5 p-3">
                  <div className="d-flex flex-column gap-1">
                    <h5>High-Quality Hydraulic Products</h5>
                    <p>
                      rom pumps to valves and hoses, we offer a comprehensive
                      selection of hydraulic equipment to meet all your needs.
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between gap-1">
                    <h6>Aug 24</h6>
                    <Link to="/">
                      Read More <FontAwesomeIcon icon={faArrowRightLong} />
                    </Link>
                  </div>
                </div>
              </Link>
              <Link to="/blogsinglepage" className="blog_box gap-3">
                <div className="d-block blog_box_img">
                  <img
                    className="w-100 h-100"
                    src={require("../assets/images/s2.jfif")}
                    alt="img"
                  />
                </div>
                <div className="d-flex flex-column gap-5 p-3">
                  <div className="d-flex flex-column gap-1">
                    <h5>High-Quality Hydraulic Products</h5>
                    <p>
                      rom pumps to valves and hoses, we offer a comprehensive
                      selection of hydraulic equipment to meet all your needs.
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between gap-1">
                    <h6>Aug 24</h6>
                    <Link to="/">
                      Read More <FontAwesomeIcon icon={faArrowRightLong} />
                    </Link>
                  </div>
                </div>
              </Link>
              <Link to="/blogsinglepage" className="blog_box gap-3">
                <div className="d-block blog_box_img">
                  <img
                    className="w-100 h-100"
                    src={require("../assets/images/s3.jfif")}
                    alt="img"
                  />
                </div>
                <div className="d-flex flex-column gap-5 p-3">
                  <div className="d-flex flex-column gap-1">
                    <h5>High-Quality Hydraulic Products</h5>
                    <p>
                      rom pumps to valves and hoses, we offer a comprehensive
                      selection of hydraulic equipment to meet all your needs.
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between gap-1">
                    <h6>Aug 24</h6>
                    <Link to="/">
                      Read More <FontAwesomeIcon icon={faArrowRightLong} />
                    </Link>
                  </div>
                </div>
              </Link>
              <Link to="/blogsinglepage" className="blog_box gap-3">
                <div className="d-block blog_box_img">
                  <img
                    className="w-100 h-100"
                    src={require("../assets/images/s4.jfif")}
                    alt="img"
                  />
                </div>
                <div className="d-flex flex-column gap-5 p-3">
                  <div className="d-flex flex-column gap-1">
                    <h5>High-Quality Hydraulic Products</h5>
                    <p>
                      rom pumps to valves and hoses, we offer a comprehensive
                      selection of hydraulic equipment to meet all your needs.
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between gap-1">
                    <h6>Aug 24</h6>
                    <Link to="/">
                      Read More <FontAwesomeIcon icon={faArrowRightLong} />
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Productive />
      <Footer />
    </div>
  );
}
