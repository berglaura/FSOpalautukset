import React from 'react'
import './App.css'
import { Country } from './Country';


export const CountriesToShow = ({ countries, condition, changeCondition }) => {
    let theCountries = countries.filter(country => 
        country.name.toUpperCase().includes(condition.toUpperCase()));

    if (theCountries.length === 1) {
        return <Country
            theCountry={theCountries[0]}/>
    } else if (theCountries.length <= 10) {
        
            return (
                theCountries.map((country) => (
                    <div key={country.name}>
                        <p>
                            {country.name}
                            <button 
                                value={country.name}
                                onClick={(e) => changeCondition(country.name, e)}>show</button>
                        </p>
                    </div>
                ))
            )
        
    } else {
        return <p>Too many matches, specify another filter</p>
    }
    
}
