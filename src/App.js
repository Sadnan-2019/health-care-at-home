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
import Blogone from "./components/Blog/Blogone";
import Blogtwo from "./components/Blog/Blogtwo";
import Payment from "./components/Payment/Payment";
import CardiacSymptomsCauses from "./components/Blog/CardiacSymptomsCauses";
import DiagnosisTests from "./components/Blog/DiagnosisTests";
import ManagementTreatment from "./components/Blog/ManagementTreatment";
import Prevention from "./components/Blog/Prevention";
import Prognosis from "./components/Blog/Prognosis";
import LivingWith from "./components/Blog/LivingWith";
import Parkinson from "./components/Blog/Parkinson";
import Stroke from "./components/Blog/Stroke";
import HypertensionSymtoms from "./components/Blog/HypertensionSymtoms";
import HypermanagementTreatment from "./components/Blog/HypermanagementTreatment";
import HyperPrevention from "./components/Blog/HyperPrevention";
import FooterAbout from "./components/FooterAbout/FooterAbout";
import HcahLanding from "./components/HcahLanding/HcahLanding";


 
// import New from './components/Nav/New';

function App() {
  return (
    <div className=" ">
      
      <Navbar className=" "></Navbar>
      

      
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
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/blogone" element={<Blogone />}></Route>
        <Route path="/blogtwo" element={<Blogtwo />}></Route>
        <Route path="/blogthree" element={<Parkinson />}></Route>
        <Route path="/strokeblog" element={<Stroke/>}></Route>
        <Route path="/cardiac-symptoms-causes" element={<CardiacSymptomsCauses />}></Route>
        <Route path="/hyper-symptoms-causes" element={<HypertensionSymtoms />}></Route>
        <Route path="/diagnosis-tests" element={<DiagnosisTests />}></Route>
        <Route path="/management-treatment" element={<ManagementTreatment />}></Route>
        <Route path="/hyper-management-treatment" element={<HypermanagementTreatment />}></Route>
        <Route path="/prevention" element={<Prevention/>}></Route>
        <Route path="/hyper-prevention" element={<HyperPrevention/>}></Route>
        <Route path="/prognosis" element={<Prognosis />}></Route>
        <Route path="/living-with" element={<LivingWith />}></Route>
        <Route path="/fotter-about" element={<FooterAbout />}></Route>
 
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/landing" element={<HcahLanding/>}></Route>
        {/* <Route path="login" element={<Login />}></Route> */}
        <Route path="/*" element={<FourZeroFour />} /> 
      </Routes>

      {/* <Home></Home> */}
      <Footer></Footer>
      <ToastContainer></ToastContainer>
      {/* demo facebook live chat */}
      {/* <MessengerCustomerChat pageId="103181519238933" appId="500779031558701" /> */}

      {/* hcah fb page id */}
      <MessengerCustomerChat pageId="105187501050744" appId="500779031558701" />
    </div>
  );
}

export default App;
