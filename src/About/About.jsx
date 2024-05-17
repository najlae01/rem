import { useNavigate } from 'react-router-dom'
import './About.scss'
import { FaReact } from 'react-icons/fa'
import { TbBrandThreejs } from 'react-icons/tb'
import { useEffect } from 'react'
import Skills from './Skills'

export default function About({ music }) {
  const navigate = useNavigate()

  useEffect(() => {
    // Delay the rendering of buttons for 5 seconds
    const timer = setTimeout(() => {
      // Add the CSS class to make the buttons visible
      const buttons = document.querySelectorAll('.hide-icons')
      buttons.forEach((button) => {
        button.classList.remove('hide-icons')
        button.classList.add('show-icons')
      })
    }, 800)

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='main'>
      <div className='about-container '>
        <button className='go-back about' onClick={() => navigate('/')}>
          <div className='nav-icon'>
            <div className='arrows'></div>
          </div>
        </button>

        <div className='about-me'>
          <h1 className='header-text'>About my amazing master</h1>
          <div className='flex row w-100 ml-2 px-1'>
            <div className='column w-46 p-1 pl-5 pr-4'>
              <h2 className='play-once'>ATTRIBUTES</h2>
              <div className='row w-100 pt-1'>
                <div className='field w-38'>
                  <label className='glow text medium-text'>Name</label>
                  <input
                    className='medium-text'
                    readOnly
                    disabled
                    type='text'
                    value='Tecna Space'
                    pattern='\w+'
                  />
                </div>
                <div className='field w-58 medium-text'>
                  <label className='glow text'>Title</label>
                  <select>
                    <option value='software-engineer'>Software Engineer</option>
                    <option value='game-programmer'>Game Programmer</option>
                    <option value='creative-developer'>
                      Creative Developer
                    </option>
                  </select>
                </div>
              </div>
              <div className='row w-100'>
                <div className='field w-31'>
                  <label className='glow text medium-text'>Sex</label>
                  <input
                    className='medium-text'
                    readOnly
                    disabled
                    value='Female'
                  />
                </div>
                <div className='field w-33'>
                  <label className='glow text medium-text'>Origin</label>
                  <input
                    className='medium-text'
                    readOnly
                    disabled
                    value='USA'
                  />
                </div>
                <div className='field w-32' data-unit='Yrs'>
                  <label className='glow text medium-text'>Age</label>
                  <input
                    className='medium-text'
                    readOnly
                    disabled
                    value='23'
                    type='number'
                  />
                </div>
              </div>
            </div>

            <div className='column w-49 p-1'>
              <h2 className='play-once'>BIOGRAPHY</h2>
              <div className='row w-100 pt-1'>
                <label className='glow text medium-text'>
                  Master's Journey
                </label>
                <textarea
                  className='medium-text'
                  defaultValue='At 17, Tecna discovered programming. She went to college, became a software engineer, and later a creative developer after learning 3D and Three.js. Loving games, she learned game programming and using Unreal Engine.'
                  disabled
                  readOnly
                  name='story'
                  rows='4'
                  cols='55'
                ></textarea>
              </div>
            </div>
          </div>
          <Skills />
        </div>
      </div>
    </div>
  )
}
