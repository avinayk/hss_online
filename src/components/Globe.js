import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import ThreeGlobe from "three-globe";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "../assets/style/main.css";
import countries from "../assets/files/custom.geo.json";
import lines from "../assets/files/line.json";

const Globe = () => {
  const globeContainerRef = useRef(null);

  useEffect(() => {
    const container = globeContainerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const globe = new ThreeGlobe();
    scene.add(globe);

    scene.fog = new THREE.Fog(0x535ef3, 400, 2000);
    scene.background = new THREE.Color(0xffffff);

    globe.onGlobeReady(() => {
      const globeMaterial = globe.globeMaterial();
      if (globeMaterial) {
        globe.hexPolygonsData(countries.features);
        globe.hexPolygonResolution(3);
        globe.hexPolygonColor(() => 0xFFFFFF);
        globe.hexPolygonMargin(0.8);
        globe.showAtmosphere(true);
        globe.atmosphereColor(0x3a228a);
        globeMaterial.color.set(0x535ef3);
        globeMaterial.emissive.set(0x220038);
        globeMaterial.metalness = 1;
        globeMaterial.roughness = 0;
        globe.atmosphereAltitude(0.25);

        if (lines.pulls && lines.pulls.length) {
          const formattedArcs = lines.pulls.map((pull) => ({
            startLat: parseFloat(pull.startLat),
            startLng: parseFloat(pull.startLng),
            endLat: parseFloat(pull.endLat),
            endLng: parseFloat(pull.endLng),
            arcAlt: pull.arcAlt,
            status: pull.status,
            order: pull.order,
          }));

          globe
            .arcsData(formattedArcs)
            .arcColor((e) => (e.status ? "#ff4000" : "#9cff00"))
            .arcAltitude((e) => e.arcAlt)
            .arcStroke(() => 0.3)
            .arcDashLength(0.9)
            .arcDashGap(1)
            .arcDashAnimateTime(2000)
            .arcsTransitionDuration(1000)
            .arcDashInitialGap((e) => e.order * 1);
        } else {
          console.error("No arcs data available.");
        }

        const rotationX = -25.2744 * (Math.PI / 180);
        const rotationY = (133.7751 + 180) * (Math.PI / 180);

        globe.rotation.x = rotationX;
        globe.rotation.y = rotationY;
      }
    });

    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight.position.set(1000, -200, 400).normalize();
    scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(0x7982f6, 0.8);
    directionalLight2.position.set(200, -500, 200);
    scene.add(directionalLight2);

    const directionalLight3 = new THREE.DirectionalLight(0x8566cc, 0.8);
    directionalLight3.position.set(200, 500, -200);
    scene.add(directionalLight3);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;

    // const logCameraPosition = () => {
    //   console.log('Camera Position:',directionalLight3.position);
    // };

    // controls.addEventListener('change', logCameraPosition);

    const updateCameraPosition = () => {
      const width = window.innerWidth;
      let position;

      if (width <= 621) {
        position = { x: 180, y: -150, z: -180 };
      } else if (width <= 1024) {
        position = { x: 110, y: -80, z: -110 };
      } else {
        position = { x: 110, y: -80, z: -110 };
      }
      camera.position.set(position.x, position.y, position.z);
      camera.lookAt(globe.position);
      console.log(camera.position)
    };

    updateCameraPosition();


    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);

    };
    animate();


    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      updateCameraPosition();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement.parentNode) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section className="d-block globe_main position-relative pb-5">
      <div className="container-xxl">
        <div ref={globeContainerRef} className="globe-container"></div>
        <div className="d-block globe_dark">
          <img
            className="w-100 h-100"
            src={require("../assets/images/globe-s.png")}
            alt="globe"
          />
        </div>
      </div>
    </section>
  );
};

export default Globe;
