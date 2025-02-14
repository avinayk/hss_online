import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const ParallaxText = () => {
  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".parallaxtext",
        start: "20% 70%",
        end: "90% 50%",
        scrub: true,
        // markers: true, 
      },
    });

    tl1.fromTo(
      ".parallaxtext li", 
      {
        y: -200, 
        opacity: 0, 
        stagger: 1,
        transformOrigin: "center",
        transition: "all 0.9s ease-out",
        transform: "scale(1, 1)",
        duration: 3, 
        ease: "circ.inOut",
      },
      {
        y: 0, 
        opacity: 1, 
        transformOrigin: "center",
        transition: "all 0.9s ease-out",
        transform: "scale(1, 1)",
        duration: 3,
        stagger: 1, 
        ease: "circ.out",
      }
    );

    return () => {
      tl1.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div>
      <ul className="d-flex flex-row align-items-center gap-0 parallaxtext">
        <li><h4>F</h4></li>
        <li><h4>a</h4></li>
        <li><h4>s</h4></li>
        <li><h4>t</h4></li>
        <li><h4>e</h4></li>
        <li><h4>r</h4></li>
      </ul>
    </div>
  );
};

export default ParallaxText;
