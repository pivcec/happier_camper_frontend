import { useGLTF } from "@react-three/drei";
import Draggable from "./Draggable";
import { useMemo } from "react";

const CamperScene = () => {
  const { scene } = useGLTF("/models/camper.glb");

  // Memoize clones so they aren't recreated every render
  const camper = useMemo(
    () => scene.getObjectByName("camper")?.clone(),
    [scene]
  );
  const box1 = useMemo(
    () => scene.getObjectByName("box1")?.clone(true),
    [scene]
  );
  const box2 = useMemo(
    () => scene.getObjectByName("box2")?.clone(true),
    [scene]
  );

  return (
    <>
      {camper && <primitive object={camper} />}
      {box1 && <Draggable object={box1} />}
      {box2 && <Draggable object={box2} />}
    </>
  );
};

export default CamperScene;
