import React, { useState } from 'react'
import Why_Buy_from_Us from './Why_Buy_from_Us'
import Write_Review from './Write_Review'

const Review = () => {
    const [open,setOpen]= useState(true)

    const handleopen = () =>{
        setOpen(!open)
    }

  return (
    <div>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h4>Customer Review</h4>
               
            </div>
            <div className="row">
                <div className="col-lg-2">
                   <h6>No Review Yet</h6>
                </div>
                <div className="col-lg-10">
                <div className="Learn_more" onClick={handleopen}  style={{cursor:"pointer",color:"#black"}}>
    <i class="fa fa-angle-down" aria-hidden="true" style={{transform:!open&&"rotate(-90deg)",transition:"0.5s all"}}/> <p>Write A Review</p>
   
             { open&& <div style={{color:"black"}}>      <p><Write_Review/></p>
             </div>}  
                </div>
            </div>
        </div>
    </div>
    </div>
      
    </div>
  )
}

export default Review
