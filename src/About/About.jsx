import { useNavigate } from 'react-router-dom'
import './About.scss'
import { useEffect, useState } from 'react'
import Skills from './Skills'

export default function About({ music, isMobile }) {
  const navigate = useNavigate()

  const [isTablet, setIsTablet] = useState(false)

  const [isSmallerDesktopScreen, setIsSmallerDesktopScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 900 && window.innerWidth > 650)
      setIsSmallerDesktopScreen(window.innerWidth <= 1400)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    // Delay the rendering of buttons for 5 seconds
    const timer = setTimeout(() => {
      // Add the CSS class to make the buttons visible
      const elements = document.querySelectorAll('.hide-elements')
      elements.forEach((element) => {
        element.classList.remove('hide-elements')
        element.classList.add('show-elements')
      })
    }, 800)

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='about-me'>
      <div className='about-card'>
        <button className='hide-elements go-back' onClick={() => navigate('/')}>
          <div className='nav-icon'>
            <div className='arrows'></div>
          </div>
        </button>
        <h1 className='hide-elements header-text'>Meet my amazing hero</h1>
        <div className='hide-elements flex row w-100'>
          <div
            className={`column ${
              isSmallerDesktopScreen ? 'w-100' : 'w-46 pr-2'
            } `}
          >
            <h2 className='category-title'>ATTRIBUTES</h2>
            <div className='row w-100 pb-1'>
              <div className='field w-38 pr-1'>
                <label className='glow text'>Name</label>
                <input
                  readOnly
                  disabled
                  type='text'
                  value='NaN'
                  pattern='\w+'
                />
              </div>
              <div className='field w-61'>
                <label className='glow text'>Title</label>
                <select>
                  <option value='software-engineer'>Software Engineer</option>
                  <option value='game-programmer'>Game Programmer</option>
                  <option value='creative-developer'>Creative Developer</option>
                </select>
              </div>
            </div>
            <div className='row w-100'>
              <div className='field w-33 pr-1'>
                <label className='glow text'>Sex</label>
                <input readOnly disabled value='NaN' />
              </div>
              <div className='field w-33 pr-1'>
                <label className='glow text'>Origin</label>
                <input readOnly disabled value='NaN' />
              </div>
              <div className='field w-33' data-unit='Yrs'>
                <label className='glow text'>Age</label>
                <input readOnly disabled value='00' type='number' />
              </div>
            </div>
          </div>
          {!isSmallerDesktopScreen && (
            <div className='column w-49'>
              <h2 className='category-title'>BIOGRAPHY</h2>
              <div className='flex column w-100'>
                <label className='glow text'>Master's Journey</label>
                <textarea
                  defaultValue='At 17, Tecna discovered programming. She went to college, became a software engineer, and later a creative developer after learning 3D and Three.js. Loving games, she learned game programming and using Unreal Engine.'
                  disabled
                  readOnly
                  name='story'
                  rows='4'
                  cols='55'
                ></textarea>
              </div>
            </div>
          )}
        </div>
        {isSmallerDesktopScreen && (
          <div className='flex row w-100'>
            <div className='column w-100'>
              <h2 className='category-title mt-2'>BIOGRAPHY</h2>
              <div className='flex column w-100'>
                <label className='glow text'>Master's Journey</label>
                <textarea
                  defaultValue='At 17, she discovered programming. She went to college, became a software engineer, and later a creative developer after learning 3D and Three.js. Loving games, she learned game programming and using Unreal Engine.'
                  disabled
                  readOnly
                  name='story'
                  rows={isMobile ? 9 : 5}
                ></textarea>
              </div>
            </div>
          </div>
        )}
        <Skills />
        <Skills />
        <Skills />
        <Skills />
      </div>
    </div>
  )
}
