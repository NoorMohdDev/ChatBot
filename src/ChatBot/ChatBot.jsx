import React, { useState, useRef, useEffect } from "react";
import "./ChatBot.css";
import Chat from "./Chat";
import {data} from './data'
export default function ChatBot() {
  const ref = useRef(null);

  const scrollToLastMsg = () => {
    const lastChildElement = ref.current?.lastElementChild;
    lastChildElement?.scrollIntoView({ behavior: "smooth" });
  };
  const [user, setUser] = useState([
    {
      bot: null,
      msg: "",
    },
  ]);
  const [userMsg, setUserMsg] = useState("");
  const [count, setCount] = useState(0);
  const [res,setRes]=useState('')
  const Bot = {
    bot: true,
    msg: "Welcome! to Chat",
  };
  
  function onChat(val, txt) {
   data.map((d)=>{
      if(txt.toUpperCase()===d.query.toUpperCase()){
        setRes(d.response)
      }
    })
    chatUpdate(val,txt)
    
  }
  function chatUpdate(val,txt){
    if (txt.toUpperCase() !=='') {
      const insertAt = 1;
      const nextUser = [
        ...user.slice(0, insertAt),
        {
          bot: val,
          msg: txt,
        },
        ...user.slice(insertAt),
      ];
      setUser(nextUser);
      setUserMsg("");
      setCount(count + 1);
    }
  }

  useEffect(() => {
    scrollToLastMsg();
  }, [user]);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      chatUpdate(true,res);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [res]);
console.log(res)

  return (
    <div className="botContainer">
      <div className="botName">
        <h2>ChatBot</h2>
      </div>
      <div ref={ref} className="chatting">
        <Chat user={Bot} />
        {user
          .slice(1)
          .reverse()
          .map((d,i) => {
            return <Chat user={d} key={i} />;
          })}
      </div>
      <div className="startChat">
        <input
          type="text"
          value={userMsg}
          placeholder="Please Enter!"
          onChange={(e) => {
            setUserMsg(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              onChat(false, userMsg);
            }
          }}
        />
        <div className="send">
          <img
            src={require("./images/paper.png")}
            alt=""
            onClick={() => {
              onChat(false, userMsg);
            }}
          />
        </div>
      </div>
    </div>
  );
}
