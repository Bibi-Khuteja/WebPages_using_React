
import './App.css';
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Home from './pages/home';
// import IMAGES from './images/image';
import Plans from './pages/plans';
import Trainer from './pages/Trainer';
import About from './pages/about';


function App() {
  return (
    <div>
     
     <Header/>

     
      <Routes>
        {/* <Route path="/" element={<Home />}>
        <Route path="/about" element={<About />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/trainer" element={<Trainer />} /> */}
  
        {/* </Route> */}
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/trainer" element={<Trainer />} />

      </Routes>
    
     
     {/* <Home/>
     <Plans/>
     
     <Trainer/> */}
     <Footer/>
    </div>
  );
}

export default App;
