import React from 'react'
import SliderContainer from './SliderContainer'

export default function SlideGo() {
  return (
    <div>
        <button className='go back'>Prev</button>
        <SliderContainer/>
        <button className='go next'>Next</button>
    </div>
  )
}
