import React from 'react'

const Test = () => {
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


  return (
    <div>
      {data.map((item) =>{
   
   return (
<div> 
<h>{item}</h>

</div>
   )

      })}
    </div>
  )

}

export default Test
