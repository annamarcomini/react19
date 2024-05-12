import SubmitFormButton from "./SubmitFormButton"

export default function FormStatus() {
 const formAction = async () => {
 
 }
 
 return (
  <div>
   <form action={formAction}>
    <input type="email" name="email" placeholder="Type your email" />
    <SubmitFormButton/>
   </form>
  </div>
 )
}