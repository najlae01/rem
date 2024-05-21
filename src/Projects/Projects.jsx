import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { projects } from '../constants'
import './Projects.scss'

export default function Projects({ music }) {
  const navigate = useNavigate()

  const [currentSlide, setCurrentSlide] = useState(0)

  const maxSlides = projects.length

  const handleCarouselNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === projects.length - 1 ? 0 : prevSlide + 1
    )
  }

  const handleCarouselPrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? projects.length - 1 : prevSlide - 1
    )
  }

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
    <div className='my-projects'>
      <button className='hide-elements go-back' onClick={() => navigate('/')}>
        <div className='nav-icon'>
          <div className='arrows'></div>
        </div>
      </button>
      <ul className='slider'>
        {projects.map((project, index) => (
          <li
            className={`item ${index === currentSlide ? 'active' : ''}`}
            key={index}
            style={{
              backgroundImage: `url(${project.image})`,
            }}
          >
            <div className={`content ${project.textStyle}`}>
              <h2 className='title'>{project.title}</h2>
              <p className='description'>{project.stack}</p>
              <p className='date'>{project.endDate}</p>
              <a
                className='icon-link'
                target='_blank'
                href={project.link}
                rel='noopener noreferrer'
              >
                <button
                  disabled={project.link === ''}
                  className={`${project.textStyle}`}
                >
                  See More
                </button>
              </a>
            </div>
          </li>
        ))}
      </ul>

      <div className='nav'>
        <button
          className='btn prev'
          onClick={handleCarouselPrev}
          disabled={currentSlide === 0}
        >
          <ion-icon name='arrow-back-outline'></ion-icon>
        </button>
        <button
          className='btn next'
          onClick={handleCarouselNext}
          disabled={currentSlide === maxSlides - 1}
        >
          <ion-icon name='arrow-forward-outline'></ion-icon>
        </button>
      </div>
    </div>
  )
}
