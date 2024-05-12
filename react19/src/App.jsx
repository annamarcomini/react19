import './App.css';
import ParentComponent from './components/ParentComponent';
import PostItems from './components/PostItems';
import UserForm from './components/UserForm';
import SwitchTheme from './components/SwitchTheme';
import { ThemeContext } from "./Context/ThemeContext"
import { use } from "react"
import FormStatus from './components/FormStatus';

function App() {
  const { theme, toggleTheme } = use(ThemeContext)


  return (
    <main className="main">
      <div className={theme}>
        <title>Let´s code- Home</title>
        <meta name="description" content="Learn coding with me react 19" />
        <h1>1 - Actions</h1>
        <UserForm />
        <h1>2 - Ref as props</h1>
        <ParentComponent />
        <h1>3 - use to load data</h1>
        <PostItems />
        <h1>4 - use to apply contexts</h1>
        <SwitchTheme toggleTheme={toggleTheme} />
        <h1>5 - useFormStatus to see the status of the form sending</h1>
        <FormStatus />
        <h1>6- useFormState updates based on the user response</h1>
        <FormState/>
      </div>
    </main>
  )
}

export default App
