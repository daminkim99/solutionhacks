import './App.css';
import { Login } from './views/signup'; // adjust the path if needed

function App() {
  return (
    <Login />
  );
}

export default App;

/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SignUp } from './views/signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <SignUp/>
  )
}

export default App */


/*import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Add from './views/add'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <Add />
      </div>

    </>
  )
}

export default App
