/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 Blobfish.glb
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/Blobfish.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group
            name="Fish_Armature"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <primitive object={nodes.Main1} />
          </group>
          <group name="Blobfish" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name="Blobfish_1"
              geometry={nodes.Blobfish_1.geometry}
              material={materials.Blobfish_Main}
              skeleton={nodes.Blobfish_1.skeleton}
            />
            <skinnedMesh
              name="Blobfish_2"
              geometry={nodes.Blobfish_2.geometry}
              material={materials.Blobfish_Light}
              skeleton={nodes.Blobfish_2.skeleton}
            />
            <skinnedMesh
              name="Blobfish_3"
              geometry={nodes.Blobfish_3.geometry}
              material={materials.Eyes}
              skeleton={nodes.Blobfish_3.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Blobfish.glb");
