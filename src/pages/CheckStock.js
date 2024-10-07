import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Productive from "../components/Productive";
import fleetBanner from "../assets/images/check_stock.jpg";
import ContactBtn from "../components/ContactBtn";

export default function checkStock() {
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
                            Check out what we stock
                        </h1>
                    </div>
                </div>
            </section>
            <section className="d-block py-5 check_stock">
                <div className="container-xxl">
                    <div className="row gy-5">
                        <div className="col-12">
                            <div className="d-flex flex-column gap-2 justify-content-center align-items-center">
                                <h2> HSS Stock
                                </h2>
                                <p>Hydraulic Solutions and Sales stock a large and diverse range of hydraulic products. Please see the below list of manufacturers and associated products.</p>
                                <h6>All products below have min / max stock levels at any given time.</h6>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row gx-5">
                                <div className="col-md-4">
                                    <div className="d-flex flex-column gap-4 stock_info">
                                        <div className="d-flex flex-column gap-1">
                                            <h4>Ryco</h4>
                                            <p>Large range of hose and fittings</p>
                                        </div>
                                        <div className="d-flex flex-column gap-1">
                                            <h4>PH</h4>
                                            <p>Stainless steel fitting adaptors and hose ends</p>
                                        </div>
                                        <div className="d-flex flex-column gap-1">
                                            <h4>HSS PTY</h4>
                                            <p>Hydraulic Solutions thermoplastic high pressure hose</p>
                                        </div>
                                        <div className="d-flex flex-column gap-1">
                                            <h4>HSS PTY</h4>
                                            <p>PTFE R14 hose</p>
                                        </div>
                                        <div className="d-flex flex-column gap-1">
                                            <h4>Kutting UK</h4>
                                            <p>Thermoplastic hose product</p>
                                        </div>
                                        <div className="d-flex flex-column gap-1">
                                            <h4>Imperial Eastman</h4>
                                            <p>Flaring tools</p>
                                        </div>
                                        <div className="d-flex flex-column gap-1">
                                            <h4>HIRE</h4>
                                            <ul>
                                                <li>
                                                    <p>
                                                        Nitrogen gas booster rental
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        Power unit rental
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="d-flex flex-column gap-4 stock_info">
                                        <div className="d-flex flex-column gap-1">
                                            <h4>Hydac</h4>
                                            <ul>
                                                <li>
                                                    <p>Pressure filter assemblies</p>
                                                </li>
                                                <li>
                                                    <p>Element spares</p>
                                                </li>
                                                <li>
                                                    <p>Element seal kits</p>
                                                </li>
                                                <li>
                                                    <p>Sight level gauges</p>
                                                </li>
                                                <li>
                                                    <p>Breathers</p>
                                                </li>
                                                <li>
                                                    <p>Gauges and accessories</p>
                                                </li>
                                                <li>
                                                    <p>Test points</p>
                                                </li>
                                                <li>
                                                    <p>Flow control valves</p>
                                                </li>
                                                <li>
                                                    <p>Check valves</p>
                                                </li>
                                                <li>
                                                    <p>Hyros clamps</p>
                                                </li>
                                                <li>
                                                    <p>2 way & 3 way ball valves</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="d-flex flex-column gap-1">
                                            <h4>Sun</h4>
                                            <p>Sun cartridges and aluminum & ductile iron bodies</p>
                                        </div>
                                        <div className="d-flex flex-column gap-1">
                                            <h4>Manifolds</h4>
                                            <p>Parallel manifolds, sandwiches, blanking plates & sub
                                                Plates</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="d-flex flex-column gap-4 stock_info">
                                        <div className="d-flex flex-column gap-1">
                                            <h4>Vickers Eaton</h4>
                                            <ul>
                                                <li><p> 420 series piston pumps</p></li>
                                                <li><p>V10 vane pumps</p></li>
                                                <li><p>VTM vane pumps</p></li>
                                                <li><p>V20 vane pumps</p></li>
                                                <li><p>VQ vane pumps</p></li>
                                                <li><p>Selected Char-Lynn motors</p></li>
                                                <li><p>Cetop 3 & 5 Solenoid DCV</p></li>
                                                <li><p>M3000 cylinders</p></li>
                                            </ul>
                                        </div>
                                        <div className="d-flex flex-column gap-1">
                                            <h4>SPAN Gauges</h4>
                                            <p>Pressure Compensated gauges</p>
                                        </div>
                                        <div className="d-flex flex-column gap-1">
                                            <h4>Hydraulic Oil</h4>
                                            <p>20 lit & 205 litre drums (Fuchs)</p>
                                        </div>
                                        <div className="d-flex flex-column gap-1">
                                            <h4>Sauer Danfoss</h4>
                                            <p>PVG32 & PVG120 Proportional valves, up to 6 bank Selected LSHT motors</p>
                                        </div>
                                    </div>
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
