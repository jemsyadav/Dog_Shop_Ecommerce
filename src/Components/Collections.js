import React from 'react'
import united1 from '../Images/Untitled-1.png'
import united2 from '../Images/Untitled-7.png'
import united3 from '../Images/Untitled-8.png'
import united4 from '../Images/Untitled-9.png'
import united5 from '../Images/Untitled-10.png'
import united6 from '../Images/Untitled-11.png'
import united7 from '../Images/Untitled-12.png'
import united8 from '../Images/Untitled-13.png'

const ArrayData= [
    {
      id:1,
      image:united1,
      Name:"CAT KITTEN FUNNY TOY",
      price:"$10.00"
    },
    {
      id:2,
      image:united2,
      Name:"HOODED DOG DRESSES COATS",
      price:"$13.00"
    },
    {
      id:3,
      image:united3,
      Name:"HOODED DOG DRESSES COATS",
      price:"$11.00"
    },
    {
      id:4,
      image:united4,
      Name:"BURGUNDY MOUSE",
      price:"$14.00"
    },
    
    {
      id:5,
      image:united5,
      Name:"EMBROIDERY SEQUINS DRESSES",
      price:"$12.00",
      color:"red"
    },
    {
      id:6,
      image:united6,
      Name:"SHAG VEGAN DONUT CUDDLER",
      price:"$19.00",
      color:"blue"
    },
    {
      id:7,
      image:united7,
      Name:"COLORFUL PET TOY",
      price:"$15.00"
    },
    {
      id:8,
      image:united8,
      Name:"THUNDER SHIRT COTTON",
      price:"$20.00"
    },
  
  ]
const Collections = () => {
  return (
    <div>
       <div className="container">
        <div className="row">
           {ArrayData.map((Data)=>{
           
            return(
<div className="Collections_Media_Query col-md-3 col-sm-12" key={Data.id}>
                <img src={Data.image} alt="" />
                  <h6 style={{color:Data.color}}>{Data.Name}</h6>
                  <p>{Data.price}</p>
            </div>
            )
           }) }
           </div>
           </div>
    </div>
  )
}

export default Collections
