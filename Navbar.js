import React from 'react'
import './App.css'
import logo from "../assets/Logo.png"
const Navbar = () => {
  return (
      <div className='together'>
        <img className="place" src={logo} alt="logo"/>
            <ul >
                    <li>
                        <a href="https://www.google.com">Google</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com">Instagram</a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com">Twitter</a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com">Facebook</a>
                    </li>
                </ul>
            </div>
  )
}

export default Navbar;
