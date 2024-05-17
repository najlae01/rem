import './About.scss'
import { FaGitAlt, FaGithub, FaJava, FaPython, FaReact } from 'react-icons/fa'
import { TbBrandCpp, TbBrandJavascript, TbBrandThreejs } from 'react-icons/tb'
import { useEffect } from 'react'
import { SiBlender, SiUnrealengine } from 'react-icons/si'

export default function Skills() {
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
    <div className='flex row w-100'>
      <div className='column w-100 pl-8'>
        <h2 className='skills-header'>SKILLS</h2>
        <div className='skills hide-icons'>
          <div className='skill-icon'>
            <a
              href='https://fr.wikipedia.org/wiki/C%2B%2B/'
              target='_blank'
              className='icon-link'
              rel='noopener noreferrer'
            >
              <TbBrandCpp
                className='icon'
                style={{
                  textDecoration: 'none',
                }}
              />
            </a>
          </div>
          <div className='skill-icon'>
            <a
              className='icon-link'
              target='_blank'
              href='https://www.unrealengine.com/'
              rel='noopener noreferrer'
            >
              <SiUnrealengine
                className='icon'
                style={{
                  textDecoration: 'none',
                }}
              />
            </a>
          </div>
          <div className='skill-icon'>
            <a
              href='https://fr.wikipedia.org/wiki/JavaScript/'
              target='_blank'
              className='icon-link'
              rel='noopener noreferrer'
            >
              <TbBrandJavascript
                className='icon'
                style={{
                  textDecoration: 'none',
                }}
              />
            </a>
          </div>
          <div className='skill-icon'>
            <a
              href='https://react.dev/'
              target='_blank'
              className='icon-link'
              rel='noopener noreferrer'
            >
              <FaReact
                className='icon'
                style={{
                  textDecoration: 'none',
                }}
              />
            </a>
          </div>
          <div className='skill-icon'>
            <a
              className='icon-link'
              target='_blank'
              href='https://threejs.org/'
              rel='noopener noreferrer'
            >
              <TbBrandThreejs
                className='icon'
                style={{
                  textDecoration: 'none',
                }}
              />
            </a>
          </div>

          <div className='skill-icon'>
            <a
              className='icon-link'
              target='_blank'
              href='https://www.blender.org/'
              rel='noopener noreferrer'
            >
              <SiBlender
                className='icon'
                style={{
                  textDecoration: 'none',
                }}
              />
            </a>
          </div>
          <div className='skill-icon'>
            <a
              href='https://www.java.com/'
              target='_blank'
              className='icon-link'
              rel='noopener noreferrer'
            >
              <FaJava
                className='icon'
                style={{
                  textDecoration: 'none',
                }}
              />
            </a>
          </div>
          <div className='skill-icon'>
            <a
              href='https://www.python.org/'
              target='_blank'
              className='icon-link'
              rel='noopener noreferrer'
            >
              <FaPython
                className='icon'
                style={{
                  textDecoration: 'none',
                }}
              />
            </a>
          </div>

          <div className='skill-icon'>
            <a
              href='https://git-scm.com/'
              target='_blank'
              className='icon-link'
              rel='noopener noreferrer'
            >
              <FaGitAlt
                className='icon'
                style={{
                  textDecoration: 'none',
                }}
              />
            </a>
          </div>
          <div className='skill-icon'>
            <a
              href='https://github.com/'
              target='_blank'
              className='icon-link'
              rel='noopener noreferrer'
            >
              <FaGithub
                className='icon'
                style={{
                  textDecoration: 'none',
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
