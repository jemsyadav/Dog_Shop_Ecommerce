import React, { useState  } from "react";
import Header from "../Components/Header";
import Description from "../Components/Description";
import slider1 from "../Images/03.png";
import slider2 from "../Images/05.png";
import slider3 from "../Images/06.png";
import "../Styles/Product.css";
import like from "../Images/LikeButton.png";
import afterlike from "../Images/afterlike.png";
import { Link } from "react-router-dom";
import social1 from "../Images/Social_Media_1.png"
import social2 from "../Images/Social_Media_2.png"
import social3 from "../Images/Social_Media_3.png"
import social4 from "../Images/Social_Media_4.png"
import social5 from "../Images/Social_Media_5.png"
import Footer from "../Components/Footer";
import Why_Buy_from_Us from "../Components/Why_Buy_from_Us";
import Delivery_Return from "../Components/Delivery_Return";
import Custom_Tab from "../Components/Custom_Tab";
import Review from "../Components/Review";
import united1 from '../Images/Untitled-1.png'
import united2 from '../Images/Untitled-13.png'
import united3 from '../Images/Untitled-8.png'
import united4 from '../Images/Untitled-10.png' 
import united5 from '../Images/Untitled-11.png'
import united6 from '../Images/Untitled-12.png'
import united7 from '../Images/01.png'
import united8 from '../Images/02.png'
const Products = () => {
  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState(1);

  function increment() {
    //setCount(prevCount => prevCount+=1);
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }
  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }
  return (
    <div>
      <Header />
      <div className="NavBar_Shop">
  <h1 style={{color:"white",textAlign:"center",paddingBottom:"50px"}}>Pets Toys</h1>
 </div>
      <div className="container" style={{ paddingTop: "3rem" }}>
        <div className="row">
          <div className="col-lg-5">
            <div
              id="carouselExampleInterval"
              class="carousel slide"
              data-bs-ride="carousel"
              style={{ border: "2px solid black" }}
            >
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                  <img
                    src={slider1}
                    class="d-block w-100"
                    alt="..."
                    width={"50%"}
                  />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src={slider2} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={slider3} class="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                  style={{ backgroundColor: "black" }}
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                  style={{ backgroundColor: "black" }}
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-lg-7">
            <p>Dog's Jacket</p>
            <p>$13.00</p>
            <hr />
            <div class="stars">
              <form action="">
                <input
                  class="star star-5"
                  id="star-5"
                  type="radio"
                  name="star"
                />

                <label class="star star-5" for="star-5"></label>

                <input
                  class="star star-4"
                  id="star-4"
                  type="radio"
                  name="star"
                />

                <label class="star star-4" for="star-4"></label>

                <input
                  class="star star-3"
                  id="star-3"
                  type="radio"
                  name="star"
                />

                <label class="star star-3" for="star-3"></label>

                <input
                  class="star star-2"
                  id="star-2"
                  type="radio"
                  name="star"
                />

                <label class="star star-2" for="star-2"></label>

                <input
                  class="star star-1"
                  id="star-1"
                  type="radio"
                  name="star"
                />

                <label class="star star-1" for="star-1"></label>
              </form>
            </div>{" "}
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              fermentum mattis lorem. Nam sagittis volutpat finibus. Aliquam
              magna felis, molestie ut gravida vitae, euismod sit amet lorem.
              Vestibulum vitae ultricies sapien. Aliquam tincidunt sapien in
              faucibus molestie. Nullam vel nisi et turpis egestas tincidunt sit
              amet ac diam. Aenean rhoncus vulputate nisl, at bibendum eros.
              Maecenas lectus sapien, dictum a erat eu, malesuada tincidunt
              lorem. Ut dignissim malesuada ipsum sit amet ornare. Cras in nunc
              quis lectus iaculis placerat. Praesent facilisis nibh a nibh
              venenatis ultrices.
            </p>
            <div className="row">
              <div className="col-md-5">
                <div className="App" style={{border:"2px solid black",borderRadius:"11px",width:"18rem"}}>
               
                  <button style={{width:"8rem",border:"none",backgroundColor:"white"}} onClick={increment}><h3>+</h3></button>{count}
                  <button style={{width:"8rem",border:"none",backgroundColor:"white"}} onClick={decrement}><h3>_</h3></button> 
                </div>
              </div>
              
              <div className="col-md-5">
                <a href="#" class="button_Add_to_Card">
                  Add To Card
                </a>
              </div>
              <div className="col-md-2">
                {/* <Link onClick={() => setToggle(!toggle)}>
                  <img src={like} alt="" />
                </Link> */}
                {toggle ? (
                  <Link onClick={() => setToggle(!toggle)}>
                    <img src={afterlike} alt="" />
                  </Link>
                ):<Link onClick={() => setToggle(!toggle)}>
                    <img src={like} alt="" />
                  </Link>}
              </div>
              <br /> <br /> <br />
              <a
                href="#"
                class="button_Add_to_Card"
                style={{ backgroundColor: "black" }}
              >
           BUY IT NOW
              </a>
            </div>
           <div className="Buy_it_now"> <br />
          <h3>Ask a Question</h3> <br />
       <h6>SKU: Dog's Jacket</h6>
       <h6>Categories: Pet's Clothes, Pets</h6>
       <h6>Categories</h6>

       <div className="Social_media_main_box" style={{display:"flex",gap:"14px"}}>
        <div className="social1">
       <a href="">   <img src={social1} alt="" /></a>
        </div>
        <div className="social1">
         <a href=""> <img src={social2} alt="" /></a>
        </div>
        <div className="social1">
        <a href="">  <img src={social3} alt="" /></a>
        </div>
        <div className="social1">
         <a href=""><img src={social4} alt="" /></a>
        </div>
        <div className="social1">
          <a href=""><img src={social5} alt="" /></a>
        </div>
       </div>
           </div>
           
          </div>
          <div className="All_Button" style={{paddingTop:"3rem"}}>
          {/* <div className="row">
            <div className="col-lg-2">
            <button  style={{borderColor:" #E0B36E" , backgroundColor:"white", color:"black" }} type="button" class="btn btn-primary">Description</button>
            </div>
            <div className="col-lg-2">
            <button style={{borderColor:" #E0B36E" , backgroundColor:"white", color:"black"}}  type="button" class="btn btn-primary">Why Buy From Us</button>
            </div>
            <div className="col-lg-2">
            <button style={{borderColor:" #E0B36E" , backgroundColor:"white", color:"black"}}  type="button" class="btn btn-primary">Delivery & Return</button>
            </div>
            <div className="col-lg-2">
            <button style={{borderColor:" #E0B36E" , backgroundColor:"white", color:"black"}}  type="button" class="btn btn-primary">Custom Tab</button>
            </div>
            <div className="col-lg-2">
            <button style={{borderColor:" #E0B36E" , backgroundColor:"white", color:"black"}}  type="button" class="btn btn-primary">Reviews</button>
            </div>
           </div>
           <Description/> */}

           <div className="row">
           <ul class="nav nav-tabs" style={{backgroundColor:"#F1F1EE" , paddingBottom:"2rem",display:"flex",justifyContent:"center",gap:"2rem", paddingTop:"2rem"}} id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button  class="nav-link active" style={{border:"1px solid #E0B36E",color:"#E0B36E",borderRadius:"1rem"}} id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Description</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" style={{border:"1px solid #E0B36E",color:"#E0B36E",borderRadius:"1rem"}} id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Why Buy From Us</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" style={{border:"1px solid #E0B36E",color:"#E0B36E",borderRadius:"1rem"}} id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Delivery & Return</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" style={{border:"1px solid #E0B36E",color:"#E0B36E",borderRadius:"1rem"}} id="custom-tab" data-bs-toggle="tab" data-bs-target="#custom" type="button" role="tab" aria-controls="custom" aria-selected="false">Custom Tab</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" style={{border:"1px solid #E0B36E",color:"#E0B36E",borderRadius:"1rem"}} id="review-tab" data-bs-toggle="tab" data-bs-target="#review" type="button" role="tab" aria-controls="review" aria-selected="false"> Reviews</button>
  </li>
</ul>
<div class="tab-content" style={{backgroundColor:"#F1F1EE",marginBottom:"2rem"}} id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="description-tab"><Description/></div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="whybyufromus-tab"><Why_Buy_from_Us/></div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="delivery-tab"><Delivery_Return/></div>
  <div class="tab-pane fade" id="custom" role="tabpanel" aria-labelledby="custom-tab"><Custom_Tab/></div>
  <div class="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab"><Review/></div>

</div>
           </div>

           
         
           </div>
        </div>
        <div className="row">
        <h4 style={{textAlign:"center",paddingBottom:"1rem"}}>You May Also Like</h4>
          <div className="col-lg-3">
            <img src={united1} alt="" />
          </div>
          <div className="col-lg-3">
            <img src={united2} alt="" />
          </div>
          <div className="col-lg-3">
            <img src={united3} alt="" />
          </div>
          <div className="col-lg-3">
            <img src={united4} alt="" />
          </div>
        </div>
        <div className="row" style={{paddingBottom:"2rem"}}>
        <h4 style={{textAlign:"center",paddingBottom:"1rem",paddingTop:"2rem"}}>Recently View Product</h4>
          <div className="col-lg-3">
            <img src={united5} alt="" />
          </div>
          <div className="col-lg-3">
            <img src={united6} alt="" />
          </div>
          <div className="col-lg-3">
            <img src={united7} alt="" />
          </div>
          <div className="col-lg-3">
            <img src={united8} alt="" />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Products;
