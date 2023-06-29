// import React, { useEffect, useState } from "react";
// import { Canvas, useLoader } from "@react-three/fiber";
// import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
// import { storage } from "../../../config/firebase";
// import { getDownloadURL, ref } from "firebase/storage";

// const RenderModel = () => {
//   const Model = ({ objURL, textureURL }) => {
//     const [model, setModel] = useState(null);
//     const [texture, setTexture] = useState(null);

//     useEffect(() => {
//       const loadModel = async () => {
//         const loader = new OBJLoader();
//         const textureLoader = new TextureLoader();

//         const obj = await loader.loadAsync(objURL);
//         const tex = await textureLoader.loadAsync(textureURL);

//         setModel(obj);
//         setTexture(tex);
//       };

//       loadModel();
//     }, [objURL, textureURL]);

//     return (
//       <group>
//         {model && <primitive object={model} />}
//         {texture && <meshBasicMaterial map={texture} />}
//       </group>
//     );
//   };

//   const obj = useLoader(OBJLoader, modelUrl);

//   return <primitive object={obj} />;

//   return (
//     <div>
//       <Canvas>
//       <Model objURL={objURL} textureURL={textureURL} />
//       </Canvas>
//     </div>
//   );
// };

// export default RenderModel;

import React from 'react'
import Mainmodel from './Model'

const RenderModel = () => {
  return (
    <div>
      <Mainmodel />
    </div>
  )
}

export default RenderModel
