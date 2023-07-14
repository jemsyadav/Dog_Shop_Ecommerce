import React from 'react'
// import '../Styles/Header.css'
import DogLogo from '../Images/Dog_logo.avif'

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg "  style={{padding:"0rem"}}>
  <div class="container-fluid" style={{backgroundColor:"#E0B36E"}}>
   <img src={DogLogo} alt="" width={'4%'} />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/shop">Shop</a>
        </li>


      
      
        <li class="nav-item">
          <a class="nav-link " href='/products'>Product</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href='#'>LookBook</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href='#'>Blogs</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
