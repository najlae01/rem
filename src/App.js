import { Canvas, useLoader } from '@react-three/fiber'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Main from './Main/Main'
import { Suspense, useEffect, useRef, useState } from 'react'
import { useGLTF, useProgress } from '@react-three/drei'
import { LoadingScreen } from './LoadingScreen/LoadingScreen'
import Contact from './Contact/Contact'
import Projects from './Projects/Projects'
import About from './About/About'
import { MdMusicNote, MdMusicOff } from 'react-icons/md'

const clickAudio = new Audio('./audio/hit.mp3')

function App() {
  const music = useRef(new Audio('./audio/Rem-ReZero.mp3'))
  const [modelLoaded, setModelLoaded] = useState(false)
  const [start, setStart] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  music.current.loop = true
  music.current.volume = 0.2

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
      if (music) {
        setTimeout(() => {
          if (music.current.paused) {
            setIsPlaying(true)
          }
        }, 4000)
      }
    }
  }, [start])

  useEffect(() => {
    if (isPlaying) {
      clickAudio.play()
      music.current.play()
      console.log('Playing the audio')
    } else {
      clickAudio.play()
      music.current.pause()
      console.log('Pausing the audio')
    }
  }, [isPlaying])

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
              <>
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
                      floor={floor}
                      music={music}
                      isPlaying={isPlaying}
                      isMobile={isMobile}
                      start={start}
                    />
                  </Suspense>
                </Canvas>
                <button
                  className='music'
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? (
                    <MdMusicNote className='music-icon' />
                  ) : (
                    <MdMusicOff className='music-icon' />
                  )}
                </button>
              </>
              <LoadingScreen
                started={start}
                onStarted={() => setStart(true)}
                progress={progress}
                modelLoaded={modelLoaded}
              />
            </>
          }
        />

        <Route
          path='/about'
          element={
            <>
              <button
                className='music'
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <MdMusicNote className='music-icon' />
                ) : (
                  <MdMusicOff className='music-icon' />
                )}
              </button>
              <About music={music} isMobile={isMobile} />
            </>
          }
        />
        <Route
          path='/projects'
          element={
            <>
              <button
                className='music'
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <MdMusicNote className='music-icon' />
                ) : (
                  <MdMusicOff className='music-icon' />
                )}
              </button>
              <Projects music={music} />
            </>
          }
        />
        <Route
          path='/contact'
          element={
            <>
              <button
                className='music'
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <MdMusicNote className='music-icon' />
                ) : (
                  <MdMusicOff className='music-icon' />
                )}
              </button>
              <Contact music={music} />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
