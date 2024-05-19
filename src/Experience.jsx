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
import { extend } from '@react-three/fiber'

export default function Experience({ rem, particles, environment, music }) {
  const { cameraInitialPositionForMobile, cameraInitialPositionForDesktop } =
    useControls('Camera Initial Position', {
      cameraInitialPositionForDesktop: {
        value: { x: 5.5, y: 3.5, z: 11 },
        step: 0.1,
        joystick: 'invertY',
      },
      cameraInitialPositionForMobile: {
        value: { x: 13.5, y: 6, z: 24 },
        step: 0.1,
        joystick: 'invertY',
      },
    })

  const environmentCombined = useTexture('/textures/Environment_Combined.png')

  const remColor = useTexture('/textures/Rem_Color.png')
  const remShadedColor = useTexture('/textures/Rem_ColorShaded.png')
  const remOpaque = useTexture('/textures/Rem_Opaque.png')

  let RemMixer = new THREE.AnimationMixer(rem.scene)
  let audio = new Audio('./audio/ChibiRems-Confession.mp3')
  audio.loop = false
  audio.volume = 0.3

  console.log(rem)

  // let ParticlesMixer = new THREE.AnimationMixer(particles.scene)
  // particles.animations.forEach((clip) => {
  //   const action = ParticlesMixer.clipAction(clip)
  //   action.setEffectiveTimeScale(0.2)
  //   action.play()
  // })

  const navigate = useNavigate()

  let animation

  useFrame((state, delta) => {
    RemMixer.update(delta)
    //ParticlesMixer.update(delta)

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

  return (
    <>
      <directionalLight castShadow position={[1, 2, 3]} intensity={2.2} />
      <ambientLight intensity={1.2} />

      <PresentationControls
        global
        polar={[-0.25, 0.3]}
        azimuth={[-1, 1]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 2.5, tension: 400 }}
      >
        <primitive
          object={rem.scene}
          position={[2.4, 0.35, 5.35]}
          rotation={[-0.3, 0.4, 0.135]}
        />
        <mesh
          geometry={environment.nodes.Plane033.geometry}
          position={[2.4, 0.35, 5.35]}
          rotation={[-0.3, 0.4, 0.135]}
        >
          <meshBasicMaterial
            map={environmentCombined}
            side={THREE.DoubleSide}
            map-flipY={false}
            transparent
            alphaTest={0.1}
          />
        </mesh>
        <mesh
          geometry={environment.nodes.Plane033_1.geometry}
          position={[2.4, 0.35, 5.35]}
          rotation={[-0.3, 0.4, 0.135]}
        >
          <meshBasicMaterial
            map={environmentCombined}
            side={THREE.DoubleSide}
            map-flipY={false}
            transparent
            alphaTest={0.9}
          />
        </mesh>
        <mesh
          geometry={environment.nodes.Plane033_2.geometry}
          position={[2.4, 0.35, 5.35]}
          rotation={[-0.3, 0.4, 0.135]}
        >
          <meshBasicMaterial
            map={environmentCombined}
            side={THREE.DoubleSide}
            map-flipY={false}
            transparent
            alphaTest={0.9}
          />
        </mesh>
      </PresentationControls>
    </>
  )
}
