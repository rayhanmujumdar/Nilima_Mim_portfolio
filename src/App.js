import Aos from "aos";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Banner from './components/Banner/Banner'
import About from './components/About/About'
import Service from './components/Service/Service'
import NotFound from "./components/NotFound/NotFound";
import ServiceDetails from "./components/Service/ServiceDetails";
import Contact from "./components/Contact/Contact";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  Aos.init();
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Banner></Banner>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/service" element={<Service></Service>}></Route>
        <Route path="/service/:id" element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer
       position="top-right"
       autoClose={3000}
       limit={1}
       hideProgressBar={false}
       newestOnTop={true}
       closeOnClick={true}
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       theme="dark"
       
       />
      <Footer></Footer>
    </div>
  );
}

export default App;
