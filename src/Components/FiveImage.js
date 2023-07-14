import React from 'react'
import img01 from '../Images/01.png'
import img02 from '../Images/02.png'
import img03 from '../Images/03.png'
import img04 from '../Images/04.png'
import img05 from '../Images/05.png'
import img06 from '../Images/06.png'
import img07 from '../Images/07.png'
import img08 from '../Images/08.png'


const FiveImage = () => {
  return (
    <div>
    <div className="container">
        <div className="row">
        <div style={{display:"flex",justifyContent:"space-between",paddingBottom:'2rem',gap:"2rem"}}>
            <div className="Image_1">
                <img className='Image_Padding' src={img01} alt="" width={'100%'}/>
            </div>
            <div className="Image_1">
                <img className='Image_Padding' src={img02} alt="" width={'100%'}/>
            </div>
            <div className="Image_1">
                <img className='Image_Padding' src={img03} alt="" width={'100%'}/>
            </div>
            <div className="Image_1">
                <img className='Image_Padding' src={img04} alt="" width={'100%'}/>
            </div>
            <div className="Image_1">
                <img className='Image_Padding' src={img05} alt="" width={'100%'}/>
            </div>
            </div>
            <div style={{display:"flex",justifyContent:"space-between" ,paddingBottom:'2rem',gap:"2rem"}}>
            <div className="Image_1">
                <img className='Image_Padding' src={img06} alt="" width={'100%'}/>
            </div>
            <div className="Image_1">
                <img className='Image_Padding' src={img07} alt="" width={'100%'}/>
            </div>
            <div className="Image_1">
                <img className='Image_Padding' src={img08} alt="" width={'100%'}/>
            </div>
            <div className="Image_1">
                <img className='Image_Padding' src={img02} alt="" width={'100%'}/>
            </div>
            <div className="Image_1">
                <img className='Image_Padding' src={img04} alt="" width={'100%'}/>
            </div>
        </div>
           
           
            </div>

        </div>
    </div>
      

  )
}

export default FiveImage
