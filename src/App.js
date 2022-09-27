 
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Route, Routes } from 'react-router-dom';
import Service from './components/Service/Service';
import Review from './components/Review/Review';
import Contact from './components/Contact/Contact';
import Nav from './components/Nav/Nav';
import About from './components/About/About';

function App() {
  return (
    <div className=" ">
      <Nav></Nav>
   <Navbar></Navbar>
   <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/review" element={<Review />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        {/* <Route path="login" element={<Login />}></Route> */}
      
       
        </Routes>

   {/* <Home></Home> */}
   <Footer></Footer> 
    </div>
  );
}

export default App;
