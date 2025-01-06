import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import SocialLinks from './components/SocialLinks/SocialLinks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />

      <SocialLinks />
    </>
  )
}

export default App
