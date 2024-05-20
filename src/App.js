import { Canvas, useLoader } from '@react-three/fiber'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Main from './Main/Main'
import { Suspense, useEffect, useState } from 'react'
import { useGLTF, useProgress } from '@react-three/drei'
import { LoadingScreen } from './LoadingScreen/LoadingScreen'
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
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 450)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const particles = useGLTF('./models/particles.glb')

  const rem = useGLTF('./models/rem.glb')

  const floor = useGLTF('./models/floor.glb')

  const environment = useGLTF('./models/environment.glb')

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
                    fov: 35,
                    near: 0.1,
                    far: 2000,
                    position: [5.5, 4, 11],
                  }}
                >
                  <Suspense fallback={null}>
                    <Main
                      rem={rem}
                      particles={particles}
                      environment={environment}
                      music={music}
                      floor={floor}
                      isMobile={isMobile}
                    />
                  </Suspense>
                </Canvas>
              )}
            </>
          }
        />

        <Route
          path='/about'
          element={<About music={music} isMobile={isMobile} />}
        />
        <Route path='/projects' element={<Projects music={music} />} />
        <Route path='/contact' element={<Contact music={music} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
