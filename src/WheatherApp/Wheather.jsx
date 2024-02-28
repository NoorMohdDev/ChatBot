import React, { useState } from 'react'
import WheatherInfo from './WheatherInfo'
import WheatherImg from './WheatherImg'
import { apiGet } from './api'
import './wheather.css'
export default function Wheather() {
    const [info, setInfo] = useState({
        city: '',
        temp: '_____',
        wind: '_____',
        hum: '_____'
    })
    const [name, setName] = useState('London');
    const [wImg, setWImg] = useState({
        info:'',
        icon:''
    })

    function getInfo(name) {
        fetch(apiGet(name)).then((result) => {
            result.json().then((resp) => {
                console.warn(resp)
                setInfo({
                    city: resp.name,
                    temp: resp.main.temp,
                    wind: resp.wind.speed,
                    hum: resp.main.humidity
                })
                setWImg({
                    info: resp.weather[0].main,
                    icon: resp.weather[0].icon
                })
            })
        })
    }

    return (
        <div className='container'>
            <div className='getName'>
            <h2>Enter City Name</h2>
            <input type="text" placeholder='E.g., New York, London, Tokyo' value={name} onChange={(e) => { setName(e.target.value) }} />
            <button onClick={() => { getInfo(name) }}>Search</button>
            </div>
            <div>
            <WheatherInfo info={info} />
            <WheatherImg wImg={wImg} />
            </div>
        </div>
    )
}
