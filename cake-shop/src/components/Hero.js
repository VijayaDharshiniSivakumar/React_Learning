import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import './Hero.css';
function GingerbreadHouse() {
  const { scene } = useGLTF('models/ginger.glb');
  return <primitive object={scene} />;
}

const Hero = () => {
  const modelRef = useRef();
  let rotationDirection = 1; // Initial rotation direction
  let rotationSpeed = 0.005; // Initial rotation speed

  const animateModel = () => {
    if (modelRef.current) {
      modelRef.current.rotation.y += rotationSpeed * rotationDirection; // Adjust rotation speed as needed
      if (modelRef.current.rotation.y >= Math.PI / 4 || modelRef.current.rotation.y <= 0) {
        rotationDirection *= -1; // Change rotation direction at certain angle
      }
    }
  };
  return (
    <div className="hero">
      <div className="hero-content">
      <h1>Celebrate the Joy of Christmas with Our Cakes</h1>
        <p>Indulge in festive flavors and delightful designs this holiday season</p>
        <a href="/menu" className="btn">Explore Our Menu</a>
      </div>
    <div className='hero-3dmodel' onMouseEnter={animateModel}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} />
        <GingerbreadHouse />
        <OrbitControls enableZoom={false}/>
      </Canvas>
    </div>
    </div>
  );
};

export default Hero;
