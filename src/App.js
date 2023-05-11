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


 
// import New from './components/Nav/New';

function App() {
  return (
    <div className=" ">
      
      <Navbar className=" "></Navbar>
      {/* <div className="toast toast-end toast-middle">
        <div className="alert alert-info">
          <div>
            <span>New mail arrived.</span>
          </div>
        </div>
        <div className="alert alert-success">
          <div>
            <span>Message sent successfully.</span>
          </div>
        </div>
      </div> */}
      {/* <div class=" fixed w-full bottom-0 right-0 m-6 p-4 bg-red-500 text-white rounded-lg shadow-md" role="alert">
  <div class="flex">
    <div class="py-1">
      <svg class="fill-current h-6 w-6 text-white mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4z"/>
      </svg>
    </div>
    <div>
      <p class="font-bold">Error</p>
      <p class="text-sm">An error has occurred, please try again later.</p>
    </div>
  </div>
  <button class="text-white font-bold absolute top-0 bottom-0 right-0 px-4 py-3" 
    onclick="this.parentElement.style.display='none'">
    Close
  </button>
</div> */}

      
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
        <Route path="/prevention" element={<Prevention/>}></Route>
        <Route path="/prognosis" element={<Prognosis />}></Route>
        <Route path="/living-with" element={<LivingWith />}></Route>
 
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
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
