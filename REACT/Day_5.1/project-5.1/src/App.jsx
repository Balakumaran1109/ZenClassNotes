import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './Parent'
import Parent1 from './Parent1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Parent/> */}
      <Parent1/>
    </>
  )
}

export default App
