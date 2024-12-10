import React from 'react'
import Home from './home/Home';
import Courses from './courses/Courses';
import Contact from './components/Contact'
import About from './components/About'
import {Navigate, Route, Routes} from "react-router-dom";
import Signup from './components/Signup';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';
function App() {

const [authUser, setAuthUser] = useAuth();

  return (
    <>
    <div className='dark:bg-slate-100 dark:text-black'>
     <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />

      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
     </Routes>
     <Toaster />
     </div>
    </>
  );
}

export default App;