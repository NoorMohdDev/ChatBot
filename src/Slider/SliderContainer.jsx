import React, { useRef } from 'react'
import { data } from './data'
import Slider from './Slider'
import './SliderContainer.css'
function SliderContainer() {
    const slider = useRef(null)
    function goBack() {
        slider.current.scrollLeft=slider.current.scrollLeft-500;
    }

    function goNext() {
        slider.current.scrollLeft=slider.current.scrollLeft+500;
    }

    return (
        <div className='sliderContainer' ref={slider}>
            <img src={require('./images/back.png')} alt='' className='go back' onClick={goBack}/>
            {
                data.map((newData, i) =>
                    <Slider pic={newData} key={i} />
                )
            }
            <img src={require('./images/next.png')} alt='' className='go next' onClick={goNext}/>
        </div>
    )
}
export default SliderContainer;