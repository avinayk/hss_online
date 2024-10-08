import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ViewMore from "../components/ViewMore";
import Productive from "../components/Productive";
import fleetBanner from "../assets/images/fleet-hire.png";

export default function FleetHire() {

    const [isActive, setIsActive] = useState(false);
    const [liveText, setLiveText] = useState("");
    const [liveHead, setLiveHead] = useState("");
    const [image, setImage] = useState("");
    const [id, setId] = useState("");
    const fleetMainRef = useRef(null);

    const scrollToFleetMain = () => {
        if (fleetMainRef.current) {
            fleetMainRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleClick = (id) => {
        if (!isActive) {
            setIsActive(true);
            setId(id.toString());
            scrollToFleetMain();
        } else {
            setId(id.toString());
            scrollToFleetMain();
        }
    };

    useEffect(() => {

        if (id === "1") {
            const img = require("../assets/images/fleet1.png");
            setImage(img);
            const heading = `<h4>Hydraulic Power Unit 2</h4>`;
            const text = `
            <table class="customTable">
                <tbody>
                    <tr class="light">
                        <td>Max Flow @ Bar</td>
                        <td>From 38 Lpm @ 120 Bar to 19 Lpm @ 250 Bar</td>
                    </tr>
                    <tr class="dark">
                        <td>Elec Motor Size</td>
                        <td>9 KW, 3 Phase with 10 Meter Lead and 32 Amp Plug</td>
                    </tr>
                    <tr class="light">
                        <td>Hydraulic Pump Size</td>
                        <td>28cc / Rev, Variable displacement</td>
                    </tr>
                    <tr class="dark">
                        <td>Tank Size Lit</td>
                        <td>180 Lit</td>
                    </tr>
                    <tr class="light">
                        <td>Weight</td>
                        <td>400 Kg</td>
                    </tr>
                    <tr class="dark">
                        <td>Overall Dimensions</td>
                        <td>1250 H x 700 L x 750 W</td>
                    </tr>
                    <tr class="light">
                        <td>Features</td>
                        <td>2 Station Proportional DCV, Control, Pressure Gauge, Filtration, 10 meter Pendant Control</td>
                    </tr>
                    <tr class="dark">
                        <td>Day Rate</td>
                        <td>$150.00</td>
                    </tr>
                </tbody>
            </table>
        `;
            setLiveText(text);
            setLiveHead(heading);
        }
        else if (id === "2") {
            const img = require("../assets/images/fleet2.png");
            setImage(img);
            const heading = `<h4>Hydraulic Power Unit 3</h4>`;
            const text = `
            <table class="customTable">
                <tbody>
                    <tr class="light">
                        <td>Max Flow @ Bar</td>
                        <td>From 38 Lpm @ 155 Bar to 23 Lpm @ 250 Bar</td>
                    </tr>
                    <tr class="dark">
                        <td>Elec Motor Size</td>
                        <td>11kW, 3 phase with 10 meter lead and 32 Amp plug</td>
                    </tr>
                    <tr class="light">
                        <td>Hydraulic Pump Size</td>
                        <td>28cc / Rev, variable displacement</td>
                    </tr>
                    <tr class="dark">
                        <td>Tank Size Lit</td>
                        <td>300 Lit</td>
                    </tr>
                    <tr class="light">
                        <td>Weight</td>
                        <td>500 Kg</td>
                    </tr>
                    <tr class="dark">
                        <td>Overall Dimensions</td>
                        <td>1550 H x 750 L x 560W</td>
                    </tr>
                    <tr class="light">
                        <td>Features</td>
                        <td>2 station proportional DCV, cooler, flow control, filtration, 10 meter pendant control</td>
                    </tr>
                    <tr class="dark">
                        <td>Day Rate</td>
                        <td>$150.00</td>
                    </tr>
                </tbody>
            </table>
        `;
            setLiveText(text);
            setLiveHead(heading);
        }
        else if (id === "3") {
            const img = require("../assets/images/fleet3.png");
            setImage(img);
            const heading = `<h4>Hydraulic Power Unit 4</h4>`;
            const text = `
            <table class="customTable">
                <tbody>
                    <tr class="light">
                        <td>Max Flow @ Bar</td>
                        <td>From 62 Lpm @ 95 Bar to 16 Lpm @ 350 Bar</td>
                    </tr>
                    <tr class="dark">
                        <td>Elec Motor Size</td>
                        <td>11kW, 3 phase</td>
                    </tr>
                    <tr class="light">
                        <td>Hydraulic Pump Size</td>
                        <td>45cc / Rev, variable displacement</td>
                    </tr>
                    <tr class="dark">
                        <td>Tank Size Lit</td>
                        <td>100 Lit</td>
                    </tr>
                    <tr class="light">
                        <td>Weight</td>
                        <td>300 Kg</td>
                    </tr>
                    <tr class="dark">
                        <td>Overall Dimensions</td>
                        <td>1100 H x 1100 L x 1100 W</td>
                    </tr>
                    <tr class="light">
                        <td>Features</td>
                        <td>2 station proportional DCV, filtration, 10 meter pendant control</td>
                    </tr>
                    <tr class="dark">
                        <td>Day Rate</td>
                        <td>$150.00</td>
                    </tr>
                </tbody>
            </table>
        `;
            setLiveText(text);
            setLiveHead(heading);
        }
        else if (id === "4") {
            const img = require("../assets/images/fleet4.png");
            setImage(img);
            const heading = `<h4>Hydraulic Power Unit 5</h4>`;
            const text = `
            <table class="customTable">
                <tbody>
                    <tr class="light">
                        <td>Max Flow @ Bar</td>
                        <td>From 38 Lpm @ 200 Bar to 32 Lpm @ 250 Bar</td>
                    </tr>
                    <tr class="dark">
                        <td>Elec Motor Size</td>
                        <td>15 kW, 3 phase with 10 meter lead and 32 Amp plug</td>
                    </tr>
                    <tr class="light">
                        <td>Hydraulic Pump Size</td>
                        <td>28cc / Rev, variable displacement</td>
                    </tr>
                    <tr class="dark">
                        <td>Tank Size Lit</td>
                        <td>130 Lit</td>
                    </tr>
                    <tr class="light">
                        <td>Weight</td>
                        <td>250 Kg</td>
                    </tr>
                    <tr class="dark">
                        <td>Overall Dimensions</td>
                        <td>1550 H x 900 L x 600W</td>
                    </tr>
                    <tr class="light">
                        <td>Features</td>
                        <td>2 station proportional DCV, cooler, flow control, pressure gauge, filtration</td>
                    </tr>
                    <tr class="dark">
                        <td>Day Rate</td>
                        <td>$150.00</td>
                    </tr>
                </tbody>
            </table>
        `;
            setLiveText(text);
            setLiveHead(heading);
        }
        else if (id === "5") {
            const img = require("../assets/images/fleet5.png");
            setImage(img);
            const heading = `<h4>HSS OFU 3 Fluid Transfer / Flushing Unit</h4>`;
            const text = `
            <table class="customTable">
                <tbody>
                    <tr class="light">
                        <td>Max Flow @ Bar</td>
                        <td>72 Lpm @ 5 Bar, fixed displacement</td>
                    </tr>
                    <tr class="dark">
                        <td>Elec Motor Size</td>
                        <td>2.2Kw, single phase</td>
                    </tr>
                    <tr class="light">
                        <td>Weight</td>
                        <td>150 Kg</td>
                    </tr>
                    <tr class="light">
                        <td>Features</td>
                        <td>Comes with suction and pressure hose</td>
                    </tr>
                    <tr class="dark">
                        <td>Day Rate</td>
                        <td>$125.00 plus purchase of filter element
(1300 R 003 BN4HC-/KB)</td>
                    </tr>
                </tbody>
            </table>
        `;
            setLiveText(text);
            setLiveHead(heading);
        }
        else if (id === "6") {
            const img = require("../assets/images/fleet6.png");
            setImage(img);
            const heading = `<h4>HSS Accumulator Intensifier Unit</h4>`;
            const text = `
            <table class="customTable">
                <tbody>
                    
                    <tr class="ligth">
                        <td>Weight</td>
                        <td>50 Kg</td>
                    </tr>
                    <tr class="dark">
                        <td>Overall Dimensions</td>
                        <td>550 H x 950 L x 450W</td>
                    </tr>
                   
                    <tr class="ligth">
                        <td>Day Rate</td>
                        <td>$150.00</td>
                    </tr>
                </tbody>
            </table>
        `;
            setLiveText(text);
            setLiveHead(heading);
        }
        else if (id === "7") {
            const img = require("../assets/images/fleet7.png");
            setImage(img);
            const heading = `<h4>HSS OFT20 Offline Filtration Trolley</h4>`;
            const text = `
            <table class="customTable">
                <tbody>
                    <tr class="light">
                        <td>Max Flow @ Bar</td>
                        <td>20 Lpm @ 3.5 Bar, fixed displacement</td>
                    </tr>
                    <tr class="dark">
                        <td>Elec Motor Size</td>
                        <td>0.37kW single phase</td>
                    </tr>
                    <tr class="light">
                        <td>Weight</td>
                        <td>32.6 Kg</td>
                    </tr>
                    <tr class="dark">
                        <td>Overall Dimensions</td>
                        <td>530 L x 515 W x 1300 H</td>
                    </tr>
                    <tr class="light">
                        <td>Features</td>
                        <td>Comes with suction and pressure hose. Filter unit can be detached from trolley for carry</td>
                    </tr>
                    <tr class="dark">
                        <td>Day Rate</td>
                        <td>$125.00 plus purchase of filter element
(0200 MX 010 ECON2 /-B3.5)</td>
                    </tr>
                </tbody>
            </table>
        `;
            setLiveText(text);
            setLiveHead(heading);
        }
    }, [id]);


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
                                <p ref={fleetMainRef}>
                                    This includes Flushing Rigs, High Pressure HPUs, and Water Glycol HPUs. At Hydraulic Solutions and Sales, we offer hire packages designed to meet your specific requirements, including offshore certified solutions. Let us help you find the right fit for your project.</p>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex flex-wrap fleet_product align-items-center justify-content-between gap-5">
                                <div className={isActive ? "active fleet_main_p" : "fleet_main_p"}>
                                    <div className="d-flex flex-column gap-3 fleet_1 fleet_main_p flex-shrink-0">

                                        <h4 dangerouslySetInnerHTML={{ __html: liveHead }}></h4>

                                        <div className="d-block fleet_image">
                                            <img
                                                className="w-100 h-100"
                                                src={image}
                                                alt="img"
                                            />
                                        </div>
                                    </div>

                                    <div
                                        dangerouslySetInnerHTML={{ __html: liveText }}
                                        className="fleet_info w-100 p-md-5 p-2"
                                    >
                                    </div>
                                </div>
                                <div onClick={() => handleClick(1)} className="d-flex flex-column gap-3 fleet_1  flex-shrink-0">
                                    <h4>Hydraulic Power Unit 2</h4>
                                    <div className="d-block fleet_image">
                                        <img
                                            className="w-100 h-100"
                                            src={require("../assets/images/fleet1.png")}
                                            alt="img"
                                        />
                                    </div>
                                    <ViewMore />
                                </div>
                                <div onClick={() => handleClick(2)} className="d-flex flex-column gap-3 fleet_1">
                                    <h4>Hydraulic Power Unit 3</h4>
                                    <div className="d-block fleet_image">
                                        <img
                                            className="w-100 h-100"
                                            src={require("../assets/images/fleet2.png")}
                                            alt="img"
                                        />
                                    </div>
                                    <ViewMore />
                                </div>
                                <div onClick={() => handleClick(3)} className="d-flex flex-column gap-3 fleet_1">
                                    <h4>Hydraulic Power Unit 4</h4>
                                    <div className="d-block fleet_image">
                                        <img
                                            className="w-100 h-100"
                                            src={require("../assets/images/fleet3.png")}
                                            alt="img"
                                        />
                                    </div>
                                    <ViewMore />
                                </div>
                                <div onClick={() => handleClick(4)} className="d-flex flex-column gap-3 fleet_1">
                                    <h4>Hydraulic Power Unit 5</h4>
                                    <div className="d-block fleet_image">
                                        <img
                                            className="w-100 h-100"
                                            src={require("../assets/images/fleet4.png")}
                                            alt="img"
                                        />
                                    </div>
                                    <ViewMore />
                                </div>
                                <div onClick={() => handleClick(5)} className="d-flex flex-column gap-3 fleet_1">
                                    <h4>HSS OFU 3 Fluid Transfer / Flushing Unit</h4>
                                    <div className="d-block fleet_image">
                                        <img
                                            className="w-100 h-100"
                                            src={require("../assets/images/fleet5.png")}
                                            alt="img"
                                        />
                                    </div>
                                    <ViewMore />
                                </div>
                                <div onClick={() => handleClick(6)} className="d-flex flex-column gap-3 fleet_1">
                                    <h4>HSS Accumulator Intensifier Unit</h4>
                                    <div className="d-block fleet_image">
                                        <img
                                            className="w-100 h-100"
                                            src={require("../assets/images/fleet6.png")}
                                            alt="img"
                                        />
                                    </div>
                                    <ViewMore />
                                </div>
                                <div onClick={() => handleClick(7)} className="d-flex flex-column gap-3 fleet_1">
                                    <h4>HSS OFT20 Offline Filtration Trolley</h4>
                                    <div className="d-block fleet_image">
                                        <img
                                            className="w-100 h-100"
                                            src={require("../assets/images/fleet7.png")}
                                            alt="img"
                                        />
                                    </div>
                                    <ViewMore />
                                </div>
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
