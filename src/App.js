import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar.js';
import Home from './Home.js';
import News from './News.js';
import PeoplePage from './PeoplePage.js';
import Vision from './Vision.js';
import Contact from './Contact.js';
import About from './About.js';
import NotFound from './NotFound';


function App() {
  return (
<Router> 
<Navbar />
<Routes>

<Route path='/' exact element={<Home/>} />
<Route path='/people'  element={<PeoplePage/>} />
<Route path='/news'  element={<News/>} />
{/* <Route path='/vision'  element={<Vision/>} /> */}
<Route path='/contact'  element={<Contact/>} />
<Route path='/about'  element={<About/>} />
<Route path='*'  element={<NotFound/>} />



</Routes>
</Router>
  
  
  );
}

export default App;
