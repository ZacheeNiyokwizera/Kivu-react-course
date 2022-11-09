import React, {useState, useContext} from 'react'
import { data } from './data';


// create a context
const personContext = React.createContext();

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
    <personContext.Provider value={{people, removePerson}}>
         <h1>Props drilling</h1>
         <List /> 
    </personContext.Provider>
  )
}


const List = () => {

//   let mainData = useContext(personContext);

  let {people} = useContext(personContext); 


  console.log(mainData);
  return (
    <div>
         {people.map((person) => { 
          
          return (
            <SinglePerson key={person.id} {...person}  /> 
          )
          
          })}  
    </div>
  )
}


const SinglePerson  = ({id, name}) => {
  let {removePerson} = useContext(personContext);

  let editPerson = useContext(personContext); 
  // let {text} = useContext(personContext);

  // console.log(text);

  return (
    <div className="item">
         <h4>{name}</h4>
         <button onClick={() =>removePerson(id)}> Remove</button>
         <button onClick={() =>editPerson(id)}>Edit</button>
       
    </div>
  )
}

export default Contact;