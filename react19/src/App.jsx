import './App.css'
import ParentComponent from './components/ParentComponent'
import PostItems from './components/PostItems'
import UserForm from './components/UserForm'

function App() {
  

  return (
    <>
      <title>Let´s code- Home</title>
      <meta name="description" content="Learn coding with me react 19" />
      <h1>1 - Actions</h1>
      <UserForm />
      <h1>2 - Ref as props</h1>
      <ParentComponent />
      <h1>3 - Use to load data</h1>
      <PostItems/>
    </>
  )
}

export default App
