
// import { BrowserRouter as Router, Route, Routes ,Link} from 'react-router-dom';
// // import Router from 'react-router-dom';
// import Home from "./Home.js";
// import About from "./About.js";
// import React from 'react';
// import Contact from './Contact.js';
// // import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// const Navbar = () => {
//   return (
//     <Router>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       {/* <Route path="/testimonials" element={<Testimonials />} /> */}
//       <Route path="/contact" element={<Contact />} />
//     </Routes>
//   </Router>
//   );
// };

// export default Navbar;
// import { Link } from 'react-router-dom';
const Navbar = () => {
 
  return (
   <nav>
     <div className="nav-logo-container">
        {/* <img src={} alt="" /> */}
      </div>
      <div className="logobb">   <span>BB FOODS</span></div>
      <div className="navbar-links-container">
      <span>Home</span>
      <span>About</span>
     
        {/* <a href="">Contact</a> */}
        <a href="#contact">Contact</a> 
        </div>
   </nav>
  );
};

export default Navbar;