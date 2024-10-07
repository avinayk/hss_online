import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactBtn from "../components/ContactBtn";
import Productive from "../components/Productive";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function ProductInfo() {
  const { id } = useParams();
  const [liveText, setLiveText] = useState("");
  const [liveHead, setLiveHead] = useState("");
  const [image, setImage] = useState("");
  useEffect(() => {
    if (id === "accumulators") {
      const img = require("../assets/images/product1.png");
      setImage(img);
      const heading = `<h5>Accumulators </h5>`;
      const text =
        `<li>
        <p>
      <span>Hydraulic Solutions and Sales</span> distribute the Hydac
      range of hydraulic <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/accumulators.pdf" >accumulators (PDF)</a> and
      accessories. Additionally, if you require accumulators for
      offshore applications with special coatings or constructed from
      stainless steel up to 690 bar, we can accommodate. Please do not
      hesitate to contact us with any enquiries.
      </p>
  </li>` +
        `<li>
        <h3>Hydac Accumulators Australia</h3>
        <div class="pt-2">
        <p>
      <span>We are a proudly appointed</span> WA service partner of Hydac, one of the most well renowned hydraulic brands on the market. Hydac have an extensive variety of bladder, piston and diaphragm accumulators, expertly designed and manufactured to improve efficiency in hydraulic systems.
       </p>
       <p class="pt-2"> Hydac accumulators are used in countless industries, including oil and gas, mining, and agriculture. The significant role played by hydraulic accumulators includes reducing the amount of power required, creating an energy reservoir, and absorbing surges in pressure to help maintain constant pressure inside the system. 
       </p>
          <p class="pt-2">
     The main advantages of Hydac accumulators are enhanced performance and efficiency of the entire hydraulic system, improved reliability and performance, and increased longevity of the system components. Investing in a high-quality Hydac hydraulic accumulator will see long term financial and performance benefits.
      </p>
      </div>
  </li>` +
        `<li>
        <div >
        <h3>Types of Hydraulic Accumulators</h3>
        <p class="pt-2">
      <span>Which accumulator you choose </span> depends on your specific application and operational needs, such as the difference in pressure throughout the system and the frequency of pulsation.
      </p>
        <p class="pt-2">
     Hydac Bladder Accumulators come in high-pressure models to cope with pressures between 800 and 1000 bars. Full stainless steel models are available, as well as a composite synthetic, and stainless steel accumulators should you require anti-corrosion properties. 
      </p>
      <p class="pt-2">Hydac Piston Accumulators come with measurement systems to monitor the system and indicate relevant information to operators. </p>
      <p class="pt-2">Hydac Diaphragm Accumulators come in screw type, weld type, and stainless steel models to suit your particular application. </p>
      </div>
  </li>` +
        `<li>
  <h3>Accumulator Accessories</h3>
  <div class="pt-2">
  <p>
<span>In addition to the range of Hydac</span>  accumulators, at  Hydraulic Solutions and Sales, we also offer several accumulator accessories, including mounting elements, testing and charging units, and safety and shut-off blocks. If you have a specific need, don’t hesitate to get in touch with us about the range of accumulator accessories available. 
 </p>
</div>
</li>` +
        `<li>
<div >
<h3>Servicing and Maintenance for Hydraulic Accumulators Australia</h3>
<p class="pt-2">
<span>If you need assistance installing,</span>  servicing, or replacing hydraulic accumulators, the team of specialised technicians at Hydraulic Solutions and Sales can help. We provide services Australia wide from installation and scheduled servicing to trouble-shooting and part replacements. 
</p>
<p class="pt-2">
Being the Hydac appointed WA accumulator distributors, we have extensive experience with Hydac accumulators, meaning we can provide timely and effective services on your site or at our workshop in Henderson, WA. We understand an issue with any part of your hydraulic system could lead to costly delays; that’s why we make it a commitment to provide quick but thorough servicing so you can get back to work.
</p>
</div>
</li>` +
        `<li>
<div >
<h3>Enquiries and more information</h3>
<p class="pt-2">
<span>With 30 years of hydraulic industry</span> experience, we believe Australian customers will benefit from our quality products and outstanding services. 
</p>
<p class="pt-2">
For more information about the accumulator products and accessories that we supply, or about custom manufacturing options, please get in touch with us. We would be happy to answer any queries that you might have.
</p>
</div>
      </li>`;

      setLiveText(text);
      setLiveHead(heading);
    }
    if (id === "filtration") {
      const img = require("../assets/images/Filtration.png");
      setImage(img);
      const heading = `<h5>Filtration</h5>`;
      const text =
        `<li>
        <p>
      Hydraulic Solutions and Sales are appointed WA service partners of Hydac, offering their full range of filtration products. Hydac is responsible for some of the most reputed hydraulic filters in Australia and internationally. 
      </p> 
       <p class="pt-2">
    The advantages of the Hydac range of hydraulic filtration include high-pressure stability, a long service life, low-pressure drops, and high contamination retention capacity. These features mean Hydac filters help protect components and improve the overall efficiency of <a target="_blank" href="#"> hydraulic systems </a>. They are used for a broad range of applications across many industries.
      </p>
  </li>` +
        `<li>
        <h3>Hydac Filtration Products</h3>
        <div class="pt-2">
        <p>
      <span>The range of Hydac filtration </span> products can be used for liquid and gaseous media and are manufactured to the highest quality standards. Whether you need inline pressure filters, return line filters, or filters for reversible oil flow, we have a broad range of ex-stock with immediate availability.
       </p>
      
       <ul class="pt-2 filtration_ul">
       <li>
       Pressure Line Filters- these filters offer direct protection of system components and help create general cleanliness in the system.
       </li>
       <li>Return Line Filters – Install these in the hydraulic tank line or on top of the hydraulic tank. They ensure all fluid that flows back to the tank is filtered so that no contamination enters the tank.</li>
       <li>Return Line & Suction Boost Filters – These have many advantages, including filtering fluid finely and an extremely low-pressure drop. They are particularly effective in cold temperatures compared to other products.</li>
       <li>Inline Pressure Filters – These filters can be installed before or after the boost pump, and also in the return line. They ensure the required cleanliness of your hydraulic fluid.</li>
       <li>Breather Filters – These prevent contamination from entering the tank during tank breathing. They are cost-effective and environmentally friendly products.</li>
       </ul>
       <p class="pt-2"><span>For applications such as </span> those in the marine and oil and gas industries where non-corrosive properties are paramount, we supply: </p>
       <ul class="pt-2 filtration_ul">
       <li >
       Stainless Steel Filters
       </li>
       <li>Filters with Special Offshore Paint</li>
       </ul>
       
      </div>
  </li>` +
        `<li>
        <div >
        <h3>Why are hydraulic filters so crucial?</h3>
        <p class="pt-2">
      <span>The condition of hydraulic fluid </span> can significantly impact the overall health of a hydraulic system. More than half of breakdowns can be attributed to poor fluid conditions, and contamination in the hydraulic fluid can have a very detrimental impact on the longevity of other parts in the system. 
      </p>
        <p class="pt-2">
   Excessive wear and tear over time mean that your system will not be functioning optimally, and productivity will be compromised. Without adequate filtration, you will be faced with unnecessary and expensive costs. To ensure optimal efficiency and greater longevity of your equipment, you should invest in high-quality hydraulic filtration products.
      </p>
      </div>
  </li>` +
        `<li>
  <h3>Optimise your hydraulic filtration</h3>
  <div class="pt-2">
  <p>
<span>If you need assistance, making</span> sure the filtration technology in your hydraulic equipment is performing optimally, our qualified technicians at Hydraulic Solutions and Sales can help. We understand that any issue with your hydraulic equipment can lead to costly delays in work. That’s why we offer quick but effective testing and maintenance services so you can get back to work in no time. 
 </p>
 <p class="pt-2">We have decades of experience with Hydac filtration products and are well equipped to assist with any replacement or installation needs. For more information about how we supply hydraulic filters Australia wide, get in touch with the team at Hydraulic Solutions and Sales. We look forward to hearing from you.</p>
</div>
</li>`;

      setLiveText(text);
      setLiveHead(heading);
    }
    if (id === "cartridges-&-manifolds") {
      const img = require("../assets/images/Cartridges.png");
      setImage(img);
      const heading = `<h5>Cartridges & Manifolds</h5>`;
      const text =
        `<li>
        <p><span>
Hydraulic Solutions and Sales </span>are an authorised WA distributor of the Sun Hydraulics range of screw-in cartridge valves and manifolds. Sun Hydraulics is a leading brand in the industry, and we are proud to offer our clients some of the best cartridge and manifold products on the market. 
      </p> 
       <p class="pt-2">
   Because we know time equals money, we have a large range of ex-stock with immediate availability from high-performance screw-in hydraulic cartridge valves and manifolds to the new Australian-marketed range of valve assemblies. For any enquiries about the products available, get in touch with us today.
      </p>
  </li>` +
        `<li>
        <h3>Sun Hydraulics Cartridge Valves</h3>
        <div class="pt-2">
        <p>
      <span>Sun Hydraulics screw-in cartridge </span>  valves set the industry standard for hydraulic cartridges in Australia. Their innovative design and floating style construction means Sun Hydraulics cartridge valves operate well at higher pressures and flow rates. Even in the most demanding applications across mining, marine, and agricultural industries, these cartridges perform reliably and efficiently.
       </p >
       <p class="pt-2"> The range of Sun Hydraulics cartridges come in five sizes, each size offering double the flow capacity and horsepower of the previous size. So no matter your specific requirements, we have just the product to suit.</p>
      
       <p class="pt-2">In our range of stock, you will find any type of hydraulic cartridge valve to help you optimise your hydraulic circuit. Pressure control, flow control, load holding, and directional cartridges are available as well as electro-proportional, solenoid-operated, and Cavity Saver multi-function products. For more information or advice about the products you require, get in touch with Hydraulic Solutions today.</p>
      
       
      </div>
  </li>` +
        `<li>
        <div >
        <h3>High-Quality Manifolds</h3>
        <p class="pt-2">
      <span>Manifolds effectively provide a </span>  logical and compact layout for multiple valves, making it easy for an operator to control fluid flow throughout the hydraulic system. They are used in equipment across several industries, such as marine, mining, farm, and construction equipment. 
      </p>
        <p class="pt-2">
   The range of Sun Hydraulics manifolds are constructed expertly and can be up to 50% smaller than other brands on the market. Many types are available, including line mount, sandwich, motor mount, subplate, bar, and gasket mount. 
      </p>
      </div>
  </li>` +
        `<li>
  <h3>Servicing & Maintenance for Hydraulic Cartridges Australia</h3>
  <div class="pt-2">
  <p>
<span>Our team of specialised technicians</span>  at Hydraulic Solutions and Sales are able to assist with any servicing, maintenance or replacements involving hydraulic cartridge valves and manifolds. With over 30 years of industry experience, and many years handling Sun Hydraulics products, we are well equipped to deliver the finest services. 
 </p>
 <p class="pt-2">We understand any issues with hydraulic equipment can be costly, both financially and time-wise. That’s why we strive to provide all our customers with timely and efficient service so that they can get back to what’s important. </p>
 <p class="pt-2">For installation, scheduled servicing, trouble-shooting, and sales involving hydraulic cartridges get in touch with us at Hydraulic Solutions and Sales. We have a fully equipped workshop in Perth, but also offer on-site servicing Australia wide.</p>
</div>
</li>` +
        `<li>
<h3>Get in touch</h3>
<div class="pt-2">
<p>
<span>If you would like more information </span> about the hydraulic cartridge valve and various products we distribute or the maintenance services we offer, get in touch with us today. Our friendly team will be happy to answer any queries you might have. 
</p>
</div>
</li>`;

      setLiveText(text);
      setLiveHead(heading);
    }
    if (id === "condition-monitoring") {
      const img = require("../assets/images/Condition.png");
      setImage(img);
      const heading = `<h5>Condition Monitoring</h5>`;
      const text =
        `<li>
        <p><span>According to Hydac, around </span> 80% of hydraulic system breakdowns are due to contamination of hydraulic fluids and system components. A breakdown means a delay in work and a costly decrease in productivity.
      </p> 
       <p class="pt-2">
   Regular condition monitoring of hydraulic systems can help prevent breakdowns and increase the efficiency of your equipment. Specialised monitoring and analysing equipment is a worthwhile investment that will reap benefits in the long term.
      </p>
  </li>` +
        `<li>
        <h3>Hydac Condition Monitoring Equipment</h3>
        <div class="pt-2">
        <p>
      <span>At Hydraulic Solutions and Sales, </span>  we are the appointed WA service partner of Hydac, offering their range of high-quality hydraulic condition monitoring 
      <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/hydac-fluid-testing-and-analysis-systems.pdf"> (https://www.hssptyltd.com.au/wp-content/uploads/2018/10/hydac-fluid-testing-and-analysis-systems.pdf) </a> products. Hydac condition monitoring equipment is easy to use and is very effective at detecting solid or liquid contaminants. It can be used in a laboratory or on the field for convenience. 
       </p >
       <p class="pt-2">The range of products we stock for condition monitoring of hydraulic systems include: </p>
       <ul class="pt-2 filtration_ul">
       <li>
       Aqua Sensors for detecting the water content in hydraulic fluids; and Water Test Kits to analyse the percentage of water in hydraulic fluids. Water in hydraulic fluids can seriously compromise the reliability and longevity of hydraulic systems.
       </li>
       <li>
       Contamination Sensors which are designed to be used continuously on hydraulic systems that require information on the trends of solid contaminants.
       </li>
       <li>
       Fluid Control Units that use fiber-optic sensors to detect solid contaminants in hydraulic fluid. Also available with a bottle sampling unit so you can take samples for the laboratory.
       </li>
       <li>
       Sampling Systems for taking samples in a consistent way so they can be analysed in a laboratory. Both static and dynamic sampling sets are available.
       </li>
       <li>
       Fluid Analysis Set which produces contamination monitors from samples of hydraulic oil. These can then be analysed under a microscope to determine what type of contamination it is.
       </li>
       </ul>
       <p class="pt-2"><span>For more information about the </span>  hydraulic condition monitoring products we distribute, get in touch with us. Our team at Hydraulic Solutions & Sales will be happy to assist with any queries.</p>
      </div>
  </li>` +
        `<li>
        <div >
        <h3>Regular Hydraulic Condition Monitoring Australia-wide</h3>
        <p class="pt-2">
      <span>Regular hydraulic condition monitoring </span>  and maintenance is the key to a healthy and effective hydraulic system. Don’t wait until a large breakdown halts your work to take a closer look. Ongoing, scheduled servicing can help avoid costly breakdowns, and will improve the longevity of your equipment. 
      </p>
        <p class="pt-2">
   At Hydraulics Solutions and Sales, we not only provide Hydac condition monitoring products, but also a range of services to help our customers keep their hydraulic equipment in optimal working shape. If you need assistance with scheduled servicing, testing or reconditioning, our team of specialised technicians can help. 
      </p>
      <p>With over 30 years of experience, we have dealt with most of the issues you may come across, and understand the warning signs that precede a breakdown. If unfortunately, you do experience a major issue, we can assist with timely repairs and replacements to get your equipment back to work as soon as possible.</p>
      </div>
  </li>` +
        `<li>
  <h3>Need assistance?</h3>
  <div class="pt-2">
  <p>
<span>Whether you require high-quality </span> products or maintenance services you can rely on, we are able to assist with any hydraulic condition monitoring needs. Get in touch with our team at  Hydraulic Solutions and Sales for more information: we look forward to hearing from you.
 </p>
</div>
</li>`;

      setLiveText(text);
      setLiveHead(heading);
    }
    if (id === "coolers") {
      const img = require("../assets/images/Coolers.png");
      setImage(img);
      const heading = `<h5>Coolers</h5>`;
      const text =
        `<li>
        <p><span>At Hydraulic Solutions and Sales</span>, we are an appointed WA service partner of the range of Hydac cooling systems. Hydac is an internationally renowned manufacturer of hydraulic cooling systems and refrigeration units that can be used across many industries for both mobile and industrial applications.
      </p> 
  </li>` +
        `<li>
        <h3>Hydac Cooling Systems</h3>
        <div class="pt-2">
        <p>
      <span>The range of Hydac cooling systems </span>  we offer includes: 
       </p >
       <ul class="pt-2 filtration_ul">
       <li>
      Oil/Air Cooler Units with a built-in pump and filter which offers customers a complete cooling system. They have a compact and service-friendly construction, and low noise or mobile options are available.
       </li>
       <li>
   Industrial Cooling Systems for cooling circuits such as AC main drives, braking systems, and motors. Compared to other options on the market, these have low operating costs and are more environmentally friendly due to a closed-loop system.
       </li>
       <li>
       Refrigeration Units in six different sizes with cooling capacities between 1 and 12.5 kW. These are used in applications that require the temperature of the coolant to be lower than the ambient temperature, such as machine tools and presses.
       </li>
       <li>
 Mobile Cooling Systems can be used in applications such as cooling transformers, drive motors or generators. They are easy to install, safe to operate, and don’t take up much space.
       </li>
       <li>
      Pump-Transfer Cooler Filtration Units with cooling capacities up to 90kW. They are compact, easy to install, and can be adapted to suit specific fluid viscosities.
       </li>
       </ul>
       <p class="pt-2"><span>To learn more about the </span>  Hydac cooling systems and additional accessories we distribute, get in touch with the team at Hydraulic Solutions and Sales today. We will be happy to assist with any queries you might have.</p>
      </div>
  </li>` +
        `<li>
        <div >
        <h3>Why do you need a hydraulic cooling system?</h3>
        <p class="pt-2">
      <span>In the process of transforming </span> and transmitting energy in hydraulic systems, some heat is generated. If left unmanaged, excess heat can impact the effectiveness of the system, and even cause significant damage to system components. 
      </p>
        <p class="pt-2">
Hydraulic coolers and cooling systems are important for maintaining the hydraulic fluid at the right temperature, improving the longevity of system components, and increasing overall efficiency. Investing in quality hydraulic coolers will reap financial savings in the long term and help keep your equipment in optimal condition. 
      </p>
      
      </div>
  </li>` +
        `<li>
  <h3>Servicing & maintenance for hydraulic coolers</h3>
  <div class="pt-2">
  <p>
<span>In addition to supplying high-quality </span> cooling systems and accessories, at Hydraulic Solutions and Sales, we offer installation and maintenance services for hydraulic coolers Australia wide. Our trained technicians are very experienced with Hydac products, so you can be confident that you will be getting the finest servicing in a timely manner.
 </p>
 <p>If you are facing issues with excess heat or having trouble diagnosing an issue with your equipment, we can help. With over 30 years of experience, there is hardly an issue we have not dealt with before. </p>
</div>
</li>` +
        `<li>
<h3>Need more information?</h3>
<div class="pt-2">
<p>
<span>If you need assistance with </span> finding the right product, or would like to enquire about the services we offer, don’t hesitate to get in touch with us. At Hydraulic Solutions and Sales, we are committed to providing the finest products and services to our customers throughout Australia. We would love to help you too.
</p>
</div>
</li>`;

      setLiveText(text);
      setLiveHead(heading);
    }
    if (id === "cylinders") {
      const img = require("../assets/images/Cylinders.png");
      setImage(img);
      const heading = `<h5>Cylinders</h5>`;
      const text =
        `<li>
        <p><span>Since hydraulic cylinders are one of</span>, the most fundamental components of a hydraulic system, it’s very important to invest in a high-quality product. At Hydraulic Solutions and Sales, we are an authorised WA distributor of the <a target="_blank" href="#" > Eaton series </a> of medium-duty hydraulic cylinders, and we also offer industrial duty cylinders to your specific application requirements.
      </p> 
  </li>` +
        `<li>
        <h3>Eaton Vickers Hydraulic Cylinders</h3>
        <div class="pt-2">
        <p>
     Eaton Vickers hydraulic cylinders are internationally renowned as some of the best medium duty options on the market. We distribute the M3000, S3000, and Special Medium Duty series, with the full M3000 series available immediately as ex-stock. 
       </p >
      
       <p class="pt-2">The Eaton Vickers hydraulic cylinders are suitable for both mobile and industrial applications, and their compact design means they are a cost-effective but reliable product.</p>
      </div>
  </li>` +
        `<li>
        <div >
        <h3>M3000 and S3000 Series</h3>
        <p class="pt-2">
      <span>The M3000 Series offers seven bore</span>  sizes from 2 inches (50.8mm) to 5 inches (127mm), and the S3000 offers five sizes from 2 inches (50.8mm) to 4 inches (101.6mm). The cylinder barrels are made from steel tubing, which complies with ASTM International specifications. The piston rods are chrome plates, though stainless steel options are available by request.
      </p>
        <p class="pt-2">
The M3000 Series offers a rotatable rod end design, whereas the S3000 Series has a screwed rod end design, providing support for an extra-long piston rod. Both Series feature a welded head end cap to the barrel for extra strength.
      </p>
      
      </div>
  </li>` +
        `<li>
  <h3>Special Medium Duty Series</h3>
  <div class="pt-2">
  <p>
<span>The Special Medium Duty Series </span> of hydraulic cylinders offer a variety of mounting style options and customised stroke length to best suit your specific application requirements. 
 </p>
 <p>Six bore sizes are available from 1.5 inches (38.2mm) to 4 inches (101.6mm), and the six mounting options are no mount, rectangular flange head, circular flange head, tie rod tapping (cap end), rectangular flange cap and circular flange cap.</p>
 <p class="pt-2">If you need more information about the Eaton Series, get in touch with us. With decades of experience as hydraulic cylinder distributors, our dedicated team can assist.</p>
</div>
</li>` +
        `<li>
<h3>Custom Manufacture of Hydraulic Cylinders Australia</h3>
<div class="pt-2">
<p>
<span>If you have a special requirement </span> , Hydraulic Solutions, and Sales and accommodate your needs. We design and manufacture custom hydraulic cylinders for customers across many industries. We also supply all the necessary operation and maintenance manuals as well as certification to required offshore or mine-site specifications.
</p>
</div>
</li>` +
        `<li>
<h3>Cylinder Testing and Reconditioning</h3>
<div class="pt-2">
<p>
<span>At  Hydraulic Solutions and Sales  </span> , we are not only trusted hydraulic cylinder distributors, but we also offer a number of services to customers across Australia. 
</p>
<p class="pt-2">If your hydraulic equipment is not running efficiently, our team of specialised technicians can carry out testing and assessment of your equipment. We have decades of experience reconditioning hydraulic cylinders to restore them to near-new operation levels. We will provide you with all necessary testing documentation, including efficiency reports and conformity certificates. </p>
</div>
</li>` +
        `<li>
<h3>Get in Touch </h3>
<div class="pt-2">
<p>
<span>To find out more about the </span> range of Vickers hydraulic cylinders we offer, or to enquire about our reconditioning and custom cylinder manufacture, please get in touch. Our dedicated team at Hydraulic Solutions and Sales will be happy to assist with any enquiries.  
</p>

</div>
</li>`;

      setLiveText(text);
      setLiveHead(heading);
    }
    if (id === "directional-control-valve") {
      const img = require("../assets/images/Directional.png");
      setImage(img);
      const heading = `<h5>Directional Control Valve</h5>`;
      const text =
        `<li>
        <p><span>At Hydraulic Solutions and Sales,</span> we are committed to providing our customers with the highest quality products in a timely manner. We are authorised WA distributors of Danfoss and Eaton directional control valve packages and products and we have the full range of Danfoss PVG32 and Eaton Cetop DCV series available immediately as ex-stock.
      </p> 
  </li>` +
        `<li>
        <h3>Danfoss hydraulic directional control valves</h3>
        <div class="pt-2">
        <p>
      <span>A We distribute four different groups of</span>  Danfoss directional control valves that can be used for a variety of applications across many industries. All of them are load-sensing proportional valves that enable hydraulic equipment to perform optimally. They are manufactured with a modular design that allows different PVG groups to be combined together to achieve specific functions. 
       </p >
       <ul class="pt-2 filtration_ul">
       <li>
      The PVG 16 valves control flow up to 65L/min and pressure of up to 420 bar. They are easy to integrate with PVG 32 and have a compact design that makes installation and servicing easy.
       </li>
       <li>
      PVG 32 directional control valves control flow up to 125L/min and pressure up to 420 bar. The inlets include built-in pressure relief valves and manual, hydraulic and electro-hydraulic control options are available.
       </li>
       <li>
      PVG 120 is a combination directional and flow control valve allowing pressure up to 400 bar. Different versions are available for fixed or variable displacement pumps. The basic models are fitted with mechanical actuation, but electrical and remote control options are also available.
       </li>
       <li>
       The PVG 128/256 valve allows inlet flow up to 1200 L/min and is optimised for lower pressure drops and overall higher efficiency. A number of thread and flange mount options are available.
       </li>
      
       </ul>
      </div>
  </li>` +
        `<li>
        <div >
        <h3>Vickers Eaton hydraulic directional control valves</h3>
        <p class="pt-2">
      <span>For reliable performance in </span>  demanding industrial conditions, the Vickers Eaton range of hydraulic directional control valves are a great choice. At Hydraulic Solution and Sales, we offer the CETOP direct operated type solenoid valves and other Eaton industrial valving that offer high pressure and flow capabilities.
      </p>
       <ul class="pt-2 filtration_ul">
       <li>
     Directional Control Valves offer three or four-way control as they direct hydraulic fluid to a cylinder or control the rotation direction of a hydraulic motor. They come in an extensive range of sizes and electrical connection capabilities.
       </li>
       <li>
 Proportional Valves of all different sizes and performance levels are available. Onboard electronics (OBE) and non-OBE options are offered.
       </li>
       <li>
  SystemStak Modular Valves are constructed of modular valves in between a directional control valve and a mounting surface. They offer a compact circuit by eliminating piping and are a cost-effective option that is easy to install and service.
       </li>
       </ul>
      </div>
  </li>` +
        `<li>
  <h3>Need more information?</h3>
  <div class="pt-2">
  <p>
<span>If you would like more information </span> on the range of Vickers Eaton and Danfoss directional control valves that we distribute, please get in touch with the team at Hydraulic Solutions and Sales . With decades of experience distributing hydraulic directional control valves Australia-wide, we are here to assist.
 </p>
 <p class="pt-2">We also offer maintenance services on-site or at our workshop in Henderson, Western Australia. If you are experiencing issues with valves or any other hydraulic component, our expert technicians can help.</p>
</div>
</li>`;

      setLiveText(text);
      setLiveHead(heading);
    }
    if (id === "flow-meters") {
      const img = require("../assets/images/Flow.png");
      setImage(img);
      const heading = `<h5>Flow Meters</h5>`;
      const text =
        `<li>
        <p><span>At Hydraulic Solutions and Sales,</span>  we primarily offer the Hydac range of flow meters. However, if you require standard visual inline flow meters we offer a variety of products from other brands that cover a wide range of flow rates, fluid mediums, pressure capabilities, and port configurations.
      </p> 
  </li>` +
        `<li>
        <h3>Hydac Flow Meters</h3>
        <div class="pt-2">
        <p>
      <span>At Hydraulic Solutions and Sales,</span>  we are committed to providing our customers with the highest quality hydraulic flow meters in Australia. Hydac is one of the most reputed brands, designing and manufacturing hydraulic flow meters that are used extensively throughout many industries.
       </p >
       <p>As appointed WA service partners of Hydac, we offer our customers their range of flow meters including inline flow rate meters with portable data recorders or the standard digital display unit with control functions.</p>
       <ul class="pt-2 filtration_ul">
       <li>EVS 3100 Series are aluminium and can measure flow rates from 20L/min to 600L/min. These flow meters are ‘turbine-operating’ meters, meaning the flow of the hydraulic fluid is measured by the speed of a rotating component in the flow meter.
       </li>
       <li>
     EVS 3110 Series are stainless steel and measure flow rates between 20L/min to 600L/min. They also operate according to the turbine principle, however, the impeller is carbide-coated for increased robustness.
       </li>
      
       </ul>
       <p class="pt-2"><span>Depending on the model,</span> pressure and/or temperature metering capabilities are possible additions.</p>
          <p class="pt-2"><span>To process and display the</span> information from Hydac flow meters, we offer:</p>
          <ul class="pt-2 filtration_ul">
       <li>Portable data recorders which can be used on field or in the laboratory for servicing and maintenance procedures. As well as flow rate, these can connect with a variety of other signals such as pressure and temperature.
       </li>
       <li>
    Digital display units such as the Hydac HDA 5500. Different versions are available with up to three analogue and up to four relay outputs. They are rated as having an accuracy of ≤ ± 0.5 %
       </li>
      
       </ul>
      </div>
  </li>` +
        `<li>
        <div >
        <h3>Turbine Inline Flow Meters</h3>
        <p class="pt-2">
      <span>The Hydac range of flow meters </span>  we distribute operates according to the turbine principle. Turbine flow meters are one of the most popular ways to measure the flow of a hydraulic fluid electronically because they are easy to maintain, durable and very reliable if the hydraulic fluid is clean. They are used across many industries, especially in oil and gas and mining. 
      </p>
       <p class="pt-2">Inside a turbine flow meter is an “impeller” which rotates because of the energy in the hydraulic fluid. How fast the impeller rotates depends on the flow of the fluid: the faster the fluid flows, the faster the impeller rotates.</p>
         <p class="pt-2">Information about impeller movement is detected either magnetically or when each blade generates a pulse. A transmitter processes these signals to calculate the flow rate of the hydraulic fluid. </p>
           <p class="pt-2">Along with temperature and pressure, flow is a very important measurement that enables you to monitor the health of your hydraulic system and can be useful for troubleshooting issues within the system. If you need assistance with hydraulic maintenance, our specialised technicians can help.</p>
      </div>
  </li>` +
        `<li>
  <h3>Need more information about our flow meters?</h3>
  <div class="pt-2">
  <p>
<span>Whether you require quality </span> visual flow meters or are interested in learning more about the range of Hydac hydraulic flow meters we offer, get in touch with the team at Hydraulic Solutions and Sales today. 
 </p>
</div>
</li>`;

      setLiveText(text);
      setLiveHead(heading);
    }
    if (id === "gauges") {
      const img = require("../assets/images/Gauges.png");
      setImage(img);
      const heading = `<h5>Gauges</h5>`;
      const text =
        `<li>
        <p><span>At Hydraulic Solutions and Sales,</span> we are appointed WA service partners of Hydac and an authorised WA distributor of SPAN gauges. We have the appropriate hydraulic gauges and test gauge kits for virtually any application with gaseous or liquid media.
      </p> 
      <p><span>We understand how important reliability</span> is for gauge products: accurate information is crucial for the upkeep of your hydraulic equipment. That’s why we offer you products from two of the leading brands of hydraulic pressure gauge design and manufacture. For your convenience, we also have a large range of ex-stock available immediately.</p>
  </li>` +
        `<li>
        <h3>Hydac Gauges & Accessories</h3>
        <div class="pt-2">
        <p>
      <span>The Hydac range of </span> <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/hydac-gauges.pdf"> Gauge &  Accessories (PDF) </a> includes manometer pressure gauges, test gauge kits, and multi-station gauge isolators. They are some of the most high-quality hydraulic gauges in Australia, offering excellent accuracy and durability for countless applications.
       </p >
      
       <ul class="pt-2 filtration_ul">
       <li>Manometer Pressure Gauges
       <p class="pt-2">These gauges are designed to perform well in adverse service conditions with high vibration and pulsation and are suitable for use with gaseous or liquid media. They are made from stainless steel casing and copper alloy wetted parts, with a glycerine filling. It is possible to process temperatures up to 60 °C, and 63mm and 100mm versions are available.</p>
       <p class="pt-2">Accessories for the manometer pressure gauges include U-Clamp brackets, 3 Hole Bezels and Flanges, and rubber covers.</p>
       </li>
       <li>
     Test Gauge Kits
     <p class="pt-2">Ideal for mobile servicing technicians, these test kits are able to be used on virtually any machine. Various combinations are available with up to three pressure gauges. The equipment included is designed to be precise and prevent any contamination during the testing process.</p>
     <p class="pt-2">These gauges check different pressures within a hydraulic system. Some of the models are leakage free and come with an in-built pressure gauge suitable for different pressure ranges. Other models allow the connection of a separate pressure gauge.</p>
       </li>
      <li>Multistation Gauge Isolators
      <p class="pt-2">These gauges check different pressures within a hydraulic system. Some of the models are leakage free and come with an in-built pressure gauge suitable for different pressure ranges. Other models allow the connection of a separate pressure gauge.</p>
      </li>
       </ul>
       
      </div>
  </li>` +
        `<li>
        <div >
        <h3>SPAN Gauges</h3>
        <p class="pt-2">
      <span>If your application requires a pressure </span> compensated gauge the SPAN range may be suitable. The SPAN gauges have an internal bladder as opposed to an obstructive external bladder. Additionally, the SPAN gauge has an internal breathing diaphragm, eliminating the “bubble” which is found on many other gauges and can obstruct readings. The glycerin filling can cope with temperatures from -40°C to 65°C.
      </p>
       <p class="pt-2">The casing and bezel of SPAN gauges are made from Zytel Nylon which makes them very tough. Zytel is corrosion and impact resistant with over 10,000 lb. tensile strength. The removable bezel design easily allows for repair or recalibration.</p>
         <p class="pt-2">If you would like to see the range of SPAN hydraulic pressure gauges we offer, get in touch with us and we will send a  Hydraulic Solutions and Sales representative to you with our display box.</p>
      </div>
  </li>` +
        `<li>
  <h3>Enquiries & Requests</h3>
  <div class="pt-2">
  <p>
<span>If you need more information  </span> about the range of hydraulic pressure gauges we distribute, don’t hesitate to get in touch. We have an extensive selection of ex-stock that is available immediately and can assist with any special requests.
 </p>
</div>
</li>`;

      setLiveText(text);
      setLiveHead(heading);
    }
    if (id === "globe-air-motors") {
      const img = require("../assets/images/Globe.png");
      setImage(img);
      const heading = `<h5>Globe Air Motors</h5>`;
      const text =
        `<li>
        <p><span>At Hydraulic Solutions and Sales,</span> we supply a large range of Globe air motors and accessories. Globe manufactures some of the most internationally renowned vane motors which are recognised for their excellent performance and reliability.
      </p> 
      <p><span>Air motors are used throughout</span> numerous industries and are ideal for light to medium duty applications with higher speeds. For use in lower-speed situations where high torque is necessary, pneumatic vane motors with gearboxes perform well. Common applications for hydraulic vane motors include hoists, conveyor belts, packing machines, and ventilators.</p>
  </li>` +
        `<li>
        <h3>Globe Air Motors </h3>
        <div class="pt-2">
        <p>
      <span>The range of Globe air motors </span>  we supply include: 
       </p >
      
       <ul class="pt-2 filtration_ul">
       <li>Vane Air Motors (also known as pneumatic vane motors) – available in a wide range of power capabilities from 0.1 kW up to 23 kW. They can operate in any mounting position and provide a light and compact motor solution. Stainless steel options are available should you require them.
       </li>
       <li>Compact Air Motor – these are reversible and are even more compact than the other Globe air motors and can power from 180 kW to 1000 kW. 
       </li>
      <li>Vane Air Motor with Gearbox – these come with the option of a worm, coaxial or planetary gearbox mounted onto the vane motor. This means they are compact and protected from any outside influences.
      </li>
      <li>Compact Piston Air Motor – benefits of these motors include high torque at low rotation speeds, very low consumption of air and decreased the noise level. Their power is from 110 to 460 W. </li>
      <li>Radial Piston Air Motor – these have a valve, pneumatic brake, and gearbox that can be controlled by hand or remotely. Their power is from 0.8 kW to 23 kW.</li>
       </ul>
       
      </div>
  </li>` +
        `<li>
        <div >
        <h3>Advantages of Air Vane Motors</h3>
        <p class="pt-2">
      <span>The basic function of air motors </span> is to convert compressed air into mechanical work. 
      </p>
       <p class="pt-2">Hydraulic vane motors are the most commonly used air motors and they provide several advantages: </p>

        <ul class="pt-2 filtration_ul">
       <li>Compact and light – compared to an electric motor or piston air motors, air vane motors occupy much less space and provide more power than other motors of the same size.
       </li>
       <li>Easy to adjust power output and torque – with a simple flow control valve or pressure regulator, power output and torque can easily be varied.
       </li>
      <li>Indefinite stalling – air vane motors will not overheat or burn out when stalled for indefinite periods.
      </li>
      <li>Reverse instantly – with a simple control valve, air vane motors can be reversed with no wait time.</li>
      <li>Maintenance is minimal – a simple design makes maintenance quick and easy. A low number of moving parts means reduced wear and tear, making air vane motors more reliable. </li>
      <li>Perform well in hostile conditions – they do not make sparks and so they are ideal in conditions that have high explosion risks. They also do well in corrosive environments and are almost completely unaffected by heat or vibration.</li>
       </ul>
       
       
      </div>
  </li>` +
        `<li>
  <h3>Need more information?</h3>
  <div class="pt-2">
  <p>
<span>Looking for a supplier of Globe air </span>  motors in Australia? Hydraulic Solutions and Sales can help. We have many years of experience with Globe products, and our friendly team will be happy to assist with any enquiries. If you can’t find what you’re looking for, we also supply a range of other <a target="_blank" href="hydraulic-motors"> motors </a> for various applications across many industries.
 </p>
</div>
</li>`;

      setLiveText(text);
      setLiveHead(heading);
    }
    if (id === "high-force-equipment") {
      const img = require("../assets/images/High.png");
      setImage(img);
      const heading = `<h5>High Force Equipment</h5>`;
      const text =
        `<li>
        <p><span>  Hydraulic Solutions and Sales </span> are an authorised WA distributor of Power Team products for all hydraulic high force equipment applications. Power Team are the market leaders in 10,000 PSI industrial hydraulics throughout the world and are renowned for manufacturing high quality, durable hydraulic high force equipment.
      </p> 
      <p>We have access to extensive stock and spare parts of all Power Team products and can offer you advice on any application. Don’t hesitate to get in touch with any enquiries.</p>
  </li>` +
        `<li>
        <h3>Power Team High Force Hydraulics</h3>
        <div class="pt-2">
        <p>
      <span>Whatever your high force hydraulics needs </span> we have the solution. Some of the Power Team products include: 
       </p >
      
       <ul class="pt-2 filtration_ul">
       <li>Cylinders – Whether you are looking for general purpose cylinders, or something more specific, the Power Team range of high force hydraulic cylinders is extensive. A large selection of varying tonnage, stroke and retracted height specifications are available to suit your needs.
           <ul class="pt-2 pe-3 filtration_ul">
           <li>
           <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/c_series.pdf">General Purpose (C Series) – (PDF)
</a>
           </li>
            <li>
           <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/cbt_series.pdf">Threaded End (CBT Series) – (PDF)
</a>
           </li>
             <li>
           <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/rp_series.pdf">Pull Cylinders (RP Series) – (PDF)</a>
           </li>
            <li>
           <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/ra_series.pdf">Aluminium (RA Series) – (PDF)</a>
           </li>
            <li>
           <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/rls-series.pdf">Low Profile (RLS Series) – (PDF)</a>
           </li>
            <li>
           <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/rss_series.pdf">Shorty (RSS Series) – (PDF)</a>
           </li>
              <li>
           <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/rh_series.pdf">Centre Hole (RH Series) – (PDF)</a>
           </li>
              <li>
           <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/rt_series.pdf">Centre Hole Power Twin (RT Series) – (PDF)</a>
           </li>
              <li>
           <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/rd_series.pdf">Double Acting (RD Series) – (PDF)</a>
           </li>
             <li>
           <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/r_series.pdf">Single Acting, Load Return (R Series) – (PDF)</a>
           </li>
             <li>
           <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/rl_series.pdf">Locking Collar (RL Series) – (PDF)</a>
           </li>
            <li>
           <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/plc_series.pdf">Pancake (PLC Series) – (PDF)</a>
           </li>
            <li>
           <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/cylinder_selection_chart.pdf">Cylinder Selection Chart – (PDF)</a>
           </li>
           </ul>
       </li>
      </ul>
       <ul class="pt-2 filtration_ul">
       <li>Pumps – We offer a wide variety of pumps, including hand, air, electric and petrol operated options that perform excellently in lifting and construction applications. A range of relevant seal kits are also available.
           <ul class="pt-2 pe-3 filtration_ul">
           <li>
           <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/hoses.pdf">Hoses – (PDF)
</a>
           </li>
            <li>
           <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/couplers.pdf">Couplers – (PDF)
</a>
           </li>
             <li>
           <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/gauges.pdf">Gauges – (PDF)</a>
           </li>
            <li>
           <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/manifolds.pdf">Manifolds – (PDF)</a>
           </li>
            <li>
           <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/hydraulics_oil.pdf">Fluids – (PDF)</a>
           </li>
            <li>
           <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/inline__pump_mounted_valves.pdf">Valves – (PDF)</a>
           </li>
              <li>
           <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/700bar_fittings.pdf">10,000 PSI Fittings – (PDF)</a>
           </li>
            
           </ul>
       </li>
  </ul>
       <ul class="pt-2 filtration_ul">
       <li>Shop Equipment – We supply a number of hydraulic presses for workshop applications including C frame presses which can be bench mounted or stand on a pedestal base; H frame presses for small pressing and repair jobs; and Roll Bed presses with optional heavy-duty straightening fixtures.
           <ul class="pt-2 pe-3 filtration_ul">
           <li>
           <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/c_frame.pdf">C Frame Press – (PDF)
</a>
           </li>
            <li>
           <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/h_frame.pdf">H Frame Press – (PDF)
</a>
           </li>
             <li>
           <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/roll_bed.pdf">Roll Bed Press – (PDF)</a>
           </li>
            
           </ul>
       </li>

       </ul>
       
           <ul class="pt-2 filtration_ul">
       <li>Jacks – We supply a number of jacks ideal for use in a large range of industrial applications from high force hydraulic jacks and post-tension jacks to high tonnage jacks and inflatable jacks. Find the right equipment for your needs.
           <ul class="pt-2 pe-3 filtration_ul">
           <li>
           <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/jacks.pdf">Hydraulic Jacks – (PDF)
</a>
           </li>
            <li>
           <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/post_tension_jack.pdf">Post Tension Jacks – (PDF)
</a>
           </li>
             <li>
           <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/maintenance_sets.pdf">Maintenance Sets – (PDF)</a>
           </li>
           <li><a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/high_tonnage_jacks.pdf">Portable High Tonnage Jacks – (PDF)</a></li>
            <li><a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/vetter_rescue.pdf">Inflatable Jacks – (PDF)</a></li>
           </ul>
       </li>

       </ul>

        <ul class="pt-2 filtration_ul">
       <li>Hydraulic Tools – The high force hydraulic tools available in the Power Team range include torque wrenches, nut splitter, and bead breakers. We also offer a large range of service and maintenance tools.
           <ul class="pt-2 pe-3 filtration_ul">
           <li>
           <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/torque_wrenches.pdf">Torque Wrenches – (PDF)
</a>
           </li>
            <li>
           <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/torque_wrenche_pumps.pdf">Torque Wrench Pumps – (PDF)
</a>
           </li>
             <li>
           <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/hydraulic_nut_splitter.pdf">Nut Splitters – (PDF)</a>
           </li>
           <li><a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/hydraulic_pipe_flange_spreader.pdf">Flange Spreaders – (PDF)</a></li>
            <li><a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/hydraulic_punch.pdf">Portable Punches – (PDF)</a></li>
            <li><a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/hydraulic_spreader.pdf">Spreaders – (PDF)</a></li>
            <li><a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/hydraulic_bead_breaker.pdf">Bead Breakers – (PDF)</a></li>
            <li><a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/hydraulic_c_clamp.pdf">C Clamps – (PDF)</a></li>
            <li><a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/hydraulic_tester.pdf">Testers – (PDF)</a></li>
            <li><a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/service__mechanical_tools.pdf">Service & Maintenance Tools – (PDF)</a></li>
           </ul>
       </li>

       </ul>
        <ul class="pt-2 filtration_ul">
       <li>Bearing Maintenance – For bearing and maintenance needs, we offer hydraulic pullers and pushers as well as protective blankets. If you need advice on which pushers and pullers would be appropriate for your specific application, we would be happy to advise.
           <ul class="pt-2 pe-3 filtration_ul">
           <li>
           <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/hydraulic__mechanical_pullers__pushers.pdf">Hydraulic Pullers & Pushers – (PDF)
</a>
           </li>
            <li>
           <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/protective_blankets.pdf">Protective Blankets – (PDF)
</a>
           </li>
             <li>
           <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/universal_puller.pdf">Universal Puller – (PDF)</a>
           </li>
           <li><a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/roller_bearing_puller_installer.pdf">Roller Bearing Puller / Installer – (PDF)</a></li>
            
           </ul>
       </li>

       </ul>
      </div>
  </li>`;

      setLiveText(text);
      setLiveHead(heading);
    }
    if (id === "hose-&-fittings") {
      const img = require("../assets/images/Hose.png");
      setImage(img);
      const heading = `<h5>Hose & Fittings</h5>`;
      const text =
        `<li>
        <p><span>Hydraulic Solutions and Sales</span> is an authorised WA distributor of Ryco hydraulic hoses and fittings. We also stock and distribute thermoplastic hoses and stainless steel accessories and we are able to offer complete hose assemblies with competitive lead times.
      </p> 
  </li>` +
        `<li>
        <h3>Ryco Hose & Ryco hydraulic Fittings</h3>
        <div class="pt-2">
        <p>
Ryco is an Australian company with a reputation for world-class high-quality hydraulic hose and fitting products. At Hydraulic Solutions and Sales, we have an excellent relationship with Ryco, enabling us to provide our customers with a large range of quality hoses and hydraulic hose fittings that can be used across numerous industries such as oil and gas, mining, marine and agriculture. 
       </p >
      
       <p class="pt-2">The range of Ryco hydraulic fittings and hoses include: </p>
      </div>
  </li>` +
        `<li>
            <ul class="pt-2 filtration_ul">
       <li>Hoses – An extensive selection of hoses with various properties including suction and return hoses, speciality high-temperature hoses, and isobaric hoses.
       </li>
       <li>Thermoplastic Hoses – Used in many applications such as umbilical assembly and certification testing, these hoses offer many benefits over rubber hoses because they can handle extreme temperatures and have increased durability. They are compatible with a range of Ryco hydraulic fittings.
       </li>
      <li>Couplings – A variety of couplings are available such as push on, suction and return couplings, one-piece crimp couplings, and BITELOK INTERLOK two-piece crimp couplings. We only supply the highest quality hydraulic fittings to give you confidence and peace of mind in the products you purchase.
      </li>
      <li>Accessories – Many Ryco accessories are available including mounting clamps, quick release couplings, and crimping equipment. </li>
      </ul>
      
  </li>` +
        `<li>
  <h3>Hydraulic hose and fittings for the Drilling & Mining Industry</h3>
  <div class="pt-2">
  <p>
<span>Ryco has an extensive range of hydraulic hoses </span>  and fittings suitable for underground mining applications. From isobaric braid and spiral hoses to specialty high temperature and suction and return hoses, the Ryco mining-grade hoses are durable and reliable products.
 </p>
 <p class="pt-2">For a mine safe hydraulic hose fittings, Ryco offers CrocBite which can cope with pressures up to 420 bar. Easy to assemble and resistant to corrosion and contamination, CrocBite is a good choice for mining applications. Other mine-grade safety accessories are also available, and the team at Hydraulic Solutions and Sales will be happy to answer any questions you might have about these products.</p>
 <p class="pt-2">Being heavily involved in the drilling market, Hydraulic Solutions and Sales is able to offer extremely fast responses for the supply of “bull lines” including full hose socks, spiral-wrapped, and certified hose assemblies. Each hose end is engraved with our traceable certificate numbers along with an option for customers to have their own markings included.</p>
 <p class="pt-2">For more information, speak to one of our friendly team members today.</p>
</div>
</li>` +
        `<li>
<h3>Services for Hydraulic Hoses and Fittings Australia</h3>
<div class="pt-2">
<p>
<span>Our hydraulic hose and fitting team </span>  at Hydraulic Solutions and Sales offers a range of services including assembly recertification, comprehensive testing, umbilical termination, hose refits, installations, and more. We have decades of experience providing excellent hydraulic hose and fittings services and are well-equipped to assist customers across Australia. 
</p>
<p class="pt-2">
For more information about the services we offer or the products we stock, don’t hesitate to get in touch with us at Hydraulic Solutions and Sales. We look forward to hearing from you.</p>
</div>
</li>` ;

      setLiveText(text);
      setLiveHead(heading);
    }
    if (id === "instrumentation") {
      const img = require("../assets/images/Instrumentation.png");
      setImage(img);
      const heading = `<h5>Instrumentation</h5>`;
      const text =
        `<li>
        <p>
      <span>At Hydraulic Solutions and Sales</span>, we stock and distribute a large range of hydraulic instrumentation including stainless steel compression fittings and tubing as well as a wide variety of valves and measuring devices.
      </p>
      <p class="pt-2">In order to offer our customers the highest quality instrumentation, we distribute products from a number of reputable brands including Hydac and Danfoss. Their products are suitable for numerous applications across many industries and are manufactured for durability and long-term reliability.</p>
      <p class="pt-2">
      At Hydraulic Solutions and Sales, we stock and distribute a large range of hydraulic instrumentation including stainless steel compression fittings and tubing as well as a wide variety of valves and measuring devices.</p>
      <p class="pt-2">
      In order to offer our customers the highest quality instrumentation, we distribute products from a number of reputable brands including Hydac and Danfoss. Their products are suitable for numerous applications across many industries and are manufactured for durability and long-term reliability.
</p>
  </li>` +
        `<li>
        <h3>Stainless steel compression fittings</h3>
        <div class="pt-2">
        <p>
      <span>We primarily stock stainless steel</span> twin ferrule compression fittings in many different sizes. They are designed with a strong mechanical grip and can be used for various thicknesses of tubing.
       </p>
       <p class="pt-2"> A robust design means our stainless steel compression fittings can withstand high temperatures, pressures, and vibrations. We are committed to supplying our customers with leakage-free compression fitting solutions that are simple to use. 
       </p>
      </div>
  </li>` +
        `<li>
        <div >
        <h3>Stainless steel quick disconnects</h3>
        <p class="pt-2">
      <span>Our stainless steel quick disconnects </span> make connection and disconnection quick and easy while preventing any leakage of hydraulic fluid. Various types are available to suit a wide range of applications. Some of the types include ball latching, non-latching, no shut-off, single shut off and double shut off.
      </p>
      </div>
  </li>` +
        `<li>
  <h3>Stainless steel tubing and accessories</h3>
  <div class="pt-2">
  <p>
<span>We have a large range of stainless </span> steel tubing and accessories available. Our stainless steel tubing is leak-free, easy to install and is used effectively across many industries. In terms of accessories, whether you require high-quality tubing clamps, nuts, and screws, tubing inserts or replacement parts, we can assist.
 </p>
</div>
</li>` +
        `<li>
<div >
<h3>Stainless steel tube clamp fittings</h3>
<p class="pt-2">
<span>We supply a versatile range of stainless</span> steel tube clamp fittings that can be used in countless applications. Our clamp fittings are designed to be easy and simple to install and are a safe and cost-effective solution.
</p>

</div>
</li>` +
        `<li>
<div >
<h3>Valves</h3>
<p class="pt-2">
<span>At Hydraulic Solutions and Sales</span> , we supply a comprehensive range of valves with different thread sizes and configurations to suit your specific application. You can be confident that we only offer valves that have been manufactured to perform to the highest industry standards. From pressure and flow control valves to check valves and more: whatever your requirements, we can help.
</p>
</div>
      </li>` +
        `<li>
<div >
<h3>Measuring devices</h3>
<p class="pt-2">
<span>We have an extensive range of measuring  </span>devices for displaying and analysing the condition of a hydraulic system. From level switches for monitoring fluid level and pressure transmitters to temperature sensors and flow rate transmitters: whatever measuring instrumentation you require, we can assist.
</p>
</div>
    </li>`+
        `<li>
<div >
<h3>Get in touch with us</h3>
<p class="pt-2">
<span>We provide customers with hydraulic</span>  instrumentation such as clamp fittings, quick disconnects, compression fittings and stainless steel tubing Australia wide. 
</p>
<p class="pt-2">
For more information about the hydraulic instrumentation we offer, get in touch with our friendly team at Hydraulic Solutions and Sales  today. We will be happy to assist with any enquiries, and can also provide installation and maintenance services should you require. We have over 30 years of industry experience and are committed to offering only the highest quality products and the finest services to our valued customers.</p>
</div>
  </li>` ;

      setLiveText(text);
      setLiveHead(heading);
    }
    if (id === "lubrication-systems") {
      const img = require("../assets/images/Lubrication.png");
      setImage(img);
      const heading = `<h5>Lubrication Systems</h5>`;
      const text =
        `<li>
        <p>
      <span>Hydraulic lubrication systems are responsible</span> for providing clean hydraulic fluid at the right temperature, pressure, and flow to the rest of the system components. As appointed WA service partners of Hydac, we offer a large range of Hydac lubrication products including <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/screwpumpsv1.00_web.pdf"> HSP Screw Pumps (PDF)</a>, heat exchangers, and complete filtration units.
      </p>
      <p class="pt-2">Additionally, Hydraulic Solutions and Sales can manufacture, install and commission skid-mounted lubrication packages to your required specifications. We offer a large range of creative features and options depending on your application requirements. Get in touch with us today to find out what is possible.</p>
  </li>` +
        `<li>
        <h3>Hydac Hydraulic Lubrication Systems</h3>
        <div class="pt-2">
        <p>
      <span>At Hydraulic Solutions and Sales</span>, we are committed to supplying our customers with high-quality products: that’s why we offer the range of Hydac lubrication products. Hydac has been designing and manufacturing hydraulic lubrication systems for over 50 years and they are globally renowned for supplying some of the most reliable and durable lubrication products on the market. 
       </p>
      </div>
  </li>` +
        `<li>
        <div >
        <h3>Hydac Hydraulic Screw Pumps</h3>
        <p class="pt-2">
      <span>These screw pumps are ideal for a </span> wide range of industrial applications. They are highly reliable, and low vibration and pulsation levels mean improved longevity for the system parts.
      </p>
      <p class="pt-2">Hydac Hydraulic Screw Pumps are constructed with three moving parts and work by transferring hydraulic pressure axially. The primary screw is made of steel and the secondary screw from cast iron. The pump body comes standard in aluminum, but stainless steel options are available. They are suitable to use with many hydraulic lubricants including mineral oil, ecological and synthetic fluids.</p>
      </div>
  </li>` +
        `<li>
  <h3>Heat Exchangers & Cooling Systems</h3>
  <div class="pt-2">
  <p>
<span>Hydraulic heat exchangers and cooling </span> systems play a key role in maintaining the hydraulic fluid at the right temperature and help improve the longevity of system components while increasing the overall efficiency of a hydraulic system. The Hydac range of heat exchangers and cooling systems are suitable for almost any industry and application. 
 </p>
 <p class="pt-2">We offer brazed plate heat exchangers made from stainless steel that are vacuum-brazed with copper or nickel, and gasketed plate heat exchangers made from stainless steel or titanium. </p>
</div>
</li>` +
        `<li>
<div >
<h3>Filtration Units</h3>
<p class="pt-2">
<span>We have a large range of filtration</span>  units available, for almost any application. Portable and mobile filtration units offer flexibility and convenience. We also supply stationary filter systems for a permanent installation that are easy to retrofit to existing  hydraulic systems . Other fluid conditioning systems are available including dewatering and degassing systems.
</p>
<p class="pt-2">
Additionally, we have an extensive range of <a href="filtration"> hydraulic filters </a> and filter elements available immediately as ex-stock. For more information about the Hydac range of filtration units and elements, get in touch with us today.
</p>
</div>
</li>` +
        `<li>
<div >
<h3>Custom Design & Installation Services</h3>
<p class="pt-2">
<span>In addition to supplying a large range</span> of Hydac products, we offer manufacturing and installation services for skid mounted lubrication packages to suit your requirements. With decades of experience in the industry, the team at Hydraulic Solutions and Sales is well-equipped to assist, no matter what your needs are. Don’t hesitate to get in touch with us to see how we can help provide an innovative solution.
</p>
<p class="pt-2">We also offer maintenance services for hydraulic lubrication systems Australia wide, so if you are experiencing any issues, get in touch with us. Our team of specialised technicians can visit you on-site and conduct complete maintenance procedures including fluid contamination and filtration analysis.</p>
</div>
      </li>` ;

      setLiveText(text);
      setLiveHead(heading);
    }
    if (id === "manifolds") {
      const img = require("../assets/images/Manifolds.png");
      setImage(img);
      const heading = `<h5>Manifolds</h5>`;
      const text =
        `<li>
        <p>
      <span><a target="_blank" href="#">Hydraulic Solutions and Sales</a></span> are an authorised WA distributor of the Sun Hydraulics range of standard manifold assemblies. However, if you are after something more customised, we can design and supply to your specific requirements in standard mild steel, stainless steel, a special material or offshore coating.
      </p>
  </li>` +
        `<li>
        <h3>Sun Hydraulics Manifolds</h3>
        <div class="pt-2">
        <p>
      <span>The range of Sun Hydraulics manifolds</span> are internationally recognised as industry-leading products. They are expertly designed for efficiency and longevity and can be up to 50% smaller than other brands on the market. 
       </p>
       <p class="pt-2">The range of Sun Hydraulics manifolds are available in aluminium (3000 psi/210 bar) or ductile iron (5000 psi/350 bar). Thousands of manifold models and variations are available to suit your port size, mounting and cavity quantity requirements.</p>
      </div>
  </li>` +
        `<li>
        <div >
        <h3> The primary types of hydraulic manifolds that Hydraulic Solutions and Sales offers are:</h3>
        <ul class="pt-2 filtration_ul">
        <li>
        Line mount manifolds
        </li>
        <li>Sandwich manifolds</li>
        <li>Motor mount manifolds</li>
        <li>Subplate manifolds</li>
        <li>Bar manifolds</li>
        <li>Gasket mount manifolds</li>
        </ul>
      </div>
  </li>`+
        `<li>
  <div >
  <h3>A variety of components can be integrated into the hydraulic manifold assemblies such as:</h3>
  <ul class="pt-2 filtration_ul">
    <li>
      Cartridges and valves 
        </li>
        <li>Pumps</li>
        <li>Sensors for pressure and temperature</li>
        <li>Fluid Condition Systems that help regulate fluid temperature</li>
        </ul>
        <p class="pt-2">
        For more information about the range of Sun Hydraulics manifolds and components that can be integrated into the manifold assemblies, don’t hesitate to get in touch with us.</p>
  </ul>
</div>
</li>` +
        `<li>
<div >
<h3>Considerations when choosing a Hydraulic Manifold</h3>
<p class="pt-2">
<span>Manifolds effectively provide a logical</span> and compact layout for multiple valves, making it easy for an operator to control fluid flow throughout the hydraulic system. They are used in equipment across several industries, such as marine, mining, farm, and construction equipment. 
</p>
<p class="pt-2">When selecting a manifold, it is important to consider the specific application and operating conditions it will be used in. Some of the factors that will influence your choice of manifold include: the type of hydraulic fluid and its properties, what material the seals and body of the manifold are made from, the operating temperature and pressure of the hydraulic equipment, conditions of flow produced by the hydraulic pump, what size and type ports should be, how many valves are required and how the manifold can be mounted.</p>
<p class="pt-2">
If you would like advice about choosing the ideal hydraulic manifold for your specific application, get in touch with us at Hydraulic Solutions and Sales. Our experienced team will be happy to help advise you and offer solutions for your specific requirements. With over 30 years of experience in the industry, you can be confident that you will receive advice that you can trust.</p>
</div>
      </li>` +
        `<li>
<div >
<h3>Custom Manifold design & manufacture</h3>
<p class="pt-2">
<span>Should you require a specially designed</span> hydraulic manifold assembly, we can assist. We design and supply custom hydraulic manifolds Australia wide for customers in a wide range of industries. We can accommodate requests for manifolds in standard mild steel, stainless steel or a special material and even offshore coating.
</p>
<p class="pt-2">Whatever your hydraulic manifold requirements, Hydraulic Solutions, and Sales are able to assist. Get in touch with the team today to see how we can accommodate your needs.</p>
</div>
    </li>` ;

      setLiveText(text);
      setLiveHead(heading);
    }
    if (id === "hydraulic-motors") {
      const img = require("../assets/images/Hydraulic.png");
      setImage(img);
      const heading = `<h5>Hydraulic Motors</h5>`;
      const text =
        `<li>
        <p>
      <span>At Hydraulic Solutions and Sales</span>, we distribute high-quality hydraulic motors Australia wide from reputable brands such as Eaton and Danfoss. The motors we offer perform well across numerous industries including mining, oil and gas, agriculture and marine.
      </p>
      <p class="pt-2">Whether you require piston, vane or orbit-type motors we can assist. We also have a large range available as ex-stock: get in touch with the team at Hydraulic Solutions and Sales for more information.</p>
  </li>` +
        `<li>
        <h3>Eaton DuraForce Piston Motors</h3>
        <div class="pt-2">
        <p>
      <span>As authorised Eaton hydraulic motor</span> distributors, we offer the Eaton DuraForce Series of high-quality piston motors. These motors have many advantages including smooth operation at low speeds, high starting torque, reduced emissions, and high reliability. They are used across various industries for applications such as mining excavators, drill heads, offshore marine and oil, and gas equipment.
       </p>
       <p>A number of different types of DuraForce piston motors are available including fixed displacement, variable displacement and regulating motors. They can be controlled electrically, hydraulically or pneumatically and have pressure capabilities of 420 bar (peak pressure of 500 bar) with displacements ranging from 28cc to 280cc.</p>
      </div>
  </li>` +
        `<li>
        <div >
        <h3>Eaton M Series Vane Motors</h3>
        <p class="pt-2">
      <span>If the Eaton M Series of vane motors </span> suits your application, a selection of complete units and replaceable cartridge kits are available as ex-stock. Ranging from 30cc to 317cc these motors are high in efficiency and are simple to service. 
      </p>
      <p class="pt-2">They are able to operate at high speeds and high pressure as well as higher speeds at lower pressures. Operation is possible in either direction and these motors can be reversed or stalled without damage.</p>
      </div>
  </li>` +
        `<li>
  <h3>Eaton Char Lynn Hydraulic Motors</h3>
  <div class="pt-2">
  <p>
<span>As Eaton hydraulic motor distributors, </span> we also stock a selection of the Char Lynn Orbit Type Motors. These motors offer reliable high power density and are extremely compact. Special features are available including integrated brakes, sensors and environmental protection for corrosive environments.
 </p>
 <p class="pt-2">The Char Lynn hydraulic motors have a large range of displacement size options to provide a variety of speeds and torque capabilities. Shaft rotation and reversal are instantaneous while still generating equal torque in either direction. </p>
 <p class="pt-2">The full range of disc valve motor (2000 – 10000 series) seal kits are also available immediately as ex-stock.</p>
</div>
</li>` +
        `<li>
<div >
<h3>Sauer Danfoss Hydraulic Motors</h3>
<p class="pt-2">
<span><a target="_blank" href="#">Hydraulic Solutions and Sales</a></span> are also Danfoss hydraulic motor distributors, offering our customers the range of Sauer Danfoss Orbital Motors. This series is renowned for being extremely durable and highly productive. A robust design and long operating life are part of the reason why Sauer Danfoss hydraulic motors are used extensively throughout applications with tough terrains.
</p>
<p class="pt-2">
These Sauer Danfoss hydraulic motors have an extensive range of displacement, shaft, flange, porting and two-speed options and select range is available as ex-stock.
</p>
</div>
</li>` +
        `<li>
<div >
<h3>Installation and Maintenance for Hydraulic Motors</h3>
<p class="pt-2">
<span>In addition to our role as Eaton</span> and Danfoss hydraulic motor distributors, we offer a number of maintenance services to ensure your hydraulic equipment is in top working condition. We have a team of specialised technicians whose extensive experience with Eaton and Sauer-Danfoss motors makes them well-equipped to assist. 
</p>
<p class="pt-2">If you have any enquiries about maintenance for the hydraulic motors we distribute, don’t hesitate to get in touch. </p>
</div>
      </li>` ;

      setLiveText(text);
      setLiveHead(heading);
    }
    if (id === "pneumatics") {
      const img = require("../assets/images/Pneumatics.png");
      setImage(img);
      const heading = `<h5>Pneumatics</h5>`;
      const text =
        `<li>
        <p>
      <span>At Hydraulic Solutions and Sales,</span> we offer a large selection of pneumatic products from a range of brands such as SMC Pneumatics, Festo and Norgren. Our team has the capacity to offer general pneumatic spares or engineer complete systems including design, installation and commissioning including hydraulic pneumatic systems.
      </p>
      <p class="pt-2">Pneumatic systems are advantageously durable and reliable in harsh conditions, and are a cost-effective solution that requires minimal maintenance. Pneumatic products also offer safety advantages because they don’t use toxic chemicals, are explosion-proof and do not overheat or burn under harsh conditions.</p>
      <p class="pt-2">
      Our pneumatic products are suitable for a wide range of applications including braking systems, construction and mining equipment, and manufacturing machinery. Whatever your specific application, get in touch with Hydraulic Solutions and Sales for more information about the pneumatic products we offer</p>
  </li>` +
        `<li>
        <h3>Pneumatic Cylinders & Actuators</h3>
        <div class="pt-2">
        <p>
      <span>We have a range of pneumatic and</span>  hydraulic cylinders with varying stroke lengths and bore sizes to suit a wide range of applications. In addition to our pneumatic cylinders which act linearly, we also supply a number of rotary actuators.
       </p>
       <p>Our pneumatic cylinders and actuators have a number of advantages: they perform well in extreme temperatures, are compact, lightweight and cost-effective, are easy to install, require minimal maintenance and offer long term durability.</p>
      </div>
  </li>` +
        `<li>
        <div >
        <h3>Sensors & Pneumatic Instrumentation</h3>
        <p class="pt-2">
      <span>At Hydraulic Solutions and Sales</span>, we supply a large range of sensors and instrumentation for pneumatic systems. The products we supply offer accurate information to help you keep your pneumatic circuit running smoothly.
      </p>
      <p class="pt-2">We offer several types of pressure switches, sensors and transducers for detecting pressure within a pneumatic system. There is a solution for whatever you require, from monitoring very small amounts to powerful streams of air.</p>
      </div>
  </li>` +
        `<li>
  <h3>Pneumatic Valves</h3>
  <div class="pt-2">
  <p>
<span>We supply a large range of pneumatic </span> valves to help control flow, pressure and direction. Our products have various mounting options, port layouts and capabilities. 
 </p>
 <p class="pt-2">Whether you require two, three or four-way directional valves, heavy-duty lever valves or solenoid valves, we can assist. Get in touch with us for more information about the range of pneumatic valves we offer.</p>
</div>
</li>` +
        `<li>
<div >
<h3>Air Service Units and Pneumatic Filters</h3>
<p class="pt-2">
<span>We offer a large range of filters,</span> lubricators and regulators for maintaining an optimal condition in pneumatic systems. Our products come in various sizes and capabilities to suit a large range of standard and heavy duty applications.
</p>
<p class="pt-2">
Proper air preparation is critical in any pneumatic system as contamination can cause damage to the system components, and decrease overall efficiency. Maintaining clean, dry air is essential for preserving system components and ensuring maximum productivity from your pneumatic equipment.
</p>
</div>
</li>` +
        `<li>
<div >
<h3>Looking for a Pneumatic Products Distributor in Australia?</h3>
<p class="pt-2">
<span>Hydraulic Solutions and Sales offers high</span> quality pneumatic products Australia wide, and can assist with engineering complete systems including design, installation and commissioning. With over 30 years of experience in the industry, Hydraulic Solutions and Sales is a hydraulic and pneumatic products distributor that you can trust. We specialise in hydraulic and pneumatic systems, and have a dedicated team of experts available to help meet your needs.
</p>
<p class="pt-2">For more information about the pneumatic products we distribute, or the specialised engineering services we offer, get in <a  href="/contact"> touch </a> with the team at Hydraulic Solutions and Sales today.</p>
</div>
      </li>` ;

      setLiveText(text);
      setLiveHead(heading);
    }
    if (id === "power-units") {
      const img = require("../assets/images/Power.png");
      setImage(img);
      const heading = `<h5>Power Units</h5>`;
      const text =

        `<li>
        <h3>Hydraulic Power Unit Design & Manufacture</h3>
        <div class="pt-2">
        <p>
      <span>At Hydraulic Solutions and Sales</span>, we have many years of experience being one of Australia’s leading hydraulic power unit manufacturers. We offer standard or complete turnkey power unit design and manufacture including installation and commissioning.
       </p>
       <p class="pt-2">If you have specific offshore or mine site certification design requirements we can supply accordingly with all documentation and necessary operation and identification manuals.</p>
       <p class="pt-2">What we can do for you:</p>
         <ul class="pt-2 filtration_ul">
         <li>
         System design – we make sure you receive a power unit design that is the most effective for your specific needs. We are particularly experienced in meeting offshore and mine site specifications.
         </li>
         <li>
         Engineering – through our engineering and manufacturing processes, we are committed to providing you with hydraulic power unit solutions in a timely manner.
         </li>
         <li>
         Installation, testing & commissioning – our specialised technicians can assist with any installation, rigging and wiring required. We have decades of industry experience, so you can be sure you are only getting the finest services.
         </li>
         <li>
         Maintenance – we can assist with any maintenance, repairs and replacement needs that may arise.
         </li>
         </ul>
         <p class="pt-2">
         Additionally,  Hydraulic Solutions and Sales  offer a standard solutions-driven package called the Hybox.</p>
         <p class="pt-2">
         Hybox utilises quality HYDAC components including tanks, pumps and electric motors. It also has a specially designed tank mounted manifold that incorporates the return filter, accumulators and valving. Therefore, HYBOX is a must for all machine manufacturers. See below link for technical data. Please contact one of our friendly staff at Hydraulic Solutions and Sales to assist you with a quick price and availability.</br>
         <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2020/02/de.en_.45.013.0.07.13.pdf">
Download HYBOX PDF
</a>
         </p>
      </div>
  </li>` ;

      setLiveText(text);
      setLiveHead(heading);
    }
    if (id === "pumps") {
      const img = require("../assets/images/Pumps.png");
      setImage(img);
      const heading = `<h5>Pumps</h5>`;
      const text =
        `<li>
        <p>
      <span>At Hydraulic Solutions and Sales,</span> we distribute a range of high-quality Eaton hydrostatic pump parts and hydraulic pumps Australia wide. Eaton hydraulic pumps are internationally recognised as some of the most reliable and high performing options available today. They are used extensively throughout the mining, oil and gas, agricultural and many other industries.
      </p>
      <p class="pt-2">The range of hydraulic pumps we distribute includes DuraForce, the 420 and PVH Series of Eaton piston pumps as well as a large range of vane and gear pumps.

</p>
     
  </li>` +
        `<li>
        <h3>Eaton DuraForce Piston Pumps</h3>
        <div class="pt-2">
        <p>
      <span>Hydraulic Solutions and Sales</span> distribute the Eaton DuraForce <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/duraforce-hpr-open-loop.pdf"> HPR open loop (PDF)</a> & <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/duraforce-hpv-closed-loop.pdf"> HPV closed loop (PDF) </a> piston pumps. The HPR and HPV series of pumps have pressure capabilities to 420 bar (intermittent 500 bar), with displacements ranging from 55 cc to 280 cc.
       </p>
        <ul class="pt-2 filtration_ul">
        <li>HPR Open Loop Piston Pump – offers clockwise or anticlockwise rotation, excellent suction, and high power density. They are compact and have a proven long operating life. Tandem and multiple pump options are possible.</li>
<li>HPV Closed Loop Piston Pump – these variable pumps offer clockwise and anticlockwise rotation, integrated high and low-pressure relief valves and the option for tandem and multiple pumps. They have a compact design and high power density.</li>
        </ul>
      </div>
  </li>` +
        `<li>
        <div >
        <h3>420 Series Eaton Vickers Pumps</h3>
        <p class="pt-2">
      <span>If your application only requires</span> a medium-duty piston pump you may be more suited to the <a href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/adu-041-049-062-pump-catalogue.pdf"> 420 series (PDF) </a> of hydraulic pumps. The 420 Series comes in a power-dense design, combining high pressure with a small package size to make it suitable for applications where space is a constraint. It comes in displacements ranging from <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/adu-041-049-062-pump-catalogue.pdf"> 41, 49, 62cc (PDF) </a> to <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/adu-080-pump-catalogue.pdf"> 80 cc (PDF) </a>  and can handle pressures of up to 4000 psi.
      </p>
      <p class="pt-2">Typical applications of the 420 Mobile Eaton piston pumps include mining machinery, tunnel boring equipment, agricultural tractors, and mini-excavators.</p>
      </div>
  </li>` +
        `<li>
  <h3>PVH Series Eaton Vickers Pumps</h3>
  <div class="pt-2">
  <p>
<span>A range of spares and complete</span> units of the <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/pvh-series.pdf"> PVH Series (PDF) </a> piston pumps are also available as ex-stock. The PVH series are typically a very efficient unit (95% volumetric) with a heavy-duty design and local standard SAE C/CC frame sizes.
 </p>
 <p class="pt-2">The PVH Series comes with a large range of features including a quiet design and a number of drive shaft and control options to suit any application. Designed to perform well in strenuous environments, these hydraulic pumps are often used in earth-moving machinery and construction applications.</p>
</div>
</li>` +
        `<li>
<div >
<h3>Eaton Vane & Gear Pumps</h3>
<p class="pt-2">
<span>Additionally, Hydraulic Solutions and </span> Sales offer a large range of high-quality vane and gear hydraulic pumps with various displacements, porting, flange and shaft configurations, including the <a target="_blank" href="https://www.hssptyltd.com.au/wp-content/uploads/2018/10/v10-v20-series.pdf"> V10 & V20 (PDF) </a> vane pump series.
</p>
<p>These Eaton hydraulic pumps are high quality and precision-built for applications across numerous industries.</p>
</div>
</li>` +
        `<li>
<div >
<h3>Enquire today</h3>
<p class="pt-2">
<span>For more information about the selection</span> of Eaton hydraulic pumps we distribute, don’t hesitate to get in touch with the team at  Hydraulic Solutions and Sales . We have decades of experience handling, installing and servicing these products and are fully equipped to assist customers throughout Australia.
</p>
</div>
      </li>` ;

      setLiveText(text);
      setLiveHead(heading);
    }
    if (id === "steeing") {
      const img = require("../assets/images/Steeing.png");
      setImage(img);
      const heading = `<h5>Steeing</h5>`;
      const text =
        `<li>
        <p>
      <span>As an authorised WA distributor,</span> we offer the range of Danfoss hydraulic steering systems and components. Danfoss is internationally renowned for being leaders in manufacturing components for hydraulic steering, and their equipment is designed to offer the highest safety standards and operator comfort.
      </p>
      <p class="pt-2">Whether you need high quality hydraulic steering equipment, or require servicing and maintenance for  hydraulic steering systems, Hydraulic Solutions and Sales are backed by decades of industry experience and we are committed to giving our customers the best service. Whatever your specific application, the team at Hydraulic Solutions and Sales can assist. </p>
  </li>` +
        `<li>
        <h3>Danfoss Hydraulic Steering</h3>
        <div class="pt-2">
        <p>
      <span>Danfoss hydraulic steering equipment</span> is used throughout numerous industries, offering reliable, high performance steering solutions. From road building machinery and agricultural machines to construction diggers and forklift trucks, we can supply you with the right equipment to suit your needs.
       </p>
      </div>
  </li>` +
        `<li>
        <div >
        <h3>Steering Units</h3>
        <p class="pt-2">
      <span>We offer responsive Danfoss </span>steering units that perform reliably in all kinds of driving conditions. They have a low noise level and are comfortable to operate. A variety of steering units are available with integrated valve functions.
      </p>
      <p>The range of steering units include open centre, load sensing and dual displacement models. We can accommodate for applications in small machinery right through to very large equipment.</p>
      </div>
  </li>` +
        `<li>
  <h3>Flow Amplifiers</h3>
  <div class="pt-2">
  <p>
<span>The Danfoss flow amplifiers we supply </span> allow increased flow and power to help steer the biggest machines. They are best used in vehicles requiring steering flow up to 400 litres/minute and are also compatible with some of the steering units we offer.
 </p>
 <p class="py-2">
 Common applications include dumpers, large tractors and wheel loaders. The Danfoss flow amplifiers give high steering capacity in these vehicles to maximise the operator’s comfort and safety.</p>
</div>
</li>` +
        `<li>
<div >
<h3>Steering Valves</h3>
<p class="pt-2">
<span>We offer a range of Danfoss priority</span> valves that you can rely on to perform well and deliver maximum safety. Priority valves are important safety components in load-sensing hydraulic systems. 
</p>
<p class="py-2">
We offer steering valve blocks that are ideal when a steering unit does not have integrated valves. We also supply high-flow priority valves which are especially good for large vehicles such as wheel loaders and container trucks. These are compatible with the Danfoss steering units. </p>
<p class="py-2">For more information about the range of hydraulic steering equipment we offer, don’t hesitate to get in touch with the team at Hydraulic Solutions and Sales. With decades of industry experience, we are able to offer you sound advice and quality products, whatever your application.</p>
</div>
</li>` +
        `<li>
<div >
<h3>Installation & Maintenance Services for Hydraulic Steering</h3>
<p class="pt-2">
<span>If you need assistance with installing,</span> servicing or troubleshooting hydraulic steering systems, our team of specialised technicians are able to help. We service hydraulic systems and equipment for customers throughout Australia. Our expertise extends through many industries including but not limited to mining, oil and gas, agriculture and marine. Backed by years of diverse industry experience, there is hardly an issue we have not dealt with. 
</p>
<p class="pt-2">Get in touch with Hydraulic Solutions and Sales <a  href="/contact">today</a> to see how we can assist. We are able to supply equipment and servicing for hydraulic steering Australia wide.</p>
</div>
      </li>` ;

      setLiveText(text);
      setLiveHead(heading);
    }
    if (id === "electronic-controls") {
      const img = require("../assets/images/electronic_control.png");
      setImage(img);
      const heading = `<h5>Electronic Controls</h5>`;
      const text =
        `<li>
        <p>
      <span>Hydraulic Solutions primarily distribute</span> the Hydac range of electronic controls including a large range of the following;
      </p>
         <ul class="pt-2 filtration_ul">
          <li>Pressure transmitters</li>
  <li>Digital displays</li>
  <li>Temperature sensors</li>
  <li>Flow rate transmitters</li>
  <li>Data recorders</li>
  <li>Aqua sensors</li>
  <li>Contamination sensors</li>
         </ul>
  </li>` +
        `<li>
        <h3>Electronic Controls</h3>
        <div class="pt-2">
        <p>
      <span>At Hydraulic Solutions and Sales,</span> we are appointed WA distributors of the Hydac range of electronic controls, including hydraulic pressure switches, pressure transmitters, and temperature sensors. 
       </p>
       <p class="py-2">Hydac is one of the leading brands in electronic controls and is internationally renowned hydraulic pressure switch manufacturers. Their products can be used on virtually any hydraulic system for analysis, diagnosis, and precise control of the system.</p>
       <p class="py-2">
       Technology with analogue or digital displays are available, as well as specialised products with increased safety features. Hydac electronic controls are used in all industries for various applications, including underground mining equipment, construction machinery, ship engines, and agricultural technology.</p>
       <p class="pt-2">
       Whatever your electronic control needs, we can provide the solution. </p>
      </div>
  </li>` +
        `<li>
        <div >
        <h3>Hydraulic Pressure Switches</h3>
        <p class="pt-2">
      <span>Hydac is one of the leading hydraulic</span>  pressure switch manufacturers worldwide. Used to sense changes in pressure, hydraulic pressure switches play an important role in monitoring the health of a hydraulic system. 
      </p>
      <p class="pt-2">We distribute an extensive range of Hydac pressure switches including, but not limited to:</p>
      <ul class="pt-2 filtration_ul">
     <li>EDS 1700 with a four-digit display and four switching outputs</li>
  <li>EDS 300 with up to two switching outputs and integrated digital display</li>
  <li>EDS 3300 for relative pressure measurements in the low-pressure range</li>
  <li>EDS 3400 for high-pressure ranges</li>
      </ul>
      <p class="pt-2">
      For more information about how we can supply hydraulic pressure switches Australia wide, get in touch with us at Hydraulic Solutions and Sales.</p>
      </div>
  </li>` +
        `<li>
  <h3>Level switches</h3>
  <div class="pt-2">
  <p>
<span>Level switches are used to monitor fluid</span>  levels in a tank. We offer electronic level switches with integrated display. Many can be used for both oil and water, and options with additional temperature measurement capabilities are also available. 
 </p>
</div>
</li>` +
        `<li>
<div >
<h3>Pressure transmitters/transducers</h3>
<p class="pt-2">
<span>Pressure transmitters </span> (also known as pressure transducers) convert pressure into an electrical signal. We offer an extensive range of Hydac pressure transmitters for low-pressure, mobile, and industrial applications. Options with a flushed membrane or increased functional safety are also available.
</p>
</div>
</li>` +
        `<li>
<div >
<h3>Temperature sensors</h3>
<p class="pt-2">
<span>We distribute the range of Hydac</span>  temperature sensors, which can measure various ranges of temperature in a hydraulic system. Options with a dustproof enclosure and pressure measurement capabilities are also available.
</p>
</div>
      </li>` +
        `<li>
<div >
<h3>Flow rate transmitters</h3>
<p class="pt-2">
<span>We offer an extensive range of flow</span> rate transmitters for monitoring flow rate in hydraulic systems. Our Hydac options include turbine operating aluminium or stainless steel meters that can measure the flow rate between 20L/min to 600L/min.
</p>
</div>
    </li>`+
        `<li>
<div >
<h3>Digital display units</h3>
<p class="pt-2">
<span>We distribute the Hydac HDA 5500 digital</span>  display unit, which comes in different versions with up to three analogue inputs and up to four relay outputs. Portable measuring instruments are also available.
</p>
</div>
  </li>`+
        `<li>
<div >
<h3>Data recorders</h3>
<p class="pt-2">
<span>For impressive, low margin of error</span> portable data recorders, we distribute the Hydac HMG 2500 and HMG 4000. They are simple and easy to operate and can carry out a wide range of measurements in a short amount of time. The primary measurement tasks are pressure, temperature, and flow rate.
</p>
</div>
</li>`+
        `<li>
<div >
<h3>Aqua sensors</h3>
<p class="pt-2">
<span>Aqua sensors are used for detecting</span> the water content in hydraulic fluids. They are valuable tools because the water in hydraulic fluids can seriously compromise the reliability and longevity of hydraulic systems.
</p>
</div>
</li>`+
        `<li>
<div >
<h3>Contamination sensors</h3>
<p class="pt-2">
<span>Contamination sensors are designed </span> to monitor and analyse information on the trends of solid contaminants. They can help you maintain a healthy hydraulic system.
</p>
</div>
</li>`+
        `<li>
<div >
<h3>Need more information?</h3>
<p class="pt-2">
<span>For more information about the electronic </span> control products we distribute, get in touch with the team at Hydraulic Solutions and Sales. We will be happy to answer any queries you might have.
</p>
</div>
</li>` ;

      setLiveText(text);
      setLiveHead(heading);
    }
    if (id === "press") {
      const img = require("../assets/images/press.jpg");
      setImage(img);
      const heading = `<h5>Press</h5>`;
      const text =
        `<li>
        <p>
      <span>At Hydraulic Solutions and Sales,</span> we supply a range of versatile hydraulic presses. They can be used in many industrial workshop applications from repairing motors to installing gears and manufacturing electrical equipment.
      </p>
      <p class="pt-2">We are authorised WA distributors for Power Team, and offer their range of hydraulic presses for workshop use. Power Team are leading manufacturers of <a target="_blank" href="#"> high force equipment,</a> and well known for their durable, efficient hydraulic products.</p>
  </li>` +
        `<li>
        <h3>Power Team Hydraulic Press Range</h3>
        <div class="pt-2">
        <p>
      <span>The range of Power Team hydraulic</span> presses include C Frame, H Frame and specially designed Roll-Bed presses. They can be used for a variety of small and heavy duty applications, and offer an easy to use and flexible design.
       </p>
      
      </div>
  </li>` +
        `<li>
        <div >
        <h3>C Frame Press</h3>
        <p class="pt-2">
      <span>The Power Team C Frame 25 tonne</span>  press can be mounted on a bench or stand on an optional pedestal base. Its “open throat” design makes it easy to load and unload work as required. The cylinder head has three working positions, and the single acting hydraulic cylinder enables a 159mm stroke. It is controlled by a two-speed hand pump.
      </p>
      </div>
  </li>` +
        `<li>
  <h3>H Frame 10 Tonne Press</h3>
  <div class="pt-2">
  <p>
<span>The H Frame 10 tonne press is ideal</span> for small pressing jobs, repairing small components or installing gears and bearings. The floor press bed height can be adjusted to suit your needs anywhere from 127 mm to 1,041mm. 
 </p>
 <p class="pt-2">
 This H Frame can be powered by a single-speed hand pump or an electric or air hydraulic pump. All the necessary hydraulic gauges, hoses and fittings are included.</p>
</div>
</li>` +
        `<li>
<div >
<h3>H Frame Open Throat & Economy Press (25 Tonnes)</h3>
<p class="pt-2">
<span>For a design that allows both</span> H frame and C frame capabilities, the Open Throat H Frame press is a good choice. They can also come with remote control abilities to enable the operator more flexibility.
</p>
<p class="pt-2">
The Economy H From Press can handle many tasks that usually require bigger presses. The stroke length is limited to 159mm. Press bed height can be adjusted easily, and power sources include two-speed hand pump and electric or air hydraulic pump.</p>
</div>
</li>` +
        `<li>
<div >
<h3>H Frame 55, 100, 150 & 200 Tonne Presses</h3>
<p class="pt-2">
<span>For heavier duty jobs, these</span> H Frame presses are ideal. They perform well with off-centre pressing jobs and can be easily adjusted to suit the specific pressing job. They are big enough to accommodate bulky work objects and come with the choice of a single or double acting cylinder.
</p>
</div>
      </li>` +
        `<li>
<div >
<h3>Roll-Bed 80-200 Tonne H Frame Press</h3>
<p class="pt-2">
<span>The Roll-Bed designed presses include</span>  beds that roll to enable easy loading or unloading with a crane. It also features a double acting cylinder and a quiet electric or hydraulic pump that can be controlled remotely.
</p>
<p class="pt-2">
For increased ease and accuracy with straightening jobs, optional heavy-duty straightening fixtures are available.</p>
</div>
    </li>`+
        `<li>
<div >
<h3>Need more information?</h3>
<p class="pt-2">
<span>At Hydraulic Solutions and Sales,</span> we provide high quality hydraulic presses Australia wide. 
</p>
<p class="pt-2">For more information about the range of Power Team presses we offer, feel free to get in  <a href="/contact">touch</a> with the team at Hydraulic Solutions and Sales. With decades of industry experience, we are well-equipped to assist with any hydraulic press enquiries. </p>
</div>
  </li>` ;

      setLiveText(text);
      setLiveHead(heading);
    }
  }, [id]);
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
      <section className="d-block product_info pb-5">
        <div className="container-xxl">
          <div className="product_main">
            <div className="d-block product_img">
              <img className="w-100 h-100" src={image} alt="image" />
            </div>
            <h5 dangerouslySetInnerHTML={{ __html: liveHead }}></h5>
          </div>
          <ul dangerouslySetInnerHTML={{ __html: liveText }} />

          <div className="pt-4 d-flex align-items-center gap-5 justify-content-center">
            <ContactBtn />
            <Link className="product_btn" to="/product">All Products</Link>
          </div>
        </div>
      </section>
      <section className="product_list d-block pb-5">
        <div className="container-xxl">
          <div className="row gy-3 gx-3 w-100">
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
          </div>
        </div>
      </section>
      <Productive />
      <Footer />
    </div>
  );
}
