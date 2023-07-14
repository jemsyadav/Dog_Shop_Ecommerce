import React from 'react'
import buy1 from '../Images/Byu1.png'
import buy2 from '../Images/Buy2.png'
import buy3 from '../Images/Buy3.png'
import buy4 from '../Images/Buy4.png'
import buy5 from '../Images/Buy5.png'
const Why_Buy_from_Us = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h4 style={{paddingTop:"2rem"}}>5 Reasons To Be Our Customer:</h4>
                <div className="row">
                    <div className="col-lg-2" style={{textAlign:"center"}}>
                      <img src={buy1} alt="" />
                    </div>
                    <div className="col-lg-9">
                 <p>Exceptional Support Our friendly support staff are available all the time to help customers with any questions or concerns. We wantour products to deliver the most joy and value with zero hassle. That’s why we insist on being available to assist when the need arises.</p>
                    </div>
                    <div className="col-lg-2" style={{textAlign:"center"}}>
                      <img src={buy2} alt="" />
                    </div>
                    <div className="col-lg-9">
                     <p>30-Day Money Back Guarantee We are so confident that you will love our products that we offer a 30-day money backguarantee. If elgible product doesn't meet your needs, just ask for your money back.</p>
                    </div>
                    <div className="col-lg-2" style={{textAlign:"center"}}>
                      <img src={buy3} alt="" />
                    </div>
                    <div className="col-lg-9">
                     <p>Quality and Affordable We believe in combining both quality and affordability in our products. There’s no reason to payexorbitant prices when our products do more for less. You won't find better price to quality ratio.</p>
                    </div>
                    <div className="col-lg-2" style={{textAlign:"center"}}>
                      <img src={buy4} alt="" />
                    
                    </div>
                    <div className="col-lg-9"> Unbeatable Price - Years of expiriences in pet clothing and accessories industry gives us uniqe position to work directly withfactories to ensure quality control and the best price possible.
                    </div>
                    <div className="col-lg-2" style={{textAlign:"center"}}>
                      <img src={buy5} alt="" />
                    </div>
                    <div className="col-lg-9">
                        <p>Secure, Easy Ordering - Orders can be placed online using either a credit/debit card or PayPal. All transactions are SSL-securedand guarantee your privacy.</p>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Why_Buy_from_Us
