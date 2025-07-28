import { useRef, useState } from "react";
import { useThree } from "@react-three/fiber";
import { useDrag } from "@use-gesture/react";

const Draggable = ({ object }) => {
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  const [position, setPosition] = useState([
    object.position.x,
    object.position.y,
    object.position.z,
  ]);

  const bind = useDrag(
    ({ offset: [x, y], first, last }) => {
      // Disable OrbitControls while dragging

      setPosition([x / aspect, -y / aspect, position[2]]);
    },
    { pointerEvents: true }
  );

  return <primitive {...bind()} object={object} position={position} />;
};

export default Draggable;
