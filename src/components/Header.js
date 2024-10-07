import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header className={`${isSticky ? 'sticky_haeder anim-t_haeder' : ''}`}>
        <div className="container-xxl">
          <nav className="navbar navbar-expand-xl bg-body-tertiary">
            <Link className="navbar-brand" to="/">
              <img
                className="w-100 h-100"
                src={require("../assets/images/logo.png")}
                alt="logo"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon "></span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x menu_close"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
            </button>
            <div
              className="collapse navbar-collapse pb-3"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-1 py-xl-0 py-2">
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About Us
                  </Link>
                </li>
                <li className="nav-item product_head position-relative">
                  <div className="d-flex align-items-center justify-content-between">
                    <Link className="nav-link" to="/product">
                      Products
                    </Link>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="#000" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-caret-down drop_down">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M6 10l6 6l6 -6h-12" />
                    </svg>
                  </div>
                  <ul className="product_drop">
                    <li className="top_drop">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" /></svg>
                    </li>
                    <li>
                      <Link className="product_item nav-link" to="/product">
                        Product Categories
                      </Link>
                    </li>
                    <li>
                      <Link className="product_item nav-link" to="/product-brand">
                        Product Brands
                      </Link>
                    </li>
                    <li>
                      <Link className="product_item nav-link" to="/check-out-what-we-stock">
                        Check out what we stock
                      </Link>
                    </li>

                  </ul>
                </li>

                <li className="nav-item product_head position-relative">
                  <div className="d-flex align-items-center justify-content-between">
                    <Link className="nav-link" to="/fleet-hire">
                      Fleet hire
                    </Link>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="#000" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-caret-down drop_down">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M6 10l6 6l6 -6h-12" />
                    </svg>
                  </div>
                  <ul className="product_drop">
                    <li className="top_drop">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" /></svg>
                    </li>
                    <li>
                      <Link className="product_item nav-link" to="/fleet-hire">
                        Hydraulic Power Unit 2
                      </Link>
                    </li>
                    <li>
                      <Link className="product_item nav-link" to="/fleet-hire">
                        Hydraulic Power Unit 3
                      </Link>
                    </li>
                    <li>
                      <Link className="product_item nav-link" to="/fleet-hire">
                        Hydraulic Power Unit 4
                      </Link>
                    </li>
                    <li>
                      <Link className="product_item nav-link" to="/fleet-hire">
                        Hydraulic Power Unit 5
                      </Link>
                    </li>
                    <li>
                      <Link className="product_item nav-link" to="/fleet-hire">
                        HSS OFU 3 Fluid Transfer / Flushing Unit
                      </Link>
                    </li>
                    <li>
                      <Link className="product_item nav-link" to="/fleet-hire">
                        HSS Accumulator Intensifier Unit
                      </Link>
                    </li>
                    <li>
                      <Link className="product_item nav-link" to="/fleet-hire">
                        HSS OFT20 Offline Filtration Trolley
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item product_head position-relative">
                  <div className="d-flex align-items-center justify-content-between">
                    <Link className="nav-link" to="/service">
                      Services
                    </Link>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="#000" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-caret-down drop_down">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M6 10l6 6l6 -6h-12" />
                    </svg>
                  </div>
                  <ul className="product_drop">
                    <li className="top_drop">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" /></svg>
                    </li>
                    <li>
                      <Link className="product_item nav-link" to="/service-info/Power-Unit-Hydraulic-Cylinder-and-Manifold-Design-&-Supply">
                        Power Unit, Hydraulic Cylinder and Manifold Design & Supply
                      </Link>
                    </li>
                    <li>
                      <Link className="product_item nav-link" to="/service-info/Hydraulic-Application-Engineering">
                        Hydraulic Application Engineering
                      </Link>
                    </li>
                    <li>
                      <Link className="product_item nav-link" to="/service-info/Reconditioning-servicing-and-testing">
                        Reconditioning, servicing, and testing
                      </Link>
                    </li>
                    <li>
                      <Link className="product_item nav-link" to="/service-info/On-site-fluid-contamination-analysis">
                        On-site fluid contamination analysis, hydraulic system maintenance, and scheduled hydraulic servicing
                      </Link>
                    </li>
                    <li>
                      <Link className="product_item nav-link" to="/service-info/On-site-installations">
                        On-site installations, commissioning, troubleshooting, and break-down repairs
                      </Link>
                    </li>
                    <li>
                      <Link className="product_item nav-link" to="/service-info/Standard-or-exotic-hose-assembly-supply">
                        Standard or exotic hose assembly supply, testing, inspections and certification
                      </Link>
                    </li>
                    <li>
                      <Link className="product_item nav-link" to="/service-info/Hydraulic-Training">
                        Hydraulic Training
                      </Link>
                    </li>
                    <li>
                      <Link className="product_item nav-link" to="/service-info/Fully-equipped-Hydraulic-Workshop-facilities">
                        Fully equipped Hydraulic Workshop facilities
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog">
                    Blog/Newsletter
                  </Link>
                </li>
              </ul>
              <div className="d-flex align-items-center gap-3">
                <Link className="contact_call" to="tel:61 1234567890">+61 1234567890</Link>
                <Link to="/contact" className="contact_us">Contact Us</Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
