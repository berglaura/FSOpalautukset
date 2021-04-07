import React from 'react'

export const Country = ({ theCountry }) => {

    return (
        <div>
            <h2>{theCountry.name}</h2>
            <p>capital {theCountry.capital}</p>
            <p>population {theCountry.population}</p>
            <h3>languages</h3>
            <ul>
                {theCountry.languages.map(lang => <li key={lang.name}>{lang.name}</li>)}
            </ul>
            <img src={theCountry.flag} alt="" />
        </div>
    )
}
