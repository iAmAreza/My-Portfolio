import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import SocialLinks from './components/SocialLinks/SocialLinks'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <About/>
      <Portfolio/>
      <SocialLinks />
    </>
  )
}

export default App
