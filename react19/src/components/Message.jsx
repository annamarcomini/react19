import { useState } from "react"
import MessageForm from "./MessageForm"

export default function Message() {
 const [messages, setMessages] = useState([
  {text: "Hi, your first message", sending: false, key: 1},
 ])
 return (
   <div>
     <MessageForm messages={messages} />;
   </div>
 )
}