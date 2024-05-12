import { useOptimistic } from 'react';

export default function MessageForm({ messages, sendMessage }) {
 const [optimisticMessages, addOptimisticMessages] = useOptimistic(messages,(state, newMessage)=> [...state, {text: newMessage, sending: true}])

 async function formAction(formData) {
  addOptimisticMessages(formData.get("message"))
  
  await sendMessage(formData)
 }

 return (
  <div>
   {optimisticMessages.map((message, index) => (
    <div key={index}>
     {message.text} {message.sending && <small>(Sending...)</small>}
    </div>
   ))}
     <form action={formAction}>
       <input type="text" name="message" placeholder="Type something here..." />
       <button type="submit">Send</button>
     </form>
   </div>
 )
}