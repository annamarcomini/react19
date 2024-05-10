import './App.css';
import ParentComponent from './components/ParentComponent';
import PostItems from './components/PostItems';
import UserForm from './components/UserForm';
import { ThemeProvider } from './Context/ThemeContext';

function App() {
  

  return (
    <>
      <title>Let´s code- Home</title>
      <meta name="description" content="Learn coding with me react 19" />
      <h1>1 - Actions</h1>
      <UserForm />
      <h1>2 - Ref as props</h1>
      <ParentComponent />
      <h1>3 - use to load data</h1>
      <PostItems /> 
      <h1>4 - use to apply contexts</h1>
      <ThemeProvider>
        <SwitchTheme/>
      </ThemeProvider>
    </>
  )
}

export default App
