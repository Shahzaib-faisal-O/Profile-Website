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

  const message = [
    "Do you know React allows you to build reusable components, making your code more modular and easier to maintain?",
    "Do you know React uses a virtual DOM to improve performance by minimizing direct manipulation of the real DOM?",
    "Do you know React can be easily integrated with other libraries and frameworks, enhancing its flexibility?",
    "Do you know React's unidirectional data flow helps you keep data predictable and easier to debug?",
    "Do you know React's declarative approach allows you to describe the UI in terms of how it should look in any state, making the code more readable and predictable?",
    "Do you know React's component-based architecture promotes reusability, leading to faster development and more maintainable code?",
    "Do you know React's ecosystem is rich with a variety of tools, libraries, and extensions, providing solutions for routing, state management, and more?",
    "Do you know React has a strong community and extensive documentation, making it easier to find solutions and best practices?",
    "Do you know React supports server-side rendering (SSR) for better SEO and initial load performance?",
    "Do you know React is maintained by Facebook, ensuring continuous updates and improvements?"
  ];

  const toastMessage = () => {
    toast.info(message[Math.floor(Math.random() * message.length)]);
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
