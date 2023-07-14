import React from 'react'
import Header from '../Components/Header'
import Collections from '../Components/Collections'
import '../Styles/Home.css'
import Footer from '../Components/Footer'
import image1 from '../Images/Group 1.png'
// import image2 from '../Images/Group 2.png'
import image3 from '../Images/Group 3.png'
import image4 from '../Images/Group 4.png'
import image5 from '../Images/Group 5.png'
import image6 from '../Images/Group 6.png'
import image7 from '../Images/group 10.png'
import image8 from '../Images/grop 11.png'
import background2 from '../Images/Background-2.png'
import image12 from '../Images/Group 12.png'
import dog1 from '../Images/Dog1.png'
import dog2 from '../Images/Dog2.png'
import dog3 from '../Images/Dog3.png'


import image19 from '../Images/Group 19.png'
import image20 from '../Images/Group 20.png'
import image21 from '../Images/group 21.png'
import united1 from '../Images/Untitled-1.png'
import united2 from '../Images/Untitled-7.png'
import united3 from '../Images/Untitled-8.png'
import united4 from '../Images/Untitled-9.png'
import SocialImage1 from '../Images/Social_1.png'
import SocialImage2 from '../Images/Social_2.png'
import SocialImage3 from '../Images/Social_3.png'
import SocialImage4 from '../Images/Social_4.png'
import  group26 from '../Images/Group 26.png'
import  group27 from '../Images/Group 27.png'
// import Footer from '../Components/Footer'


const Home = () => {
  return (
    <div>
  
    <Header/>
      <div className="Background_Section_1" style={{paddingTop:  "65px"}}>
      <div className="background_Heading" style={{marginLeft:"9rem",color:"white",marginBottom:"2rem"}}>
        <p style={{scrollPaddingBottom:"3rem"}}>Upto 20% Flat For New Users</p>
        <h4 className='Background_Heading_1' style={{fontSize:"50px",fontWeight:"900"}}>Purchase Pet's <br /> Food & Accessories</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and <br />typesetting industry. Lorem Ipsum has been the industry's <br />standard dummy text ever since the 1500s, when an <br />unknown printer took a galley of type and scrambled <br /> it to make a type specimen book.</p>
        <button type="button" class="btn btn-success">Start Shopping</button>
      </div>
     

      </div>
      <div className="container">

      <div className="All_Animal_Image">
        <div className=" allAnimal row  text-center">
            <div className="col-md-2 col-sm-12">
              <img src={image1} alt="" />
              
            </div>
            <div className="col-md-2 col-sm-12">
              <img src={image6} alt="" />
            </div>
           
            <div className="col-md-2 col-sm-12">
              <img src={image3} alt="" />
            </div>
            <div className=" col-md-2 col-sm-12">
              <img className='Imageposition' src={image4} alt="" />
            </div>
            <div className="col-md-2 col-sm-12">
              <img src={image5} alt="" />
            </div>
            {/* <div className="col-md-2 col-sm-12">
              <img src={image6} alt="" />
            </div> */}
        </div>
        </div>


        <div className="row">
                <div className="col-md-6 col-sm-12">
                <div className="Main_Div">
                <div className="image-1">
                <img src={image8} alt=""  width={'100%'} />
                </div>
                <div className="image_1_Heading">
                <p>Upto 20% Flat For New Users</p>
                <h5>New Arrivals <br />Item Per Week</h5>
                <button type="button" class="Button_Color btn btn-success" style={{backgroundColor:"#E0B36E"}}>Start Shopping</button>
                </div>
                </div>
                </div>
                
         
                <div className="col-md-6 col-sm-12">
                <div className="Main_Div">
                <div className="image-2">
                <img src={image7} alt="" width={'100%'}/>
                </div>
                <div className="image_1_Heading">
                <p>Free Shipping Available</p>
                <h4>Popular Toys <br /> Accessories -30%</h4>
                <button type="button" class="Button_Color btn btn-success" style={{backgroundColor:"#E0B36E"}}>Start Shopping</button>
                </div>
                </div>
                </div>

            </div>


     <div className="row">
        <div className="col-md-12 col-sm-12">
        <div className="Main_Div">
                <div className="image-2" >
                <img className='Background_2' src={background2} alt="" width={'100%'} style={{paddingTop:"2rem"}} />
                </div>
                <div className="image_1_Heading">
                <p>30% Membership Discount</p>
              <h4>Find The Best Animals Supplies</h4>
                <button type="button" class="Button_Color btn btn-success"style={{backgroundColor:"#E0B36E"}}>Start Shopping</button>
                </div>
                </div>
        </div>
     </div>
     <div className="row">
        <div className="col-md-12 col-sm-12">
            <h4 className=' Featerued_Heading text-center 'style={{paddingTop:"2rem"}} >Featured Collections</h4>
            {/* <div className="Line_image  text-center"style={{paddingBottom:"2rem"}}>
            <img className='Featerued_Heading_image' src={image12} alt=""  />
            </div> */}
        </div>
        <div className='custom_tab'>
       
        <ul class=" NavHeading nav nav-tabs" id="myTab" role="tablist"  style={{justifyContent:'center' ,paddingBottom:"2rem" ,gap:"2rem"}}>
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true" style={{backgroundColor:"#E0B36E" ,color:"white",borderRadius:"1rem"}}>Healthy Food</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false" style={{backgroundColor:"#E0B36E" ,color:"white",borderRadius:"1rem"}}>Pets Accessories</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false" style={{backgroundColor:"#E0B36E" ,color:"white",borderRadius:"1rem"}}>Sale Product</button>
  </li>
 
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
  <Collections/>
</div>
  <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0"> <Collections/> </div>
  <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0" > <Collections/> </div>
  
</div>
        </div>
<div className="div">
        <div className="row">
            <div className="col-md-6 col-sm-12">
            <div className="Main_Div">
            <div className="Image_19">
                <img src={image19} alt="" width={'100%'} />
                </div>
                <div className="image_1_Heading">
                  <h3>Canned Food</h3>
                  <p>Country to popular belief, Lorem Ipsum <br />is not simply random...</p>
                  <button type="button" class="Button_Color btn btn-success">Start Shopping</button>
                </div>
                </div>

            </div>
            <div className="col-md-6 col-sm-12">
            <div className="Main_Div">
            <div className="Image_19">
                <img src={image20} alt="" width={'100%'} />
                </div>
                <div className="image_1_Heading">
                  <h3>Canned Food</h3>
                  <p>Country to popular belief, Lorem Ipsum <br />is not simply random...</p>
                  <button type="button" class="Button_Color btn btn-success">Start Shopping</button>
                </div>
                </div>

            </div>
          
        </div>
        <div className="Social_Image" style={{width:"100%", paddingTop:"2rem"}}>
        <div className="row">
       
            <div className="col-md-3">
            <img src={SocialImage1} alt="" />
            </div>
            <div className="col-md-3">
            <img src={SocialImage2} alt="" />
            </div>
            <div className="col-md-3">
            <img src={SocialImage3} alt="" />
            </div>
            <div className="col-md-3">
            <img src={SocialImage4} alt="" />
            </div>
            </div>
            <div className="row">
            <div className="col-md-12 col-sm-12">
            <h4 className=' Featerued_Heading text-center 'style={{paddingTop:"2rem"}} >Latest Blogs Posts</h4>
            {/* <div className="Line_image  text-center"style={{paddingBottom:"2rem"}}>
            <img className='Featerued_Heading_image' src={image12} alt=""  />
            </div> */}
            </div>
            </div> 
            <div className="Main_Box" style={{paddingBottom:"2rem"}}>
            <div className="row">
            
                <div className="col-md-4 " style={{textAlign:"center"}}>
                <div className="MainBox" style={{backgroundColor:"black" ,borderRadius:"1rem", color:"white"}}>
                  <img src={dog1} alt="" />
                  <h6 >The Pi Offers A Futuristic Slice Of <br />Proximity Charging For New iPhones</h6> <br />
                <p> By admin on September 17, 2020</p>
                  <p>Imagine a turntable with a <br />portable and detachable phonograp</p> <br />
                </div>
                </div>
                
                <div className="col-md-4" style={{textAlign:"center"}}>
                <div className="MainBox" style={{backgroundColor:"black" ,borderRadius:"1rem", color:"white" }}>
                  <img src={dog2} alt="" />
                  <h6>The Pi Offers A Futuristic Slice Of <br />Proximity Charging For New iPhones</h6> <br />
                 <p> By admin on September 17, 2020</p>
                  <p>Imagine a turntable with a <br />portable and detachable phonograp</p> <br />
                </div>
                </div>
                <div className="col-md-4" style={{textAlign:"center"}}>
                <div className="MainBox" style={{backgroundColor:"black" ,borderRadius:"1rem", color:"white"}}>
                  <img src={dog3} alt="" />
                  <h6>The Pi Offers A Futuristic Slice Of <br />Proximity Charging For New iPhones</h6> <br />
                  <p> By admin on September 17, 2020</p>
                  <p>Imagine a turntable with a <br />portable and detachable phonograp</p> <br />
                </div>
</div>
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

export default Home
