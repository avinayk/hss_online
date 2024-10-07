import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Productive from "../components/Productive";
import fleetBanner from "../assets/images/service_info.jpg";
import ContactBtn from "../components/ContactBtn";

export default function ProductBrand() {
    return (
        <div>
            <Header />
            <section
                className="product_brands_banner d-block "
                style={{ backgroundImage: `url(${fleetBanner})` }}
            >
                <div className="container-xxl h-100">
                    <div className="d-flex justify-content-start h-100 align-items-center position-relative z-3">
                        <h1 className="text-center">
                            Product Brands
                        </h1>
                    </div>
                </div>
            </section>
            <section className="d-block py-5 product_distributors">
                <div className="container-xxl">
                    <div className="row gy-5">
                        <div className="col-12">
                            <div className="d-flex flex-column gap-2 justify-content-center align-items-center">
                                <h2>Distributors & Re-Sellers</h2>
                                <p>Hydraulic Solutions and Sales offer a large range of diverse products. Please see below for the product brands we distribute and re-sell.</p>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex flex-column gap-4 justify-content-center align-items-center">
                                <h3>Manufacturers – Distributors :</h3>
                                <div className="row align-items-center gy-5">
                                    <div className="col-md-3">
                                        <div className="d-block distru_image">
                                            <img
                                                className="w-100 h-100"
                                                src={require("../assets/images/distr-hydac.gif")}
                                                alt="img"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="d-block distru_image">
                                            <img
                                                className="w-100 h-100"
                                                src={require("../assets/images/distr-eaton-powering-business-worldwide.gif")}
                                                alt="img"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="d-block distru_image">
                                            <img
                                                className="w-100 h-100"
                                                src={require("../assets/images/distr-danfoss.gif")}
                                                alt="img"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="d-block distru_image">
                                            <img
                                                className="w-100 h-100"
                                                src={require("../assets/images/distr-ryco-hydraulics.gif")}
                                                alt="img"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="d-block distru_image">
                                            <img
                                                className="w-100 h-100"
                                                src={require("../assets/images/distr-ph-industries.gif")}
                                                alt="img"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="d-block distru_image">
                                            <img
                                                className="w-100 h-100"
                                                src={require("../assets/images/distr-sun-hydraulics.gif")}
                                                alt="img"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="d-block distru_image">
                                            <img
                                                className="w-100 h-100"
                                                src={require("../assets/images/distr-hydraforce.gif")}
                                                alt="img"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="d-block distru_image">
                                            <img
                                                className="w-100 h-100"
                                                src={require("../assets/images/blue_weg_logo-148x90.png")}
                                                alt="img"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="d-block distru_image">
                                            <img
                                                className="w-100 h-100"
                                                src={require("../assets/images/distr-flaretite.gif")}
                                                alt="img"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="d-block distru_image">
                                            <img
                                                className="w-100 h-100"
                                                src={require("../assets/images/distr-ly-lok.gif")}
                                                alt="img"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="d-block distru_image">
                                            <img
                                                className="w-100 h-100"
                                                src={require("../assets/images/distr-powerteam.gif")}
                                                alt="img"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="d-block distru_image">
                                            <img
                                                className="w-100 h-100"
                                                src={require("../assets/images/distr-span-subsea-gauges.gif")}
                                                alt="img"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex flex-column gap-4 justify-content-center align-items-center">
                                <h3>Manufacturers – Re-Sellers :</h3>
                                <div className="row align-items-center gy-5">
                                    <div className="col-md-3">
                                        <div className="d-block distru_image">
                                            <img
                                                className="w-100 h-100"
                                                src={require("../assets/images/distr-polyhose.gif")}
                                                alt="img"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="d-block distru_image">
                                            <img
                                                className="w-100 h-100"
                                                src={require("../assets/images/resell-parker.gif")}
                                                alt="img"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="d-block distru_image">
                                            <img
                                                className="w-100 h-100"
                                                src={require("../assets/images/resell-denison-hydraulics.gif")}
                                                alt="img"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="d-block distru_image">
                                            <img
                                                className="w-100 h-100"
                                                src={require("../assets/images/distr-stauff.gif")}
                                                alt="img"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="d-block distru_image">
                                            <img
                                                className="w-100 h-100"
                                                src={require("../assets/images/resell-rexroth-bosch.gif")}
                                                alt="img"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="d-block distru_image">
                                            <img
                                                className="w-100 h-100"
                                                src={require("../assets/images/distr-kutting.gif")}
                                                alt="img"
                                            />
                                        </div>
                                    </div>


                                </div>
                                <ContactBtn />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Productive />
            <Footer />
        </div>
    )
}
