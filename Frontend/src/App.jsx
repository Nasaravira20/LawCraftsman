import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Chat from './Chat'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Chat /> */}
      <Home />
    </>
  )
}

export default App
