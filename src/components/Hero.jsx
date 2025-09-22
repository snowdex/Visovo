import React, { useEffect } from "react";
import * as THREE from "three";

const Hero = () => {
  useEffect(() => {
    let scene, camera, renderer, object;
    const canvas = document.getElementById("hero-canvas");
    const heroSection = document.getElementById("hero");
    const { width, height } = heroSection.getBoundingClientRect();

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);

    const geometry = new THREE.DodecahedronGeometry(3, 0);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x444444,
      transparent: true,
      opacity: 1,
      metalness: 0.8,
      roughness: 0.1,
      clearcoat: 1,
      clearcoatRoughness: 0.2,
    });
    object = new THREE.Mesh(geometry, material);
    scene.add(object);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 5, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      object.rotation.x += 0.005;
      object.rotation.y += 0.005;
      renderer.render(scene, camera);
    };

    const onResize = () => {
      const { width, height } = heroSection.getBoundingClientRect();
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", onResize);
    animate();

    return () => {
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, []);

  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center bg-zinc-950 relative overflow-hidden"
    >
      <canvas id="hero-canvas" className="absolute inset-0 z-0 opacity-20" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto px-4 z-10">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Transforming your ideas into measurable success—through smart
            strategy, creative storytelling, and seamless digital execution.
          </h1>
          <div className="flex items-center space-x-2 mt-8">
            <a
              href="#contact"
              className="inline-block bg-white text-zinc-900 font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 hover:bg-zinc-200 transition"
            >
              Get started
            </a>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4">
          {["Performance-driven", "Result-focused", "Insightful Execution"].map(
            (text) => (
              <div
                key={text}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:scale-105 w-full text-center transition"
              >
                <p className="font-semibold text-lg">{text}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
