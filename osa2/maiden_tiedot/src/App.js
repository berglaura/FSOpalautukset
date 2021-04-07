import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CountriesToShow } from './CountriesToShow';

function App() {
  const [countries, setCountries] = useState([]);
  const [condition, setCondition] = useState('');

  //const apiUrl = 'api.openweathermap.org/data/2.5/weather?q='
  //const api_key = process.env.REACT_APP_API_KEY

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleCondition = (event) => {
    setCondition(event.target.value);
  }

  const changeCondition = (name, e) => {
    setCondition(name)
  }

  return (
    <div>
      <div>
        find countries <input 
          value={condition}
          onChange={handleCondition}/>
      </div>
      <CountriesToShow
        countries={countries}
        condition={condition}
        changeCondition={changeCondition}/>
    </div>
  );
}

export default App;
