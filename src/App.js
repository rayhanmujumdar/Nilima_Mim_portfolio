import Aos from "aos";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Banner from './components/Banner/Banner'
import NotFound from "./components/NotFound/NotFound";

function App() {
  Aos.init();
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Banner></Banner>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
