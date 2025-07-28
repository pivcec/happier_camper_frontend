import { Canvas } from "@react-three/fiber";
import CamperScene from "./CamperScene";

const SceneCanvas = () => {
  return (
    <Canvas
      camera={{ position: [0, 50, 300], fov: 50 }}
      style={{ height: "100vh", width: "100vw" }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <CamperScene />
      {/* No OrbitControls here */}
    </Canvas>
  );
};

export default SceneCanvas;
