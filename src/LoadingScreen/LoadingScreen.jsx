import React, { useState } from 'react'
import './LoadingScreen.css'

export const LoadingScreen = ({
  started,
  onStarted,
  progress,
  modelLoaded,
}) => {
  return (
    <div className={`loadingScreen ${started ? 'loadingScreen--started' : ''}`}>
      <div className='loadingScreen__progress'>
        <div
          className='loadingScreen__progress__value'
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
      <div className='loadingScreen__board'>
        {modelLoaded && progress == 100 ? (
          <>
            <h1 className='loadingScreen__title'>
              Rem is ready. May I introduce you my Hero?
            </h1>
            <button
              className='loadingScreen__button blue'
              disabled={progress < 100}
              onClick={onStarted}
            >
              Enter
            </button>
          </>
        ) : (
          <h1 className='loadingScreen__title'>Waiting for Rem...🪄</h1>
        )}
      </div>
    </div>
  )
}
