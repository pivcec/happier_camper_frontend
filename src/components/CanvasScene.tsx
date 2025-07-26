import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Leva, useControls } from "leva";
import MyGLBModel from "./MyGLBModel";

export default function CanvasScene() {
  const { intensity } = useControls({
    intensity: { value: 0.5, min: 0, max: 2 },
  });

  return (
    <>
      <Canvas
        camera={{ position: [2, 2, 5], fov: 50 }}
        style={{ height: "100vh", width: "100vw" }}
      >
        <ambientLight intensity={intensity} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <OrbitControls />
        <Perf position="top-left" />
        <MyGLBModel />
      </Canvas>
      <Leva collapsed />
    </>
  );
}
