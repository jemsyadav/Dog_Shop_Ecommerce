import React from 'react'
import Header from '../Components/Header'
import '../Styles/Shop.css'
import Footer from '../Components/Footer'
import twoimage from '../Images/Two_Images.png'
import threeimage from '../Images/Threeimage.png'
import fourimage from '../Images/FourImage.png'
import fiveimage from '../Images/FiveImage.png'
import filter from '../Images/Icon awesome-filter.png'


import imageFilter from '../Images/FilterImages.png'
import img01 from '../Images/01.png'
import img02 from '../Images/02.png'
import img03 from '../Images/03.png'
import img04 from '../Images/04.png'
import img05 from '../Images/05.png'
import img06 from '../Images/06.png'
import img07 from '../Images/07.png'
import img08 from '../Images/08.png'
import img09 from '../Images/09.png'
import img10 from '../Images/10.png'
import img11 from '../Images/11.png'
import TwoImage from '../Components/TwoImage'
import ThreeImages from '../Components/ThreeImages'
import FourImage from '../Components/FourImage'
import FiveImage from '../Components/FiveImage'




const Shop = () => {
  return (
    <div>
 <Header/>
 <div className="NavBar_Shop">
  <h1 style={{color:"white",textAlign:"center",paddingBottom:"50px"}}>Pets Toys</h1>
 </div>

 <div className="container">
     <div className='custom_tab'>
   <div style={{display:"flex",justifyContent:"space-between"}}>
  

    
<div>

 <div className='custom_tab'>
   <div style={{display:"flex",justifyContent:"space-between", padding:"2rem"}}>
   <div>
   <img src={filter} alt="" />
      </div>
        {/* <button type="button" class="Button_Colors btn btn-success">Start Shopping</button>
        <button type="button" class="Button_Colors btn btn-success">Start Shopping</button>
        <button type="button" class="Button_Colors btn btn-success">Start Shopping</button> */}

        <ul class=" NavHeading nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true"> <img  src={twoimage} alt=""  style={{textAlign:"center"}}/> 
      </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false"><img  src={threeimage} alt="" /></button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false"><img  src={fourimage} alt="" /></button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab1" data-bs-toggle="tab" data-bs-target="#contact-tab-pane1" type="button" role="tab" aria-controls="contact-tab-pane1" aria-selected="false"><img  src={fiveimage} alt="" /></button>
  </li>
 
</ul>
<div>
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Featured
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Dog Dress</a></li>
    <li><a class="dropdown-item" href="#">Dog Food</a></li>
    <li><a class="dropdown-item" href="#"> Dog CheckUp</a></li>
  </ul>
</div>
</div>
   </div>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
  <TwoImage/>
</div>
  <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0"> <ThreeImages/></div>
  <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0"> <FourImage/></div>
  <div class="tab-pane fade" id="contact-tab-pane1" role="tabpanel" aria-labelledby="contact-tab" tabindex="0"> <FiveImage/></div>

  
</div>
        </div>
</div>
   </div>

 
</div>
        </div>
        <Footer/>
     </div>

 
      
   
  )
}

export default Shop
