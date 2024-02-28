import React from "react";
import { charData } from "./data";
import './Buttons.css'

export default function Buttons(props) {
  return (
    <div className="keyboard">
      {charData.map((data,i)=>{
        return <button key={i} onClick={()=>props.checkInput(data)} className="alpha">{data}</button>;
      })}
    </div>
  );
}
