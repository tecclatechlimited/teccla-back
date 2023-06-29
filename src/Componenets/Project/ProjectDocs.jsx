import React from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { PresentationControls, Stage } from "@react-three/drei";
import Spinner from "./Spinner";

function Model(props) {
  const mtl = useLoader(MTLLoader, "/assets/models/building.mtl");
  const obj = useLoader(OBJLoader, "/assets/models/building.obj", (loader) => {
    loader.setMaterials(mtl);
  });

  return <primitive object={obj} {...props} />;
}

const ProjectDocs = () => {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ fov: 45 }}
      style={{ position: "absolute" }}
    >
      <PresentationControls
        speed={1.5}
        global
        zoom={0.5}
        polar={[-0.1, Math.PI / 4]}
      >
        <Stage environment={null}>
          <Model scale={0.01} />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
};

export default ProjectDocs;
