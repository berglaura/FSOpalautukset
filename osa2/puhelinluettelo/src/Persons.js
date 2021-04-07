import React from 'react'

export const Persons = ({ persons, condition, removeContact }) => {
  const condPersons = persons.filter(person => person.name.toUpperCase().includes(condition.toUpperCase()))

  return (
    <div>
      {condPersons.map(person => (
        <div key={person.name}>
          <p>
            {person.name} {person.number}
          </p>
          <button
            id={person.id}
            onClick={(e) => removeContact(person.id, e)}>delete</button>
        </div>
      ))}
    </div>
  )
}
