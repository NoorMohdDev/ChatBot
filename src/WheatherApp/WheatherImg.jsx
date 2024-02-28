import React from 'react'

export default function WheatherImg(props) {
    const url = `https://openweathermap.org/img/wn/${props.wImg.icon}@2x.png`
    return (
        <div>
            <div><img src={url} alt="" /></div>
            <h3>{props.wImg.info}</h3>
        </div>
    )
}
