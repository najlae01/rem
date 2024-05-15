import {
  Html,
  useGLTF,
  PresentationControls,
  Text,
  Text3D,
  useTexture,
  OrbitControls,
} from '@react-three/drei'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { useSpring } from 'react-spring'
import { useControls } from 'leva'

export default function Experience() {
  const particles = useGLTF('./models/particles.glb')

  const rem = useGLTF('./models/rem.glb')

  const environmentColor = useTexture('/textures/Environment_Color.png')
  const environmentOpaque = useTexture('/textures/Environment_Opaque.png')
  const remColor = useTexture('/textures/Rem_Color.png')
  const remShadedColor = useTexture('/textures/Rem_ColorShaded.png')
  const remOpaque = useTexture('/textures/Rem_Opaque.png')

  console.log(rem.scene.children[1])
  console.log(particles.scene)

  let RemMixer = new THREE.AnimationMixer(rem.scene)
  let audio = new Audio('./audio/ChibiRems-Confession.mp3')
  audio.loop = false
  audio.volume = 0.3

  let ParticlesMixer = new THREE.AnimationMixer(particles.scene)
  particles.animations.forEach((clip) => {
    const action = ParticlesMixer.clipAction(clip)
    action.play()
  })

  useFrame((state, delta) => {
    RemMixer.update(delta)
    ParticlesMixer.update(delta)
  })

  const playRemConfession = () => {
    const action = RemMixer.clipAction(rem.animations[0])
    if (!action.isRunning() && audio.paused) {
      action.reset()
      action.setLoop(THREE.LoopOnce)
      //action.clampWhenFinished = true
      action.enabled = true
      audio.play()
      action.play()
    }
  }

  return (
    <>
      <directionalLight castShadow position={[1, 2, 3]} intensity={1.2} />
      <ambientLight intensity={0.3} />

      <OrbitControls />

      <primitive object={particles.scene} position={[0, -0.5, 0]} />

      <primitive object={rem.scene} position={[0, -0.5, 0]} />

      <Html>
        <button onClick={() => playRemConfession()}>Rem Confession</button>
      </Html>
    </>
  )
}
