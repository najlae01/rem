import { Canvas } from '@react-three/fiber'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Experience from './Experience'
import { Suspense, useEffect, useState } from 'react'
import { useGLTF, useProgress } from '@react-three/drei'
import { LoadingScreen } from './LoadingScreen'
import Contact from './Contact/Contact'
import Projects from './Projects/Projects'
import About from './About/About'

const clickAudio = new Audio('./audio/hit.mp3')
const music = new Audio('./audio/Rem-ReZero.mp3')
music.loop = true
music.volume = 0.2

function App() {
  const [modelLoaded, setModelLoaded] = useState(false)
  const [start, setStart] = useState(false)

  const particles = useGLTF('./models/particles.glb')

  const rem = useGLTF('./models/rem.glb')

  const { progress } = useProgress()

  useEffect(() => {
    if (clickAudio && start) {
      clickAudio.play()
      if (music && start) {
        setTimeout(() => {
          music.play()
        }, 4000)
      }
    }
  }, [start])

  useEffect(() => {
    console.log(progress)
    if (progress === 100) {
      setModelLoaded(true)

      console.log(modelLoaded)
    }
    if (progress >= 1) {
      setModelLoaded(true)
    }
  }, [progress, modelLoaded])

  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <LoadingScreen
                started={start}
                onStarted={() => setStart(true)}
                progress={progress}
                modelLoaded={modelLoaded}
              />
              {start && (
                <Canvas
                  shadows
                  camera={{
                    fov: 45,
                    near: 0.1,
                    far: 2000,
                    rotation: [0, -2, 5],
                  }}
                >
                  <Suspense fallback={null}>
                    <Experience rem={rem} particles={particles} music={music} />
                  </Suspense>
                </Canvas>
              )}
            </>
          }
        />

        <Route
          path='/about'
          element={
            <Canvas
              shadows
              camera={{
                fov: 75,
                near: 0.1,
                far: 2000,
                position: [0, 0, 4],
              }}
            >
              <About />
            </Canvas>
          }
        />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
