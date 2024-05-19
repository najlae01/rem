import {
  Html,
  OrbitControls,
  Float,
  PresentationControls,
  useTexture,
  shaderMaterial,
} from '@react-three/drei'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { useNavigate } from 'react-router-dom'
import { a, useSpring } from '@react-spring/three'
import { extend } from '@react-three/fiber'
import { useEffect, useRef } from 'react'

export default function Experience({
  rem,
  particles,
  environment,
  floor,
  music,
}) {
  const environmentCombined = useTexture('/textures/Environment_Combined.png')

  let RemMixer = new THREE.AnimationMixer(rem.scene)
  let audio = new Audio('./audio/ChibiRems-Confession.mp3')
  audio.loop = false
  audio.volume = 0.3

  console.log(rem)

  let ParticlesMixer = new THREE.AnimationMixer(particles.scene)
  particles.animations.forEach((clip) => {
    const action = ParticlesMixer.clipAction(clip)
    action.setEffectiveTimeScale(0.2)
    action.play()
  })

  const navigate = useNavigate()

  let animation

  useFrame((state, delta) => {
    RemMixer.update(delta)
    ParticlesMixer.update(delta)

    if (audio.paused && (!animation || !animation.isRunning())) {
      music.play()
    }
  })

  const playRemConfession = () => {
    animation = RemMixer.clipAction(rem.animations[0])
    if (!animation.isRunning() && audio.paused) {
      animation.reset()
      music.pause()
      animation.setLoop(THREE.LoopOnce)
      //action.clampWhenFinished = true
      animation.enabled = true
      audio.play()
      animation.play()

      // Add an event listener for the 'ended' event of the audio
      audio.onended = () => {
        // Check if the animation is still running
        if (!animation.isRunning()) {
          // If the animation is also finished, play the music
          music.play()
        }
      }
    }
  }

  const remCombined = useTexture('/textures/Rem_ShadedCombined.png')
  remCombined.flipY = false
  remCombined.roughness = 1
  remCombined.metalness = 1
  remCombined.colorSpace = THREE.SRGBColorSpace
  const remMaterial = new THREE.MeshBasicMaterial({
    map: remCombined,
    side: THREE.DoubleSide,
    transparent: true,
    alphaTest: 0.5,
    toneMapped: false,
  })

  remMaterial.needsUpdate = true

  const remMesh = rem.scene
  remMesh.children[0].children[0].material = remMaterial

  return (
    <>
      <OrbitControls
        minAzimuthAngle={-1}
        maxAzimuthAngle={1}
        minPolarAngle={-0.25}
        maxPolarAngle={1.29}
      />
      <primitive
        object={particles.scene}
        position={[2.4, 0.15, 5.35]}
        rotation={[-0.3, 0.4, 0.135]}
      />

      <primitive
        object={remMesh}
        position={[2.4, 0.55, 5.35]}
        rotation={[-0.3, 0.4, 0.135]}
      />

      <mesh
        geometry={floor.nodes.Bg_Floor.geometry}
        position={[2.4, 0.55, 5.35]}
        rotation={[-0.3, 0.4, 0.135]}
      >
        <meshBasicMaterial
          map={environmentCombined}
          side={THREE.DoubleSide}
          map-flipY={false}
          transparent
          alphaTest={0.1}
          roughness={1}
          metalness={0.7}
        />
      </mesh>
      <mesh
        geometry={environment.nodes.Pillar_Wall.geometry}
        position={[2.4, 0.555, 5.35]}
        rotation={[-0.3, 0.4, 0.135]}
      >
        <meshBasicMaterial
          map={environmentCombined}
          side={THREE.DoubleSide}
          map-flipY={false}
          transparent
          alphaTest={0.9}
          roughness={1}
          metalness={0.7}
        />
      </mesh>
      <Float floatIntensity={1.5}>
        <Html position={[0.5, -1.5, 0]}>
          <button className='red' onClick={() => playRemConfession()}>
            REM CONFESSION
          </button>
        </Html>
      </Float>

      <Float floatIntensity={1.5}>
        <Html position={[-3.5, -1.5, 0]}>
          <button className='blue' onClick={() => navigate('/contact')}>
            CONTACT
          </button>
        </Html>
      </Float>

      <Float floatIntensity={1.5}>
        <Html position={[0, 0.2, 0]}>
          <button className='green' onClick={() => navigate('/about')}>
            ABOUT
          </button>
        </Html>
      </Float>
    </>
  )
}
