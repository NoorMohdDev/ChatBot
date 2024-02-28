import React from 'react'

export default function WheatherInfo(props) {
    return (
        <div>
            <h2>{props.info.city}</h2>
            <h3>Temperature: {props.info.temp}</h3>
            <h3>Wind: {props.info.wind}</h3>
            <h3>Humidity: {props.info.hum}</h3>
        </div>
    )
}
