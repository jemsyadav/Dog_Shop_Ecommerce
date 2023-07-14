import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Products from './Pages/Products';



function App() {
  return (
   <div>

  

  <BrowserRouter>
    <Routes>
    
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/products' element={<Products/>}/>

     
      
   
    

    </Routes>
  </BrowserRouter>


    </div>
  );
}

export default App;