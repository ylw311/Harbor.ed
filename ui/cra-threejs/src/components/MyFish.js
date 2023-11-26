import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";

export function ModelKoi(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/Koi.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Play the 'Swimming_Normal' animation which is the 6th animation (index 5)
    if (actions && animations[5]) {
      const swimAction = actions[animations[5].name];
      if (swimAction) {
        swimAction.play();
      }
    }
  }, [actions, animations]);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.003; // This will rotate the model around the y-axis
    }
  });

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
          <group name="Koi" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name="Koi_1"
              geometry={nodes.Koi_1.geometry}
              material={materials.Eyes}
              skeleton={nodes.Koi_1.skeleton}
            />
            <skinnedMesh
              name="Koi_2"
              geometry={nodes.Koi_2.geometry}
              material={materials.Koi_Main}
              skeleton={nodes.Koi_2.skeleton}
            />
            <skinnedMesh
              name="Koi_3"
              geometry={nodes.Koi_3.geometry}
              material={materials.Koi_Fins}
              skeleton={nodes.Koi_3.skeleton}
            />
            <skinnedMesh
              name="Koi_4"
              geometry={nodes.Koi_4.geometry}
              material={materials.Koi_Light}
              skeleton={nodes.Koi_4.skeleton}
            />
            <skinnedMesh
              name="Koi_5"
              geometry={nodes.Koi_5.geometry}
              material={materials.Koi_Dark}
              skeleton={nodes.Koi_5.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

export function ModelBlob(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/Blobfish.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Play the 'Swimming_Normal' animation which is the 6th animation (index 5)
    if (actions && animations[5]) {
      const swimAction = actions[animations[5].name];
      if (swimAction) {
        swimAction.play();
      }
    }
  }, [actions, animations]);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.003; // This will rotate the model around the y-axis
    }
  });
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

export function ModelSnapper(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/Red Snapper.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Play the 'Swimming_Normal' animation which is the 6th animation (index 5)
    if (actions && animations[5]) {
      const swimAction = actions[animations[5].name];
      if (swimAction) {
        swimAction.play();
      }
    }
  }, [actions, animations]);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.003; // This will rotate the model around the y-axis
    }
  });
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={4.5}
      position={[0, 0, -25]}
    >
      <group name="Root_Scene">
        <group name="RootNode">
          <group
            name="Fish_Armature"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <primitive object={nodes.Main1} />
          </group>
          <group name="RedSnapper" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name="RedSnapper_1"
              geometry={nodes.RedSnapper_1.geometry}
              material={materials.RedSnapper_Fins}
              skeleton={nodes.RedSnapper_1.skeleton}
            />
            <skinnedMesh
              name="RedSnapper_2"
              geometry={nodes.RedSnapper_2.geometry}
              material={materials.Eyes}
              skeleton={nodes.RedSnapper_2.skeleton}
            />
            <skinnedMesh
              name="RedSnapper_3"
              geometry={nodes.RedSnapper_3.geometry}
              material={materials.RedSnapper_Main}
              skeleton={nodes.RedSnapper_3.skeleton}
            />
            <skinnedMesh
              name="RedSnapper_4"
              geometry={nodes.RedSnapper_4.geometry}
              material={materials.RedSnapper_Light}
              skeleton={nodes.RedSnapper_4.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

export function ModelLionFish(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/Lionfish.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    // Play the 'Swimming_Normal' animation which is the 6th animation (index 5)
    if (actions && animations[5]) {
      const swimAction = actions[animations[5].name];
      if (swimAction) {
        swimAction.play();
      }
    }
  }, [actions, animations]);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.003; // This will rotate the model around the y-axis
    }
  });

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
          <group name="Lionfish" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name="Lionfish_1"
              geometry={nodes.Lionfish_1.geometry}
              material={materials.Lionfish_Fins}
              skeleton={nodes.Lionfish_1.skeleton}
            />
            <skinnedMesh
              name="Lionfish_2"
              geometry={nodes.Lionfish_2.geometry}
              material={materials.Lionfish_Main}
              skeleton={nodes.Lionfish_2.skeleton}
            />
            <skinnedMesh
              name="Lionfish_3"
              geometry={nodes.Lionfish_3.geometry}
              material={materials.Lionfish_Light}
              skeleton={nodes.Lionfish_3.skeleton}
            />
            <skinnedMesh
              name="Lionfish_4"
              geometry={nodes.Lionfish_4.geometry}
              material={materials.Eyes}
              skeleton={nodes.Lionfish_4.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

export function ModelPuffer(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/Puffer.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    // Play the 'Swimming_Normal' animation which is the 6th animation (index 5)
    if (actions && animations[5]) {
      const swimAction = actions[animations[5].name];
      if (swimAction) {
        swimAction.play();
      }
    }
  }, [actions, animations]);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.003; // This will rotate the model around the y-axis
    }
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group
            name="Pufferfish001"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <group
            name="Fish_Armature"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <primitive object={nodes.Main1} />
          </group>
          <group
            name="Pufferfish002"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <skinnedMesh
              name="Pufferfish002_1"
              geometry={nodes.Pufferfish002_1.geometry}
              material={materials.Pufferfish_Main}
              skeleton={nodes.Pufferfish002_1.skeleton}
            />
            <skinnedMesh
              name="Pufferfish002_2"
              geometry={nodes.Pufferfish002_2.geometry}
              material={materials.Pufferfish_Light}
              skeleton={nodes.Pufferfish002_2.skeleton}
            />
          </group>
          <group name="Pufferfish" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name="Pufferfish_1"
              geometry={nodes.Pufferfish_1.geometry}
              material={materials.Pufferfish_Main}
              skeleton={nodes.Pufferfish_1.skeleton}
            />
            <skinnedMesh
              name="Pufferfish_2"
              geometry={nodes.Pufferfish_2.geometry}
              material={materials.Pufferfish_Light}
              skeleton={nodes.Pufferfish_2.skeleton}
            />
            <skinnedMesh
              name="Pufferfish_3"
              geometry={nodes.Pufferfish_3.geometry}
              material={materials.Puffefish_Black}
              skeleton={nodes.Pufferfish_3.skeleton}
            />
            <skinnedMesh
              name="Pufferfish_4"
              geometry={nodes.Pufferfish_4.geometry}
              material={materials.Eyes}
              skeleton={nodes.Pufferfish_4.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

export function ModelSwordFish(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/Swordfish.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    // Play the 'Swimming_Normal' animation which is the 6th animation (index 5)
    if (actions && animations[5]) {
      const swimAction = actions[animations[5].name];
      if (swimAction) {
        swimAction.play();
      }
    }
  }, [actions, animations]);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.003; // This will rotate the model around the y-axis
    }
  });
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
          <group name="Swordfish" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name="Swordfish_1"
              geometry={nodes.Swordfish_1.geometry}
              material={materials.Swordfish_Light}
              skeleton={nodes.Swordfish_1.skeleton}
            />
            <skinnedMesh
              name="Swordfish_2"
              geometry={nodes.Swordfish_2.geometry}
              material={materials.Swordfish_Main}
              skeleton={nodes.Swordfish_2.skeleton}
            />
            <skinnedMesh
              name="Swordfish_3"
              geometry={nodes.Swordfish_3.geometry}
              material={materials.Swordfish_Dark}
              skeleton={nodes.Swordfish_3.skeleton}
            />
            <skinnedMesh
              name="Swordfish_4"
              geometry={nodes.Swordfish_4.geometry}
              material={materials.Eyes}
              skeleton={nodes.Swordfish_4.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}
