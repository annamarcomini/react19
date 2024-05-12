import { useState } from "react"
import MessageForm from "./MessageForm"

export default function Message() {
 const [messages, setMessages] = useState([
  {text: "Hi, your first message", sending: false, key: 1},
 ])
 async function deliveryMessage(message) {

  await new Promise((resolve) => setTimeout(resolve, 1500));
  
  return message;
 }

 async function sendMessage(formData) {
  const sentMessage = await deliveryMessage(formData.get("message"))
  
  setMessages((messages) => [...messages, { text: sentMessage, sending: false }]);
 }
 return (
   <div>
   <MessageForm messages={messages} sendMessage={sendMessage } />
   </div>
 )
}