/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 Lionfish.glb 
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Lionfish.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group name="Fish_Armature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Main1} />
          </group>
          <group name="Lionfish" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Lionfish_1" geometry={nodes.Lionfish_1.geometry} material={materials.Lionfish_Fins} skeleton={nodes.Lionfish_1.skeleton} />
            <skinnedMesh name="Lionfish_2" geometry={nodes.Lionfish_2.geometry} material={materials.Lionfish_Main} skeleton={nodes.Lionfish_2.skeleton} />
            <skinnedMesh name="Lionfish_3" geometry={nodes.Lionfish_3.geometry} material={materials.Lionfish_Light} skeleton={nodes.Lionfish_3.skeleton} />
            <skinnedMesh name="Lionfish_4" geometry={nodes.Lionfish_4.geometry} material={materials.Eyes} skeleton={nodes.Lionfish_4.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Lionfish.glb')
