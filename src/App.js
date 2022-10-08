import Aos from 'aos';
import 'aos/dist/aos.css'; 
import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  Aos.init()
  return (
    <div>
        <Header></Header>
        <Banner></Banner>
        <Footer></Footer> 
    </div>
  );
}

export default App;
