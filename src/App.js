import { Canvas } from '@react-three/fiber'
import './App.css'
import Experience from './Experience'
import { Suspense } from 'react'

function App() {
  return (
    <Canvas
      shadows
      camera={{
        fov: 45,
        near: 0.1,
        far: 2000,
        rotation: [0, -2, 5]
      }}
    >
      <Suspense fallback={null}>
        <Experience />
      </Suspense>
    </Canvas>
  )
}

export default App
