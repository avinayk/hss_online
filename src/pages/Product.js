import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Productive from "../components/Productive";
import { Link } from "react-router-dom";

export default function Product() {

  return (
    <div>
      <Header />
      
      <section className="product_banner d-block px-md-5 py-5">
        <div className="container-xxl">
          <div className="d-flex flex-column gap-4 justify-content-center align-items-center">
            <h1>Products</h1>
            <p>
              <span>Hydraulic Solutions and Sales </span>offer a large range of
              diverse products that we stock, distribute and re-sell. Below are
              some of the product groups that HSS use to provide customers with
              quality hydraulic sales and service.
            </p>
          </div>
        </div>
      </section>
      <section className="product_list d-block pb-5">
        <div className="container-xxl">
          <div className="row gy-3 gx-3">
            <div className="col-sm-6 col-md-4 col-lg-3">
              <Link
                className="product_main"
                to="/product-info/accumulators"
              >
                <div className="product_image">
                  <img
                    className="w-100 h-100"
                    src={require("../assets/images/Accumulators.png")}
                    alt="product_image"
                  />
                </div>
                <h5>Accumulators </h5>
              </Link>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <Link
                className="product_main"
                to="/product-info/filtration"
              >
                <div className="product_image">
                  <img
                    className="w-100 h-100"
                    src={require("../assets/images/Filtration.png")}
                    alt="product_image"
                  />
                </div>
                <h5>Filtration</h5>
              </Link>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <Link className="product_main" to="/product-info/cartridges-&-manifolds">
                <div className="product_image">
                  <img
                    className="w-100 h-100"
                    src={require("../assets/images/Cartridges.png")}
                    alt="product_image"
                  />
                </div>
                <h5>Cartridges & Manifolds</h5>
              </Link>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <Link className="product_main" to="/product-info/condition-monitoring">
                <div className="product_image">
                  <img
                    className="w-100 h-100"
                    src={require("../assets/images/Condition.png")}
                    alt="product_image"
                  />
                </div>
                <h5>Condition Monitoring</h5>
              </Link>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <Link className="product_main" to="/product-info/coolers">
                <div className="product_image">
                  <img
                    className="w-100 h-100"
                    src={require("../assets/images/Coolers.png")}
                    alt="product_image"
                  />
                </div>
                <h5>Coolers</h5>
              </Link>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <Link className="product_main" to="/product-info/cylinders">
                <div className="product_image">
                  <img
                    className="w-100 h-100"
                    src={require("../assets/images/Cylinders.png")}
                    alt="product_image"
                  />
                </div>
                <h5>Cylinders</h5>
              </Link>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <Link className="product_main" to="/product-info/directional-control-valve">
                <div className="product_image">
                  <img
                    className="w-100 h-100"
                    src={require("../assets/images/Directional.png")}
                    alt="product_image"
                  />
                </div>
                <h5>Directional Control Valve</h5>
              </Link>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <Link className="product_main" to="/product-info/flow-meters">
                <div className="product_image">
                  <img
                    className="w-100 h-100"
                    src={require("../assets/images/Flow.png")}
                    alt="product_image"
                  />
                </div>
                <h5>Flow Meters</h5>
              </Link>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <Link className="product_main" to="/product-info/gauges">
                <div className="product_image">
                  <img
                    className="w-100 h-100"
                    src={require("../assets/images/Gauges.png")}
                    alt="product_image"
                  />
                </div>
                <h5>Gauges</h5>
              </Link>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <Link className="product_main" to="/product-info/globe-air-motors">
                <div className="product_image">
                  <img
                    className="w-100 h-100"
                    src={require("../assets/images/Globe.png")}
                    alt="product_image"
                  />
                </div>
                <h5>Globe Air Motors</h5>
              </Link>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <Link className="product_main" to="/product-info/high-force-equipment">
                <div className="product_image">
                  <img
                    className="w-100 h-100"
                    src={require("../assets/images/High.png")}
                    alt="product_image"
                  />
                </div>
                <h5>High Force Equipment</h5>
              </Link>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <Link className="product_main" to="/product-info/hose-&-fittings">
                <div className="product_image">
                  <img
                    className="w-100 h-100"
                    src={require("../assets/images/Hose.png")}
                    alt="product_image"
                  />
                </div>
                <h5>Hose & Fittings</h5>
              </Link>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <Link className="product_main" to="/product-info/instrumentation">
                <div className="product_image">
                  <img
                    className="w-100 h-100"
                    src={require("../assets/images/Instrumentation.png")}
                    alt="product_image"
                  />
                </div>
                <h5>Instrumentation</h5>
              </Link>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <Link className="product_main" to="/product-info/lubrication-systems">
                <div className="product_image">
                  <img
                    className="w-100 h-100"
                    src={require("../assets/images/Lubrication.png")}
                    alt="product_image"
                  />
                </div>
                <h5>Lubrication Systems</h5>
              </Link>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <Link className="product_main" to="/product-info/manifolds">
                <div className="product_image">
                  <img
                    className="w-100 h-100"
                    src={require("../assets/images/Manifolds.png")}
                    alt="product_image"
                  />
                </div>
                <h5>Manifolds</h5>
              </Link>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <Link className="product_main" to="/product-info/hydraulic-motors">
                <div className="product_image">
                  <img
                    className="w-100 h-100"
                    src={require("../assets/images/Hydraulic.png")}
                    alt="product_image"
                  />
                </div>
                <h5>Hydraulic Motors</h5>
              </Link>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <Link className="product_main" to="/product-info/pneumatics">
                <div className="product_image">
                  <img
                    className="w-100 h-100"
                    src={require("../assets/images/Pneumatics.png")}
                    alt="product_image"
                  />
                </div>
                <h5>Pneumatics</h5>
              </Link>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <Link className="product_main" to="/product-info/power-units">
                <div className="product_image">
                  <img
                    className="w-100 h-100"
                    src={require("../assets/images/Power.png")}
                    alt="product_image"
                  />
                </div>
                <h5>Power Units</h5>
              </Link>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <Link className="product_main" to="/product-info/pumps">
                <div className="product_image">
                  <img
                    className="w-100 h-100"
                    src={require("../assets/images/Pumps.png")}
                    alt="product_image"
                  />
                </div>
                <h5>Pumps</h5>
              </Link>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <Link className="product_main" to="/product-info/steeing">
                <div className="product_image">
                  <img
                    className="w-100 h-100"
                    src={require("../assets/images/Steeing.png")}
                    alt="product_image"
                  />
                </div>
                <h5>Steeing</h5>
              </Link>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <Link className="product_main" to="/product-info/electronic-controls">
                <div className="product_image">
                  <img
                    className="w-100 h-100"
                    src={require("../assets/images/electronic_control.png")}
                    alt="product_image"
                  />
                </div>
                <h5>Electronic Controls</h5>
              </Link>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <Link className="product_main" to="/product-info/">
                <div className="product_image">
                  <img
                    className="w-100 h-100"
                    src={require("../assets/images/weg.jpg")}
                    alt="product_image"
                  />
                </div>
                <h5>WEG Electric Motors</h5>
              </Link>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <Link className="product_main" to="/product-info/press">
                <div className="product_image">
                  <img
                    className="w-100 h-100"
                    src={require("../assets/images/press.jpg")}
                    alt="product_image"
                  />
                </div>
                <h5>Press</h5>
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
