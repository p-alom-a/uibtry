import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AboutSection from './AboutSection'
import AboutSection2 from './AboutSection2'
import Formations from './Formations'
import ContactSection from './ContactSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <AboutSection /> */}
      <AboutSection2 />
      <Formations/>
      <ContactSection />

        
    </>
  )
}

export default App
