import React,{ forwardRef } from 'react'
import './Slider.css'
function Slider(props,ref) {
    return (
        <div>
            <div className='slider' ref={ref}>

                <img src={props.pic} alt='' />

            </div>
        </div>
    )
}

export default forwardRef(Slider);