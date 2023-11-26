import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  useAnimations,
  Environment,
} from "@react-three/drei";
import { Suspense } from "react";
import { ModelBlob } from "./MyFish";
import { ModelKoi } from "./MyFish";
import { ModelLionFish } from "./MyFish";
import { ModelPuffer } from "./MyFish";
import { ModelSnapper } from "./MyFish";
import { ModelSwordFish } from "./MyFish";

function About() {
  // const cameraRef = useRef();

  // useEffect(() => {
  //   // Adjust the camera using the cameraRef
  //   if (cameraRef.current) {
  //     cameraRef.current.position.set(10, -10, 10);
  //     cameraRef.current.lookAt(new THREE.Vector3(0, 0, 0));
  //   }
  // }, []);

  return (
    <div style={{ width: "100%", height: "75vh" }}>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.9} />
          <spotLight
            intensity={4}
            angle={0.1}
            penumbra={1}
            position={[10, 15, 10]}
            castShadow
          />
          <Environment preset="sunset" />
          <ModelKoi />
          {/* <ModelLionFish /> */}
          {/* <ModelPuffer /> */}
          {/* <ModelSwordFish /> */}
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default About;
