import React, { useState, useRef, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "c:/Users/User/Desktop/vasiti-app/src/images/Vasiti-Logo-black1.png";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <div className="wrapper">
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="logo" alt="logo" />
            <button className="nav-toggle" onClick={toggleLinks}>
              <AiOutlineMenu />
            </button>
          </div>
          <div className="links-container" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              <li className="item">
                <Link to="/" className="link">
                  about us
                </Link>
              </li>
              <li className="item">
                <Link to="/" className="link">
                  stories
                </Link>
              </li>
              <li className="item">
                <Link to="/" className="link">
                  contact
                </Link>
              </li>
              <li className="item">
                <Link to="/" className="link">
                  log in
                </Link>
              </li>
              <li className="item">
                <Link to="/" className="link sign-up">
                  sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="marketplace">
        <ul>
          <li className="item">
            <Link to="/" className="list">
              MARKETPLACE
            </Link>
          </li>
          <li className="item">
            <Link to="/" className="list">
              WHOLESALE CENTER
            </Link>
          </li>
          <li className="item">
            <Link to="/" className="list">
              SELLER CENTER
            </Link>
          </li>
          <li className="item">
            <Link to="/" className="list">
              SERVICES
            </Link>
          </li>
          <li className="item">
            <Link to="/" className="list">
              INTERNSHIPS
            </Link>
          </li>
          <li className="item">
            <Link to="/" className="list">
              EVENTS
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

// import React, { useEffect, useState } from "react";
// import { AiOutlineMenu } from "react-icons/ai";
// import logo from "c:/Users/User/Desktop/vasiti-app/src/images/Vasiti-Logo-black1.png";
// import "./navbar.scss";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [showLinks, setShowLinks] = useState(true);

//   return (
//     <div className="navbar">
//       <header className="header">
//         <nav className="nav">
//           <div className="nav__one">
//             <div className="logo">
//               <img src={logo} alt="logo" />
//             </div>
//             <div className="menu">
//               <button
//                 className="toggle"
//                 onClick={() => setShowLinks(!showLinks)}
//               >
//                 <AiOutlineMenu />
//               </button>
//             </div>
//           </div>
//           <div className="nav__two">
//             <ul className={showLinks ? "list" : "list open"}>
// <li className="item">
//   <Link to="/" className="link">
//     about us
//   </Link>
// </li>
// <li className="item">
//   <Link to="/" className="link">
//     stories
//   </Link>
// </li>
// <li className="item">
//   <Link to="/" className="link">
//     contact
//   </Link>
// </li>
// <li className="item">
//   <Link to="/" className="link">
//     log in
//   </Link>
// </li>
// <li className="item">
//   <Link to="/" className="link sign-up">
//     sign up
//   </Link>
// </li>
//             </ul>
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// };

// export default Navbar;
