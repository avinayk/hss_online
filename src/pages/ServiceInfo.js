import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Productive from "../components/Productive";
import { useParams } from "react-router-dom";
import ViewMore from "../components/ViewMore";

export default function ServiceInfo() {
  const { id } = useParams();
  const [liveText, setLiveText] = useState("");
  const [liveHead, setLiveHead] = useState("");
  useEffect(() => {
    if (id === "Power-Unit-Hydraulic-Cylinder-and-Manifold-Design-&-Supply") {
      const heading = `<h4>Power Unit, Hydraulic Cylinder and Manifold Design & Supply</h4>`;
      const text = `<li>
      <p>We offer standard or customized turnkey power unit design, manufacture, installation and commissioning to all required mine site / offshore certification.
                    </p>
      </li>` + `<li>
      <p>Additionally, we offer standard or custom hydraulic cylinder design, manufacture or recondition, and hydraulic manifold design and supply to your required specifications.
                    </p>
      </li>`;
      setLiveText(text);
      setLiveHead(heading);
    }
    if (id === "Hydraulic-Application-Engineering") {
      const heading = `<h4>Hydraulic Application Engineering</h4>`;
      const text = `<li>
      <p>
                     Hydraulic Solutions and Sales can accommodate your complete hydraulic engineering requirements. With a dedicated design team, manufacturing and testing facilities and specialized onsite installation and commissioning technicians we can offer the whole package leaving you with a turnkey finish.
                    </p>
      </li>` + `<li>
      <p>If you have specific offshore or mine-site certification requirements we are able to supply accordingly, including all documentation and necessary operation, identification and maintenance manuals.
                    </p>
      </li>` + `<li>
      <p>If you require further post-commissioning support we pride ourselves in our after-market assistance wherever and whenever necessary.</p>
      </li>`;
      setLiveText(text);
      setLiveHead(heading);
    }
    if (id === "Reconditioning-servicing-and-testing") {
      const heading = `<h4>Reconditioning, servicing, and testing</h4>`;
      const text = `<li>
      <p>At Hydraulic Solutions and Sales, we offer hydraulic reconditioning, servicing and testing for hydraulic systems, power units and system components.
                    </p>
      </li>` + `<li>
      <p>
      If your hydraulic equipment is not running efficiently, we can carry out a strip and assess, reconditioning and testing of your equipment. We will provide all necessary testing documentation, including efficiency reports and conformity certificates.
                    </p>
      </li>` ;
      setLiveText(text);
      setLiveHead(heading);
    }
    if (id === "On-site-fluid-contamination-analysis") {
      const heading = `<h4> On-site fluid contamination analysis, hydraulic system maintenance, and scheduled hydraulic servicing</h4>`;
      const text = `<li>
      <p>At Hydraulic Solutions and Sales, we offer a complete oil analysis service, including an on-site examination giving immediate contamination and water saturation contents in applicable ISO standards, using our<a href="https://www.hssptyltd.com.au/wp-content/uploads/2019/04/fluid-control-unit.pdf"> Hydac Fluid Control Unit (PDF).</a>
                    </p>
      </li>` + `<li>
      <p>Additionally, we offer full scheduled hydraulic system maintenance programs, including complete filtration analysis, recommended changes and hard copy reports over relevant time periods showing line graphs of particle contamination and oil temperatures. These results can be used to continually monitor your hydraulic equipment and prevent unexpected breakdowns and costly hydraulic repairs. For more information see <a href="https://www.hssptyltd.com.au/wp-content/uploads/2019/04/savings-with-proper-contamination-control.pdf"> Savings With Proper Contamination Control (PDF).</a>
                    </p>
      </li>` ;
      setLiveText(text);
      setLiveHead(heading);
    }
    if (id === "On-site-installations") {
      const heading = `<h4>On-site installations, commissioning, troubleshooting, and break-down repairs</h4>`;
      const text = `<li>
      <p>At Hydraulic Solutions and Sales, we have a dedicated team of specialised hydraulic technicians with fully equipped mobile service vehicles. We can provide hydraulic repairs Australia wide, as well as services to complete hydraulic installations, commissioning, troubleshooting, and break-down repairs. If hydraulic equipment repairs or services are required nationally or internationally we can organize remote site visits to your convenience.
                    </p>
      </li>` + `<li>
      <p>Our state-of-the-art mobile service trailer is specifically designed and equipped for troubleshooting hydraulic systems, on-site hose and tube installations, and a wide range of hydraulic repair and field services.
                    </p>
      </li>` ;
      setLiveText(text);
      setLiveHead(heading);
    }
    if (id === "Standard-or-exotic-hose-assembly-supply") {
      const heading = `<h4> Standard or exotic hose assembly supply, testing, inspections and certification</h4>`;
      const text = `<li>
      <p>We offer standard or exotic hose assembly supply, testing, inspections, general certification or third-party certification to DNV-GL, including re-certifications. We can also assist with hydraulic repairs and sales of replacement hoses and fittings as you require.
                    </p>
      </li>` ;
      setLiveText(text);
      setLiveHead(heading);
    }
    if (id === "Hydraulic-Training") {
      const heading = `<h4>Hydraulic Training</h4>`;
      const text = `<li>
      <p> Hydraulic Solutions and Sales offer hydraulic training specifically to suit your needs. We can customize a training package together with our department managers to your operation’s requirements and are willing to travel to your site or alternatively, we can accommodate you at our facility in Henderson.
                    </p>
      </li>` ;
      setLiveText(text);
      setLiveHead(heading);
    }
    if (id === "Fully-equipped-Hydraulic-Workshop-facilities") {
      const heading = `<h4>Fully equipped Hydraulic Workshop facilities</h4>`;
      const text = `<li>
      <p> Hydraulic Solutions and Sales have a fully-equipped workshop and highly qualified hydraulic technicians to handle all hydraulic equipment repairs, maintenance work, testing and hydraulic services on all of your hydraulic equipment.
                    </p>
      </li>` + `<li>
        <ul class="d-flex flex-column gap-2 list_style">
                <li>Hydraulic test bench with dynamic torque testing capabilities</li>
                <li>General test bench</li>
                <li>Specialized Hose and Fittings assembly area with designated hydrostatic test bench</li>
                <li>Hydraulic component assembly area</li>
                <li>Modern hydraulic component cleaning facilities</li>
                <li>Wash down / high-pressure cleaning area</li>
                <li>Metal fabrication / machining facilities</li>
                <li>Paint booth</li>
                <li>5 ton overhead crane</li>
                <li>Cylinder stripping area</li>
                <li>Enquire here</li>
            </ul>
      </li>` ;
      setLiveText(text);
      setLiveHead(heading);
    }
  }, [id]);
  return (
    <div>
      <Header />
      <section className="d-block service_info py-5">
        <div className="container-xxl">
          <div className="row gy-5">
            <div className="col-12">
              <div className="d-flex flex-column gap-3 service_info_head">
                <h1>Our Services</h1>
                <div className="d-flex flex-column gap-2">
                  <p>
                    At Hydraulic Solutions and Sales, we offer many services
                    from hydraulic repairs and sales to
                    troubleshooting <Link to="/"> hydraulic systems </Link>and custom design of power
                    units and cylinders. We can assist with hydraulic system
                    maintenance, reconditioning and hydraulic repairs Australia
                    wide.
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
              <div className="d-flex flex-column gap-5 pb-5 serviceinfo_right">

                <div className="d-flex flex-column  gap-3 servicetext_right">
                  <h4 dangerouslySetInnerHTML={{ __html: liveHead }}></h4>
                  <div className="d-flex flex-column  gap-2">
                    <ul className="p-0 d-flex flex-column gap-2" dangerouslySetInnerHTML={{ __html: liveText }} />
                  </div>
                </div>
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
                      <ViewMore/>
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
                      <ViewMore/>
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
                      <ViewMore/>
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
                      <ViewMore/>
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
                      <ViewMore/>
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
                      <ViewMore/>
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
                      <ViewMore/>
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
                      <ViewMore/>
                    </Link>
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
  );
}
