import { useFormStatus } from 'react-dom'

export default function SubmitFormButton() {
 const { pending } = useFormStatus();

 return (
  <button type='submit' disabled={pending}>
   { pending ? "Sending..." : "Send"}
  </button>
 )
}