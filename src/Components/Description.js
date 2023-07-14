import React from 'react'
import description1 from '../Images/Description_1.png'
import description2 from '../Images/Description_2.png'

const Description = () => {
  return (
    <div>
    <div className="container">
        <div className="row" style={{paddingTop:"2rem"}}>
            <div className="col-lg-4">
                <h6>PREMIUM MATERIALS</h6>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto velit quaerat quod aspernatur ratione facilis dolore ut ducimus deserunt omnis! Eaque temporibus quos neque, quo laudantium illum dolorum tempora! Architecto?</p>
                 <h6>LAYERED DESIGN</h6>
                 <ul>
                    <li>Etiam fermentum parturient</li>
                    <li>Sociosqu leo mus odio ad vestibulum.</li>
                    <li>Adipiscing praesent a ut mi nostra sed</li>
                    <li>Proin a taciti adipiscing tempor turp</li>
                    <li>Sociosqu leo mus odio ad vestibulum.</li>
                    <li>Sociosqu leo mus odio ad vestibulum.</li>
                 </ul>
            </div>
            <div className="col-lg-4">
             <img src={description1} alt="" />
            </div>
            <div className="col-lg-4">
             <img src={description2} alt="" />
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default Description
