import React, {useState} from 'react'
import { data } from './data';


// create a context
// const personContext = React.createContext();

// two components, Provider, Consumer


const Contact  = () => {
  const [people, setPeople] = useState(data)

  const removePerson = (id)  => { 
    setPeople( (people) => { 
  return people.filter(person => person.id !== id);

  })

}

  // let newPeople = people.filter(person => person.id !== id);
  // setPeople(newPeople);

  return (
    <div>
         <h1>Props drilling</h1>
         <List people={people} removePerson={removePerson}/> 
    </div>
  )
}


const List = ({people, removePerson}) => {
  console.log(people);
  return (
    <div>
         {people.map((person) => { 
          
          return (
            <SinglePerson key={person.id} {...person} removePerson={removePerson}/> 
          )
          
          })}  
    </div>
  )
}


const SinglePerson  = ({id, name, removePerson}) => {

  return (
    <div className="item">
         <h4>{name}</h4>
         <button onClick={() =>removePerson(id)}> Remove</button>
       
    </div>
  )
}

export default Contact;
