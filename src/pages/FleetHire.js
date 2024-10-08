import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ViewMore from "../components/ViewMore";
import Productive from "../components/Productive";
import fleetBanner from "../assets/images/fleet-hire.png";
import { Link } from "react-router-dom";

export default function FleetHire() {
    return (
        <div>
            <Header />
            <section
                className="fleet_banner d-block"
                style={{ backgroundImage: `url(${fleetBanner})` }}
            >
                <div className="container-xxl h-100">
                    <div className="d-flex justify-content-start h-100 align-items-center position-relative z-3">
                        <h1 className="text-center">
                            Fleet Hire
                        </h1>
                    </div>
                </div>
            </section>
            <section className="fleet_main d-block py-5">
                <div className="container-xxl">
                    <div className="row gy-4">
                        <div className="col-10 mx-auto">
                            <h2> Welcome to the Hydraulic Solutions and Sales Hire Fleet Division.</h2>

                        </div>
                        <div className="col-10 mx-auto">
                            <div className="d-flex flex-column gap-2">
                                <p>
                                    If you don’t find exactly what you need from the options below, we are happy to provide a custom-built HPU hire solution tailored to your needs. </p>
                                <p>
                                    This includes Flushing Rigs, High Pressure HPUs, and Water Glycol HPUs. At Hydraulic Solutions and Sales, we offer hire packages designed to meet your specific requirements, including offshore certified solutions. Let us help you find the right fit for your project.</p>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex flex-wrap fleet_product align-items-center justify-content-between gap-5">
                                <Link to="/fleet-info/hydraulic-power-unit-2" className="d-flex flex-column gap-3 fleet_1  flex-shrink-0">
                                    <h4>Hydraulic Power Unit 2</h4>
                                    <div className="d-block fleet_image">
                                        <img
                                            className="w-100 h-100"
                                            src={require("../assets/images/fleet1.png")}
                                            alt="img"
                                        />
                                    </div>
                                    <ViewMore />
                                </Link>
                                <Link to="/fleet-info/hydraulic-power-unit-3" className="d-flex flex-column gap-3 fleet_1">
                                    <h4>Hydraulic Power Unit 3</h4>
                                    <div className="d-block fleet_image">
                                        <img
                                            className="w-100 h-100"
                                            src={require("../assets/images/fleet2.png")}
                                            alt="img"
                                        />
                                    </div>
                                    <ViewMore />
                                </Link>
                                <Link to="/fleet-info/hydraulic-power-unit-4" className="d-flex flex-column gap-3 fleet_1">
                                    <h4>Hydraulic Power Unit 4</h4>
                                    <div className="d-block fleet_image">
                                        <img
                                            className="w-100 h-100"
                                            src={require("../assets/images/fleet3.png")}
                                            alt="img"
                                        />
                                    </div>
                                    <ViewMore />
                                </Link>
                                <Link to="/fleet-info/hydraulic-power-unit-5" className="d-flex flex-column gap-3 fleet_1">
                                    <h4>Hydraulic Power Unit 5</h4>
                                    <div className="d-block fleet_image">
                                        <img
                                            className="w-100 h-100"
                                            src={require("../assets/images/fleet4.png")}
                                            alt="img"
                                        />
                                    </div>
                                    <ViewMore />
                                </Link>
                                <Link to="/fleet-info/flushing-unit" className="d-flex flex-column gap-3 fleet_1">
                                    <h4>HSS OFU 3 Fluid Transfer / Flushing Unit</h4>
                                    <div className="d-block fleet_image">
                                        <img
                                            className="w-100 h-100"
                                            src={require("../assets/images/fleet5.png")}
                                            alt="img"
                                        />
                                    </div>
                                    <ViewMore />
                                </Link>
                                <Link to="/fleet-info/hss-accumulator" className="d-flex flex-column gap-3 fleet_1">
                                    <h4>HSS Accumulator Intensifier Unit</h4>
                                    <div className="d-block fleet_image">
                                        <img
                                            className="w-100 h-100"
                                            src={require("../assets/images/fleet6.png")}
                                            alt="img"
                                        />
                                    </div>
                                    <ViewMore />
                                </Link>
                                <Link to="/fleet-info/hss-oft20-offline" className="d-flex flex-column gap-3 fleet_1">
                                    <h4>HSS OFT20 Offline Filtration Trolley</h4>
                                    <div className="d-block fleet_image">
                                        <img
                                            className="w-100 h-100"
                                            src={require("../assets/images/fleet7.png")}
                                            alt="img"
                                        />
                                    </div>
                                    <ViewMore />
                                </Link>
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
