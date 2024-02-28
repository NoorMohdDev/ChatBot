import "./Chat.css";
export default function Chat(props) {
  return (
    <div className="chatBox" style={props.user.bot?{alignItems:'self-start',paddingLeft:'.5rem',marginRight:'.5rem'}:{alignItems:'self-end',paddingRight:'.5rem',marginLeft:'.5rem'}}>
      <div className="chat">
        {props.user.bot ? (
          <img className="bot" src={require("./images/bot.png")} alt="" />
        ) : (
          ""
        )}
        <p className="chatText" style={props.user.bot?{backgroundColor:'rgb(241, 248, 234)'}:{backgroundColor:'rgb(261, 238, 237)'}}>{props.user.msg}</p>
      </div>
    </div>
  );
}
