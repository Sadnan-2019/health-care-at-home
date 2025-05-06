import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Route, Router, Routes, useLocation } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import { ToastContainer } from "react-toastify";
import FourZeroFour from "./components/FourZeroFour/FourZeroFour";
import Blogone from "./components/Blog/Blogone";
import Blogtwo from "./components/Blog/Blogtwo";
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
import HcahLanding from "./components/HcahLanding/HcahLanding";
import CookieConsent from "./components/CookieConsent/CookieConsent";

import ReactPixel from "react-facebook-pixel";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import load from "./assets/HCAHBD.png";
import Protocol from "./components/Protocol/Protocol";
// import New from './components/Nav/New';
 
function App() {
  const options = {
    autoConfig: true,
    debug: true,
  };

  ReactPixel.init("926835179569776", null, options);

  ReactPixel.pageView();

  const location = useLocation();
  // Function to delay component loading
  const delayImport = (importFunction, delay = 100) =>
    new Promise((resolve) =>
      setTimeout(() => resolve(importFunction()), delay)
    );
  // const Home = lazy(() => import("./components/Home/Home"));
  const Home = lazy(() =>
    delayImport(() => import("./components/Home/Home"), 200)
  );
  const Physiotherapy = lazy(() =>
    delayImport(() => import("./components/Physiotherapy/Physiotherapy"), 200)
  );
  const Nursing = lazy(() =>
    delayImport(() => import("./components/Nursing/Nursing"), 200)
  );
  const Caregiver = lazy(() =>
    delayImport(() => import("./components/Caregiver/Caregiver"), 200)
  );
  const Nanycare = lazy(() =>
    delayImport(() => import("./components/Nanycare/Nanycare"), 200)
  );
  const Companionship = lazy(() =>
    delayImport(() => import("./components/Companionship/Companionship"), 200)
  );
  const Payment = lazy(() =>
    delayImport(() => import("./components/Payment/Payment"), 200)
  );
  const Blog = lazy(() =>
    delayImport(() => import("./components/Blog/Blog"), 200)
  );
  const FooterAbout = lazy(() =>
    delayImport(() => import("./components/FooterAbout/FooterAbout"), 200)
  );
  const Medicalassistant = lazy(() =>
    delayImport(
      () => import("./components/Medicalassistant/Medicalassistant"),
      200
    )
  );
  const Medicalcaregiver = lazy(() =>
    delayImport(
      () => import("./components/Medicalcaregiver/Medicalcaregiver"),
      200
    )
  );
  const Medicalequipment = lazy(() =>
    delayImport(
      () => import("./components/Medicalequipment/Medicalequipment"),
      200
    )
  );

  return (
    <div className="">
      <Navbar className=""></Navbar>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <img src={load} alt=""/>

            <span className="loading loading-dots loading-lg">
              .............{" "}
            </span>
          </div>
        }
      >
        <HelmetProvider>
          <Routes key={location.pathname}>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/nursing" element={<Nursing />}></Route>
            <Route path="/physiotherapy" element={<Physiotherapy />}></Route>
            <Route
              path="/medical-assistant"
              element={<Medicalassistant />}
            ></Route>
            <Route
              path="/medical-caregiver"
              element={<Medicalcaregiver />}
            ></Route>
            <Route path="/caregiver" element={<Caregiver />}></Route>
            <Route path="/nanycare" element={<Nanycare />}></Route>
            <Route path="/companion" element={<Companionship />}></Route>
            <Route
              path="/medical-equipment"
              element={<Medicalequipment />}
            ></Route>
            <Route path="/payment" element={<Payment />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/blogone" element={<Blogone />}></Route>
            <Route path="/blogtwo" element={<Blogtwo />}></Route>
            <Route path="/blogthree" element={<Parkinson />}></Route>
            <Route path="/strokeblog" element={<Stroke />}></Route>
            <Route
              path="/cardiac-symptoms-causes"
              element={<CardiacSymptomsCauses />}
            ></Route>
            <Route
              path="/hyper-symptoms-causes"
              element={<HypertensionSymtoms />}
            ></Route>
            <Route path="/diagnosis-tests" element={<DiagnosisTests />}></Route>
            <Route
              path="/management-treatment"
              element={<ManagementTreatment />}
            ></Route>
            <Route
              path="/hyper-management-treatment"
              element={<HypermanagementTreatment />}
            ></Route>
            <Route path="/prevention" element={<Prevention />}></Route>
            <Route
              path="/hyper-prevention"
              element={<HyperPrevention />}
            ></Route>
            <Route path="/prognosis" element={<Prognosis />}></Route>
            <Route path="/living-with" element={<LivingWith />}></Route>
            <Route path="/about-us" element={<FooterAbout />}></Route>

            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/landing" element={<HcahLanding />}></Route>
            <Route path="/service-protocol" element={<Protocol/>}></Route>
            {/* <Route path="login" element={<Login />}></Route> */}
            <Route path="/*" element={<FourZeroFour />} />
          </Routes>
        </HelmetProvider>
      </Suspense>

      {/* <Home></Home> */}
      <Footer></Footer>
      <CookieConsent></CookieConsent>

      <ToastContainer></ToastContainer>
      {/* demo facebook live chat */}
      {/* <MessengerCustomerChat pageId="103181519238933" appId="500779031558701" /> */}

      {/* hcah fb page id */}
    </div>
  );
}

export default App;
