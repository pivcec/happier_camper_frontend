import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Group } from "three";

type GLTFResult = GLTF & {
  nodes: Record<string, any>;
  materials: Record<string, any>;
};

export default function MyGLBModel() {
  const { scene } = useGLTF("/models/camper.glb") as GLTFResult;
  return <primitive object={scene} />;
}

// Preload to optimize loading
useGLTF.preload("/models/camper.glb");
