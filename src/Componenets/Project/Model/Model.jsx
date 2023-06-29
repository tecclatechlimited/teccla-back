import React, { useEffect, useState } from "react";
import { useLoader } from "react-three-fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Canvas } from "@react-three/fiber";

const Model = ({ objURL }) => {
  const [model, setModel] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      const loader = new OBJLoader();

      const obj = await loader.loadAsync(objURL);

      setModel(obj);
    };

    loadModel();
  }, [objURL]);

  return <group>{model && <primitive object={model} />}</group>;
};

const Mainmodel = () => {
  const objURL =
    "https://firebasestorage.googleapis.com/v0/b/estate-c1feb.appspot.com/o/building.obj?alt=media&token=39bcebe6-3423-4803-83f3-b31426d0d11a";

  return (
    <Canvas>
      <Model objURL={objURL} />
    </Canvas>
  );
};

export default Mainmodel;
