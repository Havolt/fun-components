import { useState } from 'react'

import './CountrySelection.css'

import { COUNTRIES } from '../data/countries'

function CountrySelection({ name, initialValue, onChange }) {
  const [userInput, setUserInput] = useState('')
  const [hasSelected, setHasSelected] = useState(false)

  const handleInput = (e) => {
    setHasSelected(false)
    setUserInput(e.target.value)
  }

  const handleChange = (countryName) => {
    // Use event keydown and check key is empty
    console.log(countryName)
    setUserInput(countryName)
    onChange(countryName)
    setHasSelected(true)
  }

  // Get filteredCountries list
  const filteredCountries = () => {
    return COUNTRIES.filter((country) => {
      return country.name.toUpperCase().startsWith(userInput.toUpperCase())
    })
  }

  const showList = !hasSelected && userInput.length > 0

  return (
    <div className="country-selection">
      <input type="text" onInput={handleInput} list="countrynames" value={userInput} />
      {showList && (
        <div className="country-list">
          {/* Map countries */}
          {filteredCountries()
            .map((country) => (
              <div key={country.code}>
                <button onClick={() => handleChange(country.name)}>{country.name}</button>
              </div>
            ))
            .slice(0, 10)}
        </div>
      )}
    </div>
  )
}

export default CountrySelection
