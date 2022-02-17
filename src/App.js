import React, {useEffect} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes, useLocation} from 'react-router-dom';
import Main from "./components/Main";
import Scroll from "./Scroll/index";
import PaginationList from "./containers/PaginationList";
import {AnimatePresence} from "framer-motion";
import About from "./components/About";
import Error from "./components/Error";


const App = () => {

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/pagination') {
      document.body.style.background = `rgba(0, 0.2, 0.1, 0.7)`;

    } else {
      document.body.style.backgroundImage = `url(../img/bg-2.png)`;
    }

  }, [location]);

  return (
      <AnimatePresence exitBeforeEnter>
        <div className='wrapper'>

          <Header/>
          <div className='main'>

            <Routes key={location.pathname} location={location}>
              <Route path='/' element={<Main/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/scroll' element={<Scroll/>}/>
              <Route path='/pagination' element={<PaginationList/>}/>
              <Route path={'*'} element={<Error/>}/>
            </Routes>

          </div>
          <Footer/>
        </div>


      </AnimatePresence>
  );
};

export default App;