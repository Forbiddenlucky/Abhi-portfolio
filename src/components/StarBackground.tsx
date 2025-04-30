import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const generatePoints = (count: number) => {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    points[i3] = (Math.random() - 0.5) * 10;     // Spread wider on x
    points[i3 + 1] = (Math.random() - 0.5) * 10; // Spread wider on y
    points[i3 + 2] = (Math.random() - 0.5) * 3;  // Less spread on z for better visibility
  }
  return points;
};

const StarField = () => {
  const points = useRef<THREE.Points>(null);
  const sphere = generatePoints(8000); // More points for denser star field

  useFrame((state, delta) => {
    if (points.current) {
      points.current.rotation.x += delta * 0.01;
      points.current.rotation.y += delta * 0.01;
    }
  });

  return (
    <Points
      ref={points}
      positions={sphere}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#fae8ff"
        size={0.005} // Much smaller points
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.6}
      />
    </Points>
  );
};

interface StarBackgroundProps {
  mousePosition: { x: number; y: number };
}

const StarBackground: React.FC<StarBackgroundProps> = ({ mousePosition }) => {
  return (
    <div className="canvas-container">
      <Canvas 
        camera={{ 
          position: [0, 0, 1],
          fov: 75,
          near: 0.1,
          far: 1000
        }}
      >
        <ambientLight intensity={0.5} />
        <StarField />
        <StarField /> {/* Multiple star fields for more density */}
        <StarField />
      </Canvas>
    </div>
  );
};

export default StarBackground;