import './About.scss'
import {
  FaAngular,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython,
  FaReact,
  FaUnity,
} from 'react-icons/fa'
import {
  TbBrandCpp,
  TbBrandJavascript,
  TbBrandNpm,
  TbBrandThreejs,
} from 'react-icons/tb'
import { useEffect } from 'react'
import {
  SiBlender,
  SiMongodb,
  SiMysql,
  SiSpringboot,
  SiUnrealengine,
  SiVisualstudio,
} from 'react-icons/si'

export default function Skills() {
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
    <div className='hide-elements'>
      <h2 className='category-title mt-2'>SKILLS</h2>
      <div className='skills'>
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
            href='https://angular.io/'
            target='_blank'
            className='icon-link'
            rel='noopener noreferrer'
          >
            <FaAngular
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
            href='https://spring.io/projects/spring-boot/'
            target='_blank'
            className='icon-link'
            rel='noopener noreferrer'
          >
            <SiSpringboot
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
        <div className='skill-icon'>
          <a
            href='https://visualstudio.microsoft.com/'
            target='_blank'
            className='icon-link'
            rel='noopener noreferrer'
          >
            <SiVisualstudio
              className='icon'
              style={{
                textDecoration: 'none',
              }}
            />
          </a>
        </div>
        <div className='skill-icon'>
          <a
            href='https://www.mongodb.com/'
            target='_blank'
            className='icon-link'
            rel='noopener noreferrer'
          >
            <SiMongodb
              className='icon'
              style={{
                textDecoration: 'none',
              }}
            />
          </a>
        </div>
        <div className='skill-icon'>
          <a
            href='https://www.mysql.com/'
            target='_blank'
            className='icon-link'
            rel='noopener noreferrer'
          >
            <SiMysql
              className='icon'
              style={{
                textDecoration: 'none',
              }}
            />
          </a>
        </div>

        <div className='skill-icon'>
          <a
            href='https://www.npmjs.com/'
            target='_blank'
            className='icon-link'
            rel='noopener noreferrer'
          >
            <TbBrandNpm
              className='icon'
              style={{
                textDecoration: 'none',
              }}
            />
          </a>
        </div>
        <div className='skill-icon'>
          <a
            href='https://unity.com/'
            target='_blank'
            className='icon-link'
            rel='noopener noreferrer'
          >
            <FaUnity
              className='icon'
              style={{
                textDecoration: 'none',
              }}
            />
          </a>
        </div>
      </div>
    </div>
  )
}
