import React, { useState, useRef } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import css from './Navbar.module.css';


import {
  Link, NavLink
} from "react-router-dom";
import Logo from '../../assets/Images/logo.png'

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className={css.nav}>
      <div className={css.menu} onClick={()=> {
        setMenuOpen(!menuOpen)
      }}><FaBars />
          </div>
      <div className={css.first_nav}>
        <Link to='/'><img src={Logo} alt="" /></Link>
         <h3 className={css.navhead}>NurtureEats</h3>
      </div>
      
      <div className={css.second_nav}>
       
        <ul className={`${css.ul} ${menuOpen ? css.open : css.close}`}>
          <NavLink className={css.mylink} onClick={()=> {
        setMenuOpen(!menuOpen)
      }} to={'/'}><li className={css.li}>Home</li></NavLink>
          <NavLink className={css.mylink} onClick={()=> {
        setMenuOpen(!menuOpen)
      }} to={'/products'}><li className={css.li}>Products</li></NavLink>
          <NavLink className={css.mylink} onClick={()=> {
        setMenuOpen(!menuOpen)
      }} to={'/quality'}><li className={css.li}>Quality Control</li></NavLink>
          <NavLink className={css.mylink} onClick={()=> {
        setMenuOpen(!menuOpen)
      }} to={'/about'}><li className={css.li}>About Us</li></NavLink>
          <NavLink className={css.mylink} onClick={()=> {
        setMenuOpen(!menuOpen)
      }} to={'/contact'}><li className={css.li}>Contact Us</li></NavLink>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Navbar
