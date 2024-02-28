import React, { useState } from 'react'
import Buttons from './Buttons'
import InputChar from './InputChar'
import { quizQuestions } from './data'

export default function Hangman() {
  const [count, setCount] =useState(0)
  const [inputChar, setInputChar] = useState([]);

  function checkInput(val) {
    const queLen=quizQuestions[count].answer.length
    const queAns=quizQuestions[count].answer.split('')
    let i=0;
    let alpha=''
    while(i<queLen){
      alpha=queAns[i].toUpperCase
      (val===alpha)?setInputChar([...inputChar,i]):i++
    }
    console.warn(val+" ["+inputChar+"] "+queAns)
  }
  return (
    <div>
        <InputChar que={quizQuestions[count]}/>
        <Buttons checkInput={checkInput}/>
    </div>
  )
}
