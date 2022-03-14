/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/f5.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    console.log(actions)
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Point" position={[0.06, 0.09, 0.13]}>
        <pointLight intensity={15} decay={2} color="#ff2b09" rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <mesh
        name="Cube"
        geometry={nodes.Cube.geometry}
        material={materials['Material.007']}
        position={[0, -0.28, 0.37]}
        scale={0.24}
      />
      <mesh
        name="Plane001"
        geometry={nodes.Plane001.geometry}
        material={materials['Material.008']}
        position={[-0.35, 1.42, -2.02]}
        rotation={[-0.67, 0, 0]}
      />
      <mesh
        name="Plane002"
        geometry={nodes.Plane002.geometry}
        material={materials['Material.009']}
        position={[2.92, -1.86, -1.85]}
        rotation={[0, 0.16, 0.72]}
        scale={[3.69, 3.69, 3.69]}
      />
      <mesh
        name="Plane"
        geometry={nodes.Plane.geometry}
        material={materials['Material.006']}
        position={[0, -0.01, 0]}
        scale={[0.74, 0.95, 0.84]}
      />
      <mesh
        name="Curve"
        geometry={nodes.Curve.geometry}
        material={materials['Material.001']}
        position={[-1.01, 0.04, 0.75]}
        scale={6.22}
      />
      <mesh
        name="Curve001"
        geometry={nodes.Curve001.geometry}
        material={nodes.Curve001.material}
        position={[-1.01, 0.04, 0.75]}
        scale={6.22}
      />
      <mesh
        name="Curve002"
        geometry={nodes.Curve002.geometry}
        material={nodes.Curve002.material}
        position={[-1.01, 0.04, 0.75]}
        scale={6.22}
      />
      <mesh
        name="Curve003"
        geometry={nodes.Curve003.geometry}
        material={nodes.Curve003.material}
        position={[-1.01, 0.05, 0.75]}
        scale={6.22}
      />
      <mesh
        name="Curve004"
        geometry={nodes.Curve004.geometry}
        material={nodes.Curve004.material}
        position={[-1.01, 0.05, 0.75]}
        scale={6.22}
      />
    </group>
  )
}

useGLTF.preload('/f5.glb')