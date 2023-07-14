import { useState } from "react";
import ReactStars from 'react-rating-star-with-type'

const Write_Review = () => {
    const [star, setStar] = useState(5);

    const onChange=(nextValue)=>{
        setStar(nextValue)
    }
    
  return (
    <div>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h6>Write A Review</h6>
                <form action="Comment box">
                <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Name'/>

  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Email'/>

  </div>
  <div className="Rating">
 <h6>Review Title</h6>
  <ReactStars 

    onChange={onChange} 
    value={4.2}  
    edit={true}  
    activeColors={[ "red", "orange", "#FFCE00", "#917F","#8568FC",]} 
    />
    </div>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Review Title</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Give your review a title'/>

  </div>
  <div className="comment_box">
  <h6>Body Of Review 1500</h6>
  <textarea style={{width:"100%"}} placeholder="Write your comment here" name="" id="" cols="20" rows="8"></textarea>
  </div> <br />

  <div className="Button_Sumbit" style={{textAlign:"end"}}>
  <button style={{backgroundColor:"#E0B36E" , textAlign:"revert-layer"}} type="button" class="btn ">Submit</button>
  </div>

  
                </form> 
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default Write_Review
