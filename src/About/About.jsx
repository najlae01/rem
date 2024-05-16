import { Float, Html } from '@react-three/drei'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const [bookPosition, setBookPosition] = useState([-4, 2, 0])
  const [isFloating, setIsFloating] = useState(false)
  const [showInfo, setShowInfo] = useState(true)

  const navigate = useNavigate()

  return (
    <>
      <Float floatIntensity={0.5} enabled={isFloating}>
        <Html position={bookPosition} className='book-container'>
          <div className='quit'>
            <button className='hamburger cross' onClick={() => navigate('/')}>
              <div className='line'></div>
              <div className='line'></div>
            </button>
          </div>

          <div className='bookWrapper'>About</div>
        </Html>
      </Float>
    </>
  )
}
