import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Route, Routes } from "react-router-dom";
import Service from "./components/Service/Service";
import Review from "./components/Review/Review";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import MessengerCustomerChat from "react-messenger-customer-chat";
import Nursing from "./components/Nursing/Nursing";
 
// import New from './components/Nav/New';

function App() {
  return (
    <div className=" ">
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/nursing" element={<Nursing />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/review" element={<Review />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        {/* <Route path="login" element={<Login />}></Route> */}
      </Routes>

      {/* <Home></Home> */}
      <Footer></Footer>

      {/* facebook live chat */}
      <MessengerCustomerChat pageId="100086525584173" appId="500779031558701" />
    </div>
  );
}

export default App;
