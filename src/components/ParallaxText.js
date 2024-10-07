import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function ParallaxText() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".parallaxtext",
        start: "10% 50%",
        end: "80% 33%",
        scrub: true,
        // markers: true,
        snap: {
          snapTo: "Label",
          duration: { min: 3, max: 5 },
          delay: 0.2,
        },
      },
    });
    tl2.addLabel("start").to(".parallaxtext li ", {
      x: -0,
      y: -489,
      stagger:1,
      transformOrigin: "center",
      transition: "all 0.9s ease-out",
      transform: "scale(1, 1)",
      duration: 1,
      opacity: 1,
      ease: "circ.inOut",
    });
  });
  return (
    <div>
      <ul className="d-flex flex-row align-items-center gap-0 parallaxtext">
        <li>
          <h4>F</h4>
        </li>
        <li>
          <h4>a</h4>
        </li>
        <li>
          <h4>s</h4>
        </li>
        <li>
          <h4>t</h4>
        </li>
        <li>
          <h4>e</h4>
        </li>
        <li>
          <h4>r</h4>
        </li>
      </ul>
    </div>
  );
}
