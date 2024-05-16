import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Projects() {
  const navigate = useNavigate()

  return (
    <>
      <div
        className='carousel-control-btn hamburgerP arrow-previous '
        onClick={() => navigate('/')}
      >
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </div>
      <main>Projects</main>
    </>
  )
}
