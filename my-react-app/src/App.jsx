import './App.css'
import { useState } from 'react'

import CountrySelection from './components/CountrySelection'

function App() {
  const [countryName, setCountryName] = useState('')

  const handleChange = () => {}

  return (
    <div className="main">
      <CountrySelection name="" onChange={handleChange} />
    </div>
  )
}

export default App
