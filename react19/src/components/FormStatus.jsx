import SubmitFormButton from "./SubmitFormButton"

export default function FormStatus() {
 const formAction = async (formData) => {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  
  alert("E-mail received: " + formData.get("email"))
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