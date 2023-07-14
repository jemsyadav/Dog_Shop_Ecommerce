import React from 'react'
import '../Styles/Footer.css'
import shopping1 from '../Images/Shopping1.png'
import shopping2 from '../Images/Shopping6.png'
import shopping3 from '../Images/Shopping3.png'
import Shop4 from '../Images/shopping4.png'
import Header1_image_1 from '../Images/Group 13.png'
import image15 from '../Images/Group 15.png'
import image16 from '../Images/Group 16.png'
import image17 from '../Images/Group 17.png'
import image18 from '../Images/Group 18.png'



const Footer = () => {
  return (
    <div>

<div className="Footer_Main_Box">
   <div className="container" style={{color:"white"}}>
    <div className="row">
        <div className="col-md-3 col-sm-12">
        <div className="Footer_Paragraph">
            <h6>GET IN TOUCH</h6>
            <p>184 Main Rd E, St Albans <br />VIC 3021, Australia</p>
            <p>contact@company.com</p>
            <p>+001 2233 456</p>
            </div>
            <div className="MainDive_Header_1_1">
        <div className="icon" style={{gap:"1rem" , display:"flex"}}>
        <a className='Header_1_logo' href=""> <img src={Header1_image_1} alt="" /></a>
        <a className='Header_1_logo' href=""><img src={image15} alt="" /></a>
        <a className='Header_1_logo' href=""><img src={image16} alt="" /></a>
        <a className='Header_1_logo' href=""><img src={image17} alt="" /></a>
        <a className='Header_1_logo' href=""><img src={image18} alt="" /></a>

        </div>
        </div>
        </div>
        <div className="col-md-2 col-sm-12">
        <div className="Footer_Paragraph">
        <h5>CATEGORIES</h5>
        <p>pets</p>
        <p>Pets Toy</p>
        <p>All Collection</p>
        <p>pets Cloths</p>
        <p>All Accesories</p>
        </div>
        </div>
        <div className="col-md-2 col-sm-12">
        <div className="Footer_Paragraph">
        <h5>INFORMATIONS</h5>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Term $ Conditions</p>
        <p>Reeturns Policy</p>
        <p>All Accesories</p>
        </div>
        </div>
        <div className="col-md-2 col-sm-12">
        <div className="Footer_Paragraph">
        <h5>USEFUL LINKS</h5>
        <p>Store Locations</p>
        <p>Ltest News</p>
        <p>Size Guide</p>
        <p>Portolio</p>
        <p>FAQs</p>
        </div>
        </div>
        <div className="col-md-3 col-sm-12">
        <div className="Footer_Paragraph">
            <h6>NEWSLETTER SIGNUP</h6>
          <p>Subscribe to our newsletter and get <br />10% off your first purchase</p>
          <div className='email'>
          <input type="email" placeholder='Your Email Address'  id="email" name="email"/>
          {/* <button className='Subscribe_Button'>Subscribe</button> */}
          
          </div>
          <div className="Shopping_Menu_Box" style={{display:"flex",gap:"1rem",paddingTop:"2rem"}}>
            <div className="First_Shopping">
              <img src={shopping1} alt="" />
            </div>
            <div className="second_shopping">
            <img src={shopping2} alt="" />

            </div>
            <div className="Third_Shopping">
            <img src={shopping3} alt="" />

            </div>
            <div className="Fourth_Shopping">
           <img src={Shop4} alt="" />
            </div>
          </div>
            </div>
        </div>
    </div>
   </div>
   <hr class="new4"></hr>

   <div className="container">
    <div className="row">
        <div className="col-md-5 col-sm-12">
            <p className='text-white'>Copyright © 2022 Logik all rights reserved. Powered by The4</p>
        </div>
        <div className="col-md-3 col-sm-12">

        </div>
        <div className="col-md-4 col-sm-12">
        <div className="fotter_Shop_item">
            <div className="row">
            
                <div className="col-md-3 col-sm-12">
                    <h6>Shop</h6>
                </div>
                <div className="col-md-3 col-sm-12">
                    <h6>About Us </h6>
                </div>
                <div className="col-md-3 col-sm-12">
                    <h6>Blogs</h6>
                </div>
                <div className="col-md-3 col-sm-12">
                    <h6>Contacts Us</h6>
                </div>
                </div>
            </div>
        </div>
    </div>
   </div>


      </div>
      
    </div>
  )
}

export default Footer
