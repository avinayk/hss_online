import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Productive from "../components/Productive";
import ParallaxText from "../components/ParallaxText";
import Globe from "../components/Globe";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Tabs, Tab } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    nextArrow: <FontAwesomeIcon icon={faChevronRight} />,
    prevArrow: <FontAwesomeIcon icon={faChevronLeft} />,
    speed: 1000,
    autoplaySpeed: 2000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // const logo = {
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   dots: false,
  //   infinite: true,
  //   speed: 8000,
  //   pauseOnHover: false,
  //   autoplaySpeed: 500,
  //   autoplay: true,
  //   cssEase: "linear",
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  const [letters, setLetters] = useState([]);

  useEffect(() => {
    const text = "Your Trusted Partner in Industrial Supplies";
    const splitText = text.split("");
    setLetters(splitText);
  }, []);
  return (
    <div>

      <Header />
      <section className="main_banner d-block pb-sm-5 p-0 ">
        <div className="container-xxl pb-sm-5 ">
          <div className="d-md-block d-none banner-left">
            <img
              className="w-100 h-100"
              src={require("../assets/images/banner_right.png")}
              alt="img"
            />
          </div>
          <div className="d-md-block d-none banner-right">
            <img
              className="w-100 h-100"
              src={require("../assets/images/banner_left.png")}
              alt="img"
            />
          </div>
          <div className="d-flex flex-column justify-content-center py-5 position-relative gap-5 align-items-center">
            <div className="d-flex flex-column gap-2 justify-content-center align-items-center">
              <h1>
                Hydraulic <br /> solutions <br /> and sales
              </h1>
              <h2>Leaders in Hydraulic Excellence</h2>
            </div>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex flex-wrap">
                {letters.map((letter, index) => (
                  <span className="home_animation"
                    key={index}
                    style={{
                      marginRight: letter === " " ? "8px" : "0px", 
                      opacity: 0,
                      animation: `fadeIn 0.1s ${index * 0.05}s forwards`,
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </div>
              <p>
                Delivering High-Quality Industrial Equipment and Services Across
                Australia
              </p>
              <div className="home_btn d-flex flex-sm-row flex-column gap-4 align-items-center gap-3">
                <Link to="/product" className="view_product">View Products</Link>
                <Link to="/contact" className="contact_sale">Contact Sales</Link>
              </div>
            </div>
          </div>
          <div className="d-md-block d-none banner-lefte">
            <img
              className="w-100 h-100"
              src={require("../assets/images/banner_eqipment1.png")}
              alt="img"
            />
          </div>
          <div className="d-md-block d-none banner-righte">
            <img
              className="w-100 h-100"
              src={require("../assets/images/banner_eqipment2.png")}
              alt="img"
            />
          </div>
        </div>
      </section>
      <section className="main_tabs py-5">
        <div className="container-xxl">
          <ul
            class="nav nav-tabs justify-content-center "
            id="myTab"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
              >
                Products
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
              >
                Services
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact-tab-pane"
                type="button"
                role="tab"
                aria-controls="contact-tab-pane"
                aria-selected="false"
              >
                Fleet hire
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabindex="0"
            >
              <ul className="d-flex flex-md-row flex-column align-items-center justify-content-between gap-4">
                <li>
                  <Link className="w-100" to="/product">
                    <p>Heavy Machinery</p>
                    <div className="d-block tab_img">
                      <img
                        className="w-100 h-100"
                        src={require("../assets/images/jcb.png")}
                        alt="img"
                      />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className="w-100" to="/product">
                    <p>Precision Tools</p>
                    <div className="d-block tab_img">
                      <img
                        className="w-100 h-100"
                        src={require("../assets/images/spring.png")}
                        alt="img"
                      />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className="w-100" to="/product">
                    <p>Safety Equipment</p>
                    <div className="d-block tab_img">
                      <img
                        className="w-100 h-100"
                        src={require("../assets/images/sefty.png")}
                        alt="img"
                      />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className="w-100" to="/product">
                    <p>Custom Solutions</p>
                    <div className="d-block tab_img">
                      <img
                        className="w-100 h-100"
                        src={require("../assets/images/motor.png")}
                        alt="img"
                      />
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div
              class="tab-pane fade"
              id="profile-tab-pane"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabindex="0"
            >
              <ul className="d-flex flex-md-row flex-column align-items-center justify-content-between gap-4">
                <li>
                  <Link className="w-100" to="/service-info/Power-Unit-Hydraulic-Cylinder-and-Manifold-Design-&-Supply">
                    <p>Power Unit, Hydraulic Cylinder and Manifold Design & Supply</p>
                    <div className="d-block tab_img">
                      <img
                        className="w-100 h-100"
                        src={require("../assets/images/supply-chain.png")}
                        alt="img"
                      />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className="w-100" to="/service-info/Hydraulic-Application-Engineering">
                    <p>Hydraulic Application Engineering</p>
                    <div className="d-block tab_img">
                      <img
                        className="w-100 h-100"
                        src={require("../assets/images/hydraulic-energy.png")}
                        alt="img"
                      />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className="w-100" to="/service-info/Reconditioning-servicing-and-testing">
                    <p>Reconditioning, servicing, and testing</p>
                    <div className="d-block tab_img">
                      <img
                        className="w-100 h-100"
                        src={require("../assets/images/mechanic.png")}
                        alt="img"
                      />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className="w-100" to="/service-info/Hydraulic-Training">
                    <p>Hydraulic Training</p>
                    <div className="d-block tab_img">
                      <img
                        className="w-100 h-100"
                        src={require("../assets/images/water.png")}
                        alt="img"
                      />
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div
              class="tab-pane fade"
              id="contact-tab-pane"
              role="tabpanel"
              aria-labelledby="contact-tab"
              tabindex="0"
            >
              <ul className="d-flex flex-md-row flex-column align-items-center justify-content-between gap-4">
                <li>
                  <Link className="w-100" to="/fleet-hire">
                    <p>Hydraulic Power Unit 2</p>
                    <div className="d-block tab_img">
                      <img
                        className="w-100 h-100"
                        src={require("../assets/images/fleet1.png")}
                        alt="img"
                      />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className="w-100" to="/fleet-hire">
                    <p>Hydraulic Power Unit 3</p>
                    <div className="d-block tab_img">
                      <img
                        className="w-100 h-100"
                        src={require("../assets/images/fleet2.png")}
                        alt="img"
                      />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className="w-100" to="/fleet-hire">
                    <p>Hydraulic Power Unit 4</p>
                    <div className="d-block tab_img">
                      <img
                        className="w-100 h-100"
                        src={require("../assets/images/fleet3.png")}
                        alt="img"
                      />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className="w-100" to="/fleet-hire">
                    <p>Hydraulic Power Unit 5</p>
                    <div className="d-block tab_img">
                      <img
                        className="w-100 h-100"
                        src={require("../assets/images/fleet4.png")}
                        alt="img"
                      />
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="service_main d-block py-5">
        <div className="container-xxl h-100 pt-5">
          <div class="row h-100 gy-5">
            <div className="col-xl-6 ">
              <div className="d-flex justify-content-start h-100 align-items-center">
                <h3>
                  We take pride in serving clients across a wide range of
                  industries
                </h3>
              </div>
            </div>
            <div className="col-xl-6 ">
              <div class="service_main_container">
                <div className="d-flex flex-sm-row flex-column align-items-center justify-content-end gap-3">
                  <Link to="/" class="service1 ser-img">
                    <img
                      className="w-100 h-100"
                      src={require("../assets/images/s5.jfif")}
                      alt="img"
                    />
                    <h5>Marine </h5>
                  </Link>
                  <Link to="/" class="service2 ser-img">
                    <img
                      className="w-100 h-100"
                      src={require("../assets/images/s3.jfif")}
                      alt="img"
                    />
                    <h5>Engineering</h5>
                  </Link>
                </div>
                <div className="d-flex flex-sm-row flex-column align-items-start justify-content-center  p-0 gap-3">
                  <Link to="/" class="service3 ser-img">
                    <img
                      className="w-100 h-100"
                      src={require("../assets/images/s4.jfif")}
                      alt="img"
                    />
                    <h5>Mining</h5>
                  </Link>
                  <Link to="/" class="service4 ser-img">
                    <img
                      className="w-100 h-100"
                      src={require("../assets/images/s2.jfif")}
                      alt="img"
                    />
                    <h5>Agriculture</h5>
                  </Link>
                </div>
                <div className="d-flex flex-sm-row flex-column align-items-center justify-content-end gap-3">
                  <Link to="/" class="service5 ser-img">
                    <img
                      className="w-100 h-100"
                      src={require("../assets/images/s1.jfif")}
                      alt="img"
                    />
                    <h5>Manufacturing</h5>
                  </Link>
                  <Link to="/" class="service6 ser-img">
                    <img
                      className="w-100 h-100"
                      src={require("../assets/images/s1.jfif")}
                      alt="img"
                    />
                    <h5>Waste Management</h5>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 service_main-bot">
              <p>
                Our extensive experience allows us to deliver tailored solutions
                that meet the unique challenges of each sector, ensuring success
                and satisfaction for every project we undertake."{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="why_hss d-block pb-5">
        <div className="container-xxl">
          <div className="d-md-block d-none why_hss_l">
            <img
              className="w-100 h-100"
              src={require("../assets/images/301.png")}
              alt="img"
            />
          </div>
          <div className="d-md-block d-none why_hss_r">
            <img
              className="w-100 h-100"
              src={require("../assets/images/302.png")}
              alt="img"
            />
          </div>
          <h4 className="text-center">Why Hydraulic Solutions and Sales?</h4>
          <div className="row gy-5 pt-md-5 pt-3 align-items-center">
            <div className="col-md-6 m-0">
              <div className="d-flex justify-content-center align-items-center">
                <p>
                  <span>30</span>
                  <br /> years of hydraulic <br /> industry experience.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <ul>
                <li>Experienced and Knowledgeable Team</li>
                <li>High-Quality, Reliable Products</li>
                <li>Fast, Dependable Service Across Australia</li>
              </ul>
            </div>
            <div className="col-12">
              <contactBtn />
            </div>
          </div>
        </div>
      </section>
      <section className="d-block simple_process py-5">
        <div className="container-xl">
          <div className="row gy-5">
            <div className="col-12">
              <div className="d-flex flex-column gap-3 simple_process_head">
                <h5>
                  Our Simple Process to Get You the Best Hydraulic Solutions
                </h5>
                <p>
                  We’ve streamlined our process to make it easy for you to get
                  the hydraulic equipment and support you need, without any
                  hassle. Here’s how it works
                </p>
              </div>
            </div>
            <div className="col-12">
              <ul className="d-flex flex-wrap align-items-start gap-5">
                <li className="d-flex align-items-start gap-3">
                  <div className="d-block icon_fit">
                    <img
                      className="w-100 h-100"
                      src={require("../assets/images/p4.png")}
                      alt="logo"
                    />
                  </div>
                  <div className="d-flex flex-column gap-2">
                    <h6>Consultation & Needs Assessment</h6>
                    <p>
                      Reach out to us, and our expert team will discuss your
                      specific requirements, understanding your project and
                      equipment needs.
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <div className="d-block icon_fit">
                    <img
                      className="w-100 h-100"
                      src={require("../assets/images/p3.png")}
                      alt="logo"
                    />
                  </div>
                  <div className="d-flex flex-column gap-2">
                    <h6>Product Selection & Customization</h6>
                    <p>
                      Based on your needs, we recommend the best products from
                      our extensive range or customise equipment to meet your
                      exact specifications.
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <div className="d-block icon_fit">
                    <img
                      className="w-100 h-100"
                      src={require("../assets/images/p5.png")}
                      alt="logo"
                    />
                  </div>
                  <div className="d-flex flex-column gap-2">
                    <h6>Quotation & Approva</h6>
                    <p>
                      We provide a detailed, transparent quote for your review.
                      Once you approve, we move forward with your order.
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <div className="d-block icon_fit">
                    <img
                      className="w-100 h-100"
                      src={require("../assets/images/p1.png")}
                      alt="logo"
                    />
                  </div>
                  <div className="d-flex flex-column gap-2">
                    <h6>Ongoing Support & Maintenance</h6>
                    <p>
                      Your order is processed promptly, and we arrange for fast,
                      reliable delivery directly to your site.
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <div className="d-block icon_fit">
                    <img
                      className="w-100 h-100"
                      src={require("../assets/images/p2.png")}
                      alt="logo"
                    />
                  </div>
                  <div className="d-flex flex-column gap-2">
                    <h6>Order Fulfillment & Delivery</h6>
                    <p>
                      After delivery, we offer continued support, including
                      maintenance services and expert advice to ensure your
                      equipment runs smoothly.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="d-flex justify-content-center pt-5 align-items-center">
                <button className="start_btn">Get Started Today</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="d-block why_hss">
        <div className="container-xxl">
          <div className="d-flex flex-column skip_faster">
            <h5>Ship</h5>
            <ParallaxText />
          </div>
        </div>
        <Globe />
      </section>
      <section className="receive d-block py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="d-flex flex-column gap-5">
                <h3>
                  Here’s <span> What You will Receive</span>
                  <br /> with Hydraulic Solutions and Sales
                </h3>
                <div className="d-block receive_box">
                  <ul className="d-flex flex-wrap align-items-center gap-3">
                    <li>
                      <Link to="/">
                        <div className="d-flex flex-column gap-3">
                          <h5>High-Quality Hydraulic Products</h5>
                          <p>
                            Our products are built to last, providing reliable
                            performance even in the toughest conditions.
                          </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <div className="d-flex flex-column gap-3">
                          <h5>Expert Advice & Support</h5>
                          <p>
                            Our experienced team works with you to understand
                            your needs and recommend the best solutions.
                          </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <div className="d-flex flex-column gap-3">
                          <h5>Fast and Reliable Service</h5>
                          <p>
                            We ensure that your order arrives quickly and
                            safely, minimizing any downtime.
                          </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <div className="d-flex flex-column gap-3">
                          <h5>Transparent Pricing</h5>
                          <p>
                            Our pricing is clear and straightforward, with no
                            surprises just great value.
                          </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <div className="d-flex flex-column gap-3">
                          <h5>Commitment to Customer Satisfaction</h5>
                          <p>
                            We stand by the quality of our products and
                            services, offering warranties and guarantees for
                            peace of mind.
                          </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <div className="d-flex flex-column gap-3">
                          <h5>Extensive Product Range</h5>
                          <p>
                            rom pumps to valves and hoses, we offer a
                            comprehensive selection of hydraulic equipment to
                            meet all your needs.
                          </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <div className="d-flex flex-column gap-3">
                          <h5>Commitment to Sustainability</h5>
                          <p>
                            We prioritize environmentally responsible practices
                            in our operations and product offerings.
                          </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <div className="d-flex flex-column gap-3">
                          <h5>Personalized Consultations</h5>
                          <p>
                            We tailor our products and services to suit your
                            specific requirements, providing solutions that fit
                            your unique operations.
                          </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <div className="d-flex flex-column gap-3">
                          <h5>Flexible Hiring Options</h5>
                          <p>
                            We offer both short-term and long-term hire options
                            to give you the flexibility to manage your projects
                            effectively.
                          </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <div className="d-flex flex-column gap-3">
                          <h5>Guaranteed Quality</h5>
                          <p>
                            All our products come with quality assurances and
                            warranties, giving you peace of mind.
                          </p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="reliable d-block py-5 position-relative">
        <div className="d-block car-pos">
          <img
            className="w-100 h-100"
            src={require("../assets/images/car.png")}
            alt="img"
          />
        </div>
        <div className="r-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="190"
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
        <div className="r-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="190"
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
        <div className="container-xxl py-5">
          <div className="d-flex flex-column justify-content-center align-items-center gap-4 py-4">
            <h4>
              Reliable <span> Mobile Hydraulic Service</span>: Fast Solutions at{" "}
              <span> Your Location</span>
            </h4>
            <button className="contact_us">Contact us Now</button>
          </div>
        </div>
      </section>
      <section className="d-block py-5 articles">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="d-flex flex-column gap-5 justify-content-center ">
                <h4>
                  Interesting <span> Articles</span>
                </h4>
                <Tabs defaultActiveKey="home" id="myTab" className="gap-4">
                  <Tab eventKey="home" title="Blog">
                    <div className="slider-container">
                      <Slider className="blog_slider " {...settings}>
                        <div className="blog_box gap-3">
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
                                comprehensive selection of hydraulic equipment
                                to meet all your needs.
                              </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between gap-1">
                              <h6>Aug 24</h6>
                              <Link to="/">
                                Read More{" "}
                                <FontAwesomeIcon icon={faArrowRightLong} />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="blog_box gap-3">
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
                                comprehensive selection of hydraulic equipment
                                to meet all your needs.
                              </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between gap-1">
                              <h6>Aug 24</h6>
                              <Link to="/">
                                Read More{" "}
                                <FontAwesomeIcon icon={faArrowRightLong} />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="blog_box gap-3">
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
                                comprehensive selection of hydraulic equipment
                                to meet all your needs.
                              </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between gap-1">
                              <h6>Aug 24</h6>
                              <Link to="/">
                                Read More{" "}
                                <FontAwesomeIcon icon={faArrowRightLong} />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="blog_box gap-3">
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
                                comprehensive selection of hydraulic equipment
                                to meet all your needs.
                              </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between gap-1">
                              <h6>Aug 24</h6>
                              <Link to="/">
                                Read More{" "}
                                <FontAwesomeIcon icon={faArrowRightLong} />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Slider>
                    </div>
                  </Tab>
                  <Tab eventKey="profile" title="News">
                    <p>Content for News tab.</p>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Productive />
      {/* <section className="d-block logo_slide">
        <div className="container-xxl">
          <Slider className="logo_slider " {...logo}>
            <div class="d-block slider_image">
              <img
                className="w-100 h-100"
                src={require("../assets/images/broadarrow-Logo.png")}
                alt="img"
              />
            </div>
            <div class="d-block slider_image">
              <img
                className="w-100 h-100"
                src={require("../assets/images/jl-logo.png")}
                alt="img"
              />
            </div>
            <div class="d-block slider_image">
              <img
                className="w-100 h-100"
                src={require("../assets/images/minotaurlogo.png")}
                alt="img"
              />
            </div>
            <div class="d-block slider_image">
              <img
                className="w-100 h-100"
                src={require("../assets/images/walc.png")}
                alt="img"
              />
            </div>
            <div class="d-block slider_image">
              <img
                className="w-100 h-100"
                src={require("../assets/images/minotaurlogo.png")}
                alt="img"
              />
            </div>
            <div class="d-block slider_image">
              <img
                className="w-100 h-100"
                src={require("../assets/images/walc.png")}
                alt="img"
              />
            </div>
          </Slider>
        </div>
      </section> */}
      <Footer />
    </div>
  );
}
