import React, { useState, useEffect } from 'react';
import { Filter } from './Filter';
import { Notification } from './Notification';
import { PersonForm } from './PersonForm';
import { Persons } from './Persons';
import contactService from './services/contacts';

const App = () => {
  const [persons, setPersons] = useState([]);
  
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [condition, setCondition] = useState('');
  const [message, setMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    contactService
      .getAll()
      .then(initialContacts => {
        setPersons(initialContacts);
      })
  }, []);

  const addContact = (event) => {
    event.preventDefault();
    const person = {name: newName, number: newNumber}

    const names = persons.map((person) => person.name);
    if (names.includes(newName)) {
      alert(`${newName} is already added to phonebook, replace the old number with a new one?`);
      const contact = persons.find(person => person.name === newName)
      const changedContact = {...person, number: newNumber}
      const id = contact.id
      console.log(id)
      contactService
        .update(id, changedContact)
        .then(returnedContact => {
          setPersons(persons.map(person => person.id !== id ? person : returnedContact))
          setNewName('');
          setNewNumber('');
          setMessage(`${person.name}'s number changed`)
          setTimeout(() => {
            setMessage(null)
          }, 4000)
        })
        
        .catch(error => {
          setErrorMessage(
            `Information of ${person.name} has already been removed from server`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 4000)
        })

    } else {
      contactService
        .create(person)
        .then(returnedContacts => {
          setPersons(persons.concat(returnedContacts));
          setNewName('');
          setNewNumber('');
          setMessage(`${person.name} added`)
          setTimeout(() => {
            setMessage(null)
          }, 4000)
        })
        .catch(error => {
          setErrorMessage('Name must have at least 3 characters and number 8 characters')
          setTimeout(() => {
            setErrorMessage(null)
          }, 4000)
        })
        
      
    }
  }

  const removeContact = (id, event) => {
    const objects = persons.filter(person => person.id !== id)
    const object = persons.filter(person => person.id === id)
    const nameArr = object.map(person => person.name)

      if (window.confirm(`Delete ${nameArr[0]}?`)) {
        console.log(id)
        contactService
          .remove(id)
      }
      setPersons(objects)
      setMessage(`${nameArr[0]} removed`)
          setTimeout(() => {
            setMessage(null)
          }, 4000)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleCondition = (event) => {
    setCondition(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification
        message={message}
        errorMessage={errorMessage}/>
      <Filter condition={condition} handleCondition={handleCondition}/>
      <h2>add a new</h2>
      <PersonForm addContact={addContact}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        condition ={condition}
        removeContact={removeContact}/>
    </div>
  );
}

export default App;
