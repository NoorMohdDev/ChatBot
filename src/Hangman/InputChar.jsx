import React, { useState } from 'react'
import './InputChar.css'
export default function InputChar(props) {
  const [que, setQue] = useState(props.que.question)
  const [wrong, setWrong] = useState(0)
  const [ans, setAns] = useState(props.que.answer.split(''))

  return (
    <div className='InputContainer'>
      <div className="input-container">
        {ans.map((d, i) => {
          return <input type="text" key={i} maxLength="1" />
        })}

      </div>
      <h2>{que}</h2>
      <h3>Incorrect Input: {wrong}/6</h3>
    </div>
  )
}
