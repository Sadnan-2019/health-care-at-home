import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Route, Routes } from "react-router-dom";
 
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import MessengerCustomerChat from "react-messenger-customer-chat";
import Nursing from "./components/Nursing/Nursing";
 
import Physiotherapy from "./components/Physiotherapy/Physiotherapy";
import Medicalassistant from "./components/Medicalassistant/Medicalassistant";
import Medicalcaregiver from "./components/Medicalcaregiver/Medicalcaregiver";
import Caregiver from "./components/Caregiver/Caregiver";
import Nanycare from "./components/Nanycare/Nanycare";
import Companionship from "./components/Companionship/Companionship";
import Medicalequipment from "./components/Medicalequipment/Medicalequipment";
import { ToastContainer } from "react-toastify";
import Blog from "./components/Blog/Blog";
import FourZeroFour from "./components/FourZeroFour/FourZeroFour";


 
// import New from './components/Nav/New';

function App() {
  return (
    <div className=" ">
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/nursing" element={<Nursing />}></Route>
        <Route path="/physiotherapy" element={<Physiotherapy />}></Route>
        <Route path="/medical-assistant" element={<Medicalassistant />}></Route>
        <Route path="/medical-caregiver" element={<Medicalcaregiver />}></Route>
        <Route path="/caregiver" element={<Caregiver />}></Route>
        <Route path="/nanycare" element={<Nanycare />}></Route>
        <Route path="/companion" element={<Companionship />}></Route>
        <Route path="/medical-equipment" element={<Medicalequipment />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
 
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        {/* <Route path="login" element={<Login />}></Route> */}
        <Route path="/*" element={<FourZeroFour />} /> 
      </Routes>

      {/* <Home></Home> */}
      <Footer></Footer>
      <ToastContainer></ToastContainer>
      {/* facebook live chat */}
      {/* <MessengerCustomerChat pageId="103181519238933" appId="500779031558701" /> */}
      <MessengerCustomerChat pageId="105187501050744" appId="500779031558701" />
    </div>
  );
}

export default App;
