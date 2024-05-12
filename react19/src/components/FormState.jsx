import { useFormState } from 'react-dom';

export default function FormState() {
 
 const validateUser = (prevState,formData) => {
 
  const name = formData.get("userName");
  console.log(name)
 };

 const [message, formAction] = useFormState(validateUser, null);
 
 return (
  <div>
   <form action={formAction}>
    <label htmlFor="userName">Name</label>
    <input type="text" name="userName" placeholder='Type your name'/>
    <button type="submit">Send</button>
    {message && <h4>{message.text}</h4>}
   </form>
  </div>
 )
}