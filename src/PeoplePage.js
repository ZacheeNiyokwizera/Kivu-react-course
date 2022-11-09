import React, { useState, useReducer } from 'react'
 import { useNavigate } from 'react-router-dom';
import { data } from './data';
import Modal from './Modal';
import { reducer } from './reducer';

// defaultState

const defaultState = {

  people :[], 
isModalOpen : false,
 modalContent : 'Item added',

}

const  PeoplePage = () => {

  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);

  const test = useNavigate();
// const [state, dispatch] = useReducer(reducer, defaultState)


const addPerson = (e) =>{
e.preventDefault();

if(name){
// add a person

const person = {id: new Date().getTime().toString(), name};

dispatch({type:'ADD_PERSON', payload: person});

// empty the input
setName('');

test('/about');

}else{

// display an error message

dispatch({type:'NO_VALUE'})

}
}

const closeModal = () => {
  dispatch({type:'CLOSE_MODAL'});
} 
// closeModal={closeModal}
// console.log(state.showModal)
// closeModal={closeModal}
  return (
 
    <>
 {state.isModalOpen && ( <Modal closeModal={closeModal} modalContent={state.modalContent}/> )}
        <h1>This is the People Component</h1>
<article className='people'>
<form className='form' onSubmit={addPerson}>

    <div className='form-control'>

<label htmlFor='name'> Name: </label>
<input 
type='text' 
id='name'
 value={name}
 onChange={(e) => setName(e.target.value)}
  /> 


    </div>
    <button type='submit'>Add an Employee</button>
</form>
{state.people.map((person) =>{

    const {id, name} = person; 
    return (
        <div className='item' key={id}>

     <h4>{name}</h4>
     <button className='btn' onClick={() => dispatch({type:'DELETE_PERSON', payload: person.id})}>Delete</button>
        </div>
    )
})

}


</article>

    </>
  )
}



export default PeoplePage;