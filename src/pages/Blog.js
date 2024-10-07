import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Productive from "../components/Productive";
import Blogbanner from "../assets/images/blog_banner.png";
import { Tabs, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

export default function Blog() {
  return (
    <div>
      <Header />
      <section
        className="common_banner d-block"
        style={{ backgroundImage: `url(${Blogbanner})` }}
      >
        <div className="container-xxl h-100">
          <div className="d-flex justify-content-start h-100 align-items-center position-relative z-3">
            <h1>
              Insights & Innovations: Stay Ahead with Our Hydraulic Expertise!
            </h1>
          </div>
        </div>
      </section>
      <section className="d-block py-5 articles">
        <div className="container-xxl">
          <Tabs defaultActiveKey="home" id="myTab" className="gap-4">
            <Tab eventKey="home" title="Blog">
              <div className="slider-container pt-5">
                <div className="blog_slider ">
                  <Link to="/blog-single-page" className="blog_box gap-3">
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
                          rom pumps to valves and hoses, we offer a
                          comprehensive selection of hydraulic equipment to meet
                          all your needs.
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
                  <Link to="/blog-single-page" className="blog_box gap-3">
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
                          rom pumps to valves and hoses, we offer a
                          comprehensive selection of hydraulic equipment to meet
                          all your needs.
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
                  <Link to="/blog-single-page" className="blog_box gap-3">
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
                          rom pumps to valves and hoses, we offer a
                          comprehensive selection of hydraulic equipment to meet
                          all your needs.
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
                  <Link to="/blog-single-page" className="blog_box gap-3">
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
                          rom pumps to valves and hoses, we offer a
                          comprehensive selection of hydraulic equipment to meet
                          all your needs.
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
                  <Link to="/blog-single-page" className="blog_box gap-3">
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
                          rom pumps to valves and hoses, we offer a
                          comprehensive selection of hydraulic equipment to meet
                          all your needs.
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
                  <Link to="/blog-single-page" className="blog_box gap-3">
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
                          rom pumps to valves and hoses, we offer a
                          comprehensive selection of hydraulic equipment to meet
                          all your needs.
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
                  <Link to="/blog-single-page" className="blog_box gap-3">
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
                          rom pumps to valves and hoses, we offer a
                          comprehensive selection of hydraulic equipment to meet
                          all your needs.
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
                  <Link to="/blog-single-page" className="blog_box gap-3">
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
                          rom pumps to valves and hoses, we offer a
                          comprehensive selection of hydraulic equipment to meet
                          all your needs.
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
            </Tab>
            <Tab eventKey="profile" title="News">
            <div className="slider-container pt-5">
                <div className="blog_slider ">
                  <Link to="/blog-single-page" className="blog_box gap-3">
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
                          rom pumps to valves and hoses, we offer a
                          comprehensive selection of hydraulic equipment to meet
                          all your needs.
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
                  <Link to="/blog-single-page" className="blog_box gap-3">
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
                          rom pumps to valves and hoses, we offer a
                          comprehensive selection of hydraulic equipment to meet
                          all your needs.
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
                  <Link to="/blog-single-page" className="blog_box gap-3">
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
                          rom pumps to valves and hoses, we offer a
                          comprehensive selection of hydraulic equipment to meet
                          all your needs.
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
                  <Link to="/blog-single-page" className="blog_box gap-3">
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
                          rom pumps to valves and hoses, we offer a
                          comprehensive selection of hydraulic equipment to meet
                          all your needs.
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
                  <Link to="/blog-single-page" className="blog_box gap-3">
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
                          rom pumps to valves and hoses, we offer a
                          comprehensive selection of hydraulic equipment to meet
                          all your needs.
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
                  <Link to="/blog-single-page" className="blog_box gap-3">
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
                          rom pumps to valves and hoses, we offer a
                          comprehensive selection of hydraulic equipment to meet
                          all your needs.
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
                  <Link to="/blog-single-page" className="blog_box gap-3">
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
                          rom pumps to valves and hoses, we offer a
                          comprehensive selection of hydraulic equipment to meet
                          all your needs.
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
                  <Link to="/blog-single-page" className="blog_box gap-3">
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
                          rom pumps to valves and hoses, we offer a
                          comprehensive selection of hydraulic equipment to meet
                          all your needs.
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
            </Tab>
          </Tabs>
        </div>
      </section>
      <Productive />
      <Footer />
    </div>
  );
}
