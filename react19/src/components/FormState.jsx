import { useFormState } from 'react-dom';

export default function FormStatus() {
 
 const validateUser = () => {
  
 };

 const [message, formAction] = useFormState(validateUser, null);
 
 return (
  <div>
   <form action={formAction}>
    <label htmlFor="userName">Name</label>
    <input type="text" name="userName" />
    <button type="submit"></button>
    {message && <h4>{message.text}</h4>}
   </form>
  </div>
 )
}