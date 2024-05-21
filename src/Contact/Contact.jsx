import './Contact.css'
import { FiLinkedin, FiGithub } from 'react-icons/fi'
import emailjs from '@emailjs/browser'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact({ music }) {
  const navigate = useNavigate()
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { target } = e
    const { name, value } = target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        'service_mnv8heg',
        'template_9n8kd55',
        {
          from_name: form.name,
          to_name: 'Najlae Abarghache',
          from_email: form.email,
          to_email: 'najlae.abarghache1@gmail.com',
          message: form.message,
        },
        'd6nXovs-WlQdnNFys'
      )
      .then(
        () => {
          setLoading(false)
          alert('Thank you. I will get back to you as soon as possible.')

          setForm({
            name: '',
            email: '',
            message: '',
          })
        },
        (error) => {
          setLoading(false)
          console.error(error)

          alert('Ahh, something went wrong. Please try again.')
        }
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
      <div className='contact-me'>
        <button className='hide-elements go-back' onClick={() => navigate('/')}>
          <div className='nav-icon'>
            <div className='arrows'></div>
          </div>
        </button>
        <div className='hide-elements header'>
          <h1 className='header-text'>Get in touch</h1>
          <img src='./images/emoji.png' />
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className='contact-form'>
          <label className=''>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Name..'
              className='hide-elements contact-placeholder'
              required
            />
          </label>
          <label className=''>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Email..'
              className='hide-elements contact-placeholder'
              required
            />
          </label>
          <label className=''>
            <textarea
              rows={5}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Message..'
              className='hide-elements contact-placeholder'
              required
            />
          </label>
          <div className='socials'>
            <button type='submit' className='hide-elements'>
              {loading ? 'Sending...' : 'Send'}
            </button>
            <div className='hide-elements social-icons'>
              <div className='social-icon'>
                <a
                  href='https://www.linkedin.com/in/najlae-abarghache/'
                  target='_blank'
                  className='icon-link'
                  rel='noopener noreferrer'
                >
                  <FiLinkedin
                    className='icon'
                    style={{
                      textDecoration: 'none',
                      color: '#dcecfb',
                    }}
                  />
                </a>
              </div>
              <div className='social-icon'>
                <a
                  className='icon-link'
                  target='_blank'
                  href='https://github.com/najlae01'
                  rel='noopener noreferrer'
                >
                  <FiGithub
                    className='icon'
                    style={{
                      textDecoration: 'none',
                      color: '#dcecfb',
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
  )
}
