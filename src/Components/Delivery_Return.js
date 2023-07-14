import React from 'react'
import deliver1 from '../Images/Deliver1.png'
import delivery2 from '../Images/Delivery2.png'
import delivery3 from '../Images/Delivery3.png'
import delivery4 from '../Images/Delivery4.png'

const Delivery_Return = () => {
  return (
    <div>
    <div className="container">
        <div className="row">
            <div className="col-md-5">
            <div className="row">
                <div className="col-lg-2">
                    <img src={deliver1} alt="" />
                </div>
                <div className="col-lg-9">
                <h4>Delivery</h4>
                <p>Our free shipping takes between 7 & 14 days
from the day of dispatch</p>

                </div>
            </div>
            

            </div>
            <div className="col-md-5">
            <div className="row">
                <div className="col-lg-2">
                    <img src={delivery2} alt="" />
                </div>
                <div className="col-lg-9">
                <h4>Delivery</h4>
                <p>Our free shipping takes between 7 & 14 days
from the day of dispatch</p>

                </div>
            </div>
            

            </div>
        </div>
        <div className="row">
            <div className="col-md-5">
            <div className="row">
                <div className="col-lg-2">
                    <img src={delivery3} alt="" />
                </div>
                <div className="col-lg-9">
                <h4>Delivery</h4>
                <p>Our free shipping takes between 7 & 14 days
from the day of dispatch</p>

                </div>
            </div>
            

            </div>
            <div className="col-md-5">
            <div className="row">
                <div className="col-lg-2">
                    <img src={delivery4} alt="" />
                </div>
                <div className="col-lg-9">
                <h4>Delivery</h4>
                <p>Our free shipping takes between 7 & 14 days
from the day of dispatch</p>

                </div>
            </div>
            

            </div>
        </div>
    </div>
      
    </div>
  )
}

export default Delivery_Return
