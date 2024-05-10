import {useState} from 'react'

const UserForm = () => {
 const [users, setUsers] = useState([]);


 async function handleAddUser(formData) {
  const name = formData.get("name");
  const email = formData.get("email");

  setUsers((prev) => [...prev, { name, email }]);
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
   <h3>Users</h3>
   <ul>
    {users.map((user) => (
     <li key={index}>{user.name} - {user.email}</li>
    ))}
   </ul>
   </div>
 )
}

export default UserForm