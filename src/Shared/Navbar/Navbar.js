import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router'
import { FaFacebook, FaShoppingCart } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full p-4 z-10 bg-black bg-opacity-40 text-white grid grid-cols-3 place-content-center place-items-center items-center h-16">
    <img src={logo} className="w-20 flex justify-center" alt="Karukolpo"/>
    <ul className="flex space-x-6">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/">Shop</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
    <ul className="flex space-x-6 text-xl">
      <li><FaShoppingCart/></li>
      <li><FaFacebook /></li>
      <li><AiFillInstagram /></li>
    </ul>
  </nav>
  )
}
