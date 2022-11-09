import React, {useState, useEffect} from 'react'
import {products}  from './products'
import PropTypes from 'prop-types';
import defaultImage from './img.webp'

let url = 'https://course-api.com/react-prop-types-example'

console.log(products);
const Props = () => {

    const [items, setItems] = useState([]) 

    // get data 

    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setItems(data);
      console.log(data);
      
    }
<div className="class"></div>

 useEffect(() => {
   fetchData();
   
 }, []);

  return (
<> 

    {items.map((item) => {
     
     const {id, name, image, price} = item;
     
     const url = image && image.url; 
        return (
            <article key={id} className='product'> 
                
            <img src={url || defaultImage} alt={name || 'Out of stock'}/> 
            <h4>{name || 'Out of stock' }</h4>
           <p> $ {price || 402}</p>
            </article>
        )
    }) }
</>
  )

}

// normal propTypes 
Props.propTypes = { 
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
};   

// default Proptypes

Props.defaultProps ={
     name:'Out of stock',
    price: 402,
    image:'defaultImage',
}

export default Props
