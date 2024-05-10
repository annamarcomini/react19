import {useState} from 'react'

const UserForm = () => {
 const [users, setUsers] = useState([]);


 async function handleAddUser(formData) {
  console.log("form sent"); "form sent"
 }

 return (
   <div>
     <form action={handleAddUser}>
       <div>
         <input type="text" name="name" placeholder="Type your name" />
       </div>
       <div>
         <input type="text" name="email" placeholder="Type your email" />
       </div>
       <button type="submit">Send</button>
     </form>
   </div>
 )
}

export default UserForm