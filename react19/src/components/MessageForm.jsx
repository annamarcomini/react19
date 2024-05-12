import { useOptimistic } from 'react';

export default function MessageForm({ messages }) {
 const [optimisticMessages, addOptimisticMessages] = useOptimistic(messages,(state, newMessage)=> [...state, {text: newMessage, sending: true}])

 function formAction(formData) {
 
 }

 return (
   <div>
     <form action={formAction}>
       <input type="text" name="message" placeholder="Type something here..." />
       <button type="submit">Send</button>
     </form>
   </div>
 )
}