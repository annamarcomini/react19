import {useState} from 'react'

const UserForm = () => {
 const [users, setUsers] = useState([]);


 async function handleAddUser(formData) {
  console.log("form sent"); "form sent"
 }

 return (
  <div>
   <form action={handleAddUser}>
    <button type='submit'>Send</button>
   </form>
  </div>
 )
}

export default UserForm