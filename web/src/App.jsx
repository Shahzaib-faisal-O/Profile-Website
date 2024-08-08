import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Education from './pages/Education.jsx';
import Skills from './pages/Skills.jsx';
import Contact from './pages/Contact.jsx';
// Define or import the Error component
import Error from './pages/Error.jsx';

import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import PreLoader from './components/PreLoader.jsx';
import { toast } from 'react-toastify';



function App() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 14000); // Hide the PreLoader after 5 seconds

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);
  const toastMessage = () => {
    toast.info("Do You Know That I Am Single!");
  }
  return (
    <>

      {show && <PreLoader />}
      {
        toastMessage()
      }
      {!show && (
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/education' element={<Education />}></Route>
            <Route path='/skills' element={<Skills />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='*' element={<Error />}></Route> {/* Wild card route for error handling */}
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
