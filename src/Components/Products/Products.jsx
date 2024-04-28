import React, { useState, useEffect } from 'react';
import css from './Products.module.css';
import picture from '../../assets/Images/toast.jpg';
import prod from '../../assets/Images/packsingle.webp';
import fronthd from '../../assets/Images/FrontBarley.png';
import backinfo from '../../assets/Images/backinfo.webp';
import MultigrainFront from '../../assets/Images/MultiGrain_front.png';

import { Link } from 'react-router-dom';
  

function Products() {

  // const [currentSlide, setCurrentSlide] = useState(0);
  // const images = [prod, fronthd, backinfo]; 

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  //   }, 2000); 

  //   return () => clearInterval(interval);
  // }, [images.length]);
  
  return (
    <div className={css.firstbox}>
      <div className={css.content}>
        <div className={css.headline}>
          <h3>ELEVATE YOUR WELLNESS WITH US</h3>
          <h2>Our Key Products</h2>

          <div className={css.productsinfo}>
            <div className={css.tiles}>
    
            {/* <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} /> */}
            <img src={fronthd} />
              <p>Product discription</p>
              <a href="https://amzn.in/d/f8Z4dUI" ><button>Buy Now</button></a>
              
            </div>
            <div className={css.tiles}>
            <Link to= 'MultigrainInfo'><img src={MultigrainFront} />
              <p>Product discription</p></Link>
              <a href="https://amzn.in/d/hhqlRTL" >
              <button>Buy now</button></a>
            </div>

            
          </div>
          <div className={css.Whatsapp}>
            Facing Any Issue
          <a  href="https://api.whatsapp.com/send?phone=9650169402" target='_blank'>
              <button className={css.whatsappButton}>Contact us on Whatsapp</button></a>
              </div>
          <div className={css.maincontent}>
            <div className={css.firstText}>

              <div className={css.uppertext}>
                <span className={css.heading}> Barley Flour</span>
                <p>An essential for experimental bakers and health-conscious kitchens. A nutritious whole grain flour made from finely milled Barley, offering a hearty texture and mild, nutty flavor, perfect for baking wholesome breads, pancakes, and pastries.</p>
              </div>
              <div className={css.bottomtext}>
                <span className={css.heading}> Multigrain Flour</span>
                <p>An essential for experimental bakers and health-conscious kitchens.</p>
              </div>

            </div>
            <div className={css.image}>
              <img src={picture} alt="pic" />
            </div>
            <div className={css.lastText}>

            <div className={css.uppertext}>
                <span className={css.heading}> Recipe Ideas</span>
                <p>Inspire your culinary journey with versatile flour uses.</p>
              </div>
              <div className={css.bottomtext}>
                <span className={css.heading}> Farm to Table</span>
                <p>Traceable origins for guaranteed purity and quality.</p>
              </div>

            </div>

          </div>
        </div>
    </div>
    </div>
  )
}

export default Products